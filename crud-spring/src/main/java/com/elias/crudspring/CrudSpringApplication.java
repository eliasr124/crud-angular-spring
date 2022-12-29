package com.elias.crudspring;

import com.elias.crudspring.model.Course;
import com.elias.crudspring.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDataBase(CourseRepository courseRepository) {
		return  ags -> {
				courseRepository.deleteAll();

				final Course c = new Course();
				c.setName("crud Angular com Spring");
				c.setDescription("front-end");

				courseRepository.save(c);
		};
	}
}
