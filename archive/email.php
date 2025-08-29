<?php
 
  //response generation function
 
  $response = "";
 
  //function to generate response
  function generate_response($type, $message){
   
    global $response;
 
    if($type == "success") $response = "<div class='alert alert-success' role='alert'> <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>{$message}</div>";
    else $response = "<div class='alert alert-warning' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>{$message}</div>";
   
  }
 
  //response messages
  $not_human       = "Human verification <b>incorrect</b>";
  $missing_content = "Please supply all information";
  $email_invalid   = "Email Address <b>Invalid</b>";
  $message_unsent  = "Message <b>was not sent.</b> Try Again.";
  $message_sent    = "<b>Thank You</b> Your message <b>has been sent</b>.";
 
  //user posted variables
  $name = $_POST['first_name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $human = '8';
 
  //php mailer variables
  $to = "atib.chowdhury@gmail.com";
  $subject = $name." sent a message from your website";
  $headers = 'From: '. $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n";
 
  if(!$human == 0){
    if($human != 8) generate_response("error", $not_human); //not human!
    else {
     
      //validate email
      if(!filter_var($email, FILTER_VALIDATE_EMAIL))
        generate_response("error", $email_invalid);
      else //email is valid
      {
        //validate presence of name and message
        if(empty($name) || empty($message)){
          generate_response("error", $missing_content);
        }
        else //ready to go!
        {
          $sent = mail($to, $subject, $message, $headers);
          if($sent) generate_response("success", $message_sent); //message sent!
          else generate_response("error", $message_unsent); //message wasn't sent
        }
      }
    }
  }

 
?>