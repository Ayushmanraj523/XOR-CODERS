package com.complain.complain.model;

import jakarta.persistence.*;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class FIR {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String gender;
    private int age;
    private String address;
    private String pin;
    private String mobile;
    private String email;
    private String title;
    private String subject;
    private String district;
    private String policeStation;
    private String place;
    private String datetime;

    @Column(length = 5000)
    private String description;

    private String evidencePhoto;
    private String evidenceVideo;
    private String evidencePDF;

    // Getters and Setters
}
