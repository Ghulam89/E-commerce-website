import React from "react";
import "./details.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CompnayDetails from "../../components/CompnayDetails";
import DetailSlider from "../../components/DetailSlider/DetailSlider";
import { AiFillStar } from "react-icons/ai";
const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <div className="__inline-23 bg-light">
  <div className="container-fluid px-2 px-md-5  pt-4 rtl" style={{ textAlign: "left" }}>
    <div className="row ">
      <div className="col-lg-9 col-12">
        <div className="row">
          <div className="col-lg-5 col-md-4 col-12">
            <DetailSlider/>
          </div>
          <div
            className="col-lg-7 col-md-8 col-12 mt-md-0 mt-sm-3"
            style={{ direction: "ltr" }}
          >
            <div className="details __h-100">
              <span className="mb-2 __inline-24">
                Women's long-sleeve lightweight french terry fleece quarter-zip
                top
              </span>
              <div className="d-flex flex-wrap align-items-center mb-2 pro">
                <span className="d-inline-block  align-middle mt-1 mr-md-2 mr-sm-0 pr-2 __color-FE961C">
                  5.00
                </span>
                <div className="star-rating ps-2" style={{ marginRight: 25 }}>
                <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                </div>
                <span className="font-regular font-for-tab d-inline-block font-size-sm text-body align-middle mt-1 ml-1 mr-md-2 mr-1 pl-md-2 pl-sm-1 pr-md-2 pr-sm-1">
                  1 Reviews
                </span>
                <span className="__inline-25" />
                <span className="font-regular font-for-tab d-inline-block font-size-sm text-body align-middle mt-1 ml-1 mr-md-2 mr-1 pl-md-2 pl-sm-1 pr-md-2 pr-sm-1">
                  27 Orders{" "}
                </span>
                <span className="__inline-25"> </span>
                <span className="font-regular font-for-tab d-inline-block font-size-sm text-body align-middle mt-1 ml-1 mr-md-2 mr-0 pl-md-2 pl-sm-1 pr-md-2 pr-sm-1 text-capitalize">
                  {" "}
                  0 Wish listed{" "}
                </span>
              </div>
              <div className="mb-3">
                <strike style={{ color: "#E96A6A" }} className="mr-3">
                  $500.0
                </strike>
                <span className="h3 font-weight-normal text-accent ">
                  $450.0
                </span>
                <span className="ml-2 __text-12px font-regular">
                  (<span>Tax : </span>
                  <span id="set-tax-amount">$25.0</span>)
                </span>
              </div>
              <form id="add-to-cart-form" className="mb-2">
                <input
                  type="hidden"
                  name="_token"
                
                />
                <input type="hidden" name="id" defaultValue={1} />
                <div className="position-relative mr-n4 mb-2">
                  <div className="flex-start d-flex">
                    <div className="product-description-label text-body">
                      Color:
                    </div>
                    <div>
                      <ul
                        className="list-inline checkbox-color mb-1 flex-start ml-2 d-flex"
                        style={{ paddingLeft: 0 }}
                      >
                        <div>
                          <li className="">
                           
                            <label
                              style={{ background: "#9966CC" }}
                              htmlFor="1-color-9966CC"
                              data-toggle="tooltip"
                           className="rounded-2"
                              data-original-title=""
                              title=""
                            >
                              <span className="outline" />
                            </label>
                          </li>
                        </div>
                        <div>
                          <li>
                           
                            <label
                              style={{ background: "#7FFFD4" }}
                              htmlFor="1-color-7FFFD4"
                              data-toggle="tooltip"
                            
                              className="rounded-2"
                              data-original-title=""
                              title=""
                            >
                              <span className="outline" />
                            </label>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="d-flex  mx-0">
                  <div className="product-description-label text-body pr-2">
                    size :
                  </div>
                  <div>
                    <ul
                      className="list-inline d-flex checkbox-alphanumeric checkbox-alphanumeric--style-1 mb-2 mx-1 d-flex"
                      style={{ paddingLeft: 0 }}
                    >
                      <div>
                        <li className="for-mobile-capacity border">
                          <span className="text-lg p-2 rounded-2"> L</span>
                        </li>
                      </div>
                      <div>
                      <li className="for-mobile-capacity border">
                          <span className="text-lg p-2 rounded-2">S</span>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="product-quantity d-flex flex-wrap align-items-center __gap-15">
                    <div className="d-flex align-items-center">
                      <div className="product-description-label text-body mt-2">
                        Quantity:
                      </div>
                      <div
                        className="d-flex justify-content-center align-items-center __w-160px"
                        style={{ color: "#3b71de" }}
                      >
                        <span className="input-group-btn">
                          <button
                            className="btn btn-number border-0 __p-10"
                            type="button"
                            data-type="minus"
                            data-field="quantity"
                            disabled="disabled"
                            style={{ color: "#3b71de" }}
                          >
                            -
                          </button>
                        </span>
                        <input
                          type="text"
                          name="quantity"
                          className="form-control input-number text-center cart-qty-field __inline-29"
                          placeholder={1}
                          defaultValue={1}
                          product-type="physical"
                          min={1}
                          max={1}
                        />
                        <span className="input-group-btn">
                          <button
                            className="btn btn-number __p-10"
                            type="button"
                            product-type="physical"
                            data-type="plus"
                            data-field="quantity"
                            style={{ color: "#3b71de" }}
                          >
                            +
                          </button>
                        </span>
                      </div>
                    </div>
                    <div id="chosen_price_div">
                      <div className="d-flex justify-content-center align-items-center mr-2">
                        <div className="product-description-label">
                          <strong>Total price</strong> :{" "}
                        </div>
                        &nbsp; <strong id="chosen_price">$475.0</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters d-none mt-2 flex-start d-flex">
                  <div className="col-12"></div>
                </div>
                <div className="__btn-grp mt-2 mb-3">
                  <button
                    className="btn btn-secondary element-center __iniline-26 btn-gap-right"
                    onclick="buy_now()"
                    type="button"
                  >
                    <span className="string-limit">Buy now</span>
                  </button>
                  <button
                    className="btn btn--primary element-center btn-gap-right"
                    
                    type="button"
                  >
                    <span className="string-limit">Add to cart</span>
                  </button>
                  <button
                    type="button"
                    onclick="addWishlist('1')"
                    className="btn __text-18px text-danger"
                  >
                    <i className="fa fa-heart-o " aria-hidden="true" />
                    <span className="countWishlist-1">0</span>
                  </button>
                </div>
              </form>
              <div
                style={{ textAlign: "left" }}
                className="sharethis-inline-share-buttons st-center st-has-labels  st-inline-share-buttons st-animated"
                id="st-1"
              >
                <div className="st-total ">
                  <span className="st-label">146</span><br/>
                  <span className="st-shares">Shares</span>
                </div>
                <div
                  className="st-btn st-first"
                  data-network="facebook"
                  style={{ display: "inline-block" }}
                >
                  <img
                    alt="facebook sharing button"
                    src="https://platform-cdn.sharethis.com/img/facebook.svg"
                  />
                  <span className="st-label">Share</span>
                </div>
                <div
                  className="st-btn"
                  data-network="twitter"
                  style={{ display: "inline-block" }}
                >
                  <img
                    alt="twitter sharing button"
                    src="https://platform-cdn.sharethis.com/img/twitter.svg"
                  />
                  <span className="st-label">Tweet</span>
                </div>
                <div
                  className="st-btn  st-remove-label"
                  data-network="pinterest"
                  style={{ display: "inline-block" }}
                >
                  <img
                    alt="pinterest sharing button"
                    src="https://platform-cdn.sharethis.com/img/pinterest.svg"
                  />
                  <span className="st-label">Pin</span>
                </div>
                <div
                  className="st-btn  st-remove-label"
                  data-network="email"
                  style={{ display: "inline-block" }}
                >
                  <img
                    alt="email sharing button"
                    src="https://platform-cdn.sharethis.com/img/email.svg"
                  />
                  <span className="st-label">Email</span>
                </div>
                <div
                  className="st-btn st-last  st-remove-label"
                  data-network="sharethis"
                  style={{ display: "inline-block" }}
                >
                  <img
                    alt="sharethis sharing button"
                    src="https://platform-cdn.sharethis.com/img/sharethis.svg"
                  />
                  <span className="st-label">Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mt-4 rtl col-12" style={{ textAlign: "left" }}>
            <div className="row">
              <div className="col-12">
                <div className=" mt-1">
                  <ul
                    className="nav nav-tabs d-flex justify-content-center __mt-35"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link __inline-27 active "
                        href="#overview"
                        data-bs-toggle="tab"
                        role="tab"
                      >
                        Overview
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link __inline-27"
                        href="#reviews"
                        data-bs-toggle="tab"
                        role="tab"
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                  <div className="px-4 pt-lg-3 pb-3 mb-3 mr-0 mr-md-2 bg-white __review-overview __rounded-10">
                    <div className="tab-content px-lg-3">
                      <div
                        className="tab-pane fade show active"
                        id="overview"
                        role="tabpanel"
                      >
                        <div className="row pt-2 specification">
                          <div className="text-body col-lg-12 col-md-12">
                            <p>60% Cotton, 40% Polyester</p>
                            <ul>
                              <li>Imported</li>
                              <li>Zipper closure</li>
                              <li>Machine Wash</li>
                              <li>
                                This quarter-zip up top in incredibly soft and
                                comfortable French terry fleece is a go-to for
                                an easy, casual look
                              </li>
                              <li>
                                Features long-sleeves, patch front kangaroo
                                pocket, high collar, and ribbing at the neck,
                                cuffs and hem
                              </li>
                              <li>
                                Everyday made better: we listen to customer
                                feedback and fine-tune every detail to ensure
                                quality, fit, and comfort
                              </li>
                            </ul>
                            <h2>Product details</h2>
                            <ul>
                              <li>
                                Package Dimensions :&nbsp;12.44 x 11.89 x 1.89
                                inches; 10.58 Ounces
                              </li>
                              <li>Item model number :&nbsp;AE18111988</li>
                              <li>Department :&nbsp;Womens</li>
                              <li>
                                Date First Available :&nbsp;February 6, 2020
                              </li>
                              <li>Manufacturer :&nbsp;Amazon Essentials</li>
                              <li>ASIN :&nbsp;B07W6NPBVV</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="reviews"
                        role="tabpanel"
                      >
                        <div className="row pt-2 pb-3">
                          <div className="col-lg-4 col-md-5 ">
                            <div className=" row d-flex justify-content-center align-items-center">
                              <div className="col-12 d-flex justify-content-center align-items-center">
                                <h2 className="overall_review mb-2 __inline-28">
                                  1
                                </h2>
                              </div>
                              <div className="d-flex justify-content-center align-items-center star-rating ">
                                <i className="czi-star-filled font-size-sm text-accent mr-1" />
                                <i className="czi-star-filled font-size-sm text-accent mr-1" />
                                <i className="czi-star-filled font-size-sm text-accent mr-1" />
                                <i className="czi-star-filled font-size-sm text-accent mr-1" />
                                <i className="czi-star-filled font-size-sm text-accent mr-1" />
                              </div>
                              <div className="col-12 d-flex justify-content-center align-items-center mt-2">
                                <span className="text-center">1 Ratings</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-7 pt-sm-3 pt-md-0">
                            <div className="d-flex align-items-center mb-2 font-size-sm">
                              <div className="__rev-txt">
                                <span className="d-inline-block align-middle text-body">
                                  Excellent
                                </span>
                              </div>
                              <div className="w-0 flex-grow">
                                <div className="progress text-body __h-5px">
                                  <div
                                    className="progress-bar "
                                    role="progressbar"
                                    style={{
                                      backgroundColor: "#3b71de !important",
                                      width: "100%"
                                    }}
                                    aria-valuenow={60}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="col-1 text-body">
                                <span className=" ml-3 float-right ">1</span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mb-2 text-body font-size-sm">
                              <div className="__rev-txt">
                                <span className="d-inline-block align-middle ">
                                  Good
                                </span>
                              </div>
                              <div className="w-0 flex-grow">
                                <div className="progress __h-5px">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      backgroundColor: "#a7e453",
                                      width: "0%"
                                    }}
                                    aria-valuenow={27}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="col-1">
                                <span className="ml-3 float-right">0</span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mb-2 text-body font-size-sm">
                              <div className="__rev-txt">
                                <span className="d-inline-block align-middle ">
                                  Average
                                </span>
                              </div>
                              <div className="w-0 flex-grow">
                                <div className="progress __h-5px">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      backgroundColor: "#ffda75",
                                      width: "0%"
                                    }}
                                    aria-valuenow={17}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="col-1">
                                <span className="ml-3 float-right">0</span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mb-2 text-body font-size-sm">
                              <div className="__rev-txt ">
                                <span className="d-inline-block align-middle">
                                  Below Average
                                </span>
                              </div>
                              <div className="w-0 flex-grow">
                                <div className="progress __h-5px">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      backgroundColor: "#fea569",
                                      width: "0%"
                                    }}
                                    aria-valuenow={9}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="col-1">
                                <span className="ml-3 float-right">0</span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center text-body font-size-sm">
                              <div className="__rev-txt">
                                <span className="d-inline-block align-middle ">
                                  Poor
                                </span>
                              </div>
                              <div className="w-0 flex-grow">
                                <div className="progress __h-5px">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      backgroundColor: "#3b71de !important",
                                      backbroundColor: "#3b71de",
                                      width: "0%"
                                    }}
                             
                                  />
                                </div>
                              </div>
                              <div className="col-1">
                                <span className="ml-3 float-right">0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row pb-4 mb-3">
                          <div className="__inline-30">
                            <span className="text-capitalize">
                              Product Review
                            </span>
                          </div>
                        </div>
                        <div className="row pb-4">
                          <div className="col-12" id="product-review-list">
                            <div className="p-2" style={{ marginBottom: 20 }}>
                              <div className="row product-review d-flex ">
                                <div className="col-md-3 d-flex mb-3 pr-5">
                                  <div className="media media-ie-fix  mr-4 pr-2">
                                    <img
                                      className="rounded-circle __img-64 object-cover"
                                      onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                                      src="https://6valley.6amtech.com/storage/app/public/profile/2022-04-20-625fa7d513aa5.png"
                                      alt="fatema"
                                    />
                                    <div className="media-body pl-3 text-body">
                                      <span
                                        className="font-size-sm mb-0 text-body"
                                        style={{
                                          fontWeight: 700,
                                          fontSize: 12
                                        }}
                                      >
                                        fatema
                                      </span>
                                      <div className="d-flex ">
                                        <div className=" mr-2">
                                          <i className="sr-star czi-star-filled active" />
                                        </div>
                                        <div
                                          className="text-body"
                                          style={{
                                            fontWeight: 400,
                                            fontSize: 15
                                          }}
                                        >
                                          5/5{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-7">
                                  <p
                                    className="mb-3 text-body __text-sm"
                                    style={{ wordWrap: "break-word" }}
                                  >
                                    hwxjdk. kg
                                  </p>
                                  <img
                                    
                                    className="cz-image-zoom __img-70 rounded border"
                                    onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                                    src="https://6valley.6amtech.com/storage/app/public/review/2022-04-23-6263cbf7ede63.png"
                                    alt="Product review"
                                  />
                                  <img
                                   
                                    src="https://6valley.6amtech.com/storage/app/public/review/2022-04-23-6263cbf7eede3.png"
                                    alt="Product review"
                                  />
                                  <img
                                    onclick="showInstaImage('https://6valley.6amtech.com/storage/app/public/review/2022-04-23-6263cbf7eee8e.png')"
                                    className="cz-image-zoom __img-70 rounded border"
                                    onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                                    src="https://6valley.6amtech.com/storage/app/public/review/2022-04-23-6263cbf7eee8e.png"
                                    alt="Product review"
                                  />
                                </div>
                                <div className="col-md-2 text-body">
                                  <span
                                    style={{
                                      float: "right",
                                      fontWeight: 400,
                                      fontSize: 13
                                    }}
                                  >
                                    Apr-23-2022
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 ">
        <div className="product-details-shipping-details">
          <div className="shipping-details-bottom-border">
            <div className="px-3 py-3">
              <img
                className="mr-2 __img-20"
                src="https://6valley.6amtech.com/public/assets/front-end/png/Payment.png"
                alt=""
              />
              <span>Safe Payment</span>
            </div>
          </div>
          <div className="shipping-details-bottom-border">
            <div className="px-3 py-3">
              <img
                className="mr-2 __img-20"
                src="https://6valley.6amtech.com/public/assets/front-end/png/money.png"
                alt=""
              />
              <span>7 Days Return Policy</span>
            </div>
          </div>
          <div className="shipping-details-bottom-border">
            <div className="px-3 py-3">
              <img
                className="mr-2 __img-20"
                src="https://6valley.6amtech.com/public/assets/front-end/png/Genuine.png"
                alt=""
              />
              <span>100% Authentic Products</span>
            </div>
          </div>
        </div>
        <div className="__inline-31">
          <div className="row d-flex justify-content-between">
            <div className="col-9 ">
              <div className="row d-flex">
                <div className="">
                  <img
                    className="__inline-32 rounded-0"
                    src={require('../../assets/image/company/ashh.png')}
                    alt="" width='100%'
                  />
                </div>
                
              </div>
            </div>
            <div className="col-12 mt-2">
              <div className="row d-flex justify-content-between">
                <div className="col-6 ">
                  <div
                    className="d-flex justify-content-center align-items-center rounded __h-79px"
                    style={{ background: "#3b71de10" }}
                  >
                    <div className="text-center">
                      <span
                        className="font-bold __text-26px"
                        style={{ color: "#3b71de" }}
                      >
                        5
                      </span>
                      <br />
                      <span className="__text-12px">Reviews</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="d-flex justify-content-center align-items-center rounded __h-79px"
                    style={{ background: "#3b71de10" }}
                  >
                    <div className="text-center">
                      <span
                        className="font-bold __text-26px"
                        style={{ color: "#3b71de" }}
                      >
                        16
                      </span>
                      <br />
                      <span className="__text-12px">Products</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-2">
              <div className="row">
                <a
                  href="https://6valley.6amtech.com/shopView/0"
                  className="text-center d-block w-100"
                >
                  <button
                    className="btn text-center d-block w-100"
                    style={{ background: "#3b71de", color: "#ffffff" }}
                  >
                    <i className="fa fa-shopping-bag" aria-hidden="true" />
                    Visit Store
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 py-3">
          <div className="row d-flex justify-content-center">
            <span className="text-center __text-16px font-bold">
              More From The Store
            </span>
          </div>
        </div>
        <div>
          <div
            className="flash_deal_product rtl"
            style={{ cursor: "pointer", height: 155, marginBottom: 10 }}
            onclick="location.href='https://6valley.6amtech.com/product/premium-business-presentation-file-TZy6AS'"
          >
            <div className="d-flex" style={{ position: "absolute", zIndex: 2 }}>
              <span
                className="for-discoutn-value p-1 pl-2 pr-2"
                style={{ borderRadius: "5px 0px" }}
              >
                10% Off
              </span>
            </div>
            <div className=" d-flex" style={{}}>
              <div
                className=" d-flex align-items-center justify-content-center"
                style={{ paddingLeft: 14, paddingTop: 14 }}
              >
                <div
                  className="flash-deals-background-image"
                  style={{ background: "#3b71de10" }}
                >
                  <img
                    className="__img-125px"
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-6346600bc477a.png"
                    onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                  />
                </div>
              </div>
              <div className=" flash_deal_product_details pl-3 pr-3 pr-1 d-flex align-items-center">
                <div>
                  <div>
                    <span className="flash-product-title">
                      Premium Business presentation file
                    </span>
                  </div>
                  <div className="flash-product-review">
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <label className="badge-style2">( 0 )</label>
                  </div>
                  <div>
                    <strike
                      style={{
                        fontSize: "12px!important",
                        color: "#E96A6A!important"
                      }}
                    >
                      $500.0
                    </strike>
                  </div>
                  <div className="flash-product-price">$450.0</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flash_deal_product rtl"
            style={{ cursor: "pointer", height: 155, marginBottom: 10 }}
            onclick="location.href='https://6valley.6amtech.com/product/background-music-for-commercial-use-FlBYIA'"
          >
            <div className="d-flex" style={{ position: "absolute", zIndex: 2 }}>
              <span
                className="for-discoutn-value p-1 pl-2 pr-2"
                style={{ borderRadius: "5px 0px" }}
              >
                10% Off
              </span>
            </div>
            <div className=" d-flex" style={{}}>
              <div
                className=" d-flex align-items-center justify-content-center"
                style={{ paddingLeft: 14, paddingTop: 14 }}
              >
                <div
                  className="flash-deals-background-image"
                  style={{ background: "#3b71de10" }}
                >
                  <img
                    className="__img-125px"
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-63465e94d00be.png"
                    onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                  />
                </div>
              </div>
              <div className=" flash_deal_product_details pl-3 pr-3 pr-1 d-flex align-items-center">
                <div>
                  <div>
                    <span className="flash-product-title">
                      Background Music for commercial use
                    </span>
                  </div>
                  <div className="flash-product-review">
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <label className="badge-style2">( 0 )</label>
                  </div>
                  <div>
                    <strike
                      style={{
                        fontSize: "12px!important",
                        color: "#E96A6A!important"
                      }}
                    >
                      $600.0
                    </strike>
                  </div>
                  <div className="flash-product-price">$540.0</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flash_deal_product rtl"
            style={{ cursor: "pointer", height: 155, marginBottom: 10 }}
            onclick="location.href='https://6valley.6amtech.com/product/lorem-ipsum-book-best-seller-6EkTy6'"
          >
            <div className="d-flex" style={{ position: "absolute", zIndex: 2 }}>
              <span
                className="for-discoutn-value p-1 pl-2 pr-2"
                style={{ borderRadius: "5px 0px" }}
              >
                5% Off
              </span>
            </div>
            <div className=" d-flex" style={{}}>
              <div
                className=" d-flex align-items-center justify-content-center"
                style={{ paddingLeft: 14, paddingTop: 14 }}
              >
                <div
                  className="flash-deals-background-image"
                  style={{ background: "#3b71de10" }}
                >
                  <img
                    className="__img-125px"
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-63465e0f3afe7.png"
                    onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                  />
                </div>
              </div>
              <div className=" flash_deal_product_details pl-3 pr-3 pr-1 d-flex align-items-center">
                <div>
                  <div>
                    <span className="flash-product-title">
                      Lorem ipsum book best seller
                    </span>
                  </div>
                  <div className="flash-product-review">
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <label className="badge-style2">( 0 )</label>
                  </div>
                  <div>
                    <strike
                      style={{
                        fontSize: "12px!important",
                        color: "#E96A6A!important"
                      }}
                    >
                      $500.0
                    </strike>
                  </div>
                  <div className="flash-product-price">$475.0</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flash_deal_product rtl"
            style={{ cursor: "pointer", height: 155, marginBottom: 10 }}
            onclick="location.href='https://6valley.6amtech.com/product/ebook-ThqVSX'"
          >
            <div className="d-flex" style={{ position: "absolute", zIndex: 2 }}>
              <span
                className="for-discoutn-value p-1 pl-2 pr-2"
                style={{ borderRadius: "5px 0px" }}
              >
                2% Off
              </span>
            </div>
            <div className=" d-flex" style={{}}>
              <div
                className=" d-flex align-items-center justify-content-center"
                style={{ paddingLeft: 14, paddingTop: 14 }}
              >
                <div
                  className="flash-deals-background-image"
                  style={{ background: "#3b71de10" }}
                >
                  <img
                    className="__img-125px"
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-634658b41c766.png"
                    onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                  />
                </div>
              </div>
              <div className=" flash_deal_product_details pl-3 pr-3 pr-1 d-flex align-items-center">
                <div>
                  <div>
                    <span className="flash-product-title">eBook</span>
                  </div>
                  <div className="flash-product-review">
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <label className="badge-style2">( 0 )</label>
                  </div>
                  <div>
                    <strike
                      style={{
                        fontSize: "12px!important",
                        color: "#E96A6A!important"
                      }}
                    >
                      $600.0
                    </strike>
                  </div>
                  <div className="flash-product-price">$588.0</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flash_deal_product rtl"
            style={{ cursor: "pointer", height: 155, marginBottom: 10 }}
            onclick="location.href='https://6valley.6amtech.com/product/timex-marlin-stainless-steel-hand-wound-movement-Czd48g'"
          >
            <div className="d-flex" style={{ position: "absolute", zIndex: 2 }}>
              <span
                className="for-discoutn-value p-1 pl-2 pr-2"
                style={{ borderRadius: "5px 0px" }}
              >
                10% Off
              </span>
            </div>
            <div className=" d-flex" style={{}}>
              <div
                className=" d-flex align-items-center justify-content-center"
                style={{ paddingLeft: 14, paddingTop: 14 }}
              >
                <div
                  className="flash-deals-background-image"
                  style={{ background: "#3b71de10" }}
                >
                  <img
                    className="__img-125px"
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-21-6260fd9161efe.png"
                    onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                  />
                </div>
              </div>
              <div className=" flash_deal_product_details pl-3 pr-3 pr-1 d-flex align-items-center">
                <div>
                  <div>
                    <span className="flash-product-title">
                      Quartz wrist watch waterproof watch for Men and Women
                    </span>
                  </div>
                  <div className="flash-product-review">
                    <i className="sr-star czi-star-filled active" />
                    <i className="sr-star czi-star-filled active" />
                    <i className="sr-star czi-star-filled active" />
                    <i className="sr-star czi-star-filled active" />
                    <i className="sr-star czi-star-filled active" />
                    <label className="badge-style2">( 1 )</label>
                  </div>
                  <div>
                    <strike
                      style={{
                        fontSize: "12px!important",
                        color: "#E96A6A!important"
                      }}
                    >
                      $500.0
                    </strike>
                  </div>
                  <div className="flash-product-price">$450.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container  mb-3 rtl" style={{ textAlign: "left" }}>
    <div className="row flex-between">
      <div
        className="text-capitalize font-bold __text-30px"
        style={{ marginLeft: 5 }}
      >
        <span>Similar products</span>
      </div>
      <div className="view_all d-flex justify-content-center align-items-center">
        <div>
          <a
            className="text-capitalize view-all-text"
            style={{ color: "#3b71de !important", marginRight: 8 }}
            href="https://6valley.6amtech.com/products?id=11&data_from=category&page=1"
          >
            View all
            <i className="czi-arrow-right ml-1 mr-n1" />
          </a>
        </div>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-xl-2 col-sm-3 col-6 mb-4">
        <div className="product-single-hover">
          <div className="overflow-hidden position-relative">
            <div
              className=" inline_product clickable d-flex justify-content-center"
              style={{ background: "#3b71de10" }}
            >
              <div className="d-flex justify-content-end for-dicount-div-null">
                <span className="for-discoutn-value-null" />
              </div>
              <div className="d-flex d-block">
                <a href="https://6valley.6amtech.com/product/test-3-ibgkHB">
                  <img
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-23-62636369a0855.png"
                    onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                  />
                </a>
              </div>
            </div>
            <div className="single-product-details">
              <div className="text-left pl-3">
                <a href="https://6valley.6amtech.com/product/test-3-ibgkHB">
                  Ladies Winter Long Slee...
                </a>
              </div>
              <div className="rating-show justify-content-between text-center">
                <span className="d-inline-block font-size-sm text-body">
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <label className="badge-style">( 3 )</label>
                </span>
              </div>
              <div className="justify-content-between text-center">
                <div className="product-price text-center">
                  <span className="text-accent">$5,000.0</span>
                </div>
              </div>
            </div>
            <div className="text-center quick-view">
              <a
                className="btn btn--primary btn-sm"
                href="https://6valley.6amtech.com/product/test-3-ibgkHB"
              >
                <i className="czi-forward align-middle mr-1" />
                View
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-sm-3 col-6 mb-4">
        <div className="product-single-hover">
          <div className="overflow-hidden position-relative">
            <div
              className=" inline_product clickable d-flex justify-content-center"
              style={{ background: "#3b71de10" }}
            >
              <div className="d-flex">
                <span className="for-discoutn-value p-1 pl-2 pr-2">
                  10% Off
                </span>
              </div>
              <div className="d-flex d-block">
                <a href="https://6valley.6amtech.com/product/womens-shoes-Cg8NFh">
                  <img
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-6346670e3427e.png"
                    onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                  />
                </a>
              </div>
            </div>
            <div className="single-product-details">
              <div className="text-left pl-3">
                <a href="https://6valley.6amtech.com/product/womens-shoes-Cg8NFh">
                  women's shoes
                </a>
              </div>
              <div className="rating-show justify-content-between text-center">
                <span className="d-inline-block font-size-sm text-body">
                  <i
                    className="sr-star czi-star"
                    style={{ color: "#fea569 !important" }}
                  />
                  <i
                    className="sr-star czi-star"
                    style={{ color: "#fea569 !important" }}
                  />
                  <i
                    className="sr-star czi-star"
                    style={{ color: "#fea569 !important" }}
                  />
                  <i
                    className="sr-star czi-star"
                    style={{ color: "#fea569 !important" }}
                  />
                  <i
                    className="sr-star czi-star"
                    style={{ color: "#fea569 !important" }}
                  />
                  <label className="badge-style">( 0 )</label>
                </span>
              </div>
              <div className="justify-content-between text-center">
                <div className="product-price text-center">
                  <strike
                    style={{
                      fontSize: "12px!important",
                      color: "#E96A6A!important"
                    }}
                  >
                    $5,000.0
                  </strike>
                  <br />
                  <span className="text-accent">$4,500.0</span>
                </div>
              </div>
            </div>
            <div className="text-center quick-view">
              <a
                className="btn btn--primary btn-sm"
                href="https://6valley.6amtech.com/product/womens-shoes-Cg8NFh"
              >
                <i className="czi-forward align-middle mr-1" />
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade rtl"
    id="show-modal-view"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="show-modal-image"
    aria-hidden="true"
    style={{ textAlign: "left" }}
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body flex justify-content-center">
          <button
            className="btn btn-default __inline-33"
            style={{ right: "-7px" }}
            data-dismiss="modal"
          >
            <i className="fa fa-close" />
          </button>
          <img className="element-center" id="attachment-view" src="" />
        </div>
      </div>
    </div>
  </div>
</div>

      <CompnayDetails />
      <Footer />
    </>
  );
};

export default ProductDetails;
