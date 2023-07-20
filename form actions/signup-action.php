<?php 

    $host = "localhost";
    $username = "root";
    $password = "";
    $db_name = "next_gen";

    $conn = new mysqli($host, $username, $password, $db_name);


    if ($conn -> connect_error) {

        die("connection failed: " . $conn -> connect_error);

    }

    // echo "Connected Successfully"


    if ($_SERVER["REQUEST_METHOD"] = "POST") {
     $fullname = $_POST["fullname"];
     $email = $_POST["email"];
     $password = $_POST["password"];

     $sql = "INSERT INTO user (fullname, email, password) VALUES ('$fullname', '$email', '$password')";
     
      if (!$conn->query($sql) === TRUE) {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }  
    }

   


?>