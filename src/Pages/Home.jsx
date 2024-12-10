import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/productSlice';
import Spinner from 'react-bootstrap/Spinner';
import Pagination from '../Components/Pagination';



function Home() {
  const [currentPage,setCurrentPage]=useState(1)
  const[productPerPage,setProductPerPage]=useState(8)

  const {allProducts,loading,error}=useSelector(state=>state.productReducer)
  console.log(allProducts);


  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const endingIndex=currentPage*productPerPage 
  const startingIndex=endingIndex-productPerPage
  const currentProducts=allProducts.slice(startingIndex,endingIndex)
  

  return (
    
    <>
    
    <Header insideHome={true}/>

    <div className='container' style={{paddingTop:"100px"}} >
      {
        loading ?
        <div className='text-center'>
          <Spinner animation="border" variant="info" />
      
    
        </div>
        :
        <Row className='' >
          
     {
      currentProducts?.length?
      currentProducts.map((items,index)=>(
        
        <Col xl={3} lg={4} md={6} xs={12}>

        {/* cards */}

        <Card style={{ width: '18rem', }}>
      <Card.Img variant="top" src={items.images[0]} style={{height:"350px"}} />
      {/* "https://threadcounts.in/cdn/shop/files/3_4_4cbd7dca-ca62-4451-ae5b-e5c692de36ff.jpg?v=1713567147&width=2048" */}
      <Card.Body>
        <Card.Title>{items.title.slice(0,15)}...</Card.Title>
       
        <div><Link to={`/${items?.id}/view`} style={{textDecoration:"none"}} >View More</Link></div>
      </Card.Body>
    </Card>


        </Col>
    
      ))
         :
         <div className='text-danger'>Nothing to display</div>
     }
      </Row>
      

      }
      {
        currentProducts?.length>0 &&
        <Pagination currentPage={currentPage} totalProducts={allProducts.length} productPerPage={productPerPage} setCurrentPage={setCurrentPage}/>

      }
  
    </div>
    
    
    </>
  )
}

export default Home