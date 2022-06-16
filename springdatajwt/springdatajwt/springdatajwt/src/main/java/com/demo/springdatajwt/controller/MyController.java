package com.demo.springdatajwt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.springdatajwt.entity.AuthUser;
import com.demo.springdatajwt.entity.Marks;
import com.demo.springdatajwt.entity.User;
import com.demo.springdatajwt.jwtconfig.JwtUtil;
import com.demo.springdatajwt.service.UserService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*" )
public class MyController {
	@Autowired
	JwtUtil jwit;
	@Autowired
	AuthenticationManager authenticationmanager;
    @Autowired
	UserService uservice;
	@GetMapping(value = "/marks/{data}")
	public List<Marks> myHello(@PathVariable("data") String jname) {
		
		return uservice.getMarks(jname);

	}
	@PostMapping(value = "/register")
    public String addProduct(@RequestBody User us) {
    	uservice.registerUser(us);
    	
    	return "Data Added";
    }

	@PostMapping(value = "/authenticate")
	public String getToken(@RequestBody AuthUser auth) throws Exception {
		try {
			authenticationmanager
					.authenticate(new UsernamePasswordAuthenticationToken(auth.getUserName(), auth.getUserPassword()));
		} catch (Exception e) {
			// TODO: handle exception
			throw new Exception("Invalid User name password");
		}

		return jwit.generateToken(auth.getUserName());

	}

}
