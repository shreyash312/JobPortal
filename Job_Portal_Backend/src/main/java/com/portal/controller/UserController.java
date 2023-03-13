package com.portal.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.portal.entity.Candidates;
import com.portal.entity.UserDtls;
import com.portal.service.UserService;

@RestController
@RequestMapping("/api/user")

public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/applyJob")
	public ResponseEntity<?> applyJob(@RequestBody Candidates can, HttpServletRequest request) {
		// System.out.println(can);
		return new ResponseEntity<>(userService.applyJob(can, request), HttpStatus.CREATED);
	}

	@GetMapping("/getAppliedJob")
	public ResponseEntity<?> getAppliedJob(HttpServletRequest request) {
		return new ResponseEntity<>(userService.getAppliedJob(request), HttpStatus.OK);
	}

	@GetMapping("/getAllJobs")
	public ResponseEntity<?> getAppliedJob() {
		return new ResponseEntity<>(userService.getAllJobs(), HttpStatus.OK);
	}

	@GetMapping("/checkAppliedJob/{uid}/{jid}")
	public ResponseEntity<?> checkAppliedJob(@PathVariable int uid, @PathVariable int jid) {
		return new ResponseEntity<>(userService.checkAppliedJob(uid, jid), HttpStatus.OK);
	}

	@GetMapping("/search")
	public ResponseEntity<?> checkAppliedJob(@RequestParam("ch") String ch) {
		return new ResponseEntity<>(userService.searchJob(ch), HttpStatus.OK);
	}

	@PostMapping("/updateProfile")
	public ResponseEntity<?> updateProfile(@RequestBody UserDtls user) {
		return new ResponseEntity<>(userService.updateProfile(user), HttpStatus.CREATED);
	}

	@GetMapping("/getAllUser")
	public ResponseEntity<?> getAllUser() {
		return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
	}
	
	@GetMapping("/getAllRecruiter")
	public ResponseEntity<?> getAllRecruiter() {
		return new ResponseEntity<>(userService.getAllRecruiter(), HttpStatus.OK);
	}

}
