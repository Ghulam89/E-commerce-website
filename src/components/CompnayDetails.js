import React from 'react'

const CompnayDetails = () => {
  return (
    <>
     <div
  className="d-flex justify-content-center text-center text-md-left mt-3"
  style={{ background: "#3b71de10", padding: 20 }}
>
  <div className="col-md-3 d-flex justify-content-center">
    <div>
      <a href="https://6valley.6amtech.com/about-us">
        <div className="text-center">
          <img
            className="size-60"
            src="https://6valley.6amtech.com/public/assets/front-end/png/about company.png"
            alt=""
          />
        </div>
        <div className="text-center">
          <p className="m-0">About Company</p>
        </div>
      </a>
    </div>
  </div>
  <div className="col-md-3 d-flex justify-content-center">
    <div>
      <a href="https://6valley.6amtech.com/contacts">
        <div className="text-center">
          <img
            className="size-60"
            src="https://6valley.6amtech.com/public/assets/front-end/png/contact us.png"
            alt=""
          />
        </div>
        <div className="text-center">
          <p className="m-0">Contact Us</p>
        </div>
      </a>
    </div>
  </div>
  <div className="col-md-3 d-flex justify-content-center">
    <div>
      <a href="https://6valley.6amtech.com/helpTopic">
        <div className="text-center">
          <img
            className="size-60"
            src="https://6valley.6amtech.com/public/assets/front-end/png/faq.png"
            alt=""
          />
        </div>
        <div className="text-center">
          <p className="m-0">FAQ</p>
        </div>
      </a>
    </div>
  </div>
</div>

    
    </>
  )
}

export default CompnayDetails