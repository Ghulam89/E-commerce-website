import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (
    <>
    <footer className='page-footer font-small mb-color rtl'>
    <div className="pt-4" style={{ background: "#0000" }}>
  <div className="container-fluid px-2 px-md-5 text-center __pb-13px">
    <div className="row text-center text-md-left mt-3 pb-3 ">
      <div className="col-md-3">
        <Link className="d-block" to="https://6valley.6amtech.com">
          <img
            
            src={require('../../assets/image/company/ashh.png')}
             width="150px"
            alt="6valley"/>
         
        </Link>
        <div className="mt-4 pt-lg-4">
          <h6 className="text-uppercase font-weight-bold footer-heder align-items-center">
            Download our app
          </h6>
        </div>
        <div className="store-contents d-flex justify-content-center pr-lg-4">
          <div className="mr-2 mb-2">
            <Link
              className=""
              to=""
              role="button"
            >
              <img
                className="w-100"
                src="https://6valley.6amtech.com/public/assets/front-end/png/apple_app.png"
                alt=""
              />
            </Link>
          </div>
          <div className="mr-2 mb-2">
            <Link
              to=""
              role="button"
            >
              <img
                className="w-100"
                src="https://6valley.6amtech.com/public/assets/front-end/png/google_app.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-9">
        <div className="row">
          <div className="col-md-3 footer-padding-bottom">
            <h6 className="text-uppercase mb-4 font-weight-bold footer-heder">
              Special
            </h6>
            <ul className="widget-list __pb-10px p-0">
              <li className="widget-list-item">
                <Link
                  className="widget-list-link"
                  to=""
                >
                  Flash Deal
                </Link>
              </li>
              <li className="widget-list-item">
                <Link
                  className="widget-list-link"
                  to=""
                >
                  Featured Products
                </Link>
              </li>
              <li className="widget-list-item">
                <Link
                  className="widget-list-link"
                  to=""
                >
                  Latest Products
                </Link>
              </li>
              <li className="widget-list-item">
                <Link
                  className="widget-list-link"
                  to=""
                >
                  Best Selling Products
                </Link>
              </li>
              <li className="widget-list-item">
                <Link
                  className="widget-list-link"
                  to=""
                >
                  Top Rated Products
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-padding-bottom"   >
            <h6 className="text-uppercase mb-4 font-weight-bold footer-heder">
              Account &amp; shipping info
            </h6>
            <ul className="widget-list __pb-10px">
              <li className="widget-list-item">
                <Link
                  className="widget-list-link"
                  to="/profile_info"
                >
                  Profile Info
                </Link>
              </li>
              <li className="widget-list-item">
                <Link
                  className="widget-list-link"
                  to="/wishlist"
                >
                  Wish List
                </Link>
              </li>
              <li className="widget-list-item">
                <Link
                  className="widget-list-link"
                  to=""
                >
                  Track Order
                </Link>
              </li>
              <li className="widget-list-item">
                <Link
                  className="widget-list-link"
                  to="/refund"
                >
                  Refund policy
                </Link>
              </li>
              <li className="widget-list-item">
                <Link
                  className="widget-list-link"
                  to="/return"
                >
                  Return policy
                </Link>
              </li>
              <li className="widget-list-item">
                <Link
                  className="widget-list-link"
                  to="/cancellation"
                >
                  Cancellation policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5 footer-padding-bottom">
            <div className="mb-2">
              <h6 className="text-uppercase mb-4 font-weight-bold footer-heder">
                NEWS LETTER
              </h6>
              <span  className='text-white' >Subscribe to our new channel to get latest updates</span>
            </div>
            <div className="text-nowrap mb-4 position-relative">
              <form
                action=""
                method="post"
              >
                <input
                  type="hidden"
                  name="_token"
                  
                />{" "}
                <input
                  type="email"
                  name="subscription_email"
                  className="form-control text-white subscribe-border"
                  placeholder="Your Email Address"
                  required=""
                  style={{ padding: 11, textAlign: "left" }}
                />
                <button className="subscribe-button" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-md-7">
            <div className="row d-flex align-items-center mobile-view-center-align  justify-content-center justify-content-md-startr">
              <div style={{}}>
                <span className="mb-4 font-weight-bold footer-heder">
                  Start Link conversation
                </span>
              </div>
              <div className="flex-grow-1 d-none d-md-block mx-sm-4">
                <hr className="start_address_under_line" />
              </div>
            </div>
            <div className="row ">
              <div className="col-11 start_address d-flex justify-space-between">
                <div className="">
                  <Link className="widget-list-link" to="tel: 000000000">
                    <span>
                      <i className="fa fa-phone m-2" />
                      000000000{" "}
                    </span>
                  </Link>
                </div>
                <div>
                  <Link
                    className="widget-list-link"
                    to="mailto: Copy@6amtech.com"
                  >
                    <span>
                      <i className="fa fa-envelope m-2" /> Copy@6amtech.com{" "}
                    </span>
                  </Link>
                </div>
                <div>
                  <Link
                    className="widget-list-link"
                    to=""
                  >
                    <span>
                      <i className="fa fa-user-o m-2" /> Support Ticket
                    </span>
                  </Link>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 ">
            <div className="row pl-2 d-flex align-items-center  justify-content-center justify-content-md-start">
              <div>
                <span className="mb-4 font-weight-bold footer-heder">
                  Address
                </span>
              </div>
              <div className="flex-grow-1 d-none d-md-block ml-3">
                <hr className="address_under_line" />
              </div>
            </div>
            <div className="pl-2">
              <span className="__text-14px text-white">
                <i className="fa fa-map-marker m-2 text-white" /> Kingston, New York 12401
                United States{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div style={{background:'#EA4335'}}>
<div class="container">
<div class="d-flex justify-content-between align-items-center flex-wrap">
<div class="mt-3">
<p class="text-left __text-16px text-white">CopyRight 6amTech@2023</p>
</div>
<div class="max-sm-100 justify-content-center d-flex flex-wrap mt-md-3 mt-0 mb-md-3 text-left">
<span class="social-media ">
<Link class="social-btn text-white sb-light sb-twitter mr-2 mb-2" target="_blank" to="">
<i class="fa fa-twitter" aria-hidden="true"></i>
</Link>
</span>
<span class="social-media ">
<Link class="social-btn text-white sb-light sb-linkedin mr-2 mb-2" target="_blank" to="">
<i class="fa fa-linkedin" aria-hidden="true"></i>
</Link>
</span>
<span class="social-media ">
<Link class="social-btn text-white sb-light sb-google-plus mr-2 mb-2" target="_blank" to="">
<i class="fa fa-google-plus-square" aria-hidden="true"></i>
</Link>
</span>
<span class="social-media ">
<Link class="social-btn text-white sb-light sb-pinterest mr-2 mb-2" target="_blank" to="">
<i class="fa fa-pinterest" aria-hidden="true"></i>
</Link>
</span>
<span class="social-media ">
<Link class="social-btn text-white sb-light sb-instagram mr-2 mb-2" target="_blank" to="">
<i class="fa fa-instagram" aria-hidden="true"></i>
</Link>
</span>
<span class="social-media ">
<Link class="social-btn text-white sb-light sb-facebook mr-2 mb-2" target="_blank" to="">
<i class="fa fa-facebook" aria-hidden="true"></i>
</Link>
</span>
</div>
<div class="d-flex __text-14px">
<div class="mr-3">
<Link class="widget-list-link" to="">Terms &amp; Conditions</Link>
</div>
<div>
<Link class="widget-list-link" to="">
Privacy Policy
</Link>
</div>
</div>
</div>
</div>

</div>
</footer>

    </>
  )
}

export default Footer