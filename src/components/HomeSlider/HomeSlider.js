import React from 'react'

const HomeSlider = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row '>
            <div className='col-md-12
             mx-auto p-0'
            >

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" style={{backgroundImage:`url(${require('../../assets/image/banner/slider1.png')})`,backgroundPosition:'center',backgroundSize:'cover',width:'100%',height:'65vh',backgroundRepeat:'no-repeat'}}>

    </div>
    <div class="carousel-item" style={{backgroundImage:`url(${require('../../assets/image/banner/slider2.png')})`,backgroundPosition:'center',backgroundSize:'cover',width:'100%',height:'65vh',backgroundRepeat:'no-repeat'}}>

    </div>
    <div class="carousel-item" style={{backgroundImage:`url(${require('../../assets/image/banner/slider3.png')})`,backgroundPosition:'center',backgroundSize:'cover',width:'100%',height:'65vh',backgroundRepeat:'no-repeat'}}>
 
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomeSlider