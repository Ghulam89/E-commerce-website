import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {GiShoppingCart} from 'react-icons/gi'
import {FiMenu} from 'react-icons/fi';
const StickyNavbar = () => {


  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  function handleScroll() {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

 
  return (
    <>
    <div className="navbar-sticky bg-white mobile-head">
  <div className={`navbar navbar-expand-md navbar-light`}>
    <div className="container-fluid px-2 px-md-5">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Link
        className="navbar-brand d-none d-sm-block mr-3 flex-shrink-0 __min-w-7rem"
        to="/"
      >
        <div className='text-center'>
        <img
          className=""
          src={require('../../assets/image/company/ashh.png')}
          alt="6valley"
          width="70px"
        />
       
        </div>
      </Link>
      <Link
        className="navbar-brand d-sm-none mr-2"
        to="https://6valley.6amtech.com"
      >
        <img
          className="mobile-logo-img __inline-12"
          src={require('../../assets/image/company/ashh.png')}
          alt="6valley"
        />
      </Link>
      <div
        className="input-group-overlay d-none d-md-block mx-4"
        style={{ textAlign: "left" }}
      >
        <form
          action=""
          type="submit"
          className="search_form d-flex"
        >
          <input
            className="form-control  appended-form-control search-bar-input"
            type="text"
            autoComplete="off"
            placeholder="Search here ..."
            name="name"
          />
          <button
            className="input-group-append-overlay btn btn--primary search_button px-4 py-2 "
            type="submit"
            style={{
              borderRadius: "0px 7px 7px 0px",
              
            }}
          >
        
            <i class="fa fa-search" aria-hidden="true"></i>
        
          </button>
        
          <div
            className="card search-card __inline-13"
            style={{ display: "none" }}
          >
            <div className="card-body search-result-box __h-400px overflow-x-hidden overflow-y-auto" />
          </div>
        </form>
      </div>
      <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
      
        <div className="navbar-tool dropdown ml-md-3">
          <Link
            className="navbar-tool-icon-box bg-secondary"
            to="/wishlist"
          >
            <span className="navbar-tool-label">
              <span className="countWishlist">0</span>
            </span>
            <i class="fa fa-heart-o" style={{Color
            :'#E6202D'}} aria-hidden="true"></i>
          </Link>
        </div>
        <div className="dropdown">
          <Link
            className="navbar-tool ml-md-3"
            type="button"
            data-bs-toggle="dropdown"
            aria-bs-haspopup="true"
            aria-bs-expanded="false"
          >
            <div className="navbar-tool-icon-box bg-secondary">
              <div className="navbar-tool-icon-box bg-secondary">
                <svg
                  width={16}
                  height={17}
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.25 4.41675C4.25 6.48425 5.9325 8.16675 8 8.16675C10.0675 8.16675 11.75 6.48425 11.75 4.41675C11.75 2.34925 10.0675 0.666748 8 0.666748C5.9325 0.666748 4.25 2.34925 4.25 4.41675ZM14.6667 16.5001H15.5V15.6667C15.5 12.4509 12.8825 9.83341 9.66667 9.83341H6.33333C3.11667 9.83341 0.5 12.4509 0.5 15.6667V16.5001H14.6667Z"
                    fill="#1B7FED"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <div
            className="dropdown-menu __auth-dropdown dropdown-menu-left"
            aria-bs-labelledby="dropdownMenuButton"
            style={{ textAlign: "left" }}
          >
            <Link
              className="dropdown-item"
              to="/login"
            >
              <i className="fa fa-sign-in mr-2" /> Sign in
            </Link>
            <div className="dropdown-divider" />
            <Link
              className="dropdown-item"
              to="/signup"
            >
              <i className="fa fa-user-circle mr-2" />
              Sign up
            </Link>
          </div>
        </div>
        <div id="cart_items">
  <div className="navbar-tool dropdown ml-md-3" style={{ marginRight: 6 }}>
    <Link
      className="navbar-tool-icon-box bg-secondary"
      to="/shopping_cart"
    >
      <span className="navbar-tool-label">1</span>
      <i><GiShoppingCart size={30} color="#E6202D" /></i>
    </Link>
    <Link
      className="navbar-tool-text ml-2"
      href="https://6valley.6amtech.com/shop-cart"
    >
      <small>My cart</small>
      $900.0
    </Link>
    <div className="dropdown-menu dropdown-menu-right __w-20rem ">
      <div className="widget widget-cart px-3 pt-2 pb-3">
        <div
          className="__h-15rem"
          data-bs-simplebar="init"
          data-bs-simplebar-auto-hide="false"
        >
          <div className="simplebar-wrapper" style={{ margin: 0 }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer" />
            </div>
            <div className="simplebar-mask">
              <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                <div
                  className="simplebar-content-wrapper"
                  style={{ height: "auto", overflow: "hidden" }}
                >
                  <div className="simplebar-content" style={{ padding: 0 }}>
                    <div className="widget-cart-item pb-2">
                      <button
                        className="close text-danger "
                        type="button"
                        onclick="removeFromCart(349)"
                        aria-label="Remove"
                      >
                        <span aria-bs-hidden="true">×</span>
                      </button>
                      <div className="media">
                        <Link
                          className="d-block mr-2"
                          href=""
                        >
                          <img
                            width={64}
                            onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                            src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625f76257cdf2.png"
                            alt="Product"
                          />
                        </Link>
                        <div className="media-body">
                          <h6 className="widget-product-title">
                            <Link href="https://6valley.6amtech.com/product/product-1-9x9CNa">
                              Classic Sneakers For Men
                            </Link>
                          </h6>
                          <span className="__text-14px">color : Amethyst</span>
                          <br />
                          <span className="__text-14px">type : Link</span>
                          <br />
                          <div className="widget-product-meta">
                            <span className="text-muted mr-2">x 2</span>
                            <span className="text-accent mr-2">$900.0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: 0, height: 0 }}
            />
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar simplebar-visible"
              style={{ width: 0, display: "none" }}
            />
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar simplebar-visible"
              style={{ height: 0, display: "none" }}
            />
          </div>
        </div>
        <hr />
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
          <div className="font-size-sm mr-2 float-right py-2 ">
            <span className="">Subtotal :</span>
            <span className="text-accent font-size-base ml-1">$900.0</span>
          </div>
          <Link
            className="btn btn-outline-secondary btn-sm"
            href="https://6valley.6amtech.com/shop-cart"
          >
            Expand cart
            <i className="czi-arrow-right ml-1 mr-n1" />
          </Link>
        </div>
        <Link
          className="btn btn--primary btn-sm btn-block"
          href="https://6valley.6amtech.com/checkout-details"
        >
          <i className="czi-card mr-2 font-size-base align-middle" />
          Checkout
        </Link>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  </div>
  <div className="navbar navbar-expand-md py-2 navbar-stuck-menu">
    <div className="container-fluid px-2 px-md-5">
      <div
  className="collapse navbar-collapse"
  id="navbarCollapse"
  style={{ textAlign: "left" }}
>
  <div className="input-group-overlay d-md-none my-3">
    <form
      action="https://6valley.6amtech.com/products"
      type="submit"
      className="search_form"
    >
      <input
        className="form-control appended-form-control search-bar-input-mobile"
        type="text"
        autoComplete="off"
        placeholder="Search"
        name="name"
      />
    
      <div className="card search-card __inline-13" style={{ display: "none" }}>
        <div
          className="card-body search-result-box"
          id=""
          style={{ overflow: "scroll", height: 400, overflowX: "hidden" }}
        />
      </div>
    </form>
  </div>
  <ul className="navbar-nav mega-nav pr-2 pl-2 mr-2 d-none d-xl-block __mega-nav">
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle pl-0"
        to="#"
        data-bs-toggle="dropdown"
        style={{}}
      >
       
        <i className='mr-3'><FiMenu  color="dark" /></i>
        <span style={{ marginLeft: "30px !important", marginRight: 30 }}>
          Categories
        </span>
      </Link>
      <ul
        className="  dropdown-menu __dropdown-menu-2"
        style={{ right: 0, textAlign: "left" }}
        
      >
        <li className="dropdown">
          <Link
            className="dropdown-item flex-between  "
            to="javascript:"
            
          >
            <div className="d-flex">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566cf5b061b.png"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                className="__img-18"
              />
              <span className="w-0 flex-grow-1 ps-3">Bags &amp; Shoes</span>
            </div>
          </Link>
        </li>
        <li className="dropdown">
          <Link
            className="dropdown-item flex-between  "
            to="javascript:"
        
          >
            <div className="d-flex">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566ccdee31c.png"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                className="__img-18"
              />
              <span className="w-0 flex-grow-1 ps-3">
                Home, Pet &amp; Appliances
              </span>
            </div>
          </Link>
        </li>
        <li className="dropdown">
          <Link
            className="dropdown-item flex-between  "
            to="javascript:"
            onclick="location.to='https://6valley.6amtech.com/products?id=26&data_from=category&page=1'"
          >
            <div className="d-flex">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566d207d809.png"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                className="__img-18"
              />
              <span className="w-0 flex-grow-1 ps-3">Phones &amp; Telecom</span>
            </div>
          </Link>
        </li>
        <li className="dropdown">
          <Link
            className="dropdown-item flex-between  "
            to="javascript:"
            onclick="location.to='https://6valley.6amtech.com/products?id=25&data_from=category&page=1'"
          >
            <div className="d-flex">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566d467ae3c.png"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                className="__img-18"
              />
              <span className="w-0 flex-grow-1 ps-3">
                Computer, Office &amp; Security
              </span>
            </div>
          </Link>
        </li>
        <li className="dropdown">
          <Link
            className="dropdown-item flex-between  "
            to="javascript:"
            
          >
            <div className="d-flex">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2022-10-12-63467e98db3b4.png"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                className="__img-18"
              />
              <span className="w-0 flex-grow-1 ps-3">Applications</span>
            </div>
          </Link>
        </li>
        <li className="dropdown">
          <Link
            className="dropdown-item flex-between"
            to="javascript:"
           
          >
            <div className="d-flex">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566c96e5edc.png"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                className="__img-18"
              />
              <span className="w-0 flex-grow-1 ps-3">
                Beauty, Health &amp; Hair
              </span>
            </div>
          </Link>
        </li>
        <li className="dropdown">
          <Link
            className="dropdown-item flex-between data-toggle='dropdown "
            data-toggle="dropdown"
            to="javascript:"
           
          >
            <div className="d-flex">
             
              
              <span className="w-0 flex-grow-1 ps-3">eBook</span>
            </div>
            <div>
              <i className="czi-arrow-right __inline-15" />
            </div>
          </Link>
          <ul className="dropdown-menu __r-100" style={{ textAlign: "left" }}>
            <li className="dropdown">
              <Link
                className="dropdown-item flex-between  "
                
              >
                <div>
                  <span className="p-3">Cooking Recipe</span>
                </div>
              </Link>
            </li>
            <li className="dropdown">
              <Link
                className="dropdown-item flex-between data-toggle='dropdown "
                data-toggle="dropdown"
               
              >
                <div>
                  <span className="ps-3">Story Book</span>
                </div>
                <div>
                  <i className="czi-arrow-right __inline-15" />
                </div>
              </Link>
              <ul
                className="dropdown-menu __r-100"
                style={{ textAlign: "left" }}
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="https://6valley.6amtech.com/products?id=37&data_from=category&page=1"
                  >
                    Comic Book
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="https://6valley.6amtech.com/products?id=38&data_from=category&page=1"
                  >
                    Biography
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link
            className="dropdown-item flex-between data-toggle='dropdown "
            data-toggle="dropdown"
            to="javascript:"
            onclick="location.to='https://6valley.6amtech.com/products?id=15&data_from=category&page=1'"
          >
            <div className="d-flex">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566c1958ba3.png"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                className="__img-18"
              />
              <span className="w-0 flex-grow-1 ps-3">
                Jewelry &amp; Watches
              </span>
            </div>
            <div>
              <i className="czi-arrow-right __inline-15" />
            </div>
          </Link>
          <ul className="dropdown-menu __r-100" style={{ textAlign: "left" }}>
            <li className="dropdown">
              <Link
                className="dropdown-item flex-between  "
                to="javascript:"
                onclick="location.to='https://6valley.6amtech.com/products?id=19&data_from=category&page=1'"
              >
                <div>
                  <span className="ps-3">Jewelry</span>
                </div>
              </Link>
            </li>
            <li className="dropdown">
              <Link
                className="dropdown-item flex-between  "
                to="javascript:"
                onclick="location.to='https://6valley.6amtech.com/products?id=20&data_from=category&page=1'"
              >
                <div>
                  <span className="ps-3">Watches</span>
                </div>
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link
            className="dropdown-item flex-between data-toggle='dropdown "
            data-toggle="dropdown"
            to="javascript:"
            onclick="location.to='https://6valley.6amtech.com/products?id=11&data_from=category&page=1'"
          >
            <div className="d-flex">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566b4deaba6.png"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                className="__img-18"
              />
              <span className="w-0 flex-grow-1 pl-3">Women's fashion</span>
            </div>
            <div>
              <i className="czi-arrow-right __inline-15" />
            </div>
          </Link>
          <ul className="dropdown-menu __r-100" style={{ textAlign: "left" }}>
            <li className="dropdown">
              <Link
                className="dropdown-item flex-between  "
                to="javascript:"
                onclick="location.to='https://6valley.6amtech.com/products?id=18&data_from=category&page=1'"
              >
                <div>
                  <span className="ps-3">Dress</span>
                </div>
              </Link>
            </li>
            <li className="dropdown">
              <Link
                className="dropdown-item flex-between data-toggle='dropdown "
                data-toggle="dropdown"
                to="javascript:"
                onclick="location.to='https://6valley.6amtech.com/products?id=17&data_from=category&page=1'"
              >
                <div>
                  <span className="ps-3">Shoes</span>
                </div>
                <div>
                  <i className="czi-arrow-right __inline-15" />
                </div>
              </Link>
              <ul
                className="dropdown-menu __r-100"
                style={{ textAlign: "left" }}
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="https://6valley.6amtech.com/products?id=21&data_from=category&page=1"
                  >
                    regular wear
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link
            className="dropdown-item flex-between  "
            to="javascript:"
            onclick="location.to='https://6valley.6amtech.com/products?id=13&data_from=category&page=1'"
          >
            <div className="d-flex">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566bd73a8d3.png"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                className="__img-18"
              />
              <span className="w-0 flex-grow-1 ps-3">
                Outdoor Fun &amp; Sports
              </span>
            </div>
          </Link>
        </li>
        <li className="dropdown">
          <Link
            className="dropdown-item flex-between  "
            to="javascript:"
            onclick="location.to='https://6valley.6amtech.com/products?id=12&data_from=category&page=1'"
          >
            <div className="d-flex">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566b6cd3e60.png"
                onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                className="__img-18"
              />
              <span className="w-0 flex-grow-1 pl-3">Men's fashion</span>
            </div>
          </Link>
        </li>
        <li className="dropdown">
          <Link
            className="dropdown-item d-block text-center"
            to=""
            style={{ color: "#3b71de !important" }}
          >
            View more
            <i
              className="czi-arrow-right __text-8px"
              style={{
                background: "none !important",
                color: "#3b71de !important"
              }}
            />
          </Link>
        </li>
      </ul>
    </li>
  </ul>
  <ul className="navbar-nav mega-nav1 pr-2 pl-2 d-block d-xl-none">
    <li className="nav-item bg-white rounded-2 dropdown">
      <Link
        className="nav-link dropdown-toggle pl-0"
        to="#"
        data-bs-toggle="dropdown"
      >
        <i className="czi-menu align-middle mt-n1 mr-2" />
        <span style={{ marginLeft: "20px !important" }}>Categories</span>
      </Link>
      <ul
        className="dropdown-menu __dropdown-menu-2"
        style={{ textAlign: "left" }}
      >
        <li className="dropdown">
          <Link to="https://6valley.6amtech.com/products?id=27&data_from=category&page=1">
            <img
              src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566cf5b061b.png"
              onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
              className="__img-18"
            />
            <span className="pl-3">Bags &amp; Shoes</span>
          </Link>
        </li>
        <li className="dropdown">
          <Link to="https://6valley.6amtech.com/products?id=28&data_from=category&page=1">
            <img
              src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566ccdee31c.png"
              onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
              className="__img-18"
            />
            <span className="pl-3">Home, Pet &amp; Appliances</span>
          </Link>
        </li>
        <li className="dropdown">
          <Link to="https://6valley.6amtech.com/products?id=26&data_from=category&page=1">
            <img
              src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566d207d809.png"
              onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
              className="__img-18"
            />
            <span className="pl-3">Phones &amp; Telecom</span>
          </Link>
        </li>
        <li className="dropdown">
          <Link to="https://6valley.6amtech.com/products?id=25&data_from=category&page=1">
            <img
              src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566d467ae3c.png"
              onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
              className="__img-18"
            />
            <span className="pl-3">Computer, Office &amp; Security</span>
          </Link>
        </li>
        <li className="dropdown">
          <Link to="https://6valley.6amtech.com/products?id=39&data_from=category&page=1">
            <img
              src="https://6valley.6amtech.com/storage/app/public/category/2022-10-12-63467e98db3b4.png"
              onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
              className="__img-18"
            />
            <span className="pl-3">Applications</span>
          </Link>
        </li>
        <li className="dropdown">
          <Link to="https://6valley.6amtech.com/products?id=16&data_from=category&page=1">
            <img
              src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566c96e5edc.png"
              onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
              className="__img-18"
            />
            <span className="pl-3">Beauty, Health &amp; Hair</span>
          </Link>
        </li>
        <li className="dropdown">
          <Link to="https://6valley.6amtech.com/products?id=34&data_from=category&page=1">
            <img
              src="https://6valley.6amtech.com/storage/app/public/category/2022-10-12-6346607082fe7.png"
              onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
              className="__img-18"
            />
            <span className="pl-3">eBook</span>
          </Link>
          <Link data-toggle="dropdown" className="__ml-50px">
            <i className="czi-arrow-right __inline-16" />
          </Link>
          <ul className="dropdown-menu" style={{ textAlign: "left" }}>
            <li className="dropdown">
              <Link to="https://6valley.6amtech.com/products?id=36&data_from=category&page=1">
                <span className="pl-3">Cooking Recipe</span>
              </Link>
            </li>
            <li className="dropdown">
              <Link to="https://6valley.6amtech.com/products?id=35&data_from=category&page=1">
                <span className="pl-3">Story Book</span>
              </Link>
              <Link
                style={{
                  fontFamily: "sans-serif !important",
                  fontSize: "1rem",
                  fontWeight: 300,
                  lineHeight: "1.5",
                  marginLeft: 50
                }}
                data-toggle="dropdown"
              >
                <i className="czi-arrow-right __inline-16" />
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="https://6valley.6amtech.com/products?id=37&data_from=category&page=1"
                  >
                    Comic Book
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="https://6valley.6amtech.com/products?id=38&data_from=category&page=1"
                  >
                    Biography
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="https://6valley.6amtech.com/products?id=15&data_from=category&page=1">
            <img
              src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566c1958ba3.png"
              onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
              className="__img-18"
            />
            <span className="pl-3">Jewelry &amp; Watches</span>
          </Link>
          <Link data-toggle="dropdown" className="__ml-50px">
            <i className="czi-arrow-right __inline-16" />
          </Link>
          <ul className="dropdown-menu" style={{ textAlign: "left" }}>
            <li className="dropdown">
              <Link to="https://6valley.6amtech.com/products?id=19&data_from=category&page=1">
                <span className="pl-3">Jewelry</span>
              </Link>
            </li>
            <li className="dropdown">
              <Link to="https://6valley.6amtech.com/products?id=20&data_from=category&page=1">
                <span className="pl-3">Watches</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="https://6valley.6amtech.com/products?id=11&data_from=category&page=1">
            <img
              src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566b4deaba6.png"
              onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
              className="__img-18"
            />
            <span className="pl-3">Women's fashion</span>
          </Link>
          <Link data-toggle="dropdown" className="__ml-50px">
            <i className="czi-arrow-right __inline-16" />
          </Link>
          <ul className="dropdown-menu" style={{ textAlign: "left" }}>
            <li className="dropdown">
              <Link to="https://6valley.6amtech.com/products?id=18&data_from=category&page=1">
                <span className="pl-3">Dress</span>
              </Link>
            </li>
            <li className="dropdown">
              <Link to="https://6valley.6amtech.com/products?id=17&data_from=category&page=1">
                <span className="pl-3">Shoes</span>
              </Link>
              <Link
                style={{
                  fontFamily: "sans-serif !important",
                  fontSize: "1rem",
                  fontWeight: 300,
                  lineHeight: "1.5",
                  marginLeft: 50
                }}
                data-toggle="dropdown"
              >
                <i className="czi-arrow-right __inline-16" />
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="https://6valley.6amtech.com/products?id=21&data_from=category&page=1"
                  >
                    regular wear
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="https://6valley.6amtech.com/products?id=13&data_from=category&page=1">
            <img
              src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566bd73a8d3.png"
              onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
              className="__img-18"
            />
            <span className="pl-3">Outdoor Fun &amp; Sports</span>
          </Link>
        </li>
        <li className="dropdown">
          <Link to="https://6valley.6amtech.com/products?id=12&data_from=category&page=1">
            <img
              src="https://6valley.6amtech.com/storage/app/public/category/2022-04-13-62566b6cd3e60.png"
              onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
              className="__img-18"
            />
            <span className="pl-3">Men's fashion</span>
          </Link>
        </li>
      </ul>
    </li>
  </ul>
  <ul className="navbar-nav" style={{}}>
    <li className="nav-item dropdown ">
      <Link className="nav-link  text-white" to="/">
        Home
      </Link>
    </li>
    <li className="nav-item dropdown">
      <Link className="nav-link text-white dropdown-toggle" to="#" data-bs-toggle="dropdown">
        All Brands
      </Link>
      <ul
        className="dropdown-menu __dropdown-menu-sizing dropdown-menu-left scroll-bar"
        style={{ textAlign: "left" ,width:'240px'}}
      >
        <li className="__inline-17">
          <div>
            <Link
              className="dropdown-item"
              to="https://6valley.6amtech.com/products?id=17&data_from=brand&page=1"
            >
              Digital Product House
            </Link>
          </div>
          <div className="align-baseline">
            <span className="count-value px-2">( 1 )</span>
          </div>
        </li>
        <li className="__inline-17">
          <div>
            <Link
              className="dropdown-item"
              to="https://6valley.6amtech.com/products?id=14&data_from=brand&page=1"
            >
              Vivatiqo
            </Link>
          </div>
          <div className="align-baseline">
            <span className="count-value px-2">( 1 )</span>
          </div>
        </li>
        <li className="__inline-17">
          <div>
            <Link
              className="dropdown-item"
              to="https://6valley.6amtech.com/products?id=13&data_from=brand&page=1"
            >
              Axxelus
            </Link>
          </div>
          <div className="align-baseline">
            <span className="count-value px-2">( 1 )</span>
          </div>
        </li>
        <li className="__inline-17">
          <div>
            <Link
              className="dropdown-item"
              to="https://6valley.6amtech.com/products?id=12&data_from=brand&page=1"
            >
              Modentum
            </Link>
          </div>
          <div className="align-baseline">
            <span className="count-value px-2">( 1 )</span>
          </div>
        </li>
        <li className="__inline-17">
          <div>
            <Link
              className="dropdown-item"
              to="https://6valley.6amtech.com/products?id=11&data_from=brand&page=1"
            >
              Framerce
            </Link>
          </div>
          <div className="align-baseline">
            <span className="count-value px-2">( 1 )</span>
          </div>
        </li>
        <li className="__inline-17">
          <div>
            <Link
              className="dropdown-item"
              to="https://6valley.6amtech.com/products?id=10&data_from=brand&page=1"
            >
              Crave
            </Link>
          </div>
          <div className="align-baseline">
            <span className="count-value px-2">( 2 )</span>
          </div>
        </li>
        <li className="__inline-17">
          <div>
            <Link
              className="dropdown-item"
              to="https://6valley.6amtech.com/products?id=9&data_from=brand&page=1"
            >
              Dynamova
            </Link>
          </div>
          <div className="align-baseline">
            <span className="count-value px-2">( 2 )</span>
          </div>
        </li>
        <li className="__inline-17">
          <div>
            <Link
              className="dropdown-item"
              to="https://6valley.6amtech.com/products?id=8&data_from=brand&page=1"
            >
              The Wall
            </Link>
          </div>
          <div className="align-baseline">
            <span className="count-value px-2">( 1 )</span>
          </div>
        </li>
        <li className="__inline-17">
          <div>
            <Link
              className="dropdown-item"
              to="https://6valley.6amtech.com/products?id=7&data_from=brand&page=1"
            >
              TrueMake
            </Link>
          </div>
          <div className="align-baseline">
            <span className="count-value px-2">( 1 )</span>
          </div>
        </li>
        <li className="__inline-17">
          <div>
            <Link
              className="dropdown-item"
              to="https://6valley.6amtech.com/products?id=6&data_from=brand&page=1"
            >
              Centre Point
            </Link>
          </div>
          <div className="align-baseline">
            <span className="count-value px-2">( 1 )</span>
          </div>
        </li>
        <li className="__inline-17">
          <div>
            <Link
              className="dropdown-item"
              to="https://6valley.6amtech.com/products?id=5&data_from=brand&page=1"
            >
              Arkohub
            </Link>
          </div>
          <div className="align-baseline">
            <span className="count-value px-2">( 10 )</span>
          </div>
        </li>
        <li className="__inline-17">
          <div>
            <Link
              className="dropdown-item"
              to="https://6valley.6amtech.com/products?id=4&data_from=brand&page=1"
            >
              Tell us
            </Link>
          </div>
          <div className="align-baseline">
            <span className="count-value px-2">( 3 )</span>
          </div>
        </li>
        <li className="__inline-17">
          <div>
            <Link
              className="dropdown-item"
              to="https://6valley.6amtech.com/products?id=1&data_from=brand&page=1"
            >
              Great Hall
            </Link>
          </div>
          <div className="align-baseline">
            <span className="count-value px-2">( 13 )</span>
          </div>
        </li>
        <li className="__inline-17">
          <div>
            <Link
              className="dropdown-item"
              to="https://6valley.6amtech.com/brands"
              style={{ color: "#3b71de !important" }}
            >
              View more
            </Link>
          </div>
        </li>
      </ul>
    </li>
    <li className="nav-item dropdown ">
      <Link
        className="nav-link text-white text-capitalize"
        to="/discount_product"
      >
        Discounted products
      </Link>
    </li>
    <li className="nav-item dropdown ">
      <Link className="nav-link text-white" to="/all_seller">
        All Sellers
      </Link>
    </li>
    <li className="nav-item">
      <div className="dropdown">
        <button
          className="btn dropdown-toggle text-white"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-bs-haspopup="true"
          aria-bs-expanded="false"
          style={{ paddingLeft: 0 }}
        >
          Seller Zone
        </button>
        <div
          className="dropdown-menu __dropdown-menu-3 __min-w-165px"
          aria-labelledby="dropdownMenuButton"
          style={{ textAlign: "left" }}
        >
          <Link
            className="dropdown-item"
            to="/shop_application"
          >
            Become Link Seller
          </Link>
          <div className="dropdown-divider" />
          <Link
            className="dropdown-item"
            to="/login_seller"
          >
            Seller Login
          </Link>
        </div>
      </div>
    </li>
  </ul>
</div>

    </div>
  </div>
</div>

    </>
  )
}

export default StickyNavbar