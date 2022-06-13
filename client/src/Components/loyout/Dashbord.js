import Navbar from "../../components1/Navbar/Navbar";
import Intro from "../../components1/Intro/Intro";
import "./dashbord.css";
import Contact from "../../components1/Contact/Contact";
import Footer from "../../components1/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../../Context";
function Dashbord() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Contact />
      <Footer />
    </div>
  );
}

export default Dashbord;
