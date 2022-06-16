package com.demo.springdatajwt.service;

import java.util.List;

import com.demo.springdatajwt.entity.Marks;
import com.demo.springdatajwt.entity.User;

public interface UserService {
public void registerUser(User user);
public List<Marks> getMarks(String uname);
}
