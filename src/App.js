import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddBooks from "./containers/AddBooks";

function App() {
  return (
    <>
      <Navbar />
      <AddBooks />
      <Footer />
    </>
  );
}

export default App;
