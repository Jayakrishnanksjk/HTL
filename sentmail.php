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

    // 📧 Receiver
    $to = "jayakrishnanashi@gmail.com";

    // 🧠 Subject based on form type
    switch ($formType) {
        case "consultation":
            $mail_subject = "New Consultation Request";
            break;

        case "contact":
            $mail_subject = "New Contact Form Submission";
            break;

        default:
            $mail_subject = "New Website Form Submission";
            break;
    }

    // 📝 Email body
    $body  = "New form submission received:\n\n";
    $body .= "Form Type: {$formType}\n";
    $body .= "Name: {$name}\n";
    $body .= "Email: {$email}\n";

    if (!empty($service)) {
        $body .= "Service: {$service}\n";
    }

    if (!empty($phone)) {
        $body .= "Phone: {$phone}\n";
    }

    $body .= "\nMessage:\n{$message}\n";

    // 🧾 Headers
    $headers  = "From: Website Contact <contact-form@" . $_SERVER['SERVER_NAME'] . ">\r\n";
    $headers .= "Reply-To: {$email}\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // 🚀 Send mail
    if (mail($to, $mail_subject, $body, $headers)) {
        echo "✅ Message sent successfully!";
    } else {
        echo "❌ Message could not be sent. Please try again later.";
    }
} else {
    echo 'Invalid Request.';
}
?>
