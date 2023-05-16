import React from 'react'
import { Link } from 'react-router-dom'

const WomanFashion = () => {
  return (
    <>
      <section className="container-fluid px-2 px-md-5 rtl pb-4">
  <div className="__p-20px rounded bg-white">
    <div className="flex-wrap __gap-6px flex-between pl-xl-4">
      <div className="category-product-view-title">
        <span
          className="for-feature-title float-left font-bold __text-20px text-uppercase"
          style={{ textAlign: "left" }}
        >
          Women's fashion
        </span>
      </div>
      <div className="category-product-view-all">
        <Link
          className="text-capitalize view-all-text "
          to="/product_details"
        >
          View all
          <i className="czi-arrow-right ml-1 mr-n1" />
        </Link>
      </div>
    </div>
    <div className="row mt-2 justify-content-between g-3">
      <div className="col-lg-3 col-md-12">
        <Link
          to="/product_details"
          className="cursor-pointer d-block h-100 __cate-product-side-img"
        >
          <img
            className="h-100 w-100"
            onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
            src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566b4deaba6.png"
          />
        </Link>
      </div>
      <div className="col-md-9 col-12 ">
        <div className="row">
          <div className="col-xl-3 col-sm-4 col-md-6 col-lg-4 col-6">
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
                    <Link
                      to="/product_details"
                      className="d-block"
                    >
                      <img
                        src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625fe69f72cce.png"
                        onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                      />
                    </Link>
                  </div>
                </div>
                <div className="single-product-details">
                  <div className="text-center">
                    <Link
                      to="/product_details"
                      style={{ fontWeight: 400}}
                    >
                      Women's long-sleev...
                    </Link>
                  </div>
                  <div className="rating-show justify-content-between text-center">
                    <span
                      className="d-inline-block font-size-sm text-body"
                      style={{ fontWeight: 400}}
                    >
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <label className="badge-style">( 1 )</label>
                    </span>
                  </div>
                  <div className="justify-content-between text-center">
                    <div
                      className="product-price text-center"
                      style={{ fontWeight: 400,  }}
                    >
                      <strike
                        style={{
                          
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
                  <Link
                    className="btn btn--primary btn-sm"
                    style={{
                      marginTop: 0,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 10,
                      paddingRight: 10
                    }}
                    to="javascript:"
                    
                  >
                    <i className="czi-eye align-middle mr-1" />
                    Quick View
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-4 col-md-6 col-lg-4 col-6">
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
                    <Link
                      to="/product_details"
                      className="d-block"
                    >
                      <img
                        src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625fe5a872824.png"
                        onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                      />
                    </Link>
                  </div>
                </div>
                <div className="single-product-details">
                  <div className="text-center">
                    <Link
                      to="/product_details"
                      style={{ fontWeight: 400, fontSize: 13 }}
                    >
                      New Fashionable Bo...
                    </Link>
                  </div>
                  <div className="rating-show justify-content-between text-center">
                    <span
                      className="d-inline-block font-size-sm text-body"
                      style={{ fontWeight: 400, fontSize: 10 }}
                    >
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
                    <div
                      className="product-price text-center"
                      style={{ fontWeight: 400, fontSize: 12 }}
                    >
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
                  <Link
                    className="btn btn--primary btn-sm"
                    style={{
                      marginTop: 0,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 10,
                      paddingRight: 10
                    }}
                    to="javascript:"
                    onclick="quickView('27')"
                  >
                    <i className="czi-eye align-middle mr-1" />
                    Quick View
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-4 col-md-6 col-lg-4 col-6">
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
                    <Link
                      to="/product_details"
                      className="d-block"
                    >
                      <img
                        src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-23-62636369a0855.png"
                        onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                      />
                    </Link>
                  </div>
                </div>
                <div className="single-product-details">
                  <div className="text-center">
                    <Link
                      to="/product_details"
                      style={{ fontWeight: 400, fontSize: 13 }}
                    >
                      Ladies Winter Long...
                    </Link>
                  </div>
                  <div className="rating-show justify-content-between text-center">
                    <span
                      className="d-inline-block font-size-sm text-body"
                      style={{ fontWeight: 400, fontSize: 10 }}
                    >
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <label className="badge-style">( 3 )</label>
                    </span>
                  </div>
                  <div className="justify-content-between text-center">
                    <div
                      className="product-price text-center"
                      style={{ fontWeight: 400, fontSize: 12 }}
                    >
                      <span className="text-accent">$5,000.0</span>
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
                      paddingRight: 10
                    }}
                    to="javascript:"
                    onclick="quickView('3')"
                  >
                    <i className="czi-eye align-middle mr-1" />
                    Quick View
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-4 col-md-6 col-lg-4 col-6">
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
                    <Link
                      to="/product_details"
                      className="d-block"
                    >
                      <img
                        src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-6346833cd4973.png"
                        onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                      />
                    </Link>
                  </div>
                </div>
                <div className="single-product-details">
                  <div className="text-center">
                    <Link
                      to="https://6valley.6amtech.com/product/ladies-bag-jbRhZH"
                      style={{ fontWeight: 400, fontSize: 13 }}
                    >
                      Ladies Bag
                    </Link>
                  </div>
                  <div className="rating-show justify-content-between text-center">
                    <span
                      className="d-inline-block font-size-sm text-body"
                      style={{ fontWeight: 400, fontSize: 10 }}
                    >
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
                    <div
                      className="product-price text-center"
                      style={{ fontWeight: 400, fontSize: 12 }}
                    >
                      <strike
                        style={{
                          fontSize: "12px!important",
                          color: "#E96A6A!important"
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
                      paddingRight: 10
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
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default WomanFashion