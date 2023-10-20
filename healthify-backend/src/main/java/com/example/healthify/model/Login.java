package com.example.healthify.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Login {
    @JsonProperty
    String password;
    String email;
}
