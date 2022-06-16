package com.demo.springdatajwt.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_marks")
public class Marks {
	@Id
	private Integer mid;
	private Double userMarks;
	private String userName;

	public Marks() {

	}

	public Marks(Integer mid, Double userMarks, String userName) {
		super();
		this.mid = mid;
		this.userMarks = userMarks;
		this.userName = userName;
	}

	public Integer getMid() {
		return mid;
	}

	public void setMid(Integer mid) {
		this.mid = mid;
	}

	public Double getUserMarks() {
		return userMarks;
	}

	public void setUserMarks(Double userMarks) {
		this.userMarks = userMarks;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

}
