<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];
  $to = "keith.petryshyn@gmail.com";
  $headers = "From: " . $name . " <" . $email . ">\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
  $body = "<h3>Message Details:</h3>";
  $body .= "<p><strong>Name:</strong> " . $name . "</p>";
  $body .= "<p><strong>Email:</strong> " . $email . "</p>";
  $body .= "<p><strong>Subject:</strong> " . $subject . "</p>";
  $body .= "<p><strong>Message:</strong> " . $message . "</p>";
  if (mail($to, $subject, $body, $headers)) {
    echo "success";
  } else {
    echo "error";
  }
}
?>