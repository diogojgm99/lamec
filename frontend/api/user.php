<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "lamec";
$db = mysqli_connect($servername,$username,$password,$dbname);

$sql = "SELECT name,tag FROM user JOIN tags_registed as tags ON tags.id =user.tag_id;";
$result = $db->prepare($sql);
$result->execute();
$resultSet = $result->get_result();
while ($row = $resultSet->fetch_assoc()) {
    $results[] = $row;
}
echo json_encode(['data' => $results],
    JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
?>