//  -------------------- Part 1 — Functions Basics (1–20) --------------------

//                        --- Beginner Level ---

// Que-> 1. Create a function named `greet` that prints `"Hello World"`.

// function greet(){
//     console.log("hello world")
// }
// greet()

// =================== function with fat arrow

// let namste = (()=>{
//     console.log("hello ji");
    
// })

// namste()

// ==================== function expression

// let greet = function(){
//     console.log("heelo ji");
    
// }

// greet()


//--------------------------------------------------------------------------------

// Que-> 2. Create a function `add(a, b)` that returns the sum.


// function add(a,b){
//     return a+b
// }

// console.log(add(10,20))


// --------------------------------------------------------------------------------

// Que-> 3. Write a function to calculate the square of a number.

// function sqre(a){
//     return a*a
// }

// console.log((sqre(10)));

// let sqr = (function(a){
//     return a*a
// })

// console.log(sqr(10));
// --------------------------------------------------------------------------------

// Que-> 4. Create a function that checks whether a number is even or odd.

// function eve_n_odd(n){
//     if (n%2==0){
//         return `${n} is Even`
//     } else {
//         return `${n} is Odd`
//     }
// }

// console.log(eve_n_odd(11));

//------------------------------------------------------------------------------

// Que-> 5. Write a function that converts Celsius to Fahrenheit.

// let conv_deg = ((c)=>{
//     F=(c*1.8)
//     return `${c} celsius is ${F} Fahrenheit`
// })

// console.log(conv_deg(45));

//------------------------------------------------------------------------------

// Que-> 6. Create a function with default parameter `"Guest"`.

// function greet(c="Guest"){
//     console.log("namste",c,"ji");
    
// }

// greet("amit")

//------------------------------------------------------------------------------

// Que-> 7. Write a function that returns the greater of two numbers.

// let check_greter_smaller = (a,b)=>{
//     if (a>b){
//         console.log(`${a} is greate than ${b}`)
//     } else {
//         console.log(`${b} is greater than ${a}`)
//     }
// }

// check_greter_smaller(40,20)

// ------------------------------------------------------------------------------
// Que-> 8. Create a function to calculate area of rectangle.

// let Cal_AreaOfRect = (w,l)=>{
//     A = w*l
//     return A
// }

// console.log(Cal_AreaOfRect(20,20));

//====================================================================================

// Que-> 9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.

// let Check_Adults = (age)=>{
//     if (age >= 18){
//         return "Adult"
//     } else {
//         return "Minor"
//     }
// }

// console.log(Check_Adults(12));

//==================================================================================

// Que-> 10. Create a function to reverse a string.

// let Reverse_string = (str)=>{
//     str2 = str.split("").reverse().join("")
//     return str2
// }

// console.log(Reverse_string("amit"));


//======================================================================================

// ------------------------------ Intermediate Level ------------------------------

// Que1. Write a function expression for multiplication.

// let multi = (a,b)=>{
//     return a * b
// }

// console.log(multi(10,20));

//------------------------------------------------------------------------------------

// Que2. Convert a normal function into an arrow function.

// function add(a, b) {
//     return a + b;
// }

// const add = (a, b) => {
//     return a + b;
// };

//------------------------------------------------------------------------------------

// Que3. Create a function that accepts unlimited numbers and returns their sum using rest operator.

// let addOnWithRestOp = (...nums)=>{
//     return nums.reduce((total,current)=> total + current,0)}

// console.log((addOnWithRestOp(1,2,3,4,5)));


// Que4. Write a function that counts vowels in a string.

// function CountVowel(str){
//     let count = 0;

//     for(let char of str.toLowerCase()){
//         if (
//     char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "u"
//         ) {
//             count++;
//         }
//     }
//     return count;
//   }


// console.log(CountVowel("Amitkumar"))


// -----------------------------------------------------------------------------------


// Que5. Create a function that checks if a string is palindrome.

// let palindrome = (str)=>{
//     reverse_str = str.split("").reverse().join("")
//     return str === reverse_str
// }

// console.log(palindrome("level"));

//-------------------------------------------------------------------------------------

// Que6. Write a callback function example using `setTimeout`.

// console.log("Start");

// setTimeout(() => {
//     console.log("Hello after 3 seconds!");
// }, 3000);

// console.log("End");

//-------------------------------------------------------------------------------------

// Que7. Create a higher-order function that executes another function twice.

// function hello() {
//     console.log("Hello");
// }

// function executeTwice(fn) {
//     console.log("hii");
    
//     fn();
//     fn();
// }

// executeTwice(hello);


// Que8. Write a function that returns another function.

// function hello(){
//     return "hello"
// }

// function hii(fn){
//     return hello()
// }

// a = hii()


// function multiplyBy(x) {
//     return function(y) {
//         return x * y;
//     };
// }

// const double = multiplyBy(2);

// console.log(double(5)); // 10
// console.log(double(8)); // 16


// Que9. Create a pure function for subtraction.

// function subs(a,b){
//     return a-b
// }

// a = subs(10,5)

// console.log(a);

//-------------------------------------------------------------------------------------

// Que10. Create an impure function using global variable modification.

// let count = 0;

// function inceread(){
//     count++;
//     return count
// }

// console.log(inceread());
// console.log(inceread());
// console.log(inceread());
// console.log(inceread());

// ============ 2nd type ================

// let bonus = 10;

// function addBonus(salary) {
//     bonus++;
//     return salary + bonus;
// }

// console.log(addBonus(100)); // 111
// console.log(addBonus(100)); // 112
// console.log(addBonus(100)); // 113


//================================================================================

// ------------------------ Part 2 — Advanced Functions ------------------------

// Que1. Write a recursive function for factorial.

// function factorial(n){ 
//     if (n<=1){
//         return 1
//     } else {
//         return n * factorial(n-1)
//     }
    
// }

// console.log(factorial(5));



// Que2. Write recursive Fibonacci function.

// function Fibonacci(n){
//     if (n%n==0 && n%1==0){
//         return `this is fibonacci ${n}`
//     } else {
//         return `this is not fibonacci ${n}`
//     }
// }

// console.log(Fibonacci(10))


// function fibonacci(n){
//     if(n===0){
//         return 0
//     }
//     if (n===1){
//         return 1
//     } 
//     else {
//         return fibonacci(n-1) + fibonacci(n-2)
//     }
        
// }

// for (let i=0; i<8; i++)
//         console.log(fibonacci(i));



// Que3. Create a function that finds power using recursion.




// Que4. Create an IIFE that prints `"Executed"`.

// (function(){
//     console.log("hii");
// })()


// Que5. Write a function that memoizes factorial calculation.


// Que6. Create a closure counter function.

// function CreateCounter(){
//     let count = 0

//     return function(){
//         count++
//         return count
//     }
// }

// counter = CreateCounter()

// console.log(counter());
// console.log(counter());
// console.log(counter());

//------------------------------------------------------------------------------------

// Que7. Write a function currying example for addition.

// function add(a){
//     return function(b){
//         return a + b
//     }
// }

// console.log(add(10)(20))

// function mul(a){
    
//     return function(b){
//         return a + b
//     }
// }

// console.log(mul(10)(20));


// another exampe of adding 18% GST

// function addGST(gst){

//     return function(price){
//         return price + (price * gst/100)
//     }
// }

// // console.log(addGST(18)(1000)); --> output : 1180

// const gst_18 = addGST(18)

// console.log(gst_18(1000)); //---> output : 1180
// console.log(gst_18(2000)); //---> output : 2360
// console.log(gst_18(3000)); //---> output : 3540



// another question --> multiply(2)(3)(4)

// function mult(a){

//     return function(b){
//         return function(c){
//             return a * b * c
//         }
//     }   
// }

// console.log(mult(2)(3)(4));


// Que8. Create debounce function logic.

// Que9. Create throttle function logic.
// Que10. Write a function that executes only once.
// Que11. Create custom implementation of `map`.
// Que12. Create custom implementation of `filter`.
// Que13. Create custom implementation of `reduce`.
// Que14. Create custom `forEach`.
// Que15. Explain output:

// function test() {
//     return;
//     console.log("Hello");
// }
// console.log(test());