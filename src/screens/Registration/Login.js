import React from 'react'
import { Link } from 'react-router-dom'
import CompnayDetails from '../../components/CompnayDetails'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const Login = () => {
  return (
    <>
    <Navbar/>
    <section className='login' style={{backgroundColor:'#FAFAFC' }} >
    <div className="container py-4 py-lg-5" style={{ textAlign: "left",}}>
  <div className="mx-auto __max-w-620">
    <div className="card border-0  p-3 shadow">
      <div className="card-body">
        <h2 className="h4 mb-1">Sign in</h2>
        <form
          className="needs-validation mt-2"
          autoComplete="off"
          action=""
          method="post"
          id="form-id"
        >
          <input
            type="hidden"
            name="_token"
         
          />
          <div className="form-group">
            <label htmlFor="si-email">Email address / Phone</label>
            <input
              className="form-control"
              type="text"
              name="user_id"
              id="si-email"
              style={{ textAlign: "left" }}
              defaultValue=""
              placeholder="Enter email address or phone number"
              required=""
            />
            <div className="invalid-feedback">
              Please provide valid email or phone number .
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="si-password">Password</label>
            <div className="password-toggle">
              <input
                className="form-control"
                name="password"
                type="password"
                id="si-password"
                style={{ textAlign: "left" }}
                required=""
              />
              <label className="password-toggle-btn">
                <input className="custom-control-input" type="checkbox" />
                <i className="czi-eye password-toggle-indicator" />
                <span className="sr-only">Show Password </span>
              </label>
            </div>
          </div>
          <div className="form-group d-flex flex-wrap justify-content-between">
            <div className="form-group">
              <input
                type="checkbox"
                className="mr-1"
                name="remember"
                id="remember"
              />
              <label className="" htmlFor="remember">
                Remember me
              </label>
            </div>
            <Link
              className="font-size-sm"
              to="/forget_password"
            >
              Forgot password?
            </Link>
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
                  name="Link-guxmyk8mjqvb"
                  frameBorder={0}
                  scrolling="no"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                  vnb-frameid={459}
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
          <button
            className="btn  w-100 py-2 btn--primary btn-block btn-shadow"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
      <div className="card-footer">
        <div className="row">
          <div
            className="col-12 d-flex flex-wrap justify-content-around justify-content-md-between align-items-center __gap-15"
            style={{ direction: "ltr" }}
          >
            <div className="ml-2">
              <h6 className="m-0">No account Sign up now</h6>
            </div>
            <div className="">
              <Link
                className="btn btn-outline-primary"
                to="/signup"
              >
                <i className="fa fa-user-circle" /> Sign up
              </Link>
            </div>
          </div>
          <div className="col-sm-6 text-center mt-3">
            <Link
              className="btn btn-outline-primary w-100"
              to=""
            >
              <i className="czi-google mr-2 ml-n1" />
              Sign in with google
            </Link>
          </div>
          <div className="col-sm-6 text-center mt-3">
            <Link
              className="btn btn-outline-primary w-100"
              to=""
            >
              <i className="czi-facebook mr-2 ml-n1" />
              Sign in with facebook
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
   
 <CompnayDetails/>
<Footer/>

    </>
  )
}

export default Login