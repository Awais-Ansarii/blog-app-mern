import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404-Page not found</h1>} />
      </Routes>
   
      <Footer />
    </div>
  );
}

export default App;
