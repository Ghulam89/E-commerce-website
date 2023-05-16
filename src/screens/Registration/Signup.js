import React from 'react'
import CompnayDetails from '../../components/CompnayDetails'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const Signup = () => {
  return (
    <>
    <Navbar/>
    <div
  className="container py-4 py-lg-5 my-4 __inline-7"
  style={{ textAlign: "left" }}
>
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card border-0  p-3 shadow">
        <div className="card-body">
          <h2 className="h4 mb-1">Sign up</h2>
          <p className="font-size-sm text-muted mb-4">
            No Account ? Register control your order .
          </p>
          <form
            className="needs-validation_"
            id="form-id"
            action=""
            method="post"
          >
            <input
              type="hidden"
              name="_token"
             
            />
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="reg-fn">First name</label>
                  <input
                    className="form-control"
                    defaultValue=""
                    type="text"
                    name="f_name"
                    style={{ textAlign: "left" }}
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your first name!
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="reg-ln">Last name</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue=""
                    name="l_name"
                    style={{ textAlign: "left" }}
                  />
                  <div className="invalid-feedback">
                    Please enter your last name!
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="reg-email">Email address</label>
                  <input
                    className="form-control"
                    type="email"
                    defaultValue=""
                    name="email"
                    style={{ textAlign: "left" }}
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter valid email address!
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="reg-phone">
                    Phone number
                    <small className="text-primary">
                      ( * Country code is must Like for BD 880 )
                    </small>
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    defaultValue=""
                    name="phone"
                    style={{ textAlign: "left" }}
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your phone number!
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="si-password">Password</label>
                  <div className="password-toggle">
                    <input
                      className="form-control"
                      name="password"
                      type="password"
                      id="si-password"
                      style={{ textAlign: "left" }}
                      placeholder="Minimum 8 characters long"
                      required=""
                    />
                    <label className="password-toggle-btn">
                      <input className="custom-control-input" type="checkbox" />
                      <i className="czi-eye password-toggle-indicator" />
                      <span className="sr-only">Show Password </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="si-password">Confirm password</label>
                  <div className="password-toggle">
                    <input
                      className="form-control"
                      name="con_password"
                      type="password"
                      style={{ textAlign: "left" }}
                      placeholder="Minimum 8 characters long"
                      id="si-password"
                      required=""
                    />
                    <label className="password-toggle-btn">
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        style={{ textAlign: "left" }}
                      />
                      <i className="czi-eye password-toggle-indicator" />
                      <span className="sr-only">Show Password </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group d-flex flex-wrap justify-content-between">
              <label className="form-group mb-1 d-flex align-items-center">
                <strong>
                  <input
                    type="checkbox"
                    className="mr-1"
                    name="remember"
                    id="inputCheckd"
                  />
                </strong>
                <span className="mb-4px d-block w-0 flex-grow pl-1">
                 
                  <span>I agree to Your</span>
                  <a
                    className="font-size-sm"
                    target="_blank"
                    href=""
                  >
                    Terms and conditions
                  </a>
                </span>
              </label>
            </div>
            <div id="recaptcha_element" className="w-100" data-type="image">
              <div style={{ width: 304, height: 78 }}>
                <div>
                  <iframe
                    title="reCAPTCHA"
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfMARoeAAAAAAITvA-le6X9IElSWX6CncicwEfY&co=aHR0cHM6Ly82dmFsbGV5LjZhbXRlY2guY29tOjQ0Mw..&hl=en&type=image&v=vpEprwpCoBMgy-fvZET0Mz6L&size=normal&cb=t85k2o5ffr"
                    width={304}
                    height={78}
                    role="presentation"
                    name="a-et59856oqgg"
                    frameBorder={0}
                    scrolling="no"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                    vnb-frameid={487}
                  />
                </div>
                <textarea
                  id="g-recaptcha-response"
                  name="g-recaptcha-response"
                  className="g-recaptcha-response"
                  style={{
                    width: 250,
                    height: 40,
                    border: "1px solid rgb(193, 193, 193)",
                    margin: "10px 25px",
                    padding: 0,
                    resize: "none",
                    display: "none"
                  }}
                  defaultValue={""}
                />
              </div>
              <iframe style={{ display: "none" }} />
            </div>
            <br />

            <div className="flex-between row" style={{ direction: "ltr" }}>
              <div className='d-flex justify-content-between align-items-center '>
              <div className="mx-1">
                <div className="">
                  <button
                    className="btn btn--primary"
                    id="sign-up"
                    type="submit"
                    disabled=""
                  >
                    <i className="czi-user mr-2 ml-n1" />
                    Sign up
                  </button>
                </div>
              </div>
              <div className="mx-1">
                <a
                  className="btn btn-outline-primary"
                  href=""
                >
                  <i className="fa fa-sign-in" /> Sign in
                </a>
              </div>
                </div>  
              <div className="col-12 mt-3">
                <div className="row">
                  <div className="col-sm-6 text-center mt-1">
                    <a
                      className="btn btn-outline-primary w-100"
                      href=""
                    >
                      <i className="czi-google mr-2 ml-n1" />
                      Sign up with google
                    </a>
                  </div>
                  <div className="col-sm-6 text-center mt-1">
                    <a
                      className="btn btn-outline-primary w-100"
                      href=""
                    >
                      <i className="czi-facebook mr-2 ml-n1" />
                      Sign up with facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<CompnayDetails/>
<Footer/>

    </>
  )
}

export default Signup