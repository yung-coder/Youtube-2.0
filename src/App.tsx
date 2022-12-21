import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { Route, Routes } from "react-router-dom";
import ChannelDetails from "./components/ChannelDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
      </Routes>
    </>
  );
}

export default App;
