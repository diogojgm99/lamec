import serial
import mariadb
import sys
from datetime import datetime 

# this port address is for the serial tx/rx pins on the GPIO header
SERIAL_PORT = '/dev/ttyUSB0'
# be sure to set this to the same rate used on the Arduino
SERIAL_RATE = 9600

class Database():
    def __init__(self):
        try:
            self.conn = mariadb.connect(
                user="root",
                password="root",
                host="localhost",
                database="lamec"
            )
            self.conn.autocommit = True
        except mariadb.Error as e:
            print(f"Error connecting to MariaDB Platform: {e}")
            sys.exit(1)
        self.cur=self.conn.cursor()

    def read_new_tag(self,tag):
        self.cur.execute("SELECT * FROM tags_registed WHERE tag=?",(tag,))
        
        #Se nao houver na db ele insere a nova tag 
        if not bool(self.cur.fetchall()):
            print("Insert new tag on database")
            self.cur.execute("INSERT INTO tags_registed (tag) VALUES (%s)",(tag,))
        else:
            print("Tag Founded on database")

    def check_tag_auth(self,tag):
        self.cur.execute("SELECT tag,name FROM user JOIN tags_registed as tags ON tags.id =user.tag_id WHERE tags.tag=?",(tag,))
        query=self.cur.fetchall()
        if query:
            print("Welcome "+query[0][1])
            self.user_in_out(tag)
            return True
        else:
            print("Non-Authorized User")
        return False

    def user_in_out(self,tag):
        time = datetime.now()
        self.cur.execute("SELECT * FROM in_out JOIN tags_registed as tags ON tags.id = in_out.tag_id WHERE tags.tag=?",(tag,))
        query= self.cur.fetchall()
        if not query:
            self.cur.execute("INSERT INTO in_out (tag_id,time) VALUES (%s)",(tag,time,))#inserir data de entrada
        else:
            self.cur.execute("UPDATE in_out SET time_out=? WHERE tag_id=?",(time,tag))#inserir data de saída
    
    def close(self):
        self.conn.close()


def main():
    ser = serial.Serial(SERIAL_PORT, SERIAL_RATE)
    db = Database()

    while True:
        reading = ser.readline().decode('utf-8')
        tag=reading.replace("\r\n","").lstrip(' ')
        print(tag)
        db.read_new_tag(tag)
        allow_user=db.check_tag_auth(tag)
        if allow_user:
            ser.write(b'1')
        else:
            ser.write(b'0')
    db.close()


if __name__ == "__main__":
    main()