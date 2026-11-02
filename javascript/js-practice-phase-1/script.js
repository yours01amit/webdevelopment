//  javascript phase 1 

// ------------------- Console & Basics ------------------

// Que ->1 Print 'Hello JavaScript' in the console.

// console.log('Hello javascript')



// Que ->2 Print your name, age, and city using one console.log.


// let name = "Amit";
// let age = 24;
// let city = "Agra";

// console.log("my name is "+name+" my age is "+ age + " and my city is " + city);


// Que ->3 Print a warning message using console.warn().

// console.warn("don't waste your time amit bhai");


// Que ->4 Print a error message using console.error().

// console.error("how many time u will mistake to do this sweta darling");

// Que ->5 Use console.table() to display an array of 5 numbers.

// console.table([1,2,3,5,6])


// ---------------------  Variables  --------------------------

// Que ->1 Create a variable called studentName and store your name in it.

// let studentName = "Amit Kumar"


// Que ->2 Create a variable age and print it.

// let age  = 24;

// console.log(age);


// Que ->3 Create two variables and swap their values.

// let a = 10;
// let b = 20;

// [a,b] = [b,a]

// console.log(a,b);


// Que ->4 Create a constant variable for Pi and print it.

// const Pi = 3.14;

// console.log(Pi);


// Que ->5 Declare a variable without assigning a value and print it

// let a;

// console.log(a);


// Que->6 Create a variable score and increase it by 10.

// let score = 10;

// score+=10

// console.log(score);


// Que->7 Create three variables for first name, last name and full name.

// let firstName = "Amit";

// let lastName = "kumar";

// let fullName = "Amit kumar";


// --------------- Date Types ----------------------

// Que->1 Create variables of type string, number, boolean, null and undefined

// let a = "Amit";
// let b = 20;
// let c = true;
// let d = null;
// let e;

// Que->2 Check the type of different variables using type of.

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);


// Que->3 Store your mobile number in a variable and check its type.

// let mobNumber = 9634993891;

// console.log(typeof mobNumber);


// Que->4 Create a variable with value null and check its type.

// let a = null;
// console.log(typeof a);



// Que->5 Create a bigint number and print it.


// ---------------- Type Conversion & Coercion ----------

// Que->1 Convert the string "50" into a number.

// let a = "50"

// console.log(typeof Number(a));


// Que->2 Convert the number 100 into a string.

// let a = 100;

// a = String(a)

// console.log(typeof a);


// Que->3 Convert "true" into a boolean.

// let bool = "true";

// bool = Boolean(bool)

// console.log(typeof bool);


// Que->4 Check the output of:  "5"+2 , "5"-2,  true+1

// console.log("5"+2); --> 52
// console.log("5"-2); --> 3
// console.log(true+1); --> 2


// Que->5 Create a variable with value "123abc" and convert it into a number.

// let a = "123abc";

// a = parseInt(a, 10); // The 10 specifies base-10 decimal system

// console.log(a); // Output: 123
// console.log(typeof a); // Output: "number"


// Que->6 Use parseInt() on "500px".

// let int = "500px";

// int = parseInt(int)
// console.log(int);
// console.log(typeof int);



// -------------------- Operators ----------------------

// Que->1 Add two numbers and print the result.

// let a = 10;
// let b = 20;

// c = a+b

// console.log(c);


// Que->2 Find the remainder when 25 is divided by 4.

// console.log(25%4);



// Que->3 Find the square of a number using exponent operator.

// console.log(2**2);


// Que->4 Increment a variable using ++.

// let a = 10;

// a++

// console.log(a);


// Que->5 Decrement a variable using -.

// let a = 10;

// a--

// console.log(a);


// Que->6 Use += operator to increase a variable by 20.

// let a  = 10;

// a+=10

// console.log(a);


// Que->7 Compare two numbers using >, <, >=, <=.

// console.log(10>5); True
// console.log(10<5); False
// console.log(10>=10); True
// console.log(10<=10); True


// Que->8 Check if two values are strictly equal using ===.

// let a = 10;
// let b = 10;

// console.log(a===b);

// Que->9 Compare "10" and 10 using both == and ===.

// let a = "10";
// let b = 10;

// console.log(a==b);
// console.log(a===b);


// Que->10 Create two boolean variables and test &&, ||, and !.

// let a = true;
// let b = false;

// console.log(a&&b);
// console.log(a||b);
// console.log(a!=b);


// -------------------- String --------------------

// Que->1 Create a string and print its length.

// let str = "amit";

// console.log(str.length);
 

// Que->2 Convert a string into uppercase.

// let str = 'amit';

// console.log(str.toUpperCase());


// Que->3 Convert a string into lowercase.

// let str = "Amit";

// console.log(str.toLowerCase());


// Que->4 Check if a string includes the word "JavaScript".

// let str = "JavaScript";

// console.log(str.includes("JavaScript"));


// Que->5 Extract the word "World" from "Hello World".

// let str = "Hello World";

// console.log(str.slice(5,11)); --> world

// let a = str.split(" ")

// console.log(a[1]); --> world



// console.log(str.substring(6,11)); --> world


// Que->6 Replace "apple" with "mango" in a sentence.

// let str = " hey bro do u wanna eat apple";

// console.log(str.replace("apple","mango"));


// Que->7 Split "HTML, CSS, JS" into an array.

// let str = "HTML, CSS, JS";

// let str1 = str.split(",");

// console.log(str1);

//Que->8 Remove extra spaces from a string.

// method 1
// let str = "hii bro..     what is going on   ?";

// // 1. .trim() removes spaces from the start and end
// // 2. .replace(/\s+/g, ' ') replaces all multiple spaces in the middle with a single space
// let cleanStr = str.trim().replace(/\s+/g, ' ');

// console.log(cleanStr); 
// // Output: "hii bro.. what is going on ?"


// method2

// let str = "hii bro..     what is going on   ?";

// let cleanStr = str.split(' ').filter(word => word !== '').join(' ');

// console.log(cleanStr);
// // Output: "hii bro.. what is going on ?"


// Que->9 Repeat the word "Hi" 5 times.

// let str = "Hi";

// console.log(str.repeat(5));


// Que->10 Print the first character of a string.

// Que->11 Use template literals to print: "My name is Aman and I am 2o years old".


// const name = "Aman";
// const age = "2o"; // Using '2o' with the letter 'o' as requested in your prompt

// // Use backticks (`) and ${} to insert the variables
// const sentence = `My name is ${name} and I am ${age} years old.`;

// console.log(sentence);
// // Output: "My name is Aman and I am 2o years old."



// Que10 Print the first character of a string.

// let a = 'Amit';

// console.log(a[0]);

// Que11 -> Use template literals to print:"My name is Aman and I am 20 years old".

// let nam = "Amit";
// let age = 20;

// console.log(`my name is ${nam} and I am ${age} years old`);


// =================  Numbers & Math  =============================

// que1 -> Round 4.7 using Math.round().

// let num = 4.7;

// console.log(Math.round(num));

// Que2 --> Find the square root of 81.

// console.log(Math.sqrt(81));

// Que3 -> Find the maximum number from 10, 20, 5, 99.

// let a = [10,20,5,99]

// console.log(Math.max(...a));

// Que4 -> Generate a random number between 1 and 10.

// console.log(Math.floor(Math.random(1,10)*10));

// Que5 -> Convert "99.99" into an integer.

// let num = "99.99";
// console.log(typeof Number(num));

// Que6 -> Check whether 25 is an integer or not.

// let a = 25;
// console.log(Number.isInteger(a));


// Que7 -> Use toFixed(2) on 3.141592.

// let a = 3.141592;

// console.log(typeof a.toFixed(2));



// =====================   Conditionals  ======================

// Que->1 Check whether a number is positive or negative.

// let num = 10;
// if(num>=0){
//     console.log("number is positive");
// } else {
//     console.log("number is negative");    
// }



// Que->2 Check whether a number is even or odd.

// let num = 11;

// if(num%2==0){
//     console.log("number is even");
// } else {
//     console.log("number is odd");   
// }



// Que->3 Check whether a person is eligible to vote.

// let voter = 10;

// if(voter>=18){
//     console.log("That person is eligible for vote");
// } else {
//     console.log("not eligible")
// }



// Que->4 Find the largest among two numbers.

// let num1 = 40;
// let num2 = 30;

// if(num1>num2){
//     console.log(` ${num1} is greater than ${num2}`);
// } else {
//     console.log(` ${num2} is greater than ${num1}`);   
// }


// Que->5 Find the largest among three numbers.

// let num1 = 40;
// let num2 = 70;
// let num3 = 100; 

// if(num1>num2){
//     console.log(`${num1} is greater than ${num2}`);
// } else if(num2>num3){
//     console.log(`${num2} is greater than ${num3}`);
// } else {
//     console.log(`${num3} is greater than ${num1} or ${num2}`)
// }

// Que->6 Check whether a year is a leap year.

// let year = 2022;

// if(year%4==0){
//     console.log(`${year} is a leap year`);
// } else {
//     console.log(`${year} is not a leap year`);
    
// }


// Que->7 Check whether a number is divisible by both 3 and 5.

// let num = 9;

// if(num%3==0 && num%5==0){
//     console.log("yes");
    
// } else {
//     console.log("no");
    
// }

// Que-> 8 Create a simple grading system:
//  90+ → A
//  75+ → B
//  50+ → C
//  below 50 → Fail

// let marks = 95;

// if(marks>90){
//     console.log("A");
// } else if (marks>75){
//     console.log("B");
// } else if (marks>50){
//     console.log("C");
// } else{
//     console.log("Fail");
// }


// Que->1 Check whether a character is a vowel or consonant.

// let char = "E";
// let vowel = ["a","e","i","o","u"];
// if(vowel.includes(char.toLowerCase())){
//     console.log("vowel");
// } else {
//     console.log("consonant");
// }




// Que->2 Create a calculator using `switch` statement.


// Que->3 Print the day name based on a number (1–7).

// let num = Number(prompt("Enter the number: "))
// let day = ["sunday","monday","tuesday", "wednesday", "thursday", "friday", "saturday"]

// if(num ==1){
//     console.log(day[0]);
// } else if(num==2){
//     console.log(day[1]);
    
// } else if(num==3){
//     console.log(day[2]);
    
// } else if(num==4){
//     console.log(day[3]);
    
// } else if(num==5){
//     console.log(day[4]);
    
// } else if(num==6){
//     console.log(day[5]);
    
// } else if(num==7){
//     console.log(day[6]);
    
// }

// Que->4 Check whether a username is `"admin"` and password is `"1234"`.

// another and easy way to write this 

// let num = Number(prompt("Enter the 1 to 7 number for print days: "));

// let days = ["sunday","monday","tuesday", "wednesday", "thursday", "friday", "saturday"];

// if(num>=1 && num<=7){
//     console.log(days[num-1]);
// } else {
//     console.log("invalid number");
    
// }

// Que->4 Check whether a username is "admin" and password is "1234".

// let userName = "admin";
// let pass = "1234";

// if (userName=="admin" && pass == "1234"){
//     console.log("The username and password is correct😊"); 
// } else{
//     console.log("wrong username and password");
    
// }


// ==================  Truthy & Falsy  =========================

// Que->1 Check whether an empty string is truthy or falsy.

// let str = "";

// if(str){
//     console.log(true);
    
// } else {
//     console.log(false);
    
// }


// Que->2 Check whether `0` is truthy or falsy.

// let num = 1;

// if(num){
//     console.log(true);
    
// } else {
//     console.log(false);
    
// }


// Que->3 Check whether `[]` is truthy or falsy.

// let list1 = [];

// if(list1){
//     console.log(true);
    
// } else {
//     console.log(false);
    
// }

// Que->4 Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.

// let var1 = "1";

// if(var1==""){
//     console.log("invalid");
    
// } else {
//     console.log("valid");
    
// }


// 4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.



// ===================  Ternary Operator =======================

// Que->1 Check whether a number is even or odd using ternary operator.

// let num = 11;

// a = (num%2==0)?"even" : "odd";

// console.log(a);


// Que->2 Check whether age is above 18 using ternary operator.

// let age = 19;

// a = (age>18)? "yes" : "No";
// console.log(a);


// Que->3 Find the greater number between two values using ternary operator.

// let num1 = 50;
// let num2 = 20;

// a = (num1>num2)? `${num1} is greater ${num2}` : `${num2} is greater than ${num1}`;
// console.log(a);


// ================== Mixed Practice Questions ==================

// Que->1 Create a mini biodata program using variables and template literals.

// let nam = "Amit";
// let age = 20;
// let city = "Agra";

// console.log(`my name is ${nam} and i am ${age}, i belong to ${city}`);


// Que->2 Calculate the area of a rectangle.                         area(a) = lenth(l) x width(w)

// let length = 5;
// let width = 6;

// let area = length * width;
// console.log(area);


// Que->3 Calculate the simple interest.

// let p = 1000;
// let r = 20;
// let t = 2

// let si = (p*r*t)/100
// console.log(si);

// Que->4 Convert temperature from Celsius to Fahrenheit.

// let Celsius = 40;
// let Fahrenheit = (Celsius * 9/5) + 32;
// console.log(Fahrenheit);



// Que->5 Convert kilometers into meters.

// let kilometers = 20;
// const meters = kilometers * 1000;
// console.log(meters);

// Que->6 Calculate total marks and percentage of 5 subjects.

// let sub = ["hindi", "enlish", "math", "bio", "physics"]




// Que->7 Calculate electricity bill based on units consumed.


// let units = Number(prompt("Enter units"));
// let bill = 0; 
// if (units <= 100) {
//     bill = units * 5;
// } else if (units <= 200) { 
//     bill = units * 10;
// } else {
//     bill = units * 20;
// }

// console.log("Your total bill is: " + bill);




// Que->8 Create a username generator using first name and birth year.






// Que->9 Check whether a string starts with a specific letter.

// let str = prompt("Enter the name")

// if (str.startsWith("@")){
//     console.log(`yes, this string is start with ${str[0]}`);
    
// } else{
//     console.log("string noramal");
    
// }





// Que->1. Count the total characters in a sentence excluding spaces.

// let str = "amit kumar";

// counting = str.length

// console.log(counting);



// ================== Logical Thinking Questions ==================

// Que->1 Take two numbers and print which one is greater.

// let num1 = 10;
// let num2 = 20;

// if(num1>num2){
//     console.log(`${num1} is greater than ${num2}`);
// } else {
//     console.log(`${num2} is greater than ${num1}`);
// }



// Que->2 Check whether a number lies between 10 and 50.

// let num = Number(prompt("Enter the number 10 t0 50"));

// if (num>=10 && num<=50){
//     console.log(`yes it is lie in 10 to 50 , number is ${num}`);
// } else{
//     console.log("no it is no lying on this range");
// }




// Que->3 Check whether a password length is greater than 8.


// let pss = "amitkumar 134";

// if (pss.length == 8){
//     console.log("yes iski length: "+pss.length);  
// } else {
//     console.log("No because length is : "+pss.length);  
// }



// Que->4 Check if a person can drive:


// let age = 18;

// if(age>=18){
//     console.log("Person can drive");
    
// } else {
//     console.log("Person cannot drive");
    
// }


// Que->-age > 18
// age = 29
//  let age1 = (age>18)? "true" : "false"
//  console.log(age1);
 
// Que->-has license = true

// Que->1 Check whether a number is divisible by 2, 3, or both.

// let num = 19;

// if (num%2==0 || num%3==0){
//     console.log("yes");
    
// } else {
//     console.log("no");
    
// }



// Que->2 Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.

// const currentHour = new Date().getHours();

// if (currentHour >= 5 && currentHour<12) {
//     console.log(`its a ${currentHour} Good Morning babe`);
// } else if(currentHour >=12 && currentHour <6) {
//     console.log(`its a ${currentHour} Good Afternoon`);
// } else {
//     console.log("Good evening babe");
// }




// Que->3 Find whether a number is a multiple of 10.

// let num = 6;

// if (num%10===0){
//     console.log("yes it is multiple by 10");
    
// } else{
//     console.log("no it is not");
    
// }




// Que->4 Create a simple discount calculator.


// let price = Number(prompt("Enter the price for discount: "));
// let discount;
// if(price>=1000 && price<=5000){
//     discount = price -(price*10)/100;
// } else if(price>5000 && price <=10000){
//     discount = price - (price*20)/100;
// } else {
//     if (price < 1000){
//         discount = price - (price * 5)/100;
//     } else {
//         discount = price - (price * 15)/100;
//     }
    
// }
// console.log(discount);


// Que->5 Check whether a product is in stock.


// Que->6 Calculate final bill after GST.



// ==================== Challenge Questions for Beginners===========

// Que->1 Generate a random OTP of 4 digits.
// Que->2 Reverse a 3-letter string manually.
// Que->3 Find the last character of a string.
// Que->4 Convert a full name into uppercase initials.
// Que->5 Check whether two strings are equal ignoring case sensitivity.
// Que->6 Create a simple login validation system.
// Que->7 Find whether a number is a 2-digit or 3-digit number.
// Que->8 Create a mini ATM balance checker.
// Que->9 Simulate a traffic light system using `switch`.
// Que->1. Build a small marksheet generator using variables and conditionals.





// ----------------- practice session questions -----------------------

// Que1 - Find Expensive Products

// let prices = [100,250,500,150,700]

// let expensive_prod = prices.filter((e) => e>300);
    

// console.log(expensive_prod);


// Que2 - calculate the average marks of all students.

// let marks = [80,90,70,85,95];

// let total = marks.reduce((acc, currValue) => {
//     return acc + currValue
// },0)

// const avg = total/marks.length
// console.log(avg);


// Que3 - Find the number that appears the most

let numbers = [1,2,3,2,4,2,5,1,1,1]
let count = {}


// for(let i=0; i<numbers.length; i++){
//     if (numbers[i] === i){
//         count = i        
//     }
// }

// console.log(count)

for(let i=0; i<numbers.length; i++){
    let num = numbers[i]
    if(count[num]){
        count[num] = count[num] +1
    } else {
        count[num] = 1
    }
}

console.log(count);
