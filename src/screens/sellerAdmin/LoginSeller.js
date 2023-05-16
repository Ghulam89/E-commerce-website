import React from 'react'
import {AiOutlineEyeInvisible} from 'react-icons/ai';
const LoginSeller = () => {
  return (
    <div>
        <div className="container-fluid px-5 py-5 py-sm-7">
  <a className="d-flex justify-content-center mb-2" href="javascript:">
    <img
      className="z-index-2"
      width='90px'
      src={require('../../assets/image/company/ashh.png')}
      alt="Logo"
    />
  </a>
  <div className="row justify-content-center">
    <div className="col-md-7 col-lg-5">
      <div className="card card-lg mb-5">
        <div className="card-body">
          <form
            id="form-id"
            action=""
            method="post"
          >
            <input
              type="hidden"
              name="_token"
              
            />
            <div className="text-center">
              <div className="mb-5">
                <h1 className="display-4">Sign in</h1>
                <center>
                  <h1 className="h4 text-gray-900 mb-4">
                    Welcome back to seller login
                  </h1>
                </center>
              </div>
            </div>
            <div className="js-form-message form-group">
              <label className="input-label" htmlFor="signinSrEmail">
                Your email
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                id="signinSrEmail"
           
                required=""
                data-msg="Please enter a valid email address."
              />
            </div>
            <div className="js-form-message form-group">
              <label
                className="input-label"
                htmlFor="signupSrPassword"
                tabIndex={0}
              >
                <span className="d-flex justify-content-between align-items-center">
                  Password
                  <a href="">
                    Forgot password
                  </a>
                </span>
              </label>
              <div className="input-group input-group-merge position-relative">
                <input
                  type="password"
                  className="js-toggle-password form-control form-control-lg"
                  name="password"
                  id="signupSrPassword"
                  placeholder="8+ characters required"
                  aria-label="8+ characters required"
                  required=""
               
                />
                <div style={{position:'absolute',top:'12px',right:'12px'}} id="changePassTarget">
                  <a className="" href="javascript:">
                    <i><AiOutlineEyeInvisible/></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="termsCheckbox"
                  name="remember"
                />
                <label
                  className="custom-control-label text-muted"
                  htmlFor="termsCheckbox"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div id="recaptcha_element" className="w-100" data-type="image">
              <div style={{ width: 304, height: 78 }}>
                <div>
                  <iframe
                    title="reCAPTCHA"
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfMARoeAAAAAAITvA-le6X9IElSWX6CncicwEfY&co=aHR0cHM6Ly82dmFsbGV5LjZhbXRlY2guY29tOjQ0Mw..&hl=en&type=image&v=NZrMWHVy58-S9gVvad9HVGxk&size=normal&cb=2ide20l1xi32"
                    width={304}
                    height={78}
                    role="presentation"
                    name="a-2qnrtoz9l19v"
                    frameBorder={0}
                    scrolling="no"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                    vnb-frameid={77}
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
            <button type="submit" className="btn w-100 btn-lg btn-block btn--primary">
              Sign in
            </button>
          </form>
        </div>
       
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default LoginSeller