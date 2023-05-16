import React from "react";
import Carousel from "react-multi-carousel";
import { AiFillStar } from "react-icons/ai";
import "react-multi-carousel/lib/styles.css";
const FlashCarsousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel responsive={responsive}>
        <div className="flash_deal_main">
          <div class="flash_deal_product rtl bg-white">
           
            <div class=" d-flex">
            <span class="for-discoutn-value p-1 pl-2 pr-2">10% Off</span>
              <div
                class="d-flex align-items-center justify-content-center"
                style={{ paddingLeft: "12px", paddingTop: "12px" }}
              >
                <div class="flash-deals-background-image">
                  <img
                    class="__img-125px"
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625fe69f72cce.png"
                    onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                  />
                </div>
              </div>
              <div class="flash_deal_product_details pl-3 pr-3 pr-1 d-flex align-items-center">
                <div>
                  <div>
                    <span class="flash-product-title">
                      Women's long-sleeve lightweight french terry fleece
                      quarter-zip top
                    </span>
                  </div>
                  <div class="flash-product-review">
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
                    <label class="badge-style2">( 1 )</label>
                  </div>
                  <div>
                    <strike style={{ fontSize: "12px", color: "#E96A6A" }}>
                      $500.0
                    </strike>
                  </div>
                  <div class="flash-product-price">$450.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flash_deal_main">
          <div class="flash_deal_product rtl bg-white">
            <span class="for-discoutn-value p-1 pl-2 pr-2">10% Off</span>
            <div class=" d-flex">
              <div
                class="d-flex align-items-center justify-content-center"
                style={{ paddingLeft: "12px", paddingTop: "12px" }}
              >
                <div class="flash-deals-background-image">
                  <img
                    class="__img-125px"
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-23-6263633d3b0a6.png"
                    onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                  />
                </div>
              </div>
              <div class="flash_deal_product_details pl-3 pr-3 pr-1 d-flex align-items-center">
                <div>
                  <div>
                    <span class="flash-product-title">
                      Exclusive &amp; Fashionable Suit For Men
                    </span>
                  </div>
                  <div class="flash-product-review">
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
                    <label class="badge-style2">( 1 )</label>
                  </div>
                  <div>
                    <strike style={{ fontSize: "12px", color: "#E96A6A" }}>
                      $500.0
                    </strike>
                  </div>
                  <div class="flash-product-price">$450.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flash_deal_main">
          <div class="flash_deal_product rtl">
            <span class="for-discoutn-value p-1 pl-2 pr-2">10% Off</span>
            <div class=" d-flex">
              <div
                class="d-flex align-items-center justify-content-center"
                style={{ paddingLeft: "12px", paddingTop: "12px" }}
              >
                <div class="flash-deals-background-image">
                  <img
                    class="__img-125px"
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-23-6263633d3b0a6.png"
                    onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                  />
                </div>
              </div>
              <div class="flash_deal_product_details pl-3 pr-3 pr-1 d-flex align-items-center">
                <div>
                  <div>
                    <span class="flash-product-title">
                      Exclusive &amp; Fashionable Suit For Men
                    </span>
                  </div>
                  <div class="flash-product-review">
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
                    <label class="badge-style2">( 1 )</label>
                  </div>
                  <div>
                    <strike
                      style={{ fontSize: "12px", color: "#E96A6A!important" }}
                    >
                      $500.0
                    </strike>
                  </div>
                  <div class="flash-product-price">$450.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>Item 4</div>
      </Carousel>
      
    </>
  );
};

export default FlashCarsousel;
