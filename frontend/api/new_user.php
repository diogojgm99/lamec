<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "lamec";
$db = mysqli_connect($servername,$username,$password,$dbname);

$name = $_POST['name'];
$tag = $_POST['tag'];
$tag_id = "SELECT id FROM tags_registed WHERE tag='$tag';";
$tag_id.fetch();
$sql = "INSERT INTO users (name,tag_id) VALUES('$name','$tag_id')";

if ($db->query($sql) === TRUE)
{
  echo "Query successful";
  echo $sql;
}else{
  echo "Error: " . $sql . "<br>" . $db->error;
}

$db->close();
?>