package com.humanResourceManagement.Services;

import com.humanResourceManagement.Model.Employee;

import com.humanResourceManagement.Repo.EmployeesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

//CRUD business logic with JPA repository
@Service
public class HR_service {
    @Autowired
    EmployeesRepo employeesRepo;

    public List<Employee> getAllEmployees(){
        return new ArrayList<>(employeesRepo.findAll());
    }

    public Employee findById(Long id){
        return employeesRepo.findById(id).orElse(null);
    }

    public List<Employee> findByField(String type,String prams){
        switch (type){
            case "id":
                List<Employee> res=new ArrayList<>();
                res.add(employeesRepo.findById(Long.parseLong(prams)).orElse(null));
                if (res.get(0)==null) return new ArrayList<>();
                return res;
            case "name":
                return employeesRepo.findByName(prams);
            case "email":
                return employeesRepo.findByEmail(prams);
            case "phone":
                return employeesRepo.findByPhoneNumber(prams);
            case "website":
                return employeesRepo.findByWebsite(prams);
        }
        return new ArrayList<>();
    }

    public Employee updateEmployee(Employee employee){
        return employeesRepo.save(employee);
    }

    public String deleteEmployee(Long id){
        employeesRepo.delete(Objects.requireNonNull(employeesRepo.findById(id).orElse(null)));
        return "Employee deleted";
    }
}
