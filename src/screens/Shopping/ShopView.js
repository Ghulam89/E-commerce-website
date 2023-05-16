import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { AiFillStar } from 'react-icons/ai'
const ShopView = () => {
  return (
    <>
    <Navbar/>
      <div className="container-fluid px-5 pb-5 mb-2 mb-md-4 __inline-67">
  <div className="row rtl">
    <div className="col-lg-12 mt-2">
      <div className="bg-white">
        <img
          className="__shop-page-banner"
          src="https://6valley.6amtech.com/storage/app/public/shop/banner/2022-04-23-62640f469b357.png"
          onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
          alt=""
        />
      </div>
    </div>
    <div className="col-md-12 mt-2 rtl" style={{ textAlign: "left" }}>
      <a className="openbtn-tab __text-20px font-semibold">
        <div style={{ textAlign: "left" }} className="for-tab-display">
          
          ☰ Categories
        </div>
      </a>
    </div>
    <div className="col-lg-12 rtl" style={{ textAlign: "left" }}>
      <div className="__rounded-10 bg-white" style={{ paddingLeft: 5 }}>
        <div className="row d-flex justify-content-between seller-details">
          <div className="d-flex align-items-start p-2">
            <div className="">
              <div className="position-relative">
                <img
                  className="__inline-68"
                  src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f38e9ce54.png"
                  onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-8">
              <span className="ml-4 font-weight-bold ">Wellness Fair</span>
              <div className="ml-4">
                <div>
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star active __color-fea569" />
                  <i className="sr-star czi-star active __color-fea569" />(
                  <span className="ml-1">3</span>)
                </div>
                <div className="d-flex __text-12px">
                  <span>1 Reviews </span>
                  <span className="__inline-69" />
                  <span>14 Orders</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="mr-4">
              <div className="d-flex">
                <a
                  href=""
                  className="btn btn-block __inline-70"
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  Chat with seller
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="card-header">Write something</div>
            <div className="modal-body">
              <form
                action="https://6valley.6amtech.com/messages-store"
                method="post"
                id="chat-form"
              >
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="QUhEnyNB83lXRqakn3DeBMI3DCxQ9As8pPIxRbKI"
                />{" "}
                <input defaultValue={3} name="shop_id" hidden="" />
                <input defaultValue="3}" name="seller_id" hidden="" />
                <textarea
                  name="message"
                  className="form-control"
                  required=""
                  defaultValue={""}
                />
                <br />
                <button className="btn btn--primary text-white">Send</button>
              </form>
            </div>
            <div className="card-footer justify-content-between d-flex flex-wrap">
              <a
                href="https://6valley.6amtech.com/chat/seller"
                className="btn btn--primary"
              >
                Go to Chatbox
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row mt-1 mr-0 rtl">
    <div className="col-lg-3 mt-3  mr-0 pr-4">
      <aside className=" hidden-xs SearchParameters" id="SearchParameters">
        <div className=" rounded-lg " id="shop-sidebar">
          <div className="">
            <div className="widget widget-categories mb-4 ">
              <div>
                <div className="d-inline">
                  <h3 className="widget-title font-bold __text-18px d-inline">
                    Categories
                  </h3>
                </div>
              </div>
              <div className="accordion mt-2" id="shop-categories">
                <div className="card __inline-71">
                  <div className="card-header p-1 flex-between">
                    <div className="d-flex ">
                      <img
                        className="__inline-72 mr-2"
                        onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                        src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566cf5b061b.png"
                      />
                      <label
                        className="for-hover-lable cursor-pointer"
                        onclick="location.href='https://6valley.6amtech.com/shopView/3?category_id=27'"
                      >
                        Bags &amp; Shoes
                      </label>
                    </div>
                    <strong
                      className="pull-right for-brand-hover cursor-pointer"
                      onclick="$('#collapse-27').toggle(400);if($(this).hasClass('active')){
                                          $(this).removeClass('active');
                                          $(this).text('+')
                                      }else {$(this).addClass('active');
                                          $(this).text('-')}"
                    ></strong>
                  </div>
                  <div
                    className="card-body ml-2"
                    id="collapse-27"
                    style={{ display: "none" }}
                  ></div>
                </div>
                <div className="card __inline-71">
                  <div className="card-header p-1 flex-between">
                    <div className="d-flex ">
                      <img
                        className="__inline-72 mr-2"
                        onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                        src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566d207d809.png"
                      />
                      <label
                        className="for-hover-lable cursor-pointer"
                        onclick="location.href='https://6valley.6amtech.com/shopView/3?category_id=26'"
                      >
                        Phones &amp; Telecom
                      </label>
                    </div>
                    <strong
                      className="pull-right for-brand-hover cursor-pointer"
                      onclick="$('#collapse-26').toggle(400);if($(this).hasClass('active')){
                                          $(this).removeClass('active');
                                          $(this).text('+')
                                      }else {$(this).addClass('active');
                                          $(this).text('-')}"
                    ></strong>
                  </div>
                  <div
                    className="card-body ml-2"
                    id="collapse-26"
                    style={{ display: "none" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
   
    <div className="col-lg-9 product-div">
      <div className="row d-flex justify-content-end">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 pt-2 __dir-ltr">
          <form
            className=" md-form form-sm mt-0"
            method="get"
            action=""
          >
            <div className="input-group input-group-sm mb-3">
              <input
                type="text"
                className="form-control"
                name="product_name"
                style={{ textAlign: "left" }}
                placeholder="Search products from this store"
           
              />
              <div className="input-group-append">
                <button
                  type="submit"
                  className="input-group-text __bg-F3F5F9"
                  id="basic-addon2"
                >
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row" id="ajax-products">
        <div className=" col-lg-2 col-md-3 col-sm-4 col-6 col-lg-3 col-md-4 col-sm-4 col-6 mb-2 p-2">
          <div className="product-single-hover">
            <div className="overflow-hidden position-relative">
              <div
                className=" inline_product clickable d-flex justify-content-center"
                style={{
                  cursor: "pointer",
                  background: "#3b71de10",
                  borderRadius: "5px 5px 0px 0px"
                }}
              >
                <div className="d-flex" style={{ left: 8, top: 8 }}>
                  <span className="for-discoutn-value p-1 pl-2 pr-2">
                    10% Off
                  </span>
                </div>
                <div className="d-flex d-block">
                  <a href="">
                    <img
                      src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625f76257cdf2.png"
                      onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                    />
                  </a>
                </div>
              </div>
              <div className="single-product-details">
                <div className="text-left pl-3">
                  <a href="">
                    Classic Sneakers For Me...
                  </a>
                </div>
                <div className="rating-show justify-content-between text-center">
                  <span className="d-inline-block font-size-sm text-body">
                    <i className="sr-star czi-star-filled active" />
                    <i className="sr-star czi-star-filled active" />
                    <i className="sr-star czi-star-filled active" />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <i
                      className="sr-star czi-star"
                      style={{ color: "#fea569 !important" }}
                    />
                    <label className="badge-style">( 1 )</label>
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
                      $500.0
                    </strike>
                    <br />
                    <span className="text-accent">$450.0</span>
                  </div>
                </div>
              </div>
              <div className="text-center quick-view">
                <a
                  className="btn btn--primary btn-sm"
                  style={{
                    marginTop: 0,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10
                  }}
                  href="javascript:"
                  onclick="quickView('8')"
                >
                  <i className="czi-eye align-middle mr-1" />
                  Quick View
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-2 col-md-3 col-sm-4 col-6 col-lg-3 col-md-4 col-sm-4 col-6 mb-2 p-2">
          <div className="product-single-hover">
            <div className="overflow-hidden position-relative">
              <div
                className=" inline_product clickable d-flex justify-content-center"
                style={{
                  cursor: "pointer",
                  background: "#3b71de10",
                  borderRadius: "5px 5px 0px 0px"
                }}
              >
                <div className="d-flex" style={{ left: 8, top: 8 }}>
                  <span className="for-discoutn-value p-1 pl-2 pr-2">
                    10% Off
                  </span>
                </div>
                <div className="d-flex d-block">
                  <a href="">
                    <img
                      src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625fea103fa22.png"
                      onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                    />
                  </a>
                </div>
              </div>
              <div className="single-product-details">
                <div className="text-left pl-3">
                  <a href="">
                    Latest Cool headphone w...
                  </a>
                </div>
                <div className="rating-show justify-content-between text-center">
                  <span className="d-inline-block font-size-sm text-body">
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
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
                      $500.0
                    </strike>
                    <br />
                    <span className="text-accent">$450.0</span>
                  </div>
                </div>
              </div>
              <div className="text-center quick-view">
                <a
                  className="btn btn--primary btn-sm"
                  style={{
                    marginTop: 0,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10
                  }}
                  href="javascript:"
                  onclick="quickView('15')"
                >
                  <i className="czi-eye align-middle mr-1" />
                  Quick View
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <nav
            className="d-flex justify-content-between pt-2"
            aria-label="Page navigation"
            id="paginator-ajax"
          ></nav>
        </div>
      </div>
    </div>
  </div>
</div>
  <Footer/>
    </>
  )
}

export default ShopView