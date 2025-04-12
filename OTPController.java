package com.complain.complain.controller;

import com.complain.complain.model.UserInfo;
import com.complain.complain.repository.UserInfoRepository;
import com.complain.complain.service.EmailService;
import com.complain.complain.service.OTPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/otp")
@CrossOrigin(origins = "*")
public class OTPController {

    @Autowired
    private OTPService otpService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private UserInfoRepository userInfoRepository;

    @PostMapping("/send")
    public String sendOtp(@RequestBody UserInfo user) {
        String otp = otpService.generateOTP(user.getEmail());
        emailService.sendOTP(user.getEmail(), otp);
        return "OTP Sent to email!";
    }

    @PostMapping("/verify")
    public String verifyOtp(@RequestBody OTPVerifyRequest request) {
        boolean isValid = otpService.verifyOTP(request.getEmail(), request.getOtp());

        if (isValid) {
            UserInfo info = new UserInfo();
            info.setName(request.getName());
            info.setAadhaar(request.getAadhaar());
            info.setEmail(request.getEmail());
            userInfoRepository.save(info);

            otpService.clearOTP(request.getEmail());
            return "OTP Verified & Info Saved";
        } else {
            return "Invalid OTP";
        }
    }

    static class OTPVerifyRequest {
        private String name;
        private String aadhaar;
        private String email;
        private String otp;

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public String getAadhaar() { return aadhaar; }
        public void setAadhaar(String aadhaar) { this.aadhaar = aadhaar; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public String getOtp() { return otp; }
        public void setOtp(String otp) { this.otp = otp; }
    }
}
