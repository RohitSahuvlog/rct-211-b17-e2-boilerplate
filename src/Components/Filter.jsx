import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
  import { Getshoes } from "../Redux/AppReducer/action";
const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const shoes=useSelector((state)=>state.reducer.shoes)
  const dispatch=useDispatch()
  const [searchParams,setSearchParams]=useSearchParams()
  const urlCategory = searchParams.getAll("category")

  const location=useLocation()
  const [category,setCatrgory] =useState(urlCategory  
      || [])

 
  console.log(urlCategory)

// console.log(sortby)
  const handleCheckbox=(e)=>{
const option =e.target.value;

let newCategory =[...category]
console.log(newCategory)
if(category.includes(option)){
newCategory.splice(newCategory.indexOf(option),1)

}else{
  newCategory.push(option)
}
console.log(newCategory)
setCatrgory(newCategory)

  }
  useEffect(()=>{
    if(category){
        let params={};
     category && (params.category=category);

       setSearchParams(params)
    }
},[category,setSearchParams,dispatch])
useEffect(()=>{
  if(shoes?.length ===0 || location.search ){
    
    let getParams ={
      params : {
        category :searchParams.getAll("category"),
     
      },
    };
    dispatch(Getshoes(getParams))
  }
    },[location.search])

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox" value="Sneakers" defaultChecked={category.includes("Sneakers")} onChange={handleCheckbox} />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers" defaultChecked={category.includes("Loafers")} onChange={handleCheckbox} />
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas" defaultChecked={category.includes("Canvas")} onChange={handleCheckbox} />
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots" defaultChecked={category.includes("Boots")} onChange={handleCheckbox} />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
