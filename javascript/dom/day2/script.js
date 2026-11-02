// Nodelist --> point --> Tree --> inside a tree, everything is a node

// HTML Collection --> point --> HTML elements --> only html

// textContent --> only changes or update text
// h1.textContent = "i am updated" 

// innerText -->  h1.innerText = "i am <i> italic </>"  ye jesa h vesa hi rhega isme ye italic m convert hokr nhi ayega 

// innerHTML --> h1.innerHTML = "i am <i> italic </>" isme ye tega jes behave karega or italic m change hokr ayega 


// const main = document.querySelector("main")

// console.log(main.childNodes);

// console.log(main.children);



// const h1 = document.querySelector("h1")

// h1.innerText = "i am updated via dom js";

// h1.innerHTML = "i am updated via dom js";

// h1.textContent = "i am updated via dom js"


// const body = document.querySelector("body")
// const h1 = document.querySelector("#head1") // selecting by id
// const div = document.querySelector("#div")

// h1.textContent = "hey i am changed"

// // body.style.backgroundColor = "black";

// h1.style.color = "blue";
// h1.style.fontSize = "50px"
// h1.style.fontStyle = "italic"


// Q -> is my h1 has some class?

// const isClass = h1.classList.contains("heading") // true or false

// console.log(isClass);


// Q --> i have to change or replace my class

// h1.classList.replace("heading","newhead")


// Q --> i have to toggle class

// h1.classList.toggle("heading") // agr class hogi toh hta dega , or agr nhi hogi toh lgga dega 


// div.classList.add("box")

//-------------------------------------------------------------------
// -------------      let's meke a bulb     ---------------



const bulb = document.querySelector(".bulb")
const btn = document.querySelector("button")

// let flag = true

// btn.addEventListener("click", () => {
//     if(flag){
//         bulb.style.backgroundColor = "yellow";
//         btn.textContent = "Off"
//         flag = false
//     } else {
//         bulb.style.backgroundColor = "transparent";
//         btn.textContent = "On"
//         flag = true
//     }
    
// })

// btn.addEventListener("click", () => {
//     if (bulb.classList.toggle("lightup")) {
//         btn.textContent = "Off";
//     } else {
//         btn.textContent = "On"
//     }
    
// })

