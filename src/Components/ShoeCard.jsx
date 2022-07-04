import React from "react";
import { Link } from "react-router-dom";

const ShoeCard = (shoes) => {
  let shoeId = null;
  // console.log(shoes.shoes.id)
  return (<Link to={`/shoes/${shoes.shoes.id}`}>
    <div data-cy={`shoe-card-wrapper-${shoes.shoes.id}`} style={{ border:"2px solid black"}}>
      <div>
        <img data-cy="shoe-card-image" src={shoes.shoes.image} alt="" style={{width:"200px",height:"200px"}} />
      </div>
      <div>
        <div data-cy="shoe-name">{shoes.shoes.name}</div>
        <div data-cy="shoe-category">{shoes.shoes.category}</div>
      </div>
    </div>
    </Link>
  );
};

export default ShoeCard;
