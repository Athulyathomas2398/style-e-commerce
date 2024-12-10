import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>

    
 {/* <div className='bg-dark'> */}
 <div id='foot' className='container-fluid bg-dark mt-5 w-100' style={{ minHeightheight: '300px' }}>
                <div className=" row">
                    <div className="col-lg-5 text-light">
                        <h5><i className="fa-solid fa-shirt text-light"></i>
                            &nbsp; Style</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, suscipit deleniti? Alias saepe optio earum consequuntur odit minus rem quaerat, deleniti aut ullam hic voluptatibus velit esse cum similique facere?</p>
                        <p>code is licensed by Athulya</p>
                        <p>currently v5.3.2</p>
                    </div>

                    <div className="col-lg-2 text-center">
                        <h5>Links</h5>
                        <div><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} href=''>Home</Link></div>
                        <div><Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }} href=''>Whishlist</Link></div>
                        <div><Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }} href=''>Cart</Link></div>
                    </div>

                    <div className="col-lg-2">
                        <h5>Guides</h5>
                        <div><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} href=''>React</Link></div>
                        <div><Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }} href=''>React bootstrap</Link></div>
                        <div><a  style={{ textDecoration: 'none', color: 'white' }} href=''>Watch router</a></div>
                    </div>

                    <div className="col-lg-3">
                        <h5 className='mb-4'>Contact Us</h5>
                        <div className="d-flex justify-content-between">
                            <input type="text" className='form-control' placeholder='enter email' />
                            <button className='btn btn-warning ms-3'><i className="fa-solid fa-arrow-right" /></button>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <a href="" style={{fontSize:'20px',color:'white'}}><i  className="fa-brands fa-facebook" /></a>
                            <a href="" style={{fontSize:'20px',color:'white'}}><i  className="fa-brands fa-twitter" /></a>
                            <a href="" style={{fontSize:'20px',color:'white'}}><i  className="fa-brands fa-instagram" /></a>
                            <a href="" style={{fontSize:'20px',color:'white'}}><i  className="fa-brands fa-linkedin" /></a>
                            <a href="" style={{fontSize:'20px',color:'white'}}><i  className="fa-brands fa-github" /></a>
                            <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-solid fa-phone"></i></a>
                        </div>

                    </div>

                </div>
                <p className='text-center mt-4'>copyright &copy; Athulya, mediaplay, Built with react</p>

            </div>
 {/* </div> */}
    
    </>
  )
}

export default Footer