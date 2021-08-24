<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = "New NuLanes Subscriber";

    $to = "yosoymatiasn@hotmail.com";
    $body = "";

    $body .= "From ".$name. "\r\n";
    $body .= "Email: ".$email. "\r\n";

    $headers = 'From: sample@example.com' . "\r\n" .
'Reply-To: sample@example.com' . "\r\n" .
'Return-Path: sample@example.com';

    mail($to,$subject,$body, $headers);

?>