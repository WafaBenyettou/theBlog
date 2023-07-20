import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import BlogDetails from "./Pages/BlogDetails";
import Header from "./Components/Header";

function App() {
  return (
    <>
    <div className="p-[20px]">
       <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/blog/:id" element={<BlogDetails />}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
