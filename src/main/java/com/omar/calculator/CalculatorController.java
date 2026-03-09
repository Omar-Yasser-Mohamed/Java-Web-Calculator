package com.omar.calculator;

import org.springframework.web.bind.annotation.*;

@RestController
public class CalculatorController {

    @GetMapping("/add")
    public double add(@RequestParam double a,@RequestParam double b){
        return a+b;
    }

    @GetMapping("/sub")
    public double sub(@RequestParam double a,@RequestParam double b){
        return a-b;
    }

    @GetMapping("/mul")
    public double mul(@RequestParam double a,@RequestParam double b){
        return a*b;
    }

    @GetMapping("/div")
    public double div(@RequestParam double a,@RequestParam double b){
        return a/b;
    }

    @GetMapping("/mod")
    public double mod(@RequestParam double a,@RequestParam double b){
        return a%b;
    }

}