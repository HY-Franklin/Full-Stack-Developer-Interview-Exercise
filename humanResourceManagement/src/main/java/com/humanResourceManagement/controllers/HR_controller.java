package com.humanResourceManagement.controllers;

import com.humanResourceManagement.Model.Employee;
import com.humanResourceManagement.Services.HR_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class HR_controller {

    // hr_service is responsible for CRUD operation with h2-database
    HR_service hr_service;

    //Constructor Injection
    @Autowired
    public HR_controller(HR_service hr_service){
        this.hr_service=hr_service;
    }


//    get all Employees from h2 database
    @GetMapping("/all")
    public ResponseEntity responseAllEmployees(){
        return new ResponseEntity<>(hr_service.getAllEmployees(), HttpStatus.OK);
    }

//    find the employee by id
    @GetMapping("/{id}")
    public ResponseEntity updateOne(@PathVariable Long id){
        Employee employee=hr_service.findById(id);

        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

//    search an employee based on specific field
    @GetMapping("/search")
    public ResponseEntity searchField(@RequestParam("type") String type,@RequestParam("value")String value){
        return new ResponseEntity<>(hr_service.findByField(type,value),HttpStatus.OK);
    }

//    update the employee
    @PostMapping("/post")
    public ResponseEntity updateOne( @RequestBody Employee employee){

        hr_service.updateEmployee(employee);
        return new ResponseEntity<>("update success!", HttpStatus.OK);
    }

//    delete the employee
    @DeleteMapping("delete/{id}")
    public ResponseEntity deleteOne( @PathVariable Long id){
        hr_service.deleteEmployee(id);
        System.out.println("deleted successful");
        return new ResponseEntity<>("deleted successful", HttpStatus.OK);
    }


}
