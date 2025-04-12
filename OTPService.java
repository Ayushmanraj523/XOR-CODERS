package com.complain.complain.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Random;

@Service
public class OTPService {

    private HashMap<String, String> otpMap = new HashMap<>();

    public String generateOTP(String email) {
        String otp = String.valueOf(new Random().nextInt(900000) + 100000);
        otpMap.put(email, otp);
        return otp;
    }

    public boolean verifyOTP(String email, String otp) {
        return otpMap.containsKey(email) && otpMap.get(email).equals(otp);
    }

    public void clearOTP(String email) {
        otpMap.remove(email);
    }
}
