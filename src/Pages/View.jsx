import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addWhishList } from '../Redux/whishListSlice'
import { addCartItem } from '../Redux/cartSlice'


function View() {
  const dispatch=useDispatch()
  const userWhishList=useSelector(state=>state.whishListReducer)
  const userCart=useSelector(state=>state.cartReducer)
  const[product,setProduct]=useState({})
  const {id}=useParams()
  console.log(id);
  useEffect(() => {
    if(localStorage.getItem("products")){
      const allProducts=JSON.parse(localStorage.getItem("products"))
      console.log(allProducts);
      setProduct(allProducts.filter(item=>item.id==id)[0])
      // console.log(allProducts.filter(item=>item.id==id));
      
      
    }
  }, [])

  const handleWhishList=()=>{
    if(userWhishList.includes(product)){
      alert('product already added')
    }
    else{
      dispatch(addWhishList(product))
    }
  }

  //add cart button clicked fn
  const handleCartItem=()=>{
    const existingProduct=userCart.find(item=>item.id==product.id)
    //product already existing conditons
    if(existingProduct){
      dispatch(addCartItem(product))
      alert("product quantity incremented")
    }
    else{
      dispatch(addCartItem(product))
    }
    
  }

  
  
  return (
    <>
    <Header/>

    <div className='container-fluid text-center row  ' style={{paddingTop:"150px"}}>
        <div className="col-lg-5">
            <img src={product?.thumbnail} style={{width:"200px",height:"250px"}} alt="" />
        </div>
        {/* <div className="col-lg-1"></div> */}
        <div className="col-lg-6 " style={{textAlign:"left"}}>
            <h6>{product?.id}</h6>
            <h3>{product?.title}</h3>
            <h4 className='text-danger'>${product?.price}</h4>
            <p>{product?.description} 
                
            </p>
            <div className='d-flex justify-content-between'>
            <button onClick={handleWhishList} className='border border-light'><i class="fa-solid fa-heart text-danger"></i></button>
            <button onClick={handleCartItem} className='border border-light'><i className="fa-solid fa-cart-shopping text-success"></i></button>
            </div>
        </div>


    </div>
    
    
    </>
  )
}

export default View