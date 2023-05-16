import React from 'react'
import Brands from '../../components/Brands/Brands'
import CompnayDetails from '../../components/CompnayDetails'
import FeaturesDeal from '../../components/features/FeaturesDeal'
import FeaturesSlider from '../../components/features/FeaturesSlider'
import FlashDeal from '../../components/FlashDeal/FlashDeal'
import Footer from '../../components/footer/Footer'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import LatestProdouct from '../../components/LatestProduct/LatestProdouct'
import MainFashion from '../../components/ManFashion/MainFashion'
import Navbar from '../../components/navbar/Navbar'
import WomanFashion from '../../components/WomanFashion/WomanFashion'

const Home = () => {
  return (
    <>
    <Navbar/>
    <HomeSlider/>
    <FlashDeal/>
    <Brands/>
    <div className='container-fluid px-2 px-md-5'>
      <h4 className='text-center text-bold'>Features Products</h4>
    <FeaturesSlider/>   
    </div>
    <FeaturesDeal/>
    <LatestProdouct/>
    <div class="container-fluid px-2 px-md-5 rtl mb-3">
<div class="row">
<div class="col-12 pl-0 pr-0">
<a href="https://6valley.6amtech.com/products?id=26&amp;data_from=category&amp;page=1" class="cursor-pointer">
<img class="d-block footer_banner_img __inline-63" onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'" src="https://6valley.6amtech.com/storage/app/public/banner/2022-04-21-6260beb0ca1f0.png"/>
</a>
</div>
</div>
</div>

<WomanFashion/>
<MainFashion/>
<CompnayDetails/>
    <Footer/>


   
   
 
    </>
  )
}

export default Home