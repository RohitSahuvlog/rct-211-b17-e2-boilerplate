import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";
import { Getshoes } from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";
import "../index.css";
import { useSearchParams } from "react-router-dom";
// import 
const Shoes = () => {
  const searchParams =useSearchParams()
  const dispatch=useDispatch()
  const shoes = useSelector((state)=>state.reducer.shoes)
  console.log(shoes)
  useEffect(()=>{
    dispatch(Getshoes())
  },[])
  // useEffect(()=>{
  //   const urlCategory=searchParams.get("category")
    
  //     if(shoes?.length ===0 && !urlCategory ){
  //     dispatch(Getshoes())
  // }
  // },[dispatch])
  return (
    <div style={{display:"flex" ,padding:"20px"}}>
    <div style={{ width:"200px",border:"2px solid black"}}>
    <Filter />
    </div>
     
      <div className="gridform">
        {shoes?.length>0 && shoes.map((t)=>{
          return <div key={t.id}>
          <ShoeCard    shoes={t}/>
          </div> 
        })}
      </div>
    </div>
  );
};

export default Shoes;
