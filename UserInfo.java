package com.complain.complain.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class UserInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String aadhaar;
    private String email;
}
