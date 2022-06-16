package com.demo.springdatajwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.springdatajwt.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	public User findByUserName(String name);
}
