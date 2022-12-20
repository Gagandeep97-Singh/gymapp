import React, { useState } from "react";
import "./Cover.css";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import Exersicedata from "./Exersicedata";

const Cover = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyparts, setBodyParts] = useState('all');
  return (
    <section className="body_cover">
      <div className="cover_page">
        <div className="body_text">
          <h1 className="head_text">
            FITNESS, BODYBUILDING AND BODYBUILDING AND STAY HEALTHY
          </h1>
          <p>
            We have a weight room with excellent equipment! All our athletes are
            accompanied by the instructor, we include personalized and
            completely free training plans, as well as physical assessment and
            reassessments
          </p>

          <button className="explore">
            <NavLink to="/plans">Explore Now</NavLink>
          </button>
        </div>
        <div className="body_cover">
          <img
            src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="cover-img"
          />
        </div>
      </div>

      <Search exercises={exercises} setExercises={setExercises} bodyparts={bodyparts} setBodyParts={setBodyParts} />
      <Exersicedata exercises={exercises} setExercises={setExercises} bodyparts={bodyparts} setBodyParts={setBodyParts}/>
    </section>
  );
};

export default Cover;
