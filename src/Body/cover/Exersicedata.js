import React, { useState, useEffect } from "react";
import "./Exersicedata.css";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { apidata, fetchdata } from "../../utils/fetchdata";

const Exersicedata = ({ exercises, setExercises, bodyparts, setBodyParts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  useEffect(() => {
    const fetchmyData = async () => {
      let Exersicedata = [];
      if (bodyparts === "all") {
        Exersicedata = await fetchdata(
          "https://exercisedb.p.rapidapi.com/exercises",
          apidata
        );
      } else {
        Exersicedata = await fetchdata(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyparts}`,
          apidata
        );
      }
      setExercises(Exersicedata);
    };
    fetchmyData();
  }, [bodyparts]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentexercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1000, behavior: "smooth" });
  };
  return (
    <>
      <div className="container">
        {currentexercises.map((items) => {
          return ( <Link className="exercise_link" to={`exercise/${items.id}`} >
            <div className="mean_exersice_box" key={items.id}>
              <div className="exersice_img">
                <img src={items.gifUrl} alt="img-exersice" />
              </div>
              <div className="exersice_btns">
                <button className="equipment">{items.equipment}</button>
                <button className="target">{items.target}</button>
              </div>
              <div className="exersice_title">
                <h3>{items.name}</h3>
              </div>
            </div>
          </Link>
          );
        })}
      </div>
      <div className="pages">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </div>
    </>
  );
};

export default Exersicedata;
