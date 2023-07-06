import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        helloMaker();
    }
    private static String helloMaker() {
            String greeting = "Hello World!";
            StringBuilder newString = new StringBuilder();
            Scanner scanner = new Scanner(System.in);  // Create a Scanner object
            System.out.println("Enter a number between 1 and 12, inclusive");
            System.out.println("You only get 3 tries at this, try not to screw it up.");
            int userInput = 0;
            for (int i=0; i<4; i++) {
                userInput = Integer.parseInt(scanner.nextLine());  // Read user input
                if (userInput < 1 || userInput > 12) {
                    System.out.println("Sorry that won't work. Your options are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, or 12");
                } else {
                    System.out.println("Your version of Hello World is: " + greeting.substring(0,userInput));
                }
            }
              // Output user input
            return newString.toString();
            }
}