<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer (paths relative to this file)
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect fields from the Join Team form
    $name       = isset($_POST['name'])       ? htmlspecialchars($_POST['name'])       : '';
    $email      = isset($_POST['email'])      ? htmlspecialchars($_POST['email'])      : '';
    $experience = isset($_POST['experience']) ? htmlspecialchars($_POST['experience']) : '';
    $phone      = isset($_POST['phone'])      ? htmlspecialchars($_POST['phone'])      : '';
    $hr_domain  = isset($_POST['hr'])         ? htmlspecialchars($_POST['hr'])         : '';

    $mail = new PHPMailer(true);

    try {
        // --- SMTP: use Gmail (recommended for local testing) ---
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;

        // 👇 Gmail details
        $mail->Username   = 'jayakrishnanashi@gmail.com';     // <- receiver/sender Gmail address
        $mail->Password   = 'ijcb xhef ovcj rols';            // <- Gmail App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // --- From / To ---
        $mail->setFrom('jayakrishnanashi@gmail.com', 'Website CV Submission');
        $mail->addReplyTo($email ?: 'no-reply@yourdomain.com', $name ?: 'Applicant');

        // Recipient: send every submission to this address
        $mail->addAddress('jayakrishnanashi@gmail.com');

        // --- Attach CV ---
        if (isset($_FILES['cv']) && $_FILES['cv']['error'] === UPLOAD_ERR_OK) {
            $mail->addAttachment($_FILES['cv']['tmp_name'], $_FILES['cv']['name']);
        }

        // --- Content ---
        $mail->isHTML(true);
        $mail->Subject = "New Job Application / CV Submission from {$name}";
        $mail->Body    = "
            <h2>New Job Application / CV Submission</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Phone:</strong> {$phone}</p>
            <p><strong>Total Work Experience:</strong> {$experience}</p>
            <p><strong>HR Domain:</strong> {$hr_domain}</p>
        ";

        $mail->AltBody = "New Job Application / CV Submission\n"
                       . "Name: {$name}\n"
                       . "Email: {$email}\n"
                       . "Phone: {$phone}\n"
                       . "Total Work Experience: {$experience}\n"
                       . "HR Domain: {$hr_domain}\n";

        $mail->send();
        echo "<script>alert('✅ CV submitted successfully!'); window.history.back();</script>";
    } catch (Exception $e) {
        echo "<script>alert('⚠️ Message could not be sent. Error: " . addslashes($mail->ErrorInfo) . "'); window.history.back();</script>";
    }
} else {
    echo 'Invalid Request.';
}
?>
