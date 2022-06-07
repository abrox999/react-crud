package com.example.cruddemo.controller;

import com.example.cruddemo.entity.User;
import com.example.cruddemo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserRepository uRepo;

    @GetMapping("/users")
    public List<User> getAllUser(){
        return uRepo.findAll();
    }

    @PostMapping("/users")
    public User saveUserDetails(@RequestBody User user){
        return uRepo.save(user);
    }

    @GetMapping("/users/{id}")
    public User getSingleUser(@PathVariable Long id){
        return uRepo.findById(id).get();
    }

    @PutMapping("/users")
    public User updateUser(@RequestBody User user){
        return uRepo.save(user);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable Long id){
        uRepo.deleteById(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/users")
    public ResponseEntity<HttpStatus> deleteAllUser(){
        uRepo.deleteAll();
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }
}
