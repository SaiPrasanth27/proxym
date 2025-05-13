import React from "react";
import Header from "./components/header/Header";
import HomeContent from "./components/HomeContent/HomeContent";
import Footer from './components/footer/Footer';
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from "./pages/login/Login";
import About from "./pages/About/About";

function App() {

  return (
    <Router>
      <div className="main">
        <Routes>
          <Route path="/" element={<>
          <Header/>
            <HomeContent/>
          <Footer/>
          </>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
