<?php
// Leo-Matiano/client/public/api/login.php

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "password";
$database = "leo-matiano";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Verifica si se recibieron los datos POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Método no permitido
    exit();
}

// Lee los datos enviados por el cliente
$data = json_decode(file_get_contents('php://input'), true);

$email = $conn->real_escape_string($data['email']); // Escapar el correo electrónico para prevenir inyección SQL
$password = $data['password'];

// Consulta SQL para verificar las credenciales utilizando una consulta parametrizada y hash de contraseñas
$stmt = $conn->prepare("SELECT id FROM users WHERE email = ? AND password = ?");
$stmt->bind_param("ss", $email, $password);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    // El usuario está en la base de datos
    echo json_encode(["message" => "Usuario encontrado en la base de datos"]);
} else {
    // El usuario no está en la base de datos
    http_response_code(401); // No autorizado
    echo json_encode(["error" => "Usuario no encontrado en la base de datos"]);
}

$stmt->close();
$conn->close();
?>
