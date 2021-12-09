import React from "react";
import { Link } from "react-router-dom";
// import Rating from "react-rating";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function Product({ product }) {
  return (
    <div className=" text-start" >
      <div >
        <Link to={`product/${product._id}`}>
          <img src={product.image} className="img-fluid" />
          <h1>{product.name} </h1>

          <Rating
            // initialRating={product.rating}
            name="size-small"
            defaultValue={product.rating}
            size="small"
            readonly={true}
          />
          {/* <Rating
          
            initialRating={product.rating}
            emptySymbol="fa fa-star-o fa-1x"
            fullSymbol="fa fa-star fa-1x"
            readonly={true}
          /> */}

          <h1>Giá :{product.price}</h1>
        </Link>
      </div>
    </div>
  );
}
