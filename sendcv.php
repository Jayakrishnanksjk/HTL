<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phPMailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // reCAPTCHA verification
    $secretKey = "6LehWnIrAAAAALo0Nu6Ad40t3u1uzDKvSKIBccAm";
    $captchaResponse = $_POST['g-recaptcha-response'];
    
    $verifyResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captchaResponse");
    $responseData = json_decode($verifyResponse);

    if ($responseData->success) {
        // Captcha passed ✅
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = !empty($_POST['subject']) ? $_POST['subject'] : "New Contact Form Submission";
        $message = $_POST['message'];

        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'jayakrishnanashi@gmail.com'; // Your Gmail
            $mail->Password   = 'qaxmoturtpmomsjn';    // Your App Password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            // Recipients
            $mail->setFrom('contact-form@yoursite.com', 'Website Contact Form');
            $mail->addAddress('test@example.com'); // Receiver email
            $mail->addReplyTo($email, $name);

            // Content
            $mail->isHTML(false);
            $mail->Subject = "Contact Form: " . $subject;
            
            $mail->Body = "You received a new message from your website contact form:\n\n" .
                         "Name: $name\n" .
                         "Email: $email\n\n" .
                         "Message:\n$message\n";

            // File attachment
            if (isset($_FILES['cv']) && $_FILES['cv']['error'] === UPLOAD_ERR_OK) {
                $file_tmp_name = $_FILES['cv']['tmp_name'];
                $file_name = $_FILES['cv']['name'];
                
                // Validate file type
                $allowed_types = ['application/pdf', 'application/msword', 
                                'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                $file_type = mime_content_type($file_tmp_name);
                
                if (in_array($file_type, $allowed_types)) {
                    $mail->addAttachment($file_tmp_name, $file_name);
                } else {
                    throw new Exception('Invalid file type. Please upload PDF or DOC files only.');
                }
            }

            $mail->send();
            echo "✅ Message sent successfully!";
            
        } catch (Exception $e) {
            echo "❌ Message could not be sent. Error: " . $e->getMessage();
        }
    } else {
        echo "⚠️ Please verify that you are not a robot.";
    }
}
?>