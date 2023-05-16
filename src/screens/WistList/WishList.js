import React from 'react'
import Footer from '../../components/footer/Footer'
import './wishlist.css';
import Navbar from '../../components/navbar/Navbar'
import {AiFillCloseCircle} from 'react-icons/ai'
import { Link, Outlet } from 'react-router-dom';
const WishList = () => {
  return (
    <>
    <Navbar/>
      <section className='' style={{backgroundColor:'#FAFAFC'}}>
      <div className="container-fluid py-3 px-5 rtl" style={{ textAlign: "left" }}>

  <div className="row">
    <div className="sidebarR col-lg-3 col-md-3 pr-lg-3 pr-xl-4">
      <div className="__customer-sidebar" id="shop-sidebar">
        <div>
          <div className="widget-title">
            <Link className="" to="/my_order">
              My order
            </Link>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <Link className="" to="/my_wallet">
              My wallet
            </Link>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <Link className="" to="/My_Loyalty_Point">
              My loyalty point
            </Link>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <Link className="" to="/track">
              Track your order
            </Link>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <Link
              className="active-menu"
              to="/wish_list"
            >
              
              Wish List
            </Link>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <Link className="" to="/ChatWithSeller">
              Chat with seller
            </Link>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <Link
              className=""
              to="/ChatWithDeliveryMan"
            >
              Chat with delivery-man
            </Link>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <Link className="" to="/profile_info">
              Profile Info
            </Link>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <Link className="" to="/Address">
              Address
            </Link>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <Link className="" to="/Support_Ticket">
              Support Ticket
            </Link>
          </div>
        </div>
      </div>
    </div>
    <section className="col-lg-9 col-md-9" id="set-wish-list">
      
      

      <Outlet/>
      
    </section>
  </div>
</div>
      </section>

<Footer/>

    </>
  )
}

export default WishList