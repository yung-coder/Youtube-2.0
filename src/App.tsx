import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { Route, Routes } from "react-router-dom";
import ChannelDetails from "./components/ChannelDetails";
import SearchFeed from "./components/SearchFeed";
import Videoinfo from "./components/Videoinfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:id" element={<SearchFeed />} />
        <Route path="/video/:id" element={<Videoinfo />} />
      </Routes>
    </>
  );
}

export default App;
