<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "lamec";
$db = mysqli_connect($servername,$username,$password,$dbname);

// $name = $_POST['name'];
// $tag = $_POST['tag'];
$tag = "E6 16 CE A5";
$sql = "SELECT * FROM tags_registed WHERE tag='E6 16 CE A5'";
$tag_id = $db->prepare($sql);
$tag_id->execute();
$resultSet = $tag_id->get_result();
echo $resultSet;
// $tagg = $resultSet->fetch_assoc();

while ($row = $resultSet->fetch_assoc()) {
    echo $row[1];
}

// echo $tag_id;
//$tag = $tag_id->get_result();
//echo $tag;
//$value_tag = $tag_id->fetch_assoc();
//echo $value_tag;
// $sql = "INSERT INTO users (name,tag_id) VALUES('$name','$tag_id')";
// echo $sql;
// if ($db->query($sql) === TRUE)
// {
//   echo "Query successful";
//   echo $sql;
// }else{
//   echo "Error: " . $sql . "<br>" . $db->error;
// }

$db->close();
?>