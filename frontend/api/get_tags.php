<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "lamec";
$db = mysqli_connect($servername,$username,$password,$dbname);

$sql = "SELECT id,tag FROM tags_registed;";
$result = $db->prepare($sql);
$result->execute();
$resultSet = $result->get_result();
$res = $resultSet->fetch_all(PDO::FETCH_ASSOC);
header('Content-Type: application/json;charset=utf-8');
echo json_encode(['data' => $res],
    JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
?>