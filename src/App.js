import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddBooks from "./containers/AddBooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./containers/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<AddBooks />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
