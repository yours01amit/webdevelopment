// Que -  Find expensive products , expensive prod are greater than 300

// let prices= [100,250,500,150,700];

// let expensive_prod = prices.filter((e) => e > 300)

// console.log(expensive_prod);

// Que2 - find the average of

// let marks = [80,90,70,85,95];

// let total = marks.reduce((acc , currValue) => {
//     return acc + currValue
// })

// const avg = total/marks.length

// console.log(avg);

// que3 - find all most frequent number

// let numbers= [1,2,3,2,4,2,5,1,1,1]

// Que4 -update this obj with age 21

// let user= {  name:"Ritik",  age:20};

// user.age = 21;

// console.log(user);

// Que5 Print User Information

// let user= {  name:"Ritik",  age:20,  city:"Bhopal"};

// Object.values(user).forEach((e)=> {
//     console.log(e);
// });

// Que6 - highest paid employee

// let employees= {  aman:25000,  ritik:50000, priya:45000};

// let highestSalary = 0
// let highestEmployeName = ""

// for(let employee in employees){
//     if (employees[employee] > highestSalary){
//         highestSalary = employees[employee]
//         highestEmployeName = employee
//     }

// }

// console.log(highestEmployeName,highestSalary);

// Que7 -> craate greeting function

// function greet(name){
//     console.log("Hello", name)
// }

// greet("Amit")

// Que-8 dicounted calculator

// function calculateDiscount(rate){
//     let disPrice = rate - rate*0.1
//     console.log(disPrice);

// }

// calculateDiscount(500)

// Que9 - dynamic sum function

// const dynamicSumFunc = ((...number) => {
//     return number.reduce((acc, currValue) => {
//         return acc + currValue
//     },0)
// })

// console.log(dynamicSumFunc(1,2,3,4,5,6));

// Que10 Find Adult Users

// let users = [
//     { name: "Ritik", age: 20 },
//     { name: "Aman", age: 16 },
//     { name: "Priya", age: 25 }
// ];

// let adultUser = users.filter((user) => {
//     return user.age >= 18;
// })

// console.log(adultUser);

// Que11 Shopping Cart Total

// let cart = [
//   { name: "Mouse", price: 500, qty: 2 },
//   { name: "Keyboard", price: 1000, qty: 1 },
//   { name: "Monitor", price: 10000, qty: 1 },
// ];

// let totalBill = cart.reduce((total, item) => {
//     return total + (item.price * item.qty)

// },0)

// console.log(totalBill);

// que12 - Student Grade Report

// let students = [
//   { name: "Ritik", marks: [80, 90, 85] },
//   { name: "Aman", marks: [50, 40, 60] },
// ];


// let studentGrades = students.map((student) => {
//     let totMarks = student.marks.reduce((acc, currVal) => acc + currVal, 0)
//     let avg = totMarks / student.marks.length

//     let grade;

//     if(avg >= 80){
//         grade = "A";
//     } else if (avg >= 60) {
//         grade = "B"
//     } else if (avg >= 40){
//         grade = "C"
//     } else {
//         grade = "F"
//     }

//     return {
//         name : student.name,
//         avg : Math.round(avg),
//         grade: grade
//     };
    
// })

// console.log(studentGrades);



// let books = []
// let nextId = 1

// adding books
// let addBook = ((title, author) => {
//     let book = {
//         id: nextId,
//         title,
//         author,
//         is_borrowed: false,
//     }

//     books.push(book)
//     nextId++
// })

//           ----------------  borrowed  -------------------

// let borrowBook = ((id) => {
//     let book = books.find((book) => {
//         return book.id === id;
//     })
    
//     if(!book){
//         console.log("Book not found");
//         return;        
//     } 

//     if(book.is_borrowed === true){
//         console.log("Book is already borrowed");
//         return;
//     }

//     book.is_borrowed = true;

//     console.log(`${book.title} borrows succesfully`);
    
// })


//           ------------  returning  book ----------------

// let returnBook = ((id) => {
//     let book = books.find((book) => {
//         return book.id === id;
//     })

//     if(!book) {
//         console.log("Book not found");
//     }

//     if(book.is_borrowed === false){
//         console.log("book is already available");
//         return;        
//     }

//     book.is_borrowed = true;

//     console.log(`${book.title} returned successfully`);
// })



//    ---------------  SHOW AVAILABLE BOOKS  ----------------

// let showAvalableBooks = (() => {
//     let availableBooks = books.filter((book) => {
//         return book.is_borrowed === false;
//     });
    
//     console.log(availableBooks);
    
// })

// addBook("musafir Cafe", "prakash dube")
// addBook("do epic shit", "ankur wariko")
// addBook("Atomic Habits", "James Clear");

// console.log("All avalable books",books);

// borrow a book

// borrowBook(1)

// returnBook(1)

// console.log("After returning a book");

// console.log(books);

// showAvalableBooks()


// ------------------------------------------------------

// let books = [];

// let nextId = 1;

// const addBook = ((bookTitle, authorName) => {
//     let book = {
//         id: nextId,
//         bookTitle,
//         authorName,
//         is_borrowed: false,
//     }

//     books.push(book)
//     nextId++;
//     console.log(book);
    
// })

// const borrowBook = (id) => {
//     let book = books.find((book) => {
//         return book.id = id;
//     })

//     if(!book){
//         console.log("book not found");
//         return;
//     } if(book.is_borrowed === false){
//         console.log("book is already borrowed");
//         return
//     }
//     book.is_borrowed = true;
//     console.log(`${book.bookTitle} borrowed successfully`);
// }

// const returnBook = (id) => {
//     let book = books.find((book) => {
//         return book.id = id;
//     })

//     if(!book){
//         console.log("Book not found");
//         return;        
//     } if(book.is_borrowed === false){
//         console.log("book is already retuned");
//         return;
//     }

//     book.is_borrowed = true;
//     console.log(`${book.bookTitle} return successfully`);
// }


// const showAvalableBooks = (() => {
//     let availableBooks = books.filter((book) => {
//         return book.is_borrowed === false;
//     })

//     console.log(availableBooks);
// })        


// addBook("musafir cafe", "prakash dubey")
// addBook("ret ki machli", "prakash dubey")
// addBook("gunaho ka devta", "dharmveer bharti")

// borrowBook(3);

// returnBook(1)

// showAvalableBooks()

// addBook("gunaho ka devta", "dharmveer bharti")




//         ===================  OOPs  =====================


//Que1 -> Understanding this in an object, 

// const user = {
//     name: "Ritik",
//     greet() {
//         console.log(this.name);
        
//     }
// };

// user.greet();  

// Que2 - Default Binding -->
// What will be printed?
// Also explain the difference between:
// Browser
// Node.js
// --Strict Mode



// function show() {
// console.log(this);
// }
// show();


// let product = {
//     name: "Laptop",
//     price: 55000,
//     brand: "HP",
//     stock: 10
// };

// console.log(Object.keys(product))

// let employees = {
//     aman: 25000,
//     ritik: 50000,
//     priya: 45000,
//     rohan: 60000
// };

// l

// let products = [
    // { name: "Laptop", price: 55000 },
    // { name: "Phone", price: 30000 },
    // { name: "Tablet", price: 20000 },
    // { name: "Monitor", price: 15000 }
// ];


// let highestPrice = 0;
// let highestProduct = "";

// for (let  element of products) {
//     if(element.price > highestPrice) {
//         highestPrice = element.price
//         highestProduct = element.name
//     }
// }

// console.log(highestProduct,highestPrice );


// const person = {
//     name: "Amit",
//     age: 22,

//     introduce() {
//         console.log(this.name);
//         console.log(this.age);
//     }
// };

// person.introduce();


// async js 

// function greet(name) {
//     console.log("Hello " + name);
// }

// function welcome(callback) {
//     callback("Ritik");
// }

// welcome(greet);

// let count = 5;

// const timer = setInterval(() => {
//     console.log(count);
//     count--;

//     if(count === 0){
//         clearInterval(timer)
//         console.log("done");
        
//     }
    
// },1000);

// function fetchUser(callback) {
//     console.log("Fetching User...");

//     setTimeout(() => {
//         const user = {
//             id: 1,
//             name: "Ritik"
//         };

//         callback(user);
//     }, 2000);
// }

// fetchUser((user) => {
//     console.log(user);
// });


// ==============================================================================



// loop
// for while do-while

// 1 - 22

// for(var i=1; i<=23; i++){
//     console.log(i)
// }

// 200 - 100

for(let i=200; i>99; i--){
    console.log(i);
    
}