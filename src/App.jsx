import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import BlogDetails from "./Pages/BlogDetails";
import Header from "./Components/Header";
import About from "./Pages/About";

function App() {
  return (
    <>
    <div className="p-[20px]">
       <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/blog/:id" element={<BlogDetails />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
