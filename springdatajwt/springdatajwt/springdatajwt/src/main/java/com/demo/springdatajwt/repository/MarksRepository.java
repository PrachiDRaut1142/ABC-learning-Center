package com.demo.springdatajwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.springdatajwt.entity.Marks;


public interface MarksRepository extends JpaRepository<Marks, Integer>{

	 @Query("SELECT p FROM Marks p WHERE userName=:uname")
	    public List<Marks> seachByMarks(String uname);
}
