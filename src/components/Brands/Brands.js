import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const  Brands =() => {
  return (
    <>
      <div className="container-fluid py-5 px-5">
        
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div  className="" >
                <img  src={require('../../assets/image/brand/brand1.png')}  alt=''  width="80px" height="80px" className="rounded-circle"  />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div  className="" >
                <img  src={require('../../assets/image/brand/brand2.png')}  alt=''  width="40px" height="40px" className="rounded-circle"  />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div  className="" >
                <img  src={require('../../assets/image/brand/brand3.png')}  alt=''  width="80px" height="80px" className="rounded-circle"  />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div  className="" >
                <img  src={require('../../assets/image/brand/brand4.png')}  alt=''  width="80px" height="80px" className="rounded-circle"  />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div  className="" >
                <img  src={require('../../assets/image/brand/brand5.png')}  alt=''  width="80px" height="80px" className="rounded-circle"  />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div  className="" >
                <img  src={require('../../assets/image/brand/brand6.png')}  alt=''  width="80px" height="80px" className="rounded-circle"  />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div  className="" >
                <img  src={require('../../assets/image/brand/brand7.png')}  alt=''  width="80px" height="80px" className="rounded-circle"  />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div  className="" >
                <img  src={require('../../assets/image/brand/brand8.png')}  alt=''  width="80px" height="80px" className="rounded-circle"  />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div  className="" >
                <img  src={require('../../assets/image/brand/brand9.png')}  alt=''  width="80px" height="80px" className="rounded-circle"  />
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

export default Brands
