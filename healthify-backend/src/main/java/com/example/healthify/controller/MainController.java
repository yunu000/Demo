package com.example.healthify.controller;

import com.example.healthify.entity.User;
import com.example.healthify.model.Login;
import com.example.healthify.model.Reward;
import com.example.healthify.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.parser.Entity;
import java.util.Optional;

@RestController
@CrossOrigin
@Slf4j
public class MainController {
    @Autowired
    private UserService userService;
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Login details) {
        String email = details.getEmail();
        String password = details.getPassword();
        log.info(email + " " + password);
        Optional<User> user = userService.findUser(email);
        if (user.isPresent()) {
            return new ResponseEntity<User>(user.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }
    @PostMapping("/updateReward")
    public ResponseEntity<?> updateReward(@RequestBody Reward reward){
        System.out.println("here");
        Optional<User> user = userService.updateReward(reward.getUid(),reward.getReward());
        if (user.isPresent()) {
            return new ResponseEntity<User>(user.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }
}
