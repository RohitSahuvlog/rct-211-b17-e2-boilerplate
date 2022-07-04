import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Getshoes } from "../Redux/AppReducer/action";

const SingleShoe = () => {
  const {id}=useParams()
  const dispatch=useDispatch()
  const singleshoes=useSelector((state)=>state.reducer.shoes)
  // console.log(singleshoes)
  const [curr,setcurr]=useState({})
  // console.log(id)
  useEffect(()=>{
if(singleshoes?.length==0){
  dispatch(Getshoes())
}
  },[singleshoes?.length,dispatch])
  useEffect(()=>{
    if(id){
      const temp =singleshoes.find((shoes)=>shoes.id ==Number(id))
        
      
      temp && setcurr(temp)
    }

  },[singleshoes,id])
  // console.log(curr)
  return (
    <div style={{ width:"200px",border:"2px solid black"}}>
      <h2>{curr.id}</h2>
      <div>
        <img src={curr.image} alt="Cover Pic"   style={{width:"200px",height:"200px"}}/>
      </div>
      <div>
        <div>{curr.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
