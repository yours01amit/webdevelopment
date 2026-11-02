const createBtn = document.querySelector("#create")
const formCard = document.querySelector(".form")
const closeBtn = document.querySelector("#close")

const form = document.querySelector("form")

let productDiv = document.querySelector(".products")

const productArr = []

let updateIndex = null;


let ui = () => {
    productDiv.innerHTML = ""
    productArr.forEach((e) => {
        productDiv.innerHTML += `<div class="product-card">

                <div class="img">
                    <img src="${e.image}" alt="image here">
                </div>

                <div class="text">
                    <h3>${e.productName}</h3>
                    <p>${e.Description}</p>
                    <p>${e.price}</p>
                </div>

                <div class="btns">
                    <button onclick="updateProduct('${e.productName}')" id="update">Update</button>
                    <button id="del">Delete</button>
                </div>
            </div>`
    })
}



createBtn.addEventListener('click', () => {
    formCard.style.display = "flex"
    
})


closeBtn.addEventListener("click", () => {
    formCard.style.display = "none"
})


form.addEventListener("submit", (e) => {
    e.preventDefault()

    let productName  = e.target[0].value
    let Description = e.target[1].value
    let price = e.target[2].value
    let image = e.target[3].value
    
    if(productName.trim() === "" || Description.trim() === "" || price.trim() === "" /*|| image.trim() === "" */){
        alert("please fill all the fiels")
        return;
    }
    
    let obj = {
        productName,
        Description,
        price,
        image
    };
    

    if(updateIndex != null){
        productArr[updateIndex] = obj
        updateIndex = null;
    } else {
        productArr.push(obj)
    }

    ui()
    // console.log(productArr);

    form.reset()

    formCard.style.display = "none"
    
})


const updateProduct = (e) => {
    formCard.style.display = "flex";
    let product = productArr.find((elem) => elem.productName === e);
    updateIndex = productArr.findIndex((elem) => elem.productName === e)
    
    form[0].value = product.productName
    form[1].value = product.Description
    form[2].value = product.price
    form[3].value = product.image
    
}


