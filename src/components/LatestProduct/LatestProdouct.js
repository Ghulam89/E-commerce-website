import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import DetailSlider from "../DetailSlider/DetailSlider";
const LatestProdouct = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container-fluid px-2 px-md-5 rtl">
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            Comic Book Pdf
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row g-3">
              <div className="col-lg-6 col-md-6">
                 <DetailSlider/>
              </div>
              {/* Product details*/}
              <div className="col-lg-6 col-md-6">
                <div className="details __h-100">
                  <Link to="/product_details" className="h3 mb-2 product-title">
                    Comic book pdf
                  </Link>
                  <div className="d-flex flex-wrap align-items-center mb-2 pro">
                    <div className="d-flex flex-wrap align-items-center">
                      <span className="d-inline-block font-size-sm text-body align-middle mt-1 mr-2 pr-2">
                        0
                      </span>
                      <div className="star-rating">
                        <i>
                          <AiFillStar />
                        </i>
                        <i>
                          <AiFillStar />
                        </i>
                        <i>
                          <AiFillStar />
                        </i>
                        <i>
                          <AiFillStar />
                        </i>
                        <i>
                          <AiFillStar />
                        </i>
                      </div>
                      <span className="d-inline-block font-size-sm text-body align-middle mt-1 ml-1 mr-2 pl-2 pr-2">
                        0 Reviews
                      </span>
                      <span
                        style={{
                          width: 0,
                          height: 10,
                          border: "0.5px solid #707070",
                          marginTop: 6,
                        }}
                      />
                      <span className="d-inline-block font-size-sm text-body align-middle mt-1 ml-1 mr-2 pl-2 pr-2">
                        1 Orders
                      </span>
                      <span
                        style={{
                          width: 0,
                          height: 10,
                          border: "0.5px solid #707070",
                          marginTop: 6,
                        }}
                      >
                        {" "}
                      </span>
                      <span className="d-inline-block font-size-sm text-body align-middle mt-1 ml-1 mr-2 pl-2 pr-2">
                        {" "}
                        0 Wishlist
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="h3 font-weight-normal text-accent mr-1">
                      $450.0
                    </span>
                    <strike
                      style={{
                        fontSize: "12px!important",
                        color: "grey!important",
                      }}
                    >
                      $500.0
                    </strike>
                  </div>
                  <div className="d-flex mb-3">
                    <div>
                      <strong>Discount : </strong>
                    </div>
                    <div>
                      <strong id="set-discount-amount" className="mx-2">
                        $50.0
                      </strong>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div>
                      <strong>Tax : </strong>
                    </div>
                    <div>
                      <strong id="set-tax-amount" className="mx-2">
                        $25.0
                      </strong>
                    </div>
                  </div>
                  <form id="add-to-cart-form" className="mb-2">
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="e5naR9MWkDK1tsY7Z67AJSdTZK4A8LLCqM7CNT58"
                    />{" "}
                    <input type="hidden" name="id" defaultValue={54} />
                    <div className="position-relative mr-n4 mb-3"></div>
                    {/* Quantity + Add to cart */}
                    <div className="d-flex __gap-6 mt-0">
                      <div className="product-description-label mt-2 mr-2">
                        Quantity:
                      </div>
                      <div className="product-quantity d-flex align-items-center">
                        <div
                          className="input-group input-group--style-2 pr-3"
                          style={{ width: 160 }}
                        >
                          <span className="input-group-btn">
                            <button
                              className="btn border-0 btn-number"
                              type="button"
                              data-type="minus"
                              data-field="quantity"
                              disabled="disabled"
                              style={{ padding: 10 }}
                            >
                              -
                            </button>
                          </span>
                          <input
                            type="text"
                            name="quantity"
                            className="form-control py-2 input-number text-center cart-qty-field"
                            placeholder={1}
                            defaultValue={1}
                            product-type="digital"
                            min={1}
                            max={-1}
                          />
                          <span className="input-group-btn">
                            <button
                              className="btn btn-number"
                              product-type="digital"
                              type="button"
                              data-type="plus"
                              data-field="quantity"
                              style={{ padding: 10 }}
                            >
                              +
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-flex flex-wrap mt-3 __gap-15"
                      id="chosen_price_div"
                    >
                      <div>
                        <div className="product-description-label">
                          Total Price:
                        </div>
                      </div>
                      <div>
                        <div className="product-price">
                          <strong id="chosen_price">$475.0</strong>
                        </div>
                      </div>
                      <div className="col-12"></div>
                    </div>
                    <div className="__btn-grp align-items-center mt-2">
                      <button className="btn btn-secondary" type="button">
                        Buy now
                      </button>
                      <button
                        className="btn btn--primary string-limit"
                        onclick="addToCart()"
                        type="button"
                      >
                        Add to cart
                      </button>
                      <button
                        type="button"
                        onclick="addWishlist('54')"
                        className="text-danger btn string-limit"
                      >
                        <i className="fa fa-heart-o mr-2" aria-hidden="true" />
                        <span className="countWishlist-54">0</span>
                      </button>
                    </div>
                  </form>
                  {/* Product panels*/}
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <div className="row g-4 pt-2 mt-0 mb-4 pb-2 __deal-of">
          <div className="col-xl-3 col-md-4">
            <div
              className="deal_of_the_day h-100"
              style={{ background: "#DE3B3B" }}
            >
              <div className="d-flex justify-content-center align-items-center __w-70p mx-auto">
                <h1 className="align-items-center text-white">
                  {" "}
                  Deal of the day
                </h1>
              </div>
              <div className="recomanded-product-card">
                <div className="d-flex justify-content-center align-items-center __pt-20 __m-20-r">
                  <img
                    className="__rounded-top"
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-19-625e6fb8d4217.png"
                    onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                    alt=""
                  />
                </div>
                <div className="__i-1">
                  <div className="text-left __p-20px">
                    <div className="rating-show">
                      <h5
                        className="font-semibold"
                        style={{ color: "#3b71de" }}
                      >
                        Artificial Leather Shoes for M...
                      </h5>
                      <span className="d-inline-block d-flex font-size-sm text-body">
                        <i className=" __color-fea569">
                          <AiFillStar />
                        </i>
                        <i className=" __color-fea569">
                          <AiFillStar />
                        </i>
                        <i className=" __color-fea569">
                          <AiFillStar />
                        </i>
                        <i className=" __color-fea569">
                          <AiFillStar />
                        </i>
                        <i className=" __color-fea569">
                          <AiFillStar />
                        </i>

                        <label className="badge-style">( 0 )</label>
                      </span>
                    </div>
                    <div className="">
                      <strike className="__text-12px __color-E96A6A __pl-2">
                        $55.0
                      </strike>
                      <span className="text-accent __text-22px __m-10px">
                        $49.5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recomanded-buy-button">
                <button
                  className="buy_btn btn--secondary btn bg-white"
                  style={{ color: "#3b71de" }}
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-md-8 mt-2">
            <div className="latest-product-margin">
              <div className="d-flex justify-content-between">
                <div className="text-center">
                  <span className="for-feature-title __text-22px font-bold text-center">
                    Latest Products
                  </span>
                </div>
                <div className="mr-1">
                  <Link
                    className="text-capitalize view-all-text"
                    to="/product_details"
                  >
                    View all
                    <i className="czi-arrow-right ml-1 mr-n1" />
                  </Link>
                </div>
              </div>
              <div className="row mt-0 g-3">
                <div className="col-xl-3 col-sm-4 col-md-6 col-lg-4 col-6">
                  <div>
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
                            <Link to="/product_details">
                              <img
                                src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-634686f48bade.png"
                                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="single-product-details">
                          <div className="text-left pl-3">
                            <Link to="/product_details">Comic book pdf</Link>
                          </div>
                          <div className="rating-show justify-content-between text-center ps-3">
                            <span className="d-inline-block font-size-sm text-body">
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <label className="badge-style">( 0 )</label>
                            </span>
                          </div>
                          <div className="justify-content-between text-center">
                            <div className="product-price text-center">
                              <strike
                                style={{
                                  fontSize: "12px!important",
                                  color: "#E96A6A!important",
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
                          <Link
                            className="btn btn--primary btn-sm"
                            style={{
                              marginTop: 0,
                              paddingTop: 5,
                              paddingBottom: 5,
                              paddingLeft: 10,
                              paddingRight: 10,
                            }}
                            to="javascript:"
                            onClick={() => setShow(true)}
                          >
                            <i className="czi-eye align-middle mr-1" />
                            Quick View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-md-6 col-lg-4 col-6">
                  <div>
                    <div className="product-single-hover">
                      <div className="overflow-hidden position-relative">
                        <div
                          className=" inline_product clickable d-flex justify-content-center"
                          style={{ background: "#3b71de10" }}
                        >
                          <div className="d-flex">
                            <span className="for-discoutn-value p-1 pl-2 pr-2">
                              $60.0 Off
                            </span>
                          </div>
                          <div className="d-flex d-block">
                            <Link to="https://6valley.6amtech.com/product/running-shoes-CoYhre">
                              <img
                                src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-634686cbac778.png"
                                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="single-product-details">
                          <div className="text-left pl-3">
                            <Link to="/product_details">Running Shoes</Link>
                          </div>
                          <div className="rating-show justify-content-between text-center">
                            <span className="d-inline-block font-size-sm text-body">
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <label className="badge-style">( 0 )</label>
                            </span>
                          </div>
                          <div className="justify-content-between text-center">
                            <div className="product-price text-center">
                              <strike
                                style={{
                                  fontSize: "12px!important",
                                  color: "#E96A6A!important",
                                }}
                              >
                                $990.0
                              </strike>
                              <br />
                              <span className="text-accent">$930.0</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center quick-view">
                          <Link
                            className="btn btn--primary btn-sm"
                            style={{
                              marginTop: 0,
                              paddingTop: 5,
                              paddingBottom: 5,
                              paddingLeft: 10,
                              paddingRight: 10,
                            }}
                            to="javascript:"
                            onclick="quickView('53')"
                          >
                            <i className="czi-eye align-middle mr-1" />
                            Quick View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-md-6 col-lg-4 col-6">
                  <div>
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
                            <Link to="/product_details">
                              <img
                                src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-63468686d035e.png"
                                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="single-product-details">
                          <div className="text-left pl-3">
                            <Link to="/product_details">
                              Cooking Recipe Book
                            </Link>
                          </div>
                          <div className="rating-show justify-content-between text-center">
                            <span className="d-inline-block font-size-sm text-body">
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <label className="badge-style">( 0 )</label>
                            </span>
                          </div>
                          <div className="justify-content-between text-center">
                            <div className="product-price text-center">
                              <strike
                                style={{
                                  fontSize: "12px!important",
                                  color: "#E96A6A!important",
                                }}
                              >
                                $400.0
                              </strike>
                              <br />
                              <span className="text-accent">$360.0</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center quick-view">
                          <Link
                            className="btn btn--primary btn-sm"
                            style={{
                              marginTop: 0,
                              paddingTop: 5,
                              paddingBottom: 5,
                              paddingLeft: 10,
                              paddingRight: 10,
                            }}
                            to="javascript:"
                            onclick="quickView('52')"
                          >
                            <i className="czi-eye align-middle mr-1" />
                            Quick View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-md-6 col-lg-4 col-6">
                  <div>
                    <div className="product-single-hover">
                      <div className="overflow-hidden position-relative">
                        <div
                          className=" inline_product clickable d-flex justify-content-center"
                          style={{ background: "#3b71de10" }}
                        >
                          <div className="d-flex">
                            <span className="for-discoutn-value p-1 pl-2 pr-2">
                              2% Off
                            </span>
                          </div>
                          <div className="d-flex d-block">
                            <Link to="/product_details">
                              <img
                                src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-6346833cd4973.png"
                                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="single-product-details">
                          <div className="text-left pl-3">
                            <Link to="/product_details">Ladies Bag</Link>
                          </div>
                          <div className="rating-show justify-content-between text-center">
                            <span className="d-inline-block font-size-sm text-body">
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <label className="badge-style">( 0 )</label>
                            </span>
                          </div>
                          <div className="justify-content-between text-center">
                            <div className="product-price text-center">
                              <strike
                                style={{
                                  fontSize: "12px!important",
                                  color: "#E96A6A!important",
                                }}
                              >
                                $670.0
                              </strike>
                              <br />
                              <span className="text-accent">$656.6</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center quick-view">
                          <Link
                            className="btn btn--primary btn-sm"
                            style={{
                              marginTop: 0,
                              paddingTop: 5,
                              paddingBottom: 5,
                              paddingLeft: 10,
                              paddingRight: 10,
                            }}
                            to="javascript:"
                            onclick="quickView('51')"
                          >
                            <i className="czi-eye align-middle mr-1" />
                            Quick View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-md-6 col-lg-4 col-6">
                  <div>
                    <div className="product-single-hover">
                      <div className="overflow-hidden position-relative">
                        <div
                          className=" inline_product clickable d-flex justify-content-center"
                          style={{ background: "#3b71de10" }}
                        >
                          <div className="d-flex">
                            <span className="for-discoutn-value p-1 pl-2 pr-2">
                              $800.0 Off
                            </span>
                          </div>
                          <div className="d-flex d-block">
                            <Link to="/product_details">
                              <img
                                src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-634682498e524.png"
                                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="single-product-details">
                          <div className="text-left pl-3">
                            <Link to="/product_details">3USB Head Phone</Link>
                          </div>
                          <div className="rating-show justify-content-between text-center">
                            <span className="d-inline-block font-size-sm text-body">
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <label className="badge-style">( 0 )</label>
                            </span>
                          </div>
                          <div className="justify-content-between text-center">
                            <div className="product-price text-center">
                              <strike
                                style={{
                                  fontSize: "12px!important",
                                  color: "#E96A6A!important",
                                }}
                              >
                                $5,000.0
                              </strike>
                              <br />
                              <span className="text-accent">$4,200.0</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center quick-view">
                          <Link
                            className="btn btn--primary btn-sm"
                            style={{
                              marginTop: 0,
                              paddingTop: 5,
                              paddingBottom: 5,
                              paddingLeft: 10,
                              paddingRight: 10,
                            }}
                            to="javascript:"
                            onclick="quickView('50')"
                          >
                            <i className="czi-eye align-middle mr-1" />
                            Quick View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-md-6 col-lg-4 col-6">
                  <div>
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
                            <Link to="/product_details">
                              <img
                                src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-6346670e3427e.png"
                                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="single-product-details">
                          <div className="text-left pl-3">
                            <Link to="/product_details">women's shoes</Link>
                          </div>
                          <div className="rating-show justify-content-between text-center">
                            <span className="d-inline-block font-size-sm text-body">
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <label className="badge-style">( 0 )</label>
                            </span>
                          </div>
                          <div className="justify-content-between text-center">
                            <div className="product-price text-center">
                              <strike
                                style={{
                                  fontSize: "12px!important",
                                  color: "#E96A6A!important",
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
                          <Link
                            className="btn btn--primary btn-sm"
                            style={{
                              marginTop: 0,
                              paddingTop: 5,
                              paddingBottom: 5,
                              paddingLeft: 10,
                              paddingRight: 10,
                            }}
                            to="javascript:"
                            onclick="quickView('49')"
                          >
                            <i className="czi-eye align-middle mr-1" />
                            Quick View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-md-6 col-lg-4 col-6">
                  <div>
                    <div className="product-single-hover">
                      <div className="overflow-hidden position-relative">
                        <div
                          className=" inline_product clickable d-flex justify-content-center"
                          style={{ background: "#3b71de10" }}
                        >
                          <div className="d-flex">
                            <span className="for-discoutn-value p-1 pl-2 pr-2">
                              2% Off
                            </span>
                          </div>
                          <div className="d-flex d-block">
                            <Link to="/product_details">
                              <img
                                src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-6346658c4c888.png"
                                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="single-product-details">
                          <div className="text-left pl-3">
                            <Link to="/product_details">
                              Application System
                            </Link>
                          </div>
                          <div className="rating-show justify-content-between text-center">
                            <span className="d-inline-block font-size-sm text-body">
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <label className="badge-style">( 0 )</label>
                            </span>
                          </div>
                          <div className="justify-content-between text-center">
                            <div className="product-price text-center">
                              <strike
                                style={{
                                  fontSize: "12px!important",
                                  color: "#E96A6A!important",
                                }}
                              >
                                $5,000.0
                              </strike>
                              <br />
                              <span className="text-accent">$4,900.0</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center quick-view">
                          <Link
                            className="btn btn--primary btn-sm"
                            style={{
                              marginTop: 0,
                              paddingTop: 5,
                              paddingBottom: 5,
                              paddingLeft: 10,
                              paddingRight: 10,
                            }}
                            to="javascript:"
                            onclick="quickView('48')"
                          >
                            <i className="czi-eye align-middle mr-1" />
                            Quick View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-md-6 col-lg-4 col-6">
                  <div>
                    <div className="product-single-hover">
                      <div className="overflow-hidden position-relative">
                        <div
                          className=" inline_product clickable d-flex justify-content-center"
                          style={{ background: "#3b71de10" }}
                        >
                          <div className="d-flex">
                            <span className="for-discoutn-value p-1 pl-2 pr-2">
                              $10.0 Off
                            </span>
                          </div>
                          <div className="d-flex d-block">
                            <Link to="/product_details">
                              <img
                                src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-6346638093eaf.png"
                                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="single-product-details">
                          <div className="text-left pl-3">
                            <Link to="/product_details">
                              Premium Business presen...
                            </Link>
                          </div>
                          <div className="rating-show justify-content-between text-center">
                            <span className="d-inline-block font-size-sm text-body">
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <i className=" __color-fea569">
                                <AiFillStar />
                              </i>
                              <label className="badge-style">( 2 )</label>
                            </span>
                          </div>
                          <div className="justify-content-between text-center">
                            <div className="product-price text-center">
                              <strike
                                style={{
                                  fontSize: "12px!important",
                                  color: "#E96A6A!important",
                                }}
                              >
                                $6,000.0
                              </strike>
                              <br />
                              <span className="text-accent">$5,990.0</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center quick-view">
                          <Link
                            className="btn btn--primary btn-sm"
                            style={{
                              marginTop: 0,
                              paddingTop: 5,
                              paddingBottom: 5,
                              paddingLeft: 10,
                              paddingRight: 10,
                            }}
                            to="javascript:"
                            onclick="quickView('47')"
                          >
                            <i className="czi-eye align-middle mr-1" />
                            Quick View
                          </Link>
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
    </>
  );
};

export default LatestProdouct;
