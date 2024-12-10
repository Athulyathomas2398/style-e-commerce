import React from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeWhishListItem } from '../Redux/whishListSlice';
import { addCartItem } from '../Redux/cartSlice';


function Whishlist() {
  const dispatch=useDispatch()
  const displayWhishList=useSelector(state=>state.whishListReducer)
  console.log(displayWhishList);
  const userCart=useSelector(state=>state.cartReducer)

  const handleCart=(product)=>{
    const existingProduct=userCart?.find(items=>items.id==product.id)
    if(existingProduct){
      alert("altready added")
      dispatch(addCartItem(product))
      dispatch(removeWhishListItem(product.id))
      
    }
    else{
      dispatch(addCartItem(product))
      dispatch(removeWhishListItem(product.id))

    }

  }


  

  return (
    <>
    <Header/>

    <div className='container-fluid' >
      <Row className='' style={{paddingTop:"100px"}}>
        

        {/* cards */}
        <h3 className="text-danger">Your Whish List</h3>

        {
          displayWhishList?.length>0?
          displayWhishList.map(item=>(
            <Col xl={3} lg={4} md={6} xs={12}>
            <Card style={{ width: '18rem', }}>
          <Card.Img variant="top" src={item.images[0]} style={{height:"350px"}} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
           
            <div className="d-flex justify-content-between">
              <button onClick={()=>dispatch(removeWhishListItem(item.id))} className="p-3 border border-1 rounded border-light shadow"><i class="fa-solid fa-heart-circle-xmark text-danger"></i></button>
              <button onClick={()=>handleCart(item)} className="p-3 border border-1 rounded border-light shadow"><i className="fa-solid fa-cart-shopping text-success"></i></button>
            </div>
          </Card.Body>
        </Card>
        </Col>

          ))
          :
          <div className="danger">Nothing to display</div>
          
        }


        
      </Row>
    </div>
    
    </>
  )
}

export default Whishlist