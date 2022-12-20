import React from 'react'
import targetimg from '../../../assets/imgs/target.png'
import bodypartimg from '../../../assets/imgs/body-part.png'
import equipmentimg from '../../../assets/imgs/equipment.png'
import './ExerciseDetails.css'
const Details = ({ExerciseDetails}) => {
    const {name,bodyPart,equipment,id,gifUrl,target}=ExerciseDetails;
    console.log(ExerciseDetails)
  return (
    <div className="page">

 <div className="detail_page" key={id}>
    <div className="img_box">
        <img src={gifUrl} alt="exersice_img" />
    </div>
    <div className="detail_box">
        <h1 className="name">{name}</h1>
        <p className="para_detail">
        Exercises keep you fit <span>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{bodyPart}
          <br /> mood and gain energy.
        </p>

   <div className="iconbox">
    <div className="icon_box">
        <div className="icon_img">
            <img src={targetimg} alt="img_target" />
        </div>
        <h1 className="icon_text">{target}</h1>
    </div>
    <div className="icon_box">
        <div className="icon_img">
            <img src={bodypartimg} alt="img_target" />
        </div>
        <h1 className="icon_text">{bodyPart}</h1>
    </div>
    <div className="icon_box">
        <div className="icon_img">
            <img src={equipmentimg} alt="img_target" />
        </div>
        <h1 className="icon_text">{equipment}</h1>
    </div>
   </div>
        
    </div>
 </div>
    </div>
  )
}

export default Details
