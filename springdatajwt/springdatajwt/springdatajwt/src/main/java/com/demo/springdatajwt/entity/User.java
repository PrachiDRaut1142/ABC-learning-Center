package com.demo.springdatajwt.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_jwt")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
    private String fullName;
	private String userName;
	private String userPassword;
	private String qualification;
	private String state;
	private String city;
	public User(){
		
	}
	public User(Integer id, String fullName, String userName, String userPassword, String qualification, String state,
			String city) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.userName = userName;
		this.userPassword = userPassword;
		this.qualification = qualification;
		this.state = state;
		this.city = city;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", fullName=" + fullName + ", userName=" + userName + ", userPassword=" + userPassword
				+ ", qualification=" + qualification + ", state=" + state + ", city=" + city + "]";
	}

	
}
