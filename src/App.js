import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from './components/Header';
import Home from "./components/Home";
import Services from "./components/Services";
import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/media-queries.scss"
// import "./styles/Me"

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
