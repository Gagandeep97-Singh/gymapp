import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { apidata, fetchdata } from '../../../utils/fetchdata'
import Details from './Details'
const ExerciseDetails = () => {

const [ExerciseDetails,setExerciseDetails]=useState({});

    const {id}=useParams();
    
useEffect(()=>{
  const fetchdetaildata=async () => {
    const detaildata = await fetchdata(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,apidata)
    setExerciseDetails(detaildata);
  }
  fetchdetaildata();
},[id])



  return (
    <>
  <Details ExerciseDetails={ExerciseDetails}/>
    </>
  )
}

export default ExerciseDetails