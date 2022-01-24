<?php
$servername = "dcrhg4kh56j13bnu.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
$username = "xhd5bjfacxe5e7j9";
$password = "xt3rhlcxjggvmwxm";
$dbname = "fv4dkvufppu5dr5m";
$db = mysqli_connect($servername,$username,$password,$dbname);

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