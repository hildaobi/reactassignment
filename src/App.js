//importing coponents
import Nav from "./components/Nav";
import Home from "./components/Home";
import Bios from "./components/Bios";
import Skill from  "./components/Skill";
import Projects from "./components/Projects";
import Contact from  "./components/Contact";
import Footer from  "./components/Footer";

//displaying components
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Bios/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
//I was not able to deploy my laravel cms so i saved the returned data in data.json file