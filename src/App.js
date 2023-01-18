import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Pages/Home";
import About from "./Component/About/About";
import Gallery from "./Component/Gallery/Gallery";
import DestinationHome from "./Component/Destination/DestinationHome";
import SinglePage from "./Component/Pages/SinglePage";
import Blog from "./Component/Blog/Blog";
import BlogSinglePage from "./Component/Blog/BlogSinglePage";
import Testimonial from "./Component/Testimonial/Testimonial";
import Contact from "./Component/Contact/Contact";
import Login from "./Component/Login/Login";
import Register from "./Component/Login/Register";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/destinations" element={<DestinationHome />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogsingle/:id" element={<BlogSinglePage />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
