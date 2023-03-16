<?php 
$email = $_POST['email'];
$password = $_POST['password'];

//DB Connection

$conn = new mysqli('localhost','root','','test');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(email,password)
    values(?,?)");
    $stmt->bind_param("ss",$email,$password);
    $stmt->execute();
    echo "Registered Successfully!";
    $stmt->close();
    $conn->close();
}

?>
