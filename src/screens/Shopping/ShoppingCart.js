import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import './shopping.css'
const ShoppingCart = () => {
  return (
    <>
    <Navbar/>
    <div
  className="container-fluid pb-5 px-2 px-md-5 mb-2 mt-3 rtl"
  style={{ textAlign: "left" }}
  id="cart-summary"
>
  <div className="feature_header mb-2">
    <span>Shopping cart</span>
  </div>
  <div className="row g-3">
    <section className="col-lg-8">
      <div className="card __card cart_information mb-3">
        <div className="card-header bg-white p-3">
          <b>
            <span>Shop name:</span>
            <Link to="">Wellness Fair</Link>
          </b>
        </div>
        <div className="table-responsive mt-3">
          <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table __cart-table">
            <thead className="thead-light">
              <tr className="">
                <th className="font-weight-bold __w-5p">SL#</th>
                <th className="font-weight-bold __w-45">Product details</th>
                <th className="font-weight-bold __w-15p">Unit price</th>
                <th className="font-weight-bold __w-15p">Qty</th>
                <th className="font-weight-bold __w-15p">Price</th>
                <th className="font-weight-bold __w-5p" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <div className="d-flex">
                    <div className="__w-30p">
                      <Link to="">
                        <img
                          className="rounded __img-62"
                          onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                          src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625f76257cdf2.png"
                          alt="Product"
                        />
                      </Link>
                    </div>
                    <div className="ml-2 text-break __line-2 __w-70p">
                      <Link to="">
                        Classic Sneakers For Men
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="text-muted mr-2">
                      <span className="mr-2 __text-12px">color : Amethyst</span>
                    </div>
                    <div className="text-muted mr-2">
                      <span className="mr-2 __text-12px">type : Link</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className=" text-accent">$450.0</div>
                  <strike className="__inline-18">$500.0</strike>
                </td>
                <td>
                  <div>
                    <input
                      className="__cart-input"
                      type="number"
                      name="quantity[349]"
                      id="cartQuantity349"
                      min={1}
                      defaultValue={2}
                    />
                  </div>
                </td>
                <td>
                  <div>$900.0</div>
                </td>
                <td></td>
                <td>
                  <button
                    className="btn btn-link px-0 text-danger"
                    onclick="removeFromCart(349)"
                    type="button"
                  >
                    <i className="czi-close-circle mr-2" />
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <div className="row">
                    <div className="col-12">
                      <select
                        className="form-control"
                        
                      >
                        <option>Choose shipping method</option>
                        <option value={13}>
                          order wise shipping ( 4-5 ) $10.0
                        </option>
                      </select>
                    </div>
                  </div>
                </td>
                <td colSpan={3}>
                  <div className="row">
                    <div className="col-12">
                      <span>
                        <b>Shipping cost : </b>
                      </span>
                      $0.0
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <form method="get">
        <div className="form-group">
          <div className="row">
            <div className="col-12">
              <label htmlFor="phoneLabel" className="form-label input-label">
                Order note{" "}
                <span className="input-label-secondary">(Optional)</span>
              </label>
              <textarea
                className="form-control w-100"
                id="order_note"
                name="order_note"
               
              />
            </div>
          </div>
        </div>
      </form>
      <div className="d-flex btn-full-max-sm align-items-center __gap-6px flex-wrap justify-content-between">
        <Link to="" className="btn btn--primary text-white">
          <i className="fa fa-backward px-1 text-white py-2" /> Continue shopping
        </Link>
        <Link  className="btn text-white btn--primary pull-right">
          Checkout
          <i className="fa fa-forward px-1 py-2" />
        </Link>
      </div>
    </section>
   
    <aside className="col-lg-4 pt-4 pt-lg-2">
      <div className="__cart-total">
        <div className="cart_total">
          <div className="d-flex justify-content-between">
            <span className="cart_title">Sub total</span>
            <span className="cart_value">$1,000.0</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="cart_title">Tax</span>
            <span className="cart_value">$50.0</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="cart_title">Shipping</span>
            <span className="cart_value">$0.0</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="cart_title">Discount on product</span>
            <span className="cart_value">- $100.0</span>
          </div>
          <div className="pt-2">
            <form
              className="needs-validation"
              action="javascript:"
              method="post"
              noValidate=""
              id="coupon-code-ajax"
            >
              <div className="form-group">
                <input
                  className="form-control py-2 input_code"
                  type="text"
                  name="code"
                  placeholder="Coupon code"
                  required=""
                />
                <div className="invalid-feedback">
                  Please provide coupon code
                </div>
              </div>
              <button
                className="btn w-100 btn--primary py-2 btn-block"
                type="button"
                
              >
                Apply code
              </button>
            </form>
          </div>
          <hr className="mt-2 mb-2" />
          <div className="d-flex justify-content-between">
            <span className="cart_title">Total</span>
            <span className="cart_value text-bold">$950.0</span>
          </div>
        </div>
        <div className="container mt-2">
          <div className="row p-0">
            <div className="col-md-3 p-0 text-center mobile-padding">
              <img
                className="order-summery-footer-image"
                src="https://6valley.6amtech.com/public/assets/front-end/png/delivery.png"
                alt=""
              />
              <div className="deal-title">3 Days free delivery </div>
            </div>
            <div className="col-md-3 p-0 text-center">
              <img
                className="order-summery-footer-image"
                src="https://6valley.6amtech.com/public/assets/front-end/png/money.png"
                alt=""
              />
              <div className="deal-title">Money back guarantee</div>
            </div>
            <div className="col-md-3 p-0 text-center">
              <img
                className="order-summery-footer-image"
                src="https://6valley.6amtech.com/public/assets/front-end/png/Genuine.png"
                alt=""
              />
              <div className="deal-title">100% Genuine Product</div>
            </div>
            <div className="col-md-3 p-0 text-center">
              <img
                className="order-summery-footer-image"
                src="https://6valley.6amtech.com/public/assets/front-end/png/Payment.png"
                alt=""
              />
              <div className="deal-title">Authentic payment</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</div>

<Footer/>

    </>
  )
}

export default ShoppingCart