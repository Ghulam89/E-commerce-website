import React from 'react'
import CompnayDetails from '../../components/CompnayDetails'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const Track = () => {
  return (
    <>
      <Navbar/>
      <div className="container-fluid px-5 rtl py-5" style={{ textAlign: "left" }}>
  <div className="__max-w-620 mx-auto">
    <h3 className="text-center text-capitalize">Track Order</h3>
    <div className="card __card">
      <div className="card-body">
        <form
          action=""
          type="submit"
          method="post"
          className="p-3"
        >
          <input
            type="hidden"
            name="_token"
            
          />
          <div className="form-group mb-4">
            <input
              className="form-control py-2 prepended-form-control"
              type="text"
              name="order_id"
              placeholder="Order id"
              required=""
            />
          </div>
          <div className="form-group mb-4">
            <input
              className="form-control p-2 prepended-form-control"
              type="text"
              name="phone_number"
              placeholder="Your phone number"
              required=""
            />
          </div>
          <div className="text-end">
            <button
              className="btn py-2 btn--primary"
              type="submit"
              name="trackOrder"
            >
              Track Order
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

      <CompnayDetails/>
      <Footer/>
    </>
  )
}

export default Track