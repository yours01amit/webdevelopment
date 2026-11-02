import React from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  // let obj = {
  //   name:"Ashis",
  //   age:25,
  //   post:"loda post"
  // }

  // obj = JSON.stringify(obj)
  // localStorage.setItem("users", obj)

  // let lsd = localStorage.getItem("users")
  // let jso = JSON.parse(lsd)
  // console.log(jso);

  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  console.log(users);

  const [userUpdate, setUserUpdate] = useState(null);

  
  const deleteUser = (id) => {
      let filterUser = users.filter((val, index) => {
        return index !== id
      })
      console.log(filterUser)
      setUsers(filterUser)
      localStorage.setItem("users", JSON.stringify(filterUser))
      
  }

  return (
    <div className="p-3 h-screen text-white flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex flex-wrap gap-4">
          {users.map((user, index) => {
            return (
              <UserCard
                deleteUser={deleteUser}
                key={index}
                user={user}
                index={index}
                setUserUpdate={setUserUpdate}
                setToggle={setToggle}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] item-center">
          <Form
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
            userUpdate={userUpdate}
            setUserUpdate={setUserUpdate}
          />
        </div>
      )}
    </div>
  );
};

export default App;
