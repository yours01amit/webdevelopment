// // 


// const inp = document.querySelector("#todoInput");
// const todoContainer = document.querySelector("#todoContainer");
// const btn = document.querySelector("#addBtn");

// const addTodo = () => {
//     const value = inp.value.trim();

//     if (value === "") {
//         console.log("Please enter a todo");
//         return;
//     }

//     const p = document.createElement("p");
//     p.textContent = value;

//     const todoItem = document.createElement("div");

//     const delbtn = document.createElement("button");
//     delbtn.textContent = "Delete";

//     delbtn.classList.add("delete-btn");

//     const completeBtn = document.createElement("button");
//     completeBtn.textContent = "Complete";

//     completeBtn.classList.add("complete-btn");

//     todoItem.append(p, delbtn, completeBtn);

//     todoContainer.append(todoItem);

//     inp.value = "";
// };

// btn.addEventListener("click", addTodo);

// inp.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         addTodo();
//     }
// });


// // ⭐ Event Delegation
// todoContainer.addEventListener("click", (e) => {

//     if (e.target.classList.contains("delete-btn")) {

//         e.target.parentElement.remove();

//     }
// });




// ---------------------------------------------------------------------

const input = document.querySelector("#username");
const form = document.querySelector("#loginForm");

const btn = document.querySelector("button");


// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log("Form submitted successfully");
    
// })


// input.addEventListener("input", (e) => {
//     console.log(e.target.value);
// });

input.addEventListener("change", (e) => {
    console.log(e.target.value);
});