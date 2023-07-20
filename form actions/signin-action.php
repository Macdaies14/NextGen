<?php
$host = "localhost";
    $username = "root";
    $password = "";
    $db_name = "next_gen";

    $conn = new mysqli($host, $username, $password, $db_name);


    if ($conn -> connect_error) {

        die("connection failed: " . $conn -> connect_error);

    }

    
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM user WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
       
        $row = $result->fetch_assoc();
        if (password_verify($password, $row["password"])) {
            echo "Login successful! Welcome "; 
        } else {
            echo "Invalid email or password.";
        }
    } else {
        echo "User not found.";
    }
}
?>
