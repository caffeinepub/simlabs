<?php
// contact.php -- place this file in your web root alongside index.html
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!$data) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid request']);
        exit;
    }

    $name    = htmlspecialchars(trim($data['name'] ?? ''));
    $email   = htmlspecialchars(trim($data['email'] ?? ''));
    $company = htmlspecialchars(trim($data['company'] ?? ''));
    $message = htmlspecialchars(trim($data['message'] ?? ''));

    if (!$name || !$email || !$message) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Missing required fields']);
        exit;
    }

    $to      = 'info@simlabs.in';   // ← change this if needed
    $subject = "Website Enquiry from $name";
    $body    = "Name: $name\nEmail: $email\nCompany: $company\n\nMessage:\n$message";
    $headers = implode("\r\n", [
        "From: $email",
        "Reply-To: $email",
        "X-Mailer: PHP/" . PHP_VERSION,
    ]);

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Mail failed to send']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
}
?>
