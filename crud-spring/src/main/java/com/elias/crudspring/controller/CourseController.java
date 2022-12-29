package com.elias.crudspring.controller;

import com.elias.crudspring.model.Course;
import com.elias.crudspring.repository.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private CourseRepository courseRepository;

    @GetMapping
    public @ResponseBody List<Course> listCourses() {
        return courseRepository.findAll();
    }
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Course createCourse(@RequestBody Course course) {
       return courseRepository.save(course);
    }
}
