import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, deleteCartItem, emptyCart, incQuantity } from '../Redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const [totalProducts,setTotalProducts]=useState(0)
  const[totalAmount,setTotalAmount]=useState(0)
  const userCart=useSelector(state=>state.cartReducer)
  console.log(userCart);
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(() => {
    if(userCart?.length>0){
      setTotalProducts(userCart.length)
      setTotalAmount(userCart.map(pro=>pro.totalPrice).reduce((t1,t2)=>t1+t2))
    }
    else{
      setTotalProducts(0)
      setTotalAmount(0)
    }
    
  }, [userCart])
  

  const handleDecQuantity=(product)=>{
    if(product?.quantity>1){
      dispatch(decQuantity(product.id))
    }
    else{
      dispatch(deleteCartItem(product.id))
    }
  }

  const checkOut=()=>{
    dispatch(emptyCart())
    alert("Order Placed Successfully...Thank you for shopping with us")
    navigate('/')
  }

 
  
  return (
    <>
      <Header />
      {/* style={{marginTop:"100px"}} */}
      <div className="container-fluid" style={{ paddingTop: "100px" }}>
        <div >
          
        </div>
        {
          
          userCart?.length>0?
          <div className="row mt-3">
            <h3 className='text-danger'>Cart Summary</h3>
          <div className="col-lg-9">
            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                {
                  
                  userCart?.map(item=>(
                    
                    <tr>
                  <td>{item?.id}</td>
                  <td>{item?.title}</td>
                  <td><img width="50px" height="40px" src={item?.images} alt="" /></td>
                  <td>
                    <button onClick={()=>handleDecQuantity(item)} className='btn border border-light shadow fw-bold me-2'>-</button>
                    <input  style={{ width: "40px", borderColor: "white" }} type="text" readOnly value={item?.quantity} />
                    <button onClick={()=>dispatch(incQuantity(item?.id))} className='btn border border-light shadow fw-bold'>+</button>
                    

                  </td>
                  <td>${item.price*item.quantity}</td>
                  <td><button onClick={()=>dispatch(deleteCartItem(item?.id))} className='btn border border-light shadow'><i class="fa-solid fa-trash text-danger"></i></button></td>
                </tr>
                  ))
                }
              </tbody>
            </table>

            <Link to={'/'} className='btn btn-info ms-5 '>Shop More</Link>
            <button onClick={()=>dispatch(emptyCart())} className='btn btn-primary ms-5'>Empty Cart</button>


          </div>
          <div className="col-lg-3">
            <div className="shadow">
              <h3>Total Items:{totalProducts}</h3>
              <h4>Total Amount:${totalAmount}</h4>
              <button onClick={checkOut} className='btn btn-info w-100'>Check Out</button>
            </div>

          </div>
        </div>
        :
        <div className='text-center'><img src="https://c9nutrition.com/img/empty-cart-yellow.png" alt="" /></div>
        
        }

      </div>

    </>
  )
}

export default Cart