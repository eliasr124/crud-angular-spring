package com.elias.crudspring.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 12, nullable = false)
    private String description;
}
