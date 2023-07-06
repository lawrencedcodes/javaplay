package com.topsoutherncoders.dependencyex;

import java.util.Scanner;

public class Hello {
    private String helloMaker(int num) {
        String greeting = "Hello World!";
        StringBuilder newString = new StringBuilder();
        Scanner scanner = new Scanner(System.in);  // Create a Scanner object
        System.out.println("Enter a number between 1 and 12, inclusive");

        String userInput = scanner.nextLine();  // Read user input
        System.out.println("Your version of Hello World is: " + greeting);  // Output user input
        return newString.toString();
    }
}
