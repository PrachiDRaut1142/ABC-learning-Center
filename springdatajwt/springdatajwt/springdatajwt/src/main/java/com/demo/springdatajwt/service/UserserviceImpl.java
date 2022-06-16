package com.demo.springdatajwt.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.springdatajwt.entity.Marks;
import com.demo.springdatajwt.entity.User;
import com.demo.springdatajwt.repository.MarksRepository;
import com.demo.springdatajwt.repository.UserRepository;
@Service
@Transactional
public class UserserviceImpl implements UserService{
    @Autowired
	UserRepository userrepo;
    @Autowired
    MarksRepository marks;
	@Override
	public void registerUser(User user) {
		// TODO Auto-generated method stub
		userrepo.save(user);
	}

	@Override
	public List<Marks> getMarks(String uname) {
		// TODO Auto-generated method stub
		
		return marks.seachByMarks(uname);
	}

}
