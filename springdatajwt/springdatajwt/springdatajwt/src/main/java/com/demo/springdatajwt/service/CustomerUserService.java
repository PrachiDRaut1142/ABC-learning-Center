package com.demo.springdatajwt.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.demo.springdatajwt.entity.User;
import com.demo.springdatajwt.repository.UserRepository;
@Service
public class CustomerUserService implements UserDetailsService {
    @Autowired
	UserRepository repo;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
       User	user=repo.findByUserName(username);
      org.springframework.security.core.userdetails.User users=new org.springframework.security.core.userdetails.User(user.getUserName(), user.getUserPassword(), new ArrayList<>());
		return users;
	}

}
