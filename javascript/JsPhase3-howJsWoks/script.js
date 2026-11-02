// first of all when we create the variable , first it happens memory creation then code execution


// let a; // declaration --> reverve the a in memory

// a = 10 // this is intialization --> code execution

// javascript is a syncronous sigle threaded programing language

// let b
// console.log(b); 


//----------------------------------------------------------

// let arr = [10];

// let out = arr.map((e) => {
//     return { value: e };  // it means ye humesha object ke andar valur dega 
// });

// console.log(out);

// ---------------------------------------------------------------

// let arr = [10];

// let out = arr.map((e) => ({
//     value: e                     // let out = arr.map((e) => ({value: e})); i
                                    // iske mtlb ye h
// }));

// console.log(out);



// ----------------------------------------------------

// let arr = [10];

// let out = arr.map((e) => {
//     value: e;
// });

// console.log(out);





// ============= rule ====================
// Normal / explicit return
// arr.map((e) => {
//     return e * 2;
// });

// // Implicit return
// arr.map((e) => e * 2);

// // Explicit object return
// arr.map((e) => {
//     return { value: e };
// });

// // Implicit object return
// arr.map((e) => ({
//     value: e
// }));


// =========================================




// let users = [
//     { name: "amit", city: "agra" },
//     { name: "rahul", city: "delhi" },
//     { name: "rohit", city: "mumbai" }
// ];


// let str = users.map((e)=>{
//     return {
//         name : e.name.toUpperCase(),
//         city : e.city.at().toUpperCase() + e.city.slice(1)
//     }
// })

// console.log(str);


// [
//     {
//         name: "AMIT",
//         city: "Agra"
//     },
//     {
//         name: "RAHUL",
//         city: "Delhi"
//     },
//     {
//         name: "ROHIT",
//         city: "Mumbai"
//     }
// ]


//================================

// let nums = [10, 20, 30, 40];

// let num2 = nums.map((e)=>{
//     return {
//         number : e,
//         double : e+e
//     }
// })

// console.log(num2);


// let marks = [45, 80, 32, 90, 60];

// let marks1 = marks.map((e)=>{
//     return e>50? "Pass":"Fail"
// })

// console.log(marks1);



// let products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Phone", price: 20000 },
//     { name: "Tablet", price: 30000 }
// ];

// let added_prods = products.map((e)=>{
//     return {
//         ...e,
//         category : e.price>30000 ? "Expensive" : "Budget"
//     }
// })

// console.log(added_prods);



// let names = ["amit", "rahul", "rohit"];


// let names1 = names.map((e)=>{
//     return {
//         origin : e,
//         reversed : e.split("").reverse().join("")
//     }
// })

// console.log(names1);

// Q21 — Add index to each value

// let nums = [10, 20, 30];


// let added_index = nums.map((e,i)=>{
//     return {
//         value:e,
//         index:i
//     }
// })

// console.log(added_index);

// Q22 — Add position to objects

// let users = [
//     { name: "Amit" },
//     { name: "Rahul" },
//     { name: "Rohit" }
// ];

// let added_pos = users.map((e,i)=>{
//     return {
//         ...e,
//         position:i+1
//     }
// })

// console.log(added_pos);


// Q23 — Convert to boolean

// let values = [0, 1, "", "Hello", null];


//Q24 — Find string length with index
// let words = ["cat", "javascript", "hi"];

// let words_1 = words.map((e,i)=>{
//     return {
//         words:e,
//         length : e.length,
//         index : i
//     }
// })

// console.log(words_1);


// Q25 — Add status based on age

// let people = [
//     { name: "Amit", age: 22 },
//     { name: "Rahul", age: 16 },
//     { name: "Rohit", age: 18 }
// ];

// let people1 =people.map((e)=>{
//     return {
//         ...e,
//         status: e.age>=18 ? "Adult":"Minor"
//     }
// })
// console.log(people1);


// Q26 — Calculate discounted prices

// let prices = [100, 250, 500];

// let dis_rs = prices.map((e)=>{
//     return e - e*.2
// })
// console.log(dis_rs);


// Q27 — Reverse each word
// let words = ["hello", "world", "javascript"];

// let re = words.map((e)=>{
//     return e.split("").reverse().join("")
// })

// console.log(re);


// Q28 — Nested array 😈

// let numbers = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// let num = numbers.map((e)=>{
//     return e.map((i)=>(i*2))
// })

// console.log(num);


// Q29 — Add full name

// let users = [
//     { firstName: "Amit", lastName: "Kumar" },
//     { firstName: "Rahul", lastName: "Sharma" }
// ];

// let nemas = users.map((e)=>{
//     return {
//         ...e,
//         fullName : e.firstName + e.lastName
//     }
// })

// console.log(nemas);


// let students = [
//     { name: "Amit", marks: 80 },
//     { name: "Rahul", marks: 35 },
//     { name: "Rohit", marks: 65 },
//     { name: "Priya", marks: 90 }
// ];

// let studens_q = students.map((e)=>{
//     return {
//         ...e,
//         name : e.name.toUpperCase(),
//         result : e.marks>=40 ? "Pass" : "Fail"
//     }
// })

// console.log(studens_q);


// let arr = [10, 15, 20, 25, 30];

// let result = arr.filter((e) => {
//     return e >= 20;
// });

// console.log(result);

// Q- find those number which is greater than 20

// let nums = [10, 15, 20, 25, 30, 35];

// let n = nums.filter((e)=>{
//     return e>20
// })

// console.log(n);


// let users = [
//     { name: "Amit", age: 22 },
//     { name: "Rahul", age: 16 },
//     { name: "Rohit", age: 25 },
//     { name: "Priya", age: 17 }
// ];

// let Adult = users.filter((e)=>{
//     return e.age >
// })

// console.log(Adult);


// function add(a) {
//     return function(b) {
//         return a + b;
//     };
// }

// console.log(add(2)(3));


// added = add(2)

// console.log(added(3))


// function outer() {
//     let x = 10;

//     return function inner() {
//         return x;
//     };
// }

// const fn = outer();
// console.log(fn());

// ========================================================================



// Promise.resolve().then(() => console.log("Promise"));

// setTimeout(() => console.log("Timeout"), 0);

// async function test() {
//     return 50;
// }

// let result = test();

// console.log(result);


// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("3");
// });

// async function test() {
//     console.log("4");

//     await Promise.resolve();

//     console.log("5");
// }

// test();

// console.log("6");


// Promise.all([
//     Promise.resolve("A"),
//     Promise.resolve("B")
// ]).then(console.log);

// Promise.race([
//     Promise.reject("Error"),
//     Promise.resolve("Success")
// ])
//     .then(console.log)
//     .catch(console.log);

// Promise.any([
//     Promise.reject("Error"),
//     Promise.resolve("Success")
// ])
//     .then(console.log)
//     .catch(console.log);


// Promise.allSettled([
//     Promise.resolve(10),
//     Promise.reject("Failed")
// ]).then((results) => {
//     console.log(results[1].status);
// });


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//         console.log(json.title);
//         console.log(json.completed);
        
//     })



// async function getTodos() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/todos"
//         );

//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }

//         const todos = await response.json();

//         // --------------
//         let get = todos.slice(0, 5).map((e)=>{
//             return e.title
//         })

//         console.log(get);
        
//         // --------------

//         // console.log(todos);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// getTodos();



// async function getTodo() {

//     // 1. fetch karo

//     try {
//         // 2. response ko await karo
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/todos"
//         )

//         if(!response.ok){
//             throw new Error(`Error status: ${response.status}`)
//         }

//         // 3. JSON me convert karo
//         const todos  = await response.json();

//         let titles = todos.map((e) => e.title)

//         // 4. title print karo
//         console.log(titles);
        
//     } catch (error){
//         console.log(error.message)
//     }

// }

// getTodo();



async function gettruetodos() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        )

        if(!response.ok){
            throw new Error(`Error status: ${response.status}`)
        }

        const todos = await response.json()

        const completed = todos.slice(0,50).filter(e => e.completed).map((e) => e.title);
        console.log(completed);
            
    } catch (error) {
        console.log(error.message);    
    } 
}

