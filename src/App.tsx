import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
     <div>
        <Navbar />
        <Sidebar />
     </div>
  )
}

export default App;
