
// Data Types ---> Primitive AND Non-Primitive/Reference

// let arr  = [50,50,12,34,55,56]

// console.log(arr);


// find the value of last index 

// var arr = [1,3,4,5,7,8,7,4,7]

// console.log(arr[arr.length - 1]);


// push -- add the elements in the last of array

// let arr = [12,3,4,5,6,7]

// arr.push(30)
// arr.push(23,24)
// arr.push([1,2,3,4,5]) // add an array 

// console.log(arr);


// pop -- remove the last elements from the array


// let arr = [12,3,4,5,6,7]

// arr.pop()
// arr.pop()

// console.log(arr);


// shift -- remove the first element from the array

// let arr = [1,4,5,6,8]

// arr.shift()
// arr.shift()
// arr.shift()

// console.log(arr);


// unshift -- add elements in the first

// let arr = [3,5,6,7,8]

// arr.unshift(1)
// arr.unshift(2,4)
// arr.unshift([6,4])


// console.log(arr);


// ans this question
// let arr = [15,45,78,90,78]

// arr.shift()
// arr.shift()
// arr.unshift(99)

// arr.pop()
// arr.pop()

// arr.push(89) // 1, 67, 99, 78, 89, 89

// arr.unshift(67)
// arr.push(89)

// arr.unshift(1)


// console.log(arr[3]);



// let arr = [11,22,33,44,55]

// splice se hum value remove bhi kr skte h or add bhi kar skte h 
// arr.splice(2,1)  // remove the 1 value of 2nd index

// console.log(arr);

// arr.splice(1,2)  // remove the 2 values of 1st index

// console.log(arr);


// arr.splice(1,0,99) // add the 99 value at fist index
// arr.splice(1,0,99,30,40) // add the 99, 30, 40 values at fist index

// console.log(arr);



// let arr = ['aman', 'bijoy', 'chandu', 'dev', 'ekansh', 'farukh']

// arr.splice(3,2,'nandu', 'swaraj')

// console.log(arr);



// let arr = [10,20,30,40]

// arr[10] = 100

// console.log(arr);

//  let arr = [10,20,30,40]



// let's do a question

// let arr = [
//     [10,20,30,40],
//     [11,22,33,44],
//     [99,88,77,66]
// ]

// console.log(arr[2][2] + arr[0][1] + arr.length);


// -------------------  this is forLoop  ---------------------------------
// var arr  = [10,20,30,40]

// for (let a=0;a<arr.length;a++){
//     console.log(arr[a]);
    
// }



// ---------------------  this is forOfLoop ---------------------

// var arr  = [10,20,30,40]

// for(value of arr){
//     console.log(value);
    
// }





// var arr = []

// for (a=0; a<=10; a++){

//     if (a%2==0){
//         arr.push(a);
//     }
    
// }

// console.log(arr);


// slice -- this is non-mutable , ye original array m koi change nhi krta h 

// var arr = [10,20,30,40]

// var arr2 = arr.slice(1,4)

// console.log(arr);
// console.log(arr2);


// var a  = [10,20,30,40,20,30]

// var b = [11,22,33,44]

// var c = a.concat(b)
// var c = a.concat(b) it concate the two arrays

// console.log(c);

// console.log(a.includes(20)) it check the value , array m hai ya nhi 


// var a  = [10,20,30,40,20,30]

// console.log(a.indexOf(30)); ye index btata hai kisi value ki, or agr value exits nhi krti toh ye return m -1 deta h


// var str = "amit kumar";

// console.log(str.split(''));

// var arr = ["aman", "bijoy", "chandu"]

// console.log(arr.join(","));



// forEach ---> 

// let arr = [10,20,30,40,50]


// arr.forEach(function(e){
    //     console.log("hii",e);
    // })
    
    
    // arr.forEach((e,idx)=>{
        //     console.log("hii",e,idx);
        
        // })
        
        

// i want to sum of this array

// let arr = [10,20,30,40,50]
// var sum = 0;

// arr.forEach((e)=>{
//     sum = sum + e
    
// })

// console.log(sum);



//  <----------------------------------------------------------------------------------->

// let arr = [10,20,30]

// arr.forEach((e,a) => {
//     console.log(e,a);
    
// })

// return a square arr

// let arr = [10,20,30,40,50]


// arr.forEach((e)=>{
    //     console.log(e*e);
    
    // })
    
    


//    NOTE ->  1 forEach kuch return nhi krta h
//             2 map return krta h values 




// let arr = [10,20,30,40,50]

// let arr2 = arr.map((e)=>{
//     return e*e
    
// })

// console.log(arr2);

// another type to use this 

// function another(x){
//     return x*x
// }

// arr2 = arr.map(another)

// console.log(arr2);




// let arr = [10,20,30,40]

// arr2 = arr.filter((e)=>{
//     return e
// })

// console.log(arr2);



        
// let arr = [11,22,33,44]

// let arr2 = arr.map((e)=>{
//     return e*2
// })


// console.log(arr2);


// filter negative values


// let arr = [5,-9,2,-4,33,-8]


// let arr2 = arr.filter((e)=>{
//     return e>0
// })

// console.log(arr2);



// let marks = [56,22,90,51,88,93,15]

// let final_marks = marks.filter((e)=>{

//     return e>33
// })

// console.log(final_marks);


// let arr = ['Aman','basundi','chintu','dev']

// iteration or read ---------------------- forEach-------------------
// console.log("for iteration only it do no return any value");

// arr.forEach(function (e){
//     console.log(e);
    
// })


// ------------------ transformation - map ----------------------


// let arr = ['Aman','basundi','chintu','dev']

// let arr2 = arr.map((e)=>{
//     return e.substring(1,3)
// })

// console.log(arr2);


// filter ----------------------

// let arr = ['Aman','basundi','chintu','dev']


// let out = arr.filter((e)=>{
//     return e.includes("a")
// })

// console.log(out);



//  let arr = ["Amit","kunal", "shivam", "shukla","nandni"]

//  let arr2 = arr.filter((e)=>{
//     return e.includes('a')
//  })


// console.log(arr2);



// ============ reduce =========  ==========  ==========  ===========  =========
// 


// let arr = [10,20,30,40]

// let sum = arr.reduce((acc,val)=>{
//     return acc+val
    
// })

// console.log(sum);


// let arr = [10,20,30,40]


// let max = arr.reduce((acc,val)=>{
//     if (val > acc){
//         return val
//     }
//     return val
    
// })

// console.log(max);



// please find the max value

// let arr = [32,98,67,350,20,12]

// let out = arr.reduce((acc,val)=>{
//     if (acc>val){
//         return acc
//     }
//     return val
// },0)

// console.log(out);



// ===========  ==============  find ==== == ==== ===== == ==== == =


// let arr = ['raja','aman','deepak','virat']


// let n = [1,2,4,5,6,7,8]

// let out = arr.find(e=> e == 'virat')


// console.log(out);



// =========================================================================================================



const arr = [10,30,40,50,90,100]

// let filter_data = arr.filter((e) => {
//      return e>45;
// })

// console.log(filter_data)


// arr.filtering = function(compare){
//     for(let num of this){
//         console.log(compare(num))
//     }
// }

// console.log(arr.filtering);


const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 29.99,
    inStock: true,
  },
  { id: 2, name: "Yoga Mat", category: "Fitness", price: 45.0, inStock: true },
  {
    id: 3,
    name: "Coffee Maker",
    category: "Appliances",
    price: 89.99,
    inStock: false,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 59.99,
    inStock: true,
  },
  {
    id: 5,
    name: "Running Shoes",
    category: "Fitness",
    price: 120.0,
    inStock: true,
  },
  {
    id: 6,
    name: "Blender",
    category: "Appliances",
    price: 35.5,
    inStock: true,
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 110.0,
    inStock: false,
  },
  {
    id: 8,
    name: "Water Bottle",
    category: "Fitness",
    price: 18.99,
    inStock: true,
  },
  {
    id: 9,
    name: "Toaster",
    category: "Appliances",
    price: 24.99,
    inStock: true,
  },
  {
    id: 10,
    name: "4K Monitor",
    category: "Electronics",
    price: 299.99,
    inStock: true,
  },
  {
    id: 11,
    name: "Dumbbells (Set)",
    category: "Fitness",
    price: 65.0,
    inStock: false,
  },
  {
    id: 12,
    name: "Air Fryer",
    category: "Appliances",
    price: 149.99,
    inStock: true,
  },
  {
    id: 13,
    name: "Gaming Headset",
    category: "Electronics",
    price: 79.99,
    inStock: true,
  },
  {
    id: 14,
    name: "Resistance Bands",
    category: "Fitness",
    price: 15.25,
    inStock: true,
  },
  {
    id: 15,
    name: "Microwave Oven",
    category: "Appliances",
    price: 115.0,
    inStock: false,
  },
  {
    id: 16,
    name: "External Hard Drive",
    category: "Electronics",
    price: 85.0,
    inStock: true,
  },
  {
    id: 17,
    name: "Foam Roller",
    category: "Fitness",
    price: 22.0,
    inStock: true,
  },
  {
    id: 18,
    name: "Electric Kettle",
    category: "Appliances",
    price: 29.95,
    inStock: true,
  },
  {
    id: 19,
    name: "Desk Lamp",
    category: "Electronics",
    price: 34.99,
    inStock: true,
  },
  {
    id: 20,
    name: "Slow Cooker",
    category: "Appliances",
    price: 49.99,
    inStock: false,
  },
];




let arre = products.filter((e)=>{
    return (e.price>100).sort((a,b) = (b-a)
    
})

console.log(arre);





