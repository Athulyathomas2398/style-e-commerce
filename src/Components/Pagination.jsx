import React from 'react'

function Pagination({totalProducts,productPerPage,setCurrentPage,currentPage}) {
    const pages=[]

    for(let i=1;i<=Math.ceil(totalProducts/productPerPage);i++){
        pages.push(i)
    }

  return (
    <>
   <div className='d-flex justify-content-center align-items-center mt-4'>
    <button onClick={()=>currentPage>1 && setCurrentPage(currentPage-1)} disabled={currentPage==1} className='btn btn-secondary me-2' ><i class="fa-solid fa-angles-left"></i></button>
   {
    pages?.map(item=>(
        <button onClick={()=>setCurrentPage(item)} id={`${currentPage==item? 'active':''}`} className='btn btn-secondary me-2'>{item}</button>
    ))
   }
   <button onClick={()=>currentPage<pages.length && setCurrentPage(currentPage+1)} disabled={currentPage==pages.length} className='btn btn-secondary me-2'><i class="fa-solid fa-angles-right"></i></button>
   </div>
    
    
    
    
    </>
  )
}

export default Pagination