import React, { useState, useEffect } from "react";
import "./Exersice.css";
import { apidata, fetchdata } from "../../utils/fetchdata";
import Cat from "./Cat";
const Search= ({setExercises,bodyparts,setBodyParts}) => {
  const [search, setSearch] = useState("");
  

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchdata(
        "https://exercisedb.p.rapidapi.com/exercises",
        apidata
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)

      );

      // window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    
      setSearch("");
      setExercises(searchedExercises);
    }
  };


  return (
    <>
      <section className="input_section">
        <h1 className="exersice-text">AWESOME EXERSICE YOU SHOULD KNOW</h1>
        <div className="search_bar">
          <input
            className="search_exersice"
            type="text"
            placeholder="Search your favourite exersices"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <button className="search_btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <Cat bodyparts={bodyparts} setBodyParts={setBodyParts}/>
      </section>
    </>
  );
};

export default Search;
