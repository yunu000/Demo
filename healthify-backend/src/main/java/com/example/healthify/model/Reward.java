package com.example.healthify.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Reward {
    @JsonProperty
    private int uid;
    @JsonProperty
    private int reward;
}
