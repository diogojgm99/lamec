import serial
import mariadb
import sys

# this port address is for the serial tx/rx pins on the GPIO header
SERIAL_PORT = '/dev/ttyUSB0'
# be sure to set this to the same rate used on the Arduino
SERIAL_RATE = 9600

try:
    conn = mariadb.connect(
        user="root",
        password="root",
        host="localhost",
        #port=3306,
        database="lamec"
    )
    conn.autocommit = True
    print("mariadb sucess")
except mariadb.Error as e:
    print(f"Error connecting to MariaDB Platform: {e}")
    sys.exit(1)
cur = conn.cursor()

# query=cur.execute(
#     "INSERT INTO tags_registed (tag) VALUES ('E6 16 CE A5')"
# )
def insert_tags_registed(tag):
    global cur,conn
    cur.execute("SELECT * FROM tags_registed WHERE tag=?",(tag,))
    print(cur.fetchall())
    query = cur.fetchall()
    print(query)
    # cur.execute(
    #         "INSERT INTO tags_registed (tag) VALUES (%s)",(tag,))
    # conn.commit()

def main():
    global cur,conn
    ser = serial.Serial(SERIAL_PORT, SERIAL_RATE)

    while True:
        # using ser.readline() assumes each line contains a single reading
        # sent using Serial.println() on the Arduino
        reading = ser.readline().decode('utf-8')
        tag=reading.replace("\r\n","").lstrip(' ')
        # reading is a string...do whatever you want from here
        print(tag)
        insert_tags_registed(tag)

if __name__ == "__main__":
    # query = cur.execute("SELECT tag FROM tags_registed")
    # print(cur.fetchall())
    main()
    conn.close()