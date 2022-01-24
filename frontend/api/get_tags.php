<?php
// $servername = "localhost";
// $username = "root";
// $password = "root";
// $dbname = "lamec";
// $db = mysqli_connect($servername,$username,$password,$dbname);
$url = getenv('JAWSDB_MARIA_URL');
$dbparts = parse_url($url);

$hostname = $dbparts['host'];
$username = $dbparts['user'];
$password = $dbparts['pass'];
$database = ltrim($dbparts['path'],'/');
$db = mysqli_connect($hostname,$username,$password,$database);

$sql = "SELECT id,tag FROM tags_registed;";
$result = $db->prepare($sql);
$result->execute();
$resultSet = $result->get_result();
while ($row = $resultSet->fetch_assoc()) {
    $results[] = $row;
}
echo json_encode(['data' => $results],
    JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
?>