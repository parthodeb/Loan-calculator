Loan Calculator

This project is a simple web-based loan calculator that allows users to calculate their monthly loan payments, total payments, and total interest based on the loan amount, interest rate, and loan term. It also provides a detailed amortization schedule.

Features

Loan Calculation: Calculates monthly loan payments, total payments, and total interest.
Real-time Updates: The calculations update automatically as you type.
Input Validation: Ensures that you enter valid numbers for the loan amount, interest rate, and term.
Amortization Schedule: Provides a detailed, month-by-month breakdown of payments, including principal, interest, and the remaining balance.
Dark Mode: A toggle switch to change between light and dark themes.
Reset Functionality: A button to clear all input fields and results.
Responsive Design:- The layout adapts to different screen sizes.

Files

`index.html`

This is the main HTML file that structures the web page.

Structure and Elements

-   `<head>`**: Contains metadata, links to the stylesheet (`style.css`), and includes the Tailwind CSS library for styling. It also has a script to configure Tailwind's dark mode.
-   `<body>`**: The main content of the page.
    -   A `button` with the ID `darkToggle` allows users to switch between light and dark modes.
    -   A main `div` with the class `background` acts as the container for the entire calculator, centering it on the page.
    -   A `div` with the class `form` holds the input fields and the result area.

 Divisions (`div`s)

-   `<div class="absolute top-4 right-4">`**: A container for the dark mode toggle button, positioning it at the top-right corner of the page.
-   `<div class="background ...">`**: The main container that sets the background color and uses flexbox to center the calculator form both vertically and horizontally.
-   `<div class="form ...">`**: This `div` represents the calculator itself. It contains the title, input fields for the loan amount, interest rate, and term, and the reset button.
-   `<div id="result" class="result ...">`**: This `div` is where the calculated results (monthly payment, total payment, total interest, and the amortization schedule) are displayed.

`style.css`

This file provides some basic styling for the application, though most of the styling is handled by the Tailwind CSS utility classes directly in the `index.html` file.

 `index.js`

This file contains the JavaScript code that powers the loan calculator's functionality.

Global Variables

-   `a`: A reference to the input element with the ID `amount` (Loan Amount).
-   `r`: A reference to the input element with the ID `rate` (Interest Rate).
-   `t`: A reference to the input element with the ID `time` (Loan Term).
-   `p`: A reference to the `div` element with the ID `result` where the output is displayed.
-   `i`: A reference to the button element with the ID `reset`.

Functions

-   `calculateMonthlyPayment()`:
    -   This function is the core of the calculator.
    -   It reads the values from the loan amount, interest rate, and term input fields.
    -   It performs input validation to ensure the values are valid numbers.
    -   It calculates the monthly interest rate and the total number of months.
    -   It uses the standard formula to calculate the monthly payment.
    -   It calculates the total payment over the life of the loan and the total interest paid.
    -   It generates an amortization schedule (a month-by-month breakdown of payments, principal, interest, and remaining balance).
    -   Finally, it formats and displays all this information in the `result` div.

-   `updateDisplay()`:
    -   This function is used to reset the calculator.
    -   It clears the values of the input fields (`amount`, `rate`, `time`).
    -   It clears the content of the `result` div.

 Event Listeners

-   `input` event listeners are attached to the `amount`, `rate`, and `time` input fields. Whenever the user types into any of these fields, the `calculateMonthlyPayment()` function is called to update the results in real-time.
-   A `click` event listener is attached to the `reset` button. When clicked, it calls the `updateDisplay()` function to clear all inputs and results.