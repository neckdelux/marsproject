<?php
session_start();

// Database connection
$conn = mysqli_connect("localhost", "root", "", "spacex", 3307);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get form data
$email = $_POST['email'];
$password = $_POST['password'];

// Check for user with this email
$sql = "SELECT * FROM user WHERE email = '$email'";
$result = mysqli_query($conn, $sql);

if ($row = mysqli_fetch_assoc($result)) {
    // Verify password
    if (password_verify($password, $row['password'])) {
        // Start session and redirect
        $_SESSION['email'] = $row['email'];
        header("Location: ../home.html");
        exit();
    } else {
        echo "Incorrect password.";
    }
} else {
    echo "Email not found.";
}

mysqli_close($conn);
?>
