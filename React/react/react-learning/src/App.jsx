// import { useState } from "react";

// const name = "Amit";

// function TodoList() {
//   const [todos, setTodos] = useState([]);

//   return (
//     <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>

//       <div>{todos.map((todo) => {
//         return <p key={todo}>{todo}</p>
//       })}</div>
//       <button onClick={() => {
//         setTodos(prev => [
//           ...prev,
//           "Learn React"
//         ])
//       }}>Add React</button>

//       <button onClick={() => {
//         setTodos(prev => [
//           ...prev,
//           "Learn JavaScript"
//         ])
//       }}>Add JavaScript</button>

//       <button onClick={() => {
//         setTodos(prev => prev.filter(todo => 
//           todo !== "Learn React" ))
//       }}>
//         Delete
//       </button>

//       <button onClick={() => {
//         setTodos(prev => prev.map(todo => 
//           todo === "Learn React" ? "React Completed" : todo ))
//       }}>
//         update
//       </button>
//     </div>
//   )
//  }

// function UserProfile() {
//   const [user, setUser] = useState({
//     name: "Amit",
//     age: 25,
//     role: "Frontend Developer",
//   });

//   return (
//     <div>
//       <h2>{user.name}</h2>
//       <h2>{user.age}</h2>
//       <button onClick={() => {
//         setUser(prev => ({
//           ...prev,
//           name: "Rahul",
//         }))
//         }}>
//         change name
//       </button>
//       <button onClick={() => {
//         setUser(prev => ({
//           ...prev,
//           age:prev.age + 1
//         }))
//       }}>
//         Increase age
//       </button>
//     </div>
//   )
// }

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div
//       style={{
//         display: "flex",
//         gap: "10px",
//         flexDirection: "column",
//         justifyContent: "center",
//         margin: "10px",
//       }}
//     >
//       <h2>{count}</h2>

//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//       <button onClick={() => setCount(count - 1)}>-</button>

//       {/* <button onClick={()=> {
//         setCount(count + 1);
//         setCount(prev => prev + 1);
//         setCount(prev => prev + 1);
//       }}>
//         +3
//       </button> */}
//     </div>
//   );
// }

// function CourseCard(props) {
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>₹{props.price}</p>
//       <p>⭐{props.rating}</p>
//     </div>
//   );
// }

// function Greetings(props) {
//   // console.log(elem);

//   return <h4>Welcome {props.name}</h4>;
// }

// function App() {
//   return (
//     <>
//       {/* <h1>Hello {name}</h1>
//       <p>I am learning React</p>
//       <p>my goal is to become job ready</p>
//       <Greetings name="Amit" />
//       <Greetings name="Rahul" />
//       <Greetings name="priya" />
//       <CourseCard title="React" price={2999} rating={2.5} /> */}

//       {/* <Counter /> */}
//       {/* <UserProfile /> */}

//       <TodoList />
//     </>
//   );
// }

// export default App;




// -----------------------------------------------------

// import { useState } from "react";

// function TodoList() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       text: "Learn React",
//     },
//     {
//       id: 2,
//       text: "Learn JavaScript",
//     },
//   ]);

//   return (
//     <div>
//       {/* Render todos */}
//       <div>
//         {todos.map((todo) => (
//           <p key={todo.id}>
//             {todo.text}
//           </p>
//         ))}
//       </div>

//       {/* Add React */}
//       <button
//         onClick={() => {
//           setTodos((prev) => [
//             ...prev,
//             {
//               id: Date.now(),
//               text: "Learn React",
//             },
//           ]);
//         }}
//       >
//         Add React
//       </button>

//       {/* Add JavaScript */}
//       <button
//         onClick={() => {
//           setTodos((prev) => [
//             ...prev,
//             {
//               id: Date.now(),
//               text: "Learn JavaScript",
//             },
//           ]);
//         }}
//       >
//         Add JavaScript
//       </button>

//       {/* Delete React */}
//       <button
//         onClick={() => {
//           setTodos((prev) =>
//             prev.filter((todo) => todo.text !== "Learn React")
//           );
//         }}
//       >
//         Delete React
//       </button>

//       {/* Complete React */}
//       <button
//         onClick={() => {
//           setTodos((prev) =>
//             prev.map((todo) =>
//               todo.text === "Learn React"
//                 ? {
//                     ...todo,
//                     text: "React Completed",
//                   }
//                 : todo
//             )
//           );
//         }}
//       >
//         Complete React
//       </button>
//     </div>
//   );
// }

// export default TodoList;