package com.complain.complain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendOTP(String toEmail, String otp) {
        System.out.println("Sending email to: " + toEmail);
        System.out.println("OTP: " + otp);
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("sahilkum097@gmail.com"); // yahi correct hona chahiye
        message.setTo(toEmail);
        message.setSubject("Your OTP Code");
        message.setText("Your OTP is: " + otp);
    
        mailSender.send(message);
    }
}
