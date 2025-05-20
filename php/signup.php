<?php
// Connect to database
$conn = mysqli_connect("127.0.0.1", "root", "", "spacex",3307);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$Phone_number = $_POST['Phone_number'];
$password = $_POST['password'];

// Hash the password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Insert into database
$sql = "INSERT INTO user (name, email, Phone_number, password)
        VALUES ('$name','$email','$Phone_number','$hashed_password')";

if (mysqli_query($conn, $sql)) {
        header("Location: ../login.html");
    exit();
} else {
    echo "Error: " . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
?>
