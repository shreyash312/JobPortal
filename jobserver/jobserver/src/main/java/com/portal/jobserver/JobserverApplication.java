package com.portal.jobserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class JobserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(JobserverApplication.class, args);
	}

}
