// Write to html
document.write("Hello Javascript!!<br/>")
document.write("Temperature Conversion<br/>");

// Constants
const NORMAL_TEMP_FARENHEIT = 98.6;
const NORMAL_TEMP_CELSIUS = (NORMAL_TEMP_FARENHEIT - 32) / 1.8;

// Variables
var currentTempFarenheit = 99;
var currentTempCelsius = (currentTempFarenheit - 32) / 1.8
document.write("Your body temperature: " + currentTempFarenheit + " F (" + currentTempCelsius + " C)<br/>");
document.write("Normal body temperature: " + NORMAL_TEMP_FARENHEIT + " F (" + NORMAL_TEMP_CELSIUS + " C)<br/>");
if (currentTempFarenheit > NORMAL_TEMP_FARENHEIT) {
    document.write("You have fever. Take rest!" + "<br/><br/>");
}

// Boolean
if (100) {
    document.write("Passing 100 in condition returns true" + "<br>");
} else {
    document.write("Passing 100 in condition returns false" + "<br>");
}
if (-5) {
    document.write("Passing -5 in condition returns  true" + "<br>");
} else {
    document.write("Passing -5 in condition returns false" + "<br>");
}
if ("Bob") {
    document.write("Passing Bob in condition returns true" + "<br>");
} else {
    document.write("Passing Bob in condition returns  false" + "<br>");
}
if (10 < 20) {
    document.write("Passing relational operator in condition returns boolean true" + "<br>");
} else {
    document.write("Passing relational operator in condition returns boolean false" + "<br>");
}
if (1) {
    document.write("Passing 1 in condition returns  true" + "<br>");
} else {
    document.write("Passing 1 in condition returns false" + "<br>");
}
if (10 * 20 + 30) {
    document.write("Passing expression in condition returns true" + "<br>");
} else {
    document.write("Passing expression in condition returns false" + "<br>");
}

if (-0) {
    document.write("Passing -0 in condition returns true" + "<br>");
} else {
    document.write("Passing -0 in condition returns false" + "<br>");
}
if ("") {
    document.write("Passing empty string in condition returns true" + "<br>");
} else {
    document.write("Passing empty string in condition returns false" + "<br>");
}
if (undefined) {
    document.write("Passing undefined in condition returns true" + "<br>");
} else {
    document.write("Passing undefined in condition returns false" + "<br>");
}
if (null) {
    document.write("Passing null in condition returns true" + "<br>");
} else {
    document.write("Passing null in condition returns false" + "<br><br>");
}

var student_name;
var marks;
var pass_status;
document.write(student_name + "<br>");
document.write(marks + "<br>");

student_name = "Krishna";
marks = 90;
pass_status = true;


document.write(student_name + "<br>");
document.write(marks + "<br>");
document.write(pass_status + "<br><br>");


document.write("Ticket Booking App" + "<br>");
// Single line comment
// Variable and constant declaration and intialization for:

// Multi line comment
/*1. number of seats to be booked
2. cost per ticket
3. discount
4. calculating total price without discount
5. calculating total price with discount */

var seats = 4;
var costPerTicket = 320;
var discount = 50; // Requirement 1: Using operators to calculate total cost
var totalCost = seats * costPerTicket;
const percent = 100; // Requirement 2 a: Using operators to calculate discounted cost
var discountedCost = totalCost - (discount / percent) * totalCost; // Output: Displaying the values of the variables on the browser
document.write(
    "Total cost (" + seats + " tickets): " + "Rs." + totalCost + "<br>"
);
document.write("Discount coupon: " + discount + "%" + "<br><br>");
document.write("Amount Payable: " + "Rs." + discountedCost);