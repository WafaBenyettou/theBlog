import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import BlogDetails from "./Pages/BlogDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/blog/:id" element={<BlogDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
