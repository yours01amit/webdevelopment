import React, { useState } from "react";

// function Greeting(props) {
//   return <h2>Hello {props.name}</h2>;
// }

// function App() {
//   return (
//     <>
//       <Greeting name="Amit" />
//       <Greeting name="Rahul" />
//     </>
//   );
// }

// export default App;

// -----------------------------------------------------------------

// function User(props){
//   return <h2>{props.name}</h2>
// }

// function Profile(props){
//   return <div>
//     <h1>Hello {props.name}</h1>
//     <h1>Age: {props.age}</h1>
//     <h1>Profession: {props.profession}</h1>
//   </div>
// }

// const App = () => {
//   return (
//     <div>
//       <User name="Amit"/>
//       <User name="Rahul"/>
//       <User name="Priya"/>

//       <Profile
//       name="Amit"
//       age={25}
//       profession="Frontend Developer" />
//     </div>
//   )
// }

// export default App

// ------------------------------------------------------------------------

// function CourseCard(props){
//   return <div>
//     <h3>{props.title}</h3>
//     <h3>₹{props.price}</h3>
//     <h3>⭐{props.rating}</h3>
//   </div>
// }

// const App = () => {
//   return (
//     <div>
//       <CourseCard
//       title="React"
//       price={2999}
//       rating ={4.5}
//       />

//       <CourseCard
//       title="JavaScript"
//       price={1999}
//       rating ={4.8}
//       />
//     </div>
//   )
// }

// export default App

// function CourseCard(props){
//   return <div>
//     <h4>{props.title}</h4>
//     <h4>{props.price}</h4>
//     <h4>{props.rating}</h4>
//   </div>
// }

// const App = ()=>{

//   return <div>
//     <CourseCard
//     title="React"
//     price={2999}
//     rating={2.9}
//     />

//     <CourseCard
//     title="JavaScript"
//     price={1999}
//     rating={1.9}
//     />

//     <CourseCard
//     title="python"
//     price={3999}
//     rating={3.9}
//     />
//   </div>
// }

// export default App;

// ----------------------------------------------------------------------

// function ProductCard({name,price,inStock,features}){
//   return <div>
//     <h1>{name}</h1>
//     <p>{price}</p>
//     <p>{inStock?"Available":"Out of Stock"}</p>

//     <h3>Features: </h3>

//     <div>
//       {features.map((feature) => (
//         <p key={feature}>{feature}</p>
//       ))}
//     </div>
//   </div>
// }

// const App = () => {
//   return <div>
//     <ProductCard
//     name="iPhone 15"
//     price={59999}
//     inStock={true}
//     features = {["OLED", "5G", "Face ID"]}
//      />
//   </div>
// }

// -------------------------------------------------------------------------

// function StudentCard({name,age,skills}){
//   return <div>
//     <h1>{name}</h1>
//     <p>{age}</p>

//     <h1>Skills</h1>

//     <div>
//       {skills.map((skill) => (
//         <p key={skill}>{skill}</p>
//       ))}
//     </div>
//   </div>
// }

// const App = ()=> {

//   return <div>
//     <StudentCard
//     name="Amit"
//     age={25}
//     skills={["JavaScript", "React", "Python"]}
//     />
//   </div>
// }

// export default App;

// -------------------------------------------------------------------

// function Button(){
//   return <div>
//     <button onClick={(e)=>{
//   console.log("i am clicked")
// }}>click me</button>
//   </div>
// }

// const App = () => {
//   return (
//     <div>
//       <Button />
//     </div>
//   )
// }

// export default App

// -------------------------------------------------------------------------

// function InputDemo(){
//   return <div>
//     <input id="username" type="text" />
//     <button onClick={(e)=>{
//       const input = document.querySelector("#username")
//       console.log(input.value);

//     }}>Click Me</button>
//   </div>
// }

// const App = () => {
//   return (
//     <div>
//       <InputDemo />
//     </div>
//   )
// }

// export default App

// function InputDemo(){
//   const [name, setName] = useState("")
//   return <div>
//     <input
//     type="text"
//     onChange={(e) => {
//       setName(e.target.value)
//     }}
//      />

//      <h1>Hello {name}</h1>
//   </div>
// }

// const App = () => {

//   return <div>
//     <InputDemo />
//   </div>
// }

// export default App;

// ----------------------------------------------------------------

// function LiveInput(){
//   const [name, setName] = useState("")
//   return <div>
//     <input
//     type="text"
//     onChange={(e) => {
//       setName(e.target.value)
//     }}
//      />

//      <h2>You Typed: {name}</h2>
//   </div>
// }

// const App = () => {

//   return <div>
//     <LiveInput />
//   </div>
// }

// export default App;

// --------------------------------------------------------------

// -------------------------------------------------------------------

// function NameForm(){
//   const [name, setName] = useState("")
//   return <div>

// <input

//   onChange={(e) => {
//     setName(e.target.value);
//   }}
// />

// <button onClick={() => setName("Amit")}>
//   Set Amit
// </button>
//   </div>
// }

// const App = () => {

//   return <div>
//     <NameForm />
//   </div>
// }

// export default App;

// -------------------------------------------------------------------------

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(email);
//     console.log(password);
//   }
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <input
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//           type="email"
//         />

//         <input
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//           type="password"
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// const App = () => {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// };

// export default App;

// login form

// function LoginForm(){

//  const [email, setEmail] = useState("")
//  const [password, setPassword] = useState("")

//   function handleSubmit(e){
//     e.preventDefault()
//     console.log(email);
//     console.log(password);

//   }

//   return <div>
//     <form action="" onSubmit={handleSubmit}>
//       <input
//       type="email"
//       value={email}
//       onChange={(e)=>{
//         setEmail(e.target.value)
//       }}
//       />

//       <input
//       type="password"
//       value={password}
//       onChange={(e) => {
//         setPassword(e.target.value)
//       }}
//       />

//       <button type="submit">Submit</button>
//     </form>

//   </div>
// }

// const App = () => {

//   return <div>
//     <LoginForm />
//   </div>
// }

// export default App;

// function RegistrationForm(){

//   const [form, setForm] = useState({
//     name:"",
//     email:"",
//     password:""
//     })

//   function handleSubmit(e){
//     e.preventDefault()
//     console.log(form)

//   }

//   return <div>
//     <form action="" onSubmit={handleSubmit}>
//       <input
//       type="text"
//       value={form.name}
//       onChange={(e) => {
//         setForm(prev => ({
//           ...prev,
//           name: e.target.value
//         }))
//       }}/>

//       <input
//       type="email"
//       value={form.email}
//       onChange={(e) => {
//         setForm(prev => ({
//           ...prev,
//           email: e.target.value
//         }))
//       }}
//       />

//       <input
//       type="password"
//       value={form.password}
//       onChange={(e) => {
//         setForm(prev => ({
//           ...prev,
//           password:e.target.value
//         }))
//       }}/>

//       <button type="submit">Submit</button>
//     </form>
//   </div>
// }

// const App = ()=> {
//   return <div>
//     <RegistrationForm />
//   </div>
// }

// export default App;

// ======================= Login Form ============================

// function RegistrationForm(){

//   const [form, setForm] = useState({
//     name:"",
//     email:"",
//     password:""
//   })

//   function handleSubmit(e){
//     e.preventDefault()
//     console.log(form);

//   }

//   function handleChange(e){
//     const {name, value} = e.target;

//     setForm(prev => ({
//       ...prev,
//       [name]:value
//     }))
//   }

//   return <div>
//     <form action="" onSubmit={handleSubmit}>
//       <input
//       type="text"
//       name="name"
//       value={form.name}
//       onChange={handleChange}
//       />

//       <input
//       type="email"
//       name="email"
//       value={form.email}
//       onChange={handleChange}
//       />

//       <input
//       type="password"
//       name="password"
//       value={form.password}
//       onChange={handleChange}
//        />

//       <button type="submit">Submit</button>
//     </form>
//   </div>

// }

// const App = () => {

//   return <div>
//    <RegistrationForm />
//   </div>
// }

// export default App;

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function formHandle(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandle(e) {
    e.preventDefault();

    console.log(form);

  }

  return (
    <div className="p-6">
  <form className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100" onSubmit={submitHandle}>
    <h2>Registration Form</h2>
    <input
      className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      value={form.name}
      name="name"
      type="text"
      onChange={formHandle}
      placeholder="Enter your name"
    />

    <input
      className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      value={form.email}
      name="email"
      type="email"
      onChange={formHandle}
      placeholder="enter your email"
    />

    <input
      className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      value={form.password}
      name="password"
      type="password"
      onChange={formHandle}
      placeholder="enter your password"
    />

    <button 
      className="w-full py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition active:scale-[0.98]" 
      type="submit"
    >
      Submit
    </button>
  </form>

  
</div>
  );
}

const App = () => {
  return (
    <div>
      <RegistrationForm />
    </div>
  );
};

export default App;
