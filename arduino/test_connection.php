<?php
// $servername = "localhost";
// $username = "root";
// $password = "diogo";
// $dbname = "lamec";

// // Create connection
// $conn= mysqli_connect($servername,$username,$password,$dbname);
// // Check connection
// if (!$conn) {
//   die("Connection failed: " . mysqli_connect_error());
// }
// echo "Connected Successfully.";

class Database {
  public function __construct () {
    $servername = "localhost";
    $username = "root";
    $password = "diogo";
    $dbname = "lamec";
    $conn= mysqli_connect($servername,$username,$password,$dbname);
  }
}

?>