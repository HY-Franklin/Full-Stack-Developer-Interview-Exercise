package com.humanResourceManagement.Repo;

import com.humanResourceManagement.Model.Employee;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

// Jpa Repository
public interface EmployeesRepo extends JpaRepository<Employee,Long> {

//    find by field
    List<Employee> findByName(String name);
    List<Employee> findByEmail(String email);
    List<Employee> findByWebsite(String website);
    List<Employee> findByPhoneNumber(String phone);
}
