package com.portal;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@SpringBootApplication
@EnableEurekaClient
public class JobPortalBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(JobPortalBackendApplication.class, args);
	}

}
