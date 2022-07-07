import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom"
import Navbar from "./Pages/Shared/Navbar";
import Login from "./Pages/Auth/Login";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
