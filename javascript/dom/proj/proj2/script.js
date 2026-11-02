const form = document.querySelector('form')
const inp1 = document.querySelector("#name")
const inp2 = document.querySelector("#email")
const users = document.querySelector(".users")
const url = document.querySelector("#url")

const edit = document.querySelector("#edit")
const del = document.querySelector("#del")



let usersData = [
    {
        id: 1,
        name: "Aarav Sharma",
        email: "aarav.sharma@example.com",
        image: "https://i.pravatar.cc/150?img=1",
        dob: "1998-04-12"
    },
    {
        id: 2,
        name: "Priya Singh",
        email: "priya.singh@example.com",
        image: "https://i.pravatar.cc/150?img=2",
        dob: "1999-08-25"
    },
    {
        id: 3,
        name: "Rohan Verma",
        email: "rohan.verma@example.com",
        image: "https://i.pravatar.cc/150?img=3",
        dob: "1997-01-18"
    },
    
    
];

let ui = (() => {
    users.innerHTML = ""
    usersData.forEach((e, index) => {
        users.innerHTML += `<div class="user_card">
            <div class="img_box">
                <img src="${e.image}" 
                alt="image here">
            </div>
            <div class="text">
                <h3>Name ${e.name}</h3>
                <p>Email ${e.email}</p>
            </div>
            <div class="actions">
                <button id="edit">Edit</button>
                <button onclick="delteCard(${index})" id="del">Delete</button>
            </div>

        </div>`
    })
})
ui()

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let name = inp1.value
    let email = inp2.value
    let image = url.value

    if (name.trim() === "" && email.trim() === "" && image.trim() === "") return;

    usersData.push({
        name,
        email,
        image,
    })

    ui()

    console.log(usersData);
    
    form.reset()

})

let delteCard = (index) => {
    usersData.splice(index,1)
        
    ui()
}

let editCard = () => {
}