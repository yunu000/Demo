package com.example.healthify.service;

import com.example.healthify.entity.User;
import com.example.healthify.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> findUser(String email){
        return userRepository.findByEmail(email);
    }
    public Optional<User> updateReward(int uid,int rewardPoint){
        Optional<User> user=userRepository.findById(uid);
        user.get().setRewardPoint(rewardPoint);
        User updatedUser = userRepository.save(user.get());
        if(updatedUser !=null && updatedUser.getUid()>0)
            return Optional.ofNullable(updatedUser);;
        return null;
    }
}
