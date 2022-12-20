import React, { useState, useEffect, useContext } from "react";
import { apidata, fetchdata } from "../../utils/fetchdata";
import "./Cat.css";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import gymicon from "../../assets/imgs/gymicon.png";

const Cat = ({ bodyparts, setBodyParts }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const categorydata = async () => {
      const bodyPartList = await fetchdata(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        apidata
      );
      setCategory(bodyPartList);
    };
    categorydata();
  }, []);

  return (
    <>
      <div className="mean_box">
        <ScrollMenu>
          <div className="cat_box">
            {category.map((items, inx) => {
              return (
                <div
                  className="cat_card"
                  key={inx}
                  onClick={() => setBodyParts(items)}
                >
                  <div className="cat_icon">
                    <img src={gymicon} alt="gym icon" />
                  </div>
                  <h3 className="cat_title">{items}</h3>
                </div>
              );
            })}
          </div>
        </ScrollMenu>
      </div>
    </>
  );
};

export default Cat;
