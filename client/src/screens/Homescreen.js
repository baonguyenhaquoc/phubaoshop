import React from "react";
import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
export default function Homescreen() {
  const getAllproductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );

  const { loading, products, error } = getAllproductsstate;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : error ? (
          < Error error = 'Something went wrong...' />
        ) : (
          products.map(product=>{
              return <div className='col-md-3 m-2 p-2 card'>
                    <Product product={product}/>
                  </div>
          })
        )}
      </div>
    </div>
  );
}
