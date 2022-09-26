import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Blog from "./Blog";
import CreateBlog from "./CreateBlog";
import Home from "./Home";
import Nav from "./Nav";

function App() {
  return (

    <div className="bg-dark">
    

        <Nav></Nav>
        <Routes>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/create" element={<CreateBlog/>}></Route>
          <Route path="/blog/:id" element={<Blog></Blog>}></Route>

        
        </Routes>

     

    </div>
  );
}

export default App;
