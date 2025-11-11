<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer (paths relative to this file)
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect fields from your form (make sure your inputs have these name="" attrs)
    $name    = isset($_POST['name'])    ? htmlspecialchars($_POST['name'])    : '';
    $email   = isset($_POST['email'])   ? htmlspecialchars($_POST['email'])   : '';
    $service = isset($_POST['service']) ? htmlspecialchars($_POST['service']) : '';
    $phone   = isset($_POST['phone'])   ? htmlspecialchars($_POST['phone'])   : '';
    $message = isset($_POST['message']) ? nl2br(htmlspecialchars($_POST['message'])) : '';

    $mail = new PHPMailer(true);

    try {
        // --- SMTP: use Gmail (recommended for local testing) ---
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;

        // 👇 Replace with the mailbox you will SEND FROM
        $mail->Username   = 'jayakrishnanashi@gmail.com';     // <- your Gmail address
        $mail->Password   = 'ijcb xhef ovcj rols';            // <- Gmail App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // --- From / To ---
        $mail->setFrom('jayakrishnanashi@gmail.com', 'Website Form');
        $mail->addReplyTo($email ?: 'no-reply@yourdomain.com', $name ?: 'Visitor');

        // ✅ Recipient
        $mail->addAddress('jayakrishnanashi@gmail.com');

        // --- Content ---
        $mail->isHTML(true);
        $mail->Subject = "New Business Consultation Request from {$name}";
        $mail->Body    = "
            <h2>New Consultation Request</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Phone:</strong> {$phone}</p>
            <p><strong>Service Type:</strong> {$service}</p>
            <p><strong>Message:</strong><br>{$message}</p>
        ";

        $mail->AltBody = "New Consultation Request\n"
                       . "Name: {$name}\n"
                       . "Email: {$email}\n"
                       . "Phone: {$phone}\n"
                       . "Service Type: {$service}\n"
                       . "Message: {$message}\n";

        $mail->send();
        echo "<script>alert('✅ Email sent successfully!'); window.history.back();</script>";
    } catch (Exception $e) {
        echo "<script>alert('⚠️ Message could not be sent. Error: " . addslashes($mail->ErrorInfo) . "'); window.history.back();</script>";
    }
} else {
    echo 'Invalid Request.';
}
?>
