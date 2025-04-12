package com.complain.complain.repository;

import com.complain.complain.model.FIR;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FIRRepository extends JpaRepository<FIR, Long> {
}