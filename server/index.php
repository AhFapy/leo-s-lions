<?php
// Enable CORS
header("Access-Control-Allow-Origin: http://localhost:5173"); // Adjust the origin as needed
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Respond with 200 OK status
    http_response_code(200);
    exit();
}

// Set up connection variables
$servername = "localhost";
$username = "root";
$password = ""; 
$database = "leo-matiano";
$table = "user"; 

// Handle POST request
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data sent from the client
$data = json_decode(file_get_contents("php://input"), true);

// Prepare SQL statement to insert data into the table
$sql = "INSERT INTO $table (name, email, rank) VALUES (?, ?, ?)";

// Prepare and bind parameters
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $data['name'], $data['mail'], $data['rank']);

// Execute the statement
if ($stmt->execute() === TRUE) {
    // Data insertion successful
    $response = array("success" => true, "message" => "Data inserted successfully.");
    echo json_encode($response);
} else {
    // Error in data insertion
    $response = array("success" => false, "message" => "Error: " . $conn->error);
    echo json_encode($response);
}

// Close prepared statement and database connection
$stmt->close();
$conn->close();

?>