import React, { useState } from "react";
import LoginForm from "./pages/LoginForm";
import RegistrationForm from "./pages/RegistrationForm";

const App = () => {
  const [toggle, setToggle] = useState(true);
  return <div className="p-10 flex items-center justify-center">
    {
    toggle ? <LoginForm setToggle={setToggle} /> : 
    <RegistrationForm setToggle={setToggle} />
    }
    </div>;
};

export default App;
