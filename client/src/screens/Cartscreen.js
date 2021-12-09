import { Select } from '@mui/material'
import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addToCart ,deleteFromCart} from '../actions/cartActions'

export default function Cartscreen() {

    const cartreducerstate = useSelector (state=>state.cartReducer)
    const dispatch = useDispatch()
    const {cartItems} =cartreducerstate

    var subtotal = cartItems.reduce((acc , item) => acc + (item.price*item.quantity) , 0)
    return (
        <div>
            <div className="row mt-3 justify-content-center">
                <div className="col-md-8 card text-center">
                    <h1 className='text-center m-5'>GIỎ HÀNG</h1>
                    <table className='table table-bordered'>
                        <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng Giá</th>
                            <th>Xoá sản phẩm</th>
                        </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item=>{
                                return <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td><select value={item.quantity} onChange={(e)=>{dispatch(addToCart(item , e.target.value))}}>
                                        {
                                            [...Array(item.countInStock).keys()].map((x, i)=>{
                                                return <option value={i+1}>{i+1}</option>
                                            })
                                        }
                                        
                                        </select></td>
                                    <td>{ item.price * item.quantity }</td>
                                    <td><i className="fas fa-trash-alt" onClick={()=>{dispatch(deleteFromCart(item))}}></i></td>
                                </tr>
                            })}

                        </tbody>
                    </table>

                    <hr />

                    <h2 className='text-center'>Tổng Đơn : {subtotal} $</h2>

                    <hr />
                    <div className='text-center p-3'>
                    <button className='btn'>Thanh Toán</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
