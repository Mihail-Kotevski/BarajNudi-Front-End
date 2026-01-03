import About from "./pages/about/about";
import CardInfo from "./pages/card/cardInfo";
import Home from "./pages/home/home";
import LogIn from "./pages/login/logIn";
import Footer from "./pages/sections/footer";
import NavBar from "./pages/sections/navBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/cardinfo" element={<CardInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
