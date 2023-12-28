# JavaScript-Calculator

## About

JavaScript-Calculator is a web-based calculator designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. This project combines HTML, CSS, and JavaScript to create a functional and user-friendly calculator interface, suitable for anyone in need of quick and easy calculations.

## Features

- **Add**: Allows users to perform addition calculations.
- **Subtract**: Enables subtraction of numbers.
- **Multiply**: Users can multiply numbers.
- **Divide**: Provides functionality to divide numbers.

## Technologies Used

- **HTML**: Used to structure the calculator interface.
- **CSS**: Employed to style the calculator, enhancing its visual appeal.
- **JavaScript**: The core technology that provides the calculator's functionality, handling user input and arithmetic operations.
- **Docker**: Used to containerize the application, ensuring consistent environments for development, testing, and deployment.
- **Jest**: Employed for writing and running unit tests to ensure code quality.
- **GitHub Actions**: Utilized for Continuous Integration, automatically building and testing the application with every push or pull request to the main branch.

## Getting Started

To use the JavaScript-Calculator, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:[Your Username]/JavaScript-Calculator.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd JavaScript-Calculator
   ```
   
3. **Build and Run with Docker (Optional):**
   If you have Docker installed, you can build and run the application using Docker.
   - Build the Docker image:
   ```bash
   docker build -t javascript-calculator .
   ```
   - Run the application in a Docker container:
   ```bash
   docker run -p 8080:8080 javascript-calculator
   ```
   - Access the application by navigating to `http://localhost:8080` in your web browser.
   
5. **Running Tests:**
   To run the tests, execute:
   ```bash
   npm test
   ```
   This will run the unit tests defined in the project using Jest

## Continous Integration
This project is configured with GitHub Actions to automatically build the Docker image and run tests every time changes are pushed or a pull request is made to the main branch. The CI workflow ensures that the codebase maintains a standard of quality with each update.
