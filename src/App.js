import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
        <Route path="/" element={ <Home /> } ></Route>
        <Route path="/BlogDetails/:id" element={ <BlogDetails /> } ></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
