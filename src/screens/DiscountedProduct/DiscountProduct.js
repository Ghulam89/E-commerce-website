import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './discounted.css'
import {FaAngleRight} from 'react-icons/fa'
import {HiOutlineSearch} from 'react-icons/hi'
import CompnayDetails from '../../components/CompnayDetails'
import {AiFillFilter} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';
import {GrFormClose} from 'react-icons/gr';
const DiscountProduct = () => {
  return (
    <>
    <Navbar/>
    <div class="d-flex w-100 justify-content-center align-items-center mb-3 __min-h-70px __inline-35" style={{background:'#3b71de10'}}>
<div class="text-capitalize container text-center">
<span class="__text-18px font-semibold">Discounted Products </span>
</div>
</div>
     <div
  className="container-fluid px-5 pb-5 py-5 mb-2 mb-md-4 rtl __inline-35"
  style={{ textAlign: "left" }}
>
  <div className="row">
    <aside
      className="col-lg-3 hidden-xs col-md-4 col-sm-6 SearchParameters __search-sidebar pr-2"
      id="SearchParameters"
    >
      <div className="cz-sidebar box-shadow-lg __inline-35" id="shop-sidebar">
         <div className='float-end d-block d-md-none shadow p-2'>
            <i
             onClick={()=>{
              const all_data =  document.getElementById('SearchParameters')
     
              all_data.classList.remove('add_par')
              }}
            ><GrFormClose  color="#0000" /></i>
         </div>
        <div className="pb-0">
          <div className="text-center">
            <div className="__cate-side-title border-bottom">
              <span className="widget-title font-semibold">Filter </span>
            </div>
            <div className="__p-25-10 w-100 pt-4">
              <label
                className="w-100 opacity-75 text-nowrap for-shoting d-block mb-0"
                htmlFor="sorting"
                style={{ paddingRight: 0 }}
              >
                <select
                  className="form-control  py-2 custom-select"
                  id="searchByFilterValue"
                >
                  <option selected="" disabled="">
                    Choose
                  </option>
                  <option value="">
                    Best Selling Products
                  </option>
                  <option value="">
                    Top rated
                  </option>
                  <option value="">
                    Most favorite
                  </option>
                  <option value="">
                    Featured deal
                  </option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="text-center">
            <div className="__cate-side-title border-top border-bottom">
              <span className="widget-title font-semibold">Price </span>
            </div>
            <div className="d-flex justify-content-between align-items-center __cate-side-price">
              <div className="__w-35p">
                <input
                  className="bg-white py-2 cz-filter-search form-control form-control-sm appended-form-control"
                  type="number"
                 
                  id="min_price"
                  placeholder="Min"
                />
              </div>
              <div className="__w-10p">
                <p className="m-0">To</p>
              </div>
              <div className="__w-35p">
                <input
              
                  className="bg-white py-2 cz-filter-search form-control form-control-sm appended-form-control"
                  type="number"
                  id="max_price"
                  placeholder="Max"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center __number-filter-btn">
                <a className="">
            
                  <FaAngleRight color='#fff' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center">
            <div className="__cate-side-title border-top border-bottom">
              <span className="widget-title font-semibold">Brands</span>
            </div>
            <div className="__cate-side-price pb-0">
              <div className="input-group-overlay input-group-sm position-relative" >
                <input
                  style={{}}
                  placeholder="Search by brands"
                  className="__inline-38  py-2 cz-filter-search form-control form-control-sm appended-form-control"
                  type="text"
                  id="search-brand"
                />
                <div className="input-group-append-overlay"  style={{position:'absolute',top:'5px',right:'12px'}} >
                  <span className="">
                    
                    <HiOutlineSearch color='dark' />
                  </span>
                </div>
              </div>
            </div>
            <ul
              id="lista1"
              className="__brands-cate-wrap pe-0"
              data-simplebar="init"
              data-simplebar-auto-hide="false"
            >
              <div
                className="simplebar-wrapper"
                style={{ margin: "0px 0px -5px -20px" }}
              >
                <div className="simplebar-height-auto-observer-wrapper">
                  <div className="simplebar-height-auto-observer" />
                </div>
                <div className="simplebar-mask">
                  <div
                    className="simplebar-offset"
                    style={{ right: 0, bottom: 0 }}
                  >
                    <div
                      className="simplebar-content-wrapper"
                      style={{ height: "250px", overflow: "hidden scroll" }}
                    >
                      <div
                        className="simplebar-content"
                        style={{ padding: "0px 0px 5px 20px" }}
                      >
                        <div className="brand mt-2 for-brand-hover " id="brand">
                          <li
                            className="d-flex justify-content-between align-items-center flex-between __inline-39"
                            onclick="location.href='https://6valley.6amtech.com/products?id=17&data_from=brand&page=1'"
                          >
                            <div>Digital Product House</div>
                            <div className="__brands-cate-badge">
                              <span className="">1</span>
                            </div>
                          </li>
                        </div>
                        <div className="brand mt-2 for-brand-hover " id="brand">
                          <li
                            className=" d-flex justify-content-between align-items-center flex-between __inline-39"
                            onclick="location.href='https://6valley.6amtech.com/products?id=14&data_from=brand&page=1'"
                          >
                            <div>Vivatiqo</div>
                            <div className="__brands-cate-badge">
                              <span className="">1</span>
                            </div>
                          </li>
                        </div>
                        <div className="brand mt-2 for-brand-hover " id="brand">
                          <li
                            className=" d-flex justify-content-between align-items-center flex-between __inline-39"
                            onclick="location.href='https://6valley.6amtech.com/products?id=13&data_from=brand&page=1'"
                          >
                            <div>Axxelus</div>
                            <div className="__brands-cate-badge">
                              <span className="">1</span>
                            </div>
                          </li>
                        </div>
                        <div className="brand mt-2 for-brand-hover " id="brand">
                          <li
                            className="d-flex justify-content-between align-items-center  flex-between __inline-39"
                            onclick="location.href='https://6valley.6amtech.com/products?id=12&data_from=brand&page=1'"
                          >
                            <div>Modentum</div>
                            <div className="__brands-cate-badge">
                              <span className="">1</span>
                            </div>
                          </li>
                        </div>
                        <div className="brand mt-2 for-brand-hover " id="brand">
                          <li
                            className="d-flex justify-content-between align-items-center  flex-between __inline-39"
                            onclick="location.href='https://6valley.6amtech.com/products?id=11&data_from=brand&page=1'"
                          >
                            <div>Framerce</div>
                            <div className="__brands-cate-badge">
                              <span className="">1</span>
                            </div>
                          </li>
                        </div>
                        <div className="brand mt-2 for-brand-hover " id="brand">
                          <li
                            className=" d-flex justify-content-between align-items-center flex-between __inline-39"
                            onclick="location.href='https://6valley.6amtech.com/products?id=10&data_from=brand&page=1'"
                          >
                            <div>Crave</div>
                            <div className="__brands-cate-badge">
                              <span className="">2</span>
                            </div>
                          </li>
                        </div>
                        <div className="brand mt-2 for-brand-hover " id="brand">
                          <li
                            className=" d-flex justify-content-between align-items-center flex-between __inline-39"
                            onclick="location.href='https://6valley.6amtech.com/products?id=9&data_from=brand&page=1'"
                          >
                            <div>Dynamova</div>
                            <div className="__brands-cate-badge">
                              <span className="">2</span>
                            </div>
                          </li>
                        </div>
                        <div className="brand mt-2 for-brand-hover " id="brand">
                          <li
                            className="d-flex justify-content-between align-items-center  flex-between __inline-39"
                            onclick="location.href='https://6valley.6amtech.com/products?id=8&data_from=brand&page=1'"
                          >
                            <div>The Wall</div>
                            <div className="__brands-cate-badge">
                              <span className="">1</span>
                            </div>
                          </li>
                        </div>

                      
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div
                 
                />
              </div>
              
            </ul>
        

          </div>

          <div className='text-center'>
          <div className="__cate-side-title border-top border-bottom">
              <span className="widget-title font-semibold">Categories
              </span>
            </div>
          </div>
        </div>
     
      </div>
      
    </aside>
    <section className="col-lg-9">
      <div className="d-flex flex-wrap align-items-center justify-content-between __inline-43 __gap-6px p-2">
        <i className='d-block rounded-2 d-md-none' style={{width:'35px',height:'35px',lineHeight:'35px',backgroundColor:'#EA4335'}}><AiFillFilter 
        style={{justifyContent: 'center',textAlign:'center',marginLeft:'10px'}}  
        color='#fff'
         onClick={()=>{
         const all_data =  document.getElementById('SearchParameters')
          
         all_data.classList.add('add_par')
         }}
           /></i>
        <h1 className="max-sm-order-1">
          <label id="price-filter-count"> 35 Items found </label>
        </h1>
        <div className="d-flex align-items-center ml-auto">
          <div className="w-100">
            <form
              id="search-form"
              action=""
              method="GET"
            >
             
              <div className=" float-right">
                <label className="for-shoting pe-2" htmlFor="sorting">
                  <span>Sort by</span>
                </label>
                <select className="__inline-44">
                  <option value="latest">Latest</option>
                  <option value="low-high">Low to High Price </option>
                  <option value="high-low">High to Low Price</option>
                  <option value="a-z">A to Z Order</option>
                  <option value="z-a">Z to A Order</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row mt-3" id="ajax-products">
        <div className=" col-lg-3 col-md-4 col-sm-6 col-6  mb-2 p-2">
          <div className="product-single-hover">
            <div className="overflow-hidden position-relative">
              <div
                className=" inline_product clickable d-flex justify-content-center"
                style={{
                  cursor: "pointer",
                  background: "#3b71de10",
                  borderRadius: "5px 5px 0px 0px"
                }}
              >
                <div className="d-flex" style={{ left: 8, top: 8 }}>
                  <span className="for-discoutn-value p-1 pl-2 pr-2">
                    10% Off
                  </span>
                </div>
                <div className="d-flex d-block">
                  <a href="">
                    <img
                      src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-634686f48bade.png"
                      onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                    />
                  </a>
                </div>
              </div>
              <div className="single-product-details">
                <div className="text-left pl-3">
                  <a href="">
                    Comic book pdf
                  </a>
                </div>
                <div className="rating-show justify-content-between text-center">
                  <span className="d-inline-block font-size-sm text-body">
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                    <label className="badge-style">( 0 )</label>
                  </span>
                </div>
                <div className="justify-content-between text-center">
                  <div className="product-price text-center">
                    <strike
                      style={{
                        fontSize: "12px!important",
                        color: "#E96A6A!important"
                      }}
                    >
                      $500.0
                    </strike>
                    <br />
                    <span className="text-accent">$450.0</span>
                  </div>
                </div>
              </div>
              <div className="text-center quick-view">
                <a
                  className="btn btn--primary btn-sm"
                  style={{
                    marginTop: 0,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10
                  }}
                  href="javascript:"
                  onclick="quickView('54')"
                >
                  <i className="czi-eye align-middle mr-1" />
                  Quick View
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-4 col-sm-6 col-6  mb-2 p-2">
          <div className="product-single-hover">
            <div className="overflow-hidden position-relative">
              <div
                className=" inline_product clickable d-flex justify-content-center"
                style={{
                  cursor: "pointer",
                  background: "#3b71de10",
                  borderRadius: "5px 5px 0px 0px"
                }}
              >
                <div className="d-flex" style={{ left: 8, top: 8 }}>
                  <span className="for-discoutn-value p-1 pl-2 pr-2">
                    10% Off
                  </span>
                </div>
                <div className="d-flex d-block">
                  <a href="">
                    <img
                      src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-634686f48bade.png"
                      onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                    />
                  </a>
                </div>
              </div>
              <div className="single-product-details">
                <div className="text-left pl-3">
                  <a href="">
                    Comic book pdf
                  </a>
                </div>
                <div className="rating-show justify-content-between text-center">
                  <span className="d-inline-block font-size-sm text-body">
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                    <label className="badge-style">( 0 )</label>
                  </span>
                </div>
                <div className="justify-content-between text-center">
                  <div className="product-price text-center">
                    <strike
                      style={{
                        fontSize: "12px!important",
                        color: "#E96A6A!important"
                      }}
                    >
                      $500.0
                    </strike>
                    <br />
                    <span className="text-accent">$450.0</span>
                  </div>
                </div>
              </div>
              <div className="text-center quick-view">
                <a
                  className="btn btn--primary btn-sm"
                  style={{
                    marginTop: 0,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10
                  }}
                  href="javascript:"
                  onclick="quickView('54')"
                >
                  <i className="czi-eye align-middle mr-1" />
                  Quick View
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-4 col-sm-6 col-6  mb-2 p-2">
          <div className="product-single-hover">
            <div className="overflow-hidden position-relative">
              <div
                className=" inline_product clickable d-flex justify-content-center"
                style={{
                  cursor: "pointer",
                  background: "#3b71de10",
                  borderRadius: "5px 5px 0px 0px"
                }}
              >
                <div className="d-flex" style={{ left: 8, top: 8 }}>
                  <span className="for-discoutn-value p-1 pl-2 pr-2">
                    10% Off
                  </span>
                </div>
                <div className="d-flex d-block">
                  <a href="">
                    <img
                      src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-10-12-634686f48bade.png"
                      onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                    />
                  </a>
                </div>
              </div>
              <div className="single-product-details">
                <div className="text-left pl-3">
                  <a href="">
                    Comic book pdf
                  </a>
                </div>
                <div className="rating-show justify-content-between text-center">
                  <span className="d-inline-block font-size-sm text-body">
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                  <i className=' __color-fea569'><AiFillStar/></i>
                    <label className="badge-style">( 0 )</label>
                  </span>
                </div>
                <div className="justify-content-between text-center">
                  <div className="product-price text-center">
                    <strike
                      style={{
                        fontSize: "12px!important",
                        color: "#E96A6A!important"
                      }}
                    >
                      $500.0
                    </strike>
                    <br />
                    <span className="text-accent">$450.0</span>
                  </div>
                </div>
              </div>
              <div className="text-center quick-view">
                <a
                  className="btn btn--primary btn-sm"
                  style={{
                    marginTop: 0,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10
                  }}
                  href="javascript:"
                  onclick="quickView('54')"
                >
                  <i className="czi-eye align-middle mr-1" />
                  Quick View
                </a>
              </div>
            </div>
          </div>
        </div>
        
    
        <div className="col-12">
          <nav
            className="d-flex justify-content-between pt-2"
            aria-label="Page navigation"
            id="paginator-ajax"
          >
            <nav>
              <ul className="pagination">
                <li
                  className="page-item disabled"
                  aria-disabled="true"
                  aria-label="« Previous"
                >
                  <span className="page-link" aria-hidden="true">
                    ‹
                  </span>
                </li>
                <li className="page-item active" aria-current="page">
                  <span className="page-link">1</span>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href=""
                  >
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href=""
                    rel="next"
                    aria-label="Next »"
                  >
                    ›
                  </a>
                </li>
              </ul>
            </nav>
          </nav>
        </div>
      </div>
    </section>
  </div>
</div>
<CompnayDetails/>
  <Footer/>
    </>
  )
}

export default DiscountProduct