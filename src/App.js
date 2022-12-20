import React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./Head/Header";
import Cover from './Body/cover/Cover';
import Plans from "./Body/Plan/Plans";
import About from "./Body/About/About";
import Gallery from "./Body/Gallery";
import Contact from "./Body/Contact/Contact";
import ExerciseDetails from './Body/cover/ExercisePaga/ExerciseDetails'
const App = () => {
  return (
    <>
      <Header />

    <Routes>
        <Route path="/" element={<Cover/>} />
        <Route path="/exercise/:id" element={<ExerciseDetails/>} />

        <Route path="/plans" element={<Plans/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element={<Gallery/>} />
  </Routes>
  
      
    </>
  );
};

export default App;
