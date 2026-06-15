<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer (paths relative to this file)
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // 🔐 Google reCAPTCHA secret key
    $secretKey = "6LdvAkksAAAAABB-IYS2H6N6tAT3y2RhVQZtsL_5";

    // 🚨 Check captcha
    if (empty($_POST['g-recaptcha-response'])) {
        echo "<script>alert('⚠️ Please verify that you are not a robot.'); window.history.back();</script>";
        exit;
    }

    $captchaResponse = $_POST['g-recaptcha-response'];

    // 🔍 Verify with Google
    $verifyResponse = file_get_contents(
        "https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$captchaResponse}"
    );

    $responseData = json_decode($verifyResponse);

    if (!$responseData || !$responseData->success) {
        echo "<script>alert('⚠️ reCAPTCHA verification failed.'); window.history.back();</script>";
        exit;
    }

    // 🧾 Fields
    $formType = $_POST['form_type'] ?? 'consultation';
    $name     = trim($_POST['name'] ?? 'N/A');
    $email    = trim($_POST['email'] ?? 'N/A');
    $message  = trim($_POST['message'] ?? 'N/A');
    $service  = trim($_POST['service'] ?? '');
    $phone    = trim($_POST['phone'] ?? '');

    $mail = new PHPMailer(true);

    try {
        // --- SMTP: use Gmail (recommended for local testing) ---
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'jayakrishnanashi@gmail.com';     // <- your Gmail address
        $mail->Password   = 'ijcb xhef ovcj rols';            // <- Gmail App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // --- From / To ---
        $mail->setFrom('jayakrishnanashi@gmail.com', 'Website Consultation');
        $mail->addReplyTo($email ?: 'no-reply@yourdomain.com', $name ?: 'Visitor');
        $mail->addAddress('jayakrishnanashi@gmail.com');

        // --- Content ---
        $mail->isHTML(true);
        $mail->Subject = "New Business Consultation Request from {$name}";
        
        $body  = "<h2>New Consultation Request</h2>";
        $body .= "<p><strong>Name:</strong> {$name}</p>";
        $body .= "<p><strong>Email:</strong> {$email}</p>";
        if (!empty($phone)) {
            $body .= "<p><strong>Phone:</strong> {$phone}</p>";
        }
        if (!empty($service)) {
            $body .= "<p><strong>Service:</strong> {$service}</p>";
        }
        $body .= "<p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>";

        $mail->Body = $body;

        $altBody  = "New Consultation Request\n";
        $altBody .= "Name: {$name}\n";
        $altBody .= "Email: {$email}\n";
        if (!empty($phone)) {
            $altBody .= "Phone: {$phone}\n";
        }
        if (!empty($service)) {
            $altBody .= "Service: {$service}\n";
        }
        $altBody .= "Message: {$message}\n";

        $mail->AltBody = $altBody;

        $mail->send();
        echo "<script>alert('✅ Email sent successfully!'); window.history.back();</script>";
    } catch (Exception $e) {
        echo "<script>alert('⚠️ Message could not be sent. Error: " . addslashes($mail->ErrorInfo) . "'); window.history.back();</script>";
    }
} else {
    echo 'Invalid Request.';
}
?>
