<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "lamec";
$db = mysqli_connect($servername,$username,$password,$dbname);

$name = $_POST['name'];
$tag = $_POST['tag'];
$sql = "SELECT * FROM tags_registed WHERE tag='$tag'";
$tag_id = $db->prepare($sql);
$tag_id->execute();
$resultSet = $tag_id->get_result();
while ($row = $resultSet->fetch_assoc()) {
    $results[] = $row;
}
$id = json_encode($results[0]['id']);

$sql = "INSERT INTO user (name,tag_id) VALUES('$name','$id')";
$new_user = $db->prepare($sql);
$new_user->execute();

$db->close();

echo "User created successfully!";
?>