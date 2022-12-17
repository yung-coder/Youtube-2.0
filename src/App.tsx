import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

function App() {
  const [count, setCount] = useState(0);

  return (
     <>
        <Navbar />
        <Feed />
     </>
  )
}

export default App;
