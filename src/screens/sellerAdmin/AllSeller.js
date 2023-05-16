import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './seller.css';
import CompnayDetails from '../../components/CompnayDetails';
import { Link } from 'react-router-dom';
const AllSeller = () => {
  return (
    <>
    <Navbar/>
      <section className='all_sellers'>
      <div className="container-fluid px-5 mb-md-4  __inline-65">
  <div className="row mt-3 mb-3 border-bottom">
    <div className="col-md-8">
      <h4 className="mt-2 text-start">All Sellers</h4>
    </div>
    <div className="col-md-4">
      <form action="">
        <input
          type="hidden"
          name="_token"
          
        />
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Shop name"
            name="shop_name"
            required=""
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div className="row">
    <section className="col-lg-12">
      <div className="row mx-n2 __min-h-200px">
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 px-2 pb-4 text-center">
          <div className="card-body shadow position-relative">
            <Link to="/shop_view">
              <img
                className="__inline-66"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f790349f7.png"
                alt="Deluxe Online"
              />
              <div className="text-center text-dark">
                <span className="text-center font-weight-bold small p-1">
                  Deluxe Online
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 px-2 pb-4 text-center">
          <div className="card-body shadow position-relative">
            <Link  to="/shop_view">
              <img
                className="__inline-66"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f6e190f4c.png"
                alt="Mart Morning"
              />
              <div className="text-center text-dark">
                <span className="text-center font-weight-bold small p-1">
                  Mart Morning
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 px-2 pb-4 text-center">
          <div className="card-body shadow position-relative">
            <Link  to="/shop_view">
              <img
                className="__inline-66"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f38e9ce54.png"
                alt="Wellness Fair"
              />
              <div className="text-center text-dark">
                <span className="text-center font-weight-bold small p-1">
                  Wellness Fair
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 px-2 pb-4 text-center">
          <div className="card-body shadow position-relative">
            <Link  to="/shop_view">
              <span className="temporary-closed">
                <span>Closed now</span>
              </span>
            </Link>
            <Link  to="/shop_view">
              <img
                className="__inline-66"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f30a58846.png"
                alt="Bicycle Shop"
              />
              <div className="text-center text-dark">
                <span className="text-center font-weight-bold small p-1">
                  Bicycle Shop
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 px-2 pb-4 text-center">
          <div className="card-body shadow position-relative">
            <Link to="/shop_view">
              <img
                className="__inline-66"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f29f4a3bd.png"
                alt="KR Fashion"
              />
              <div className="text-center text-dark">
                <span className="text-center font-weight-bold small p-1">
                  KR Fashion
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 px-2 pb-4 text-center">
          <div className="card-body shadow position-relative">
            <Link  to="/shop_view">
              <img
                className="__inline-66"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f23c79774.png"
                alt="Country Fair"
              />
              <div className="text-center text-dark">
                <span className="text-center font-weight-bold small p-1">
                  Country Fair
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 px-2 pb-4 text-center">
          <div className="card-body shadow position-relative">
            <Link  to="/shop_view">
              <img
                className="__inline-66"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f1feb5be0.png"
                alt="Morning Mart"
              />
              <div className="text-center text-dark">
                <span className="text-center font-weight-bold small p-1">
                  Morning Mart
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 px-2 pb-4 text-center">
          <div className="card-body shadow position-relative">
            <Link  to="/shop_view">
              <span className="temporary-closed">
                <span>Closed now</span>
              </span>
            </Link>
            <Link to="https://6valley.6amtech.com/shopView/8">
              <img
                className="__inline-66"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f140b5c50.png"
                alt="Royal Crown"
              />
              <div className="text-center text-dark">
                <span className="text-center font-weight-bold small p-1">
                  Royal Crown
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 px-2 pb-4 text-center">
          <div className="card-body shadow position-relative">
            <Link  to="/shop_view">
              <img
                className="__inline-66"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-23-626405e4d6205.png"
                alt="Super Store Online"
              />
              <div className="text-center text-dark">
                <span className="text-center font-weight-bold small p-1">
                  Super Store On...
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 px-2 pb-4 text-center">
          <div className="card-body shadow position-relative">
            <Link  to="/shop_view">
              <img
                className="__inline-66"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                src="https://6valley.6amtech.com/storage/app/public/shop/2022-10-12-63463d0b9a0da.png"
                alt="Digital Seller"
              />
              <div className="text-center text-dark">
                <span className="text-center font-weight-bold small p-1">
                  Digital Seller
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="row mx-n2">
        <div className="col-md-12">
          <center></center>
        </div>
      </div>
    </section>
  </div>
</div>

      </section>
      <CompnayDetails/>
      <Footer/>
    </>
  )
}

export default AllSeller