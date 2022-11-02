package com.elias.crudspring.controller;

import com.elias.crudspring.model.Course;
import com.elias.crudspring.repository.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private CourseRepository courseRepository;

    @GetMapping
    public List<Course> listCourses() {
        return courseRepository.findAll();
    }
}
