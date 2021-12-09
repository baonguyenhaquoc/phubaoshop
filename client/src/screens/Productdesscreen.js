import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { getProductById } from "../actions/productActions";
import Loader from '../components/Loader'
import Error from '../components/Error'

export default function Productdesscreen({ match }) {
  const productid = match.params.id;

  const dispatch = useDispatch();

  const [quantity ,setquantity] =useState(1)

  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );

  const { product, loading, error } = getproductbyidstate;

  function addtocart()
  {
    dispatch(addToCart(product,quantity))
  }


  useEffect(() => {
    dispatch(getProductById(productid));
  }, []);

  return (
    <div>
      {loading ? (
        <Loader error='Something went wrong'/>
      ) : error ? (
        <Error />
      ) : (
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card p-2 m-3">
              <h1>{product.name}</h1>
              <img src={product.image} className="img-fluid m-3 bigimg" />
              <p>{product.description}</p>
            </div>
          </div>

          <div className="col-md-6 text-start">
            <div className="m-2">
              <h1>Giá : {product.price}</h1>
              <hr />

              <h1>Chọn số lượng</h1>

              <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <hr />
              <button className="btn btn-dark" onClick={addtocart}>Thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
