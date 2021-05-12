package com.example.employee.controllers;

import com.example.employee.model.Employee;
import com.example.employee.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(EmployeeController.API_URL)
public class EmployeeController {
    public static final String API_URL = "/api/employee";
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public List<Employee> getAll(){
        return this.employeeService.getAll();
    }

    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Long id){
        return this.employeeService.getEmployeeById(id);
    }

    @PostMapping("/create")
    public Employee saveEmployee(@RequestBody Employee c){
        return this.employeeService.saveEmployee(c);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable Long id){
        this.employeeService.deleteEmployee(id);
    }

    @PutMapping("/update/{id}")
    public void updateEmployee(@PathVariable Long id, @RequestBody Employee c){
        this.employeeService.updateEmployee(id, c);
    }
}


