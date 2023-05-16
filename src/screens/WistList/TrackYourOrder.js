import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai'
const TrackYourOrder = () => {
  return (
    <div>
        <div className="card __card __card-mobile-340 mb-3">
          
        <div className="product">
          <div className="card">
            <div className="row g-2">
              <div className="wishlist_product_img col-md-4 col-xl-2 col-lg-3 col-sm-4">
                <Link
                  to="/wish_list"
                  className="d-block h-100"
                >
                  <img
                    className="__img-full"
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-23-62636369a0855.png"
                  
                    alt="wishlist"
                  />
                </Link>
              </div>
              <div className="wishlist_product_desc align-self-center col-sm-8 col-md-8 col-xl-10 col-lg-9 py-3 px-sm-4">
                <div className="font-name">
                  <Link to="">
                    Ladies Winter Long Sleeve Sweater
                  </Link>
                </div>
                <span className="sellerName"> Brand :Great Hall </span>
                <div className="">
                  <span className="font-weight-bold amount">$5,000.0</span>
                </div>
              </div>
              <Link to="" className="wishlist_product_icon">
                <i> <AiFillCloseCircle color="red" /></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackYourOrder