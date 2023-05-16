import React from 'react'
import CompnayDetails from '../../components/CompnayDetails'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const ForgetPassword = () => {
  return (
    <>
    <Navbar/>
      <section>
      <div className="container py-4 py-lg-5 my-4 rtl">
  <div className="row justify-content-center">
    <div className="col-lg-8 col-md-10 text-start">
      <h2 className="h3 mb-4">Forgot your password?</h2>
      <p className="font-size-md">
        Change your password in three easy steps. This helps to keep your new
        password secure .
      </p>
      <ol className="list-unstyled font-size-md p-0">
        <li>
          <span className="text-primary mr-2">1.</span>Fill in your email
          address below .
        </li>
        <li>
          <span className="text-primary mr-2">2.</span>We will email you a
          temporary code .
        </li>
        <li>
          <span className="text-primary mr-2">3.</span>Use the code to change
          your password on our secure website .
        </li>
      </ol>
      <div className="card py-2 mt-4">
        <form
          className="card-body needs-validation"
          action=""
          method="post"
        >
          <input
            type="hidden"
            name="_token"
          />
          <div className="form-group">
            <label htmlFor="recover-email">Enter your email address</label>
            <input
              className="form-control"
              type="email"
              name="identity"
              id="recover-email"
              required=""
            />
            <div className="invalid-feedback">
              Please provide valid email address .
            </div>
          </div>
          <button className="btn btn--primary" type="submit">
            Get new password
          </button>
        </form>
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

export default ForgetPassword