<?php
// Establishing a connection to MySQL database
$servername = "localhost"; // Change this to your MySQL hostname
$username = "root"; // Change this to your MySQL username
$password = ""; // Change this to your MySQL password
$dbname = "dungeons"; // Change this to your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieving user input from the form
$username = $_POST['name'];
$email = $_POST['email'];

// Validating email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format. Please enter a valid email.";
} else {
    // SQL query to insert data into the table
    $sql = "INSERT INTO adventurers (Name, Email) VALUES ('$username', '$email')";

    if ($conn->query($sql) === TRUE) {
        header("Location: story.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Closing MySQL connection
$conn->close();
?>
