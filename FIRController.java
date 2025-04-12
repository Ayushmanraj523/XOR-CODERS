package com.complain.complain.controller;

import com.complain.complain.model.FIR;
import com.complain.complain.repository.FIRRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/fir")
@CrossOrigin(origins = "*")
public class FIRController {

    @Autowired
    private FIRRepository firRepository;

    @PostMapping("/submit")
    public String submitFIR(@RequestBody FIR firData) {
        firRepository.save(firData);
        return "FIR successfully saved to database!";
    }
}
