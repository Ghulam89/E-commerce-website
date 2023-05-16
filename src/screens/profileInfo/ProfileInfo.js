import React from 'react'
import CompnayDetails from '../../components/CompnayDetails';
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './profile.css';
const ProfileInfo = () => {
  return (
    <>
    <Navbar/>
     <section style={{backgroundColor:'#FAFAFC'}}
     >
<div class="container-fluid rtl">
<h3 class="py-3 m-0 text-center headerTitle">Profile Info</h3>
</div>
   
      <div className="container-fluid px-5 pb-5 mb-2 mb-md-4 rtl">
  <div className="row">
    <div className="sidebarR col-lg-3 col-md-3 pr-lg-3 pr-xl-4">
      <div className="__customer-sidebar" id="shop-sidebar">
        <div>
          <div className="widget-title">
            <a className="" href=" ">
              My order
            </a>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <a className="" href="">
              My wallet{" "}
            </a>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <a className="" href=" ">
              My loyalty point
            </a>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <a className="" href="">
              Track your order
            </a>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <a className="" href="">
              {" "}
              Wish List{" "}
            </a>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <a className="" href="">
              Chat with seller
            </a>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <a
              className=""
              href=""
            >
              Chat with delivery-man
            </a>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <a
              className="active-menu"
              href=""
            >
              Profile Info
            </a>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <a className="" href="">
              Address{" "}
            </a>
          </div>
        </div>
        <div>
          <div className="widget-title">
            <a className="" href="">
              Support Ticket
            </a>
          </div>
        </div>
      </div>
    </div>
    <section className="col-lg-9 col-md-9 __customer-profile">
      <div className="card box-shadow-sm">
        <div className="card-header p-3 bg-white">
          <form
            className="mt-3 px-sm-2 pb-2"
            action=""
            method="post"
            encType="multipart/form-data"
          >
            <div className="row photoHeader g-3">
              <input
                type="hidden"
                name="_token"
                
              />
              <div className="d-flex mb-3 mb-md-0 align-items-center">
                <img
                  id="blah"
                  className="rounded-circle border __inline-48"
                  onerror="this.src='"
                  src="	https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png"
                />
                <div className="pl-2">
                  <h5 className="font-name">Ghulam Mustafa</h5>
                  <label
                    htmlFor="files"
                    style={{ cursor: "pointer", color: "#3b71de" }}
                    className="spandHeadO m-0"
                  >
                    Change your profile
                  </label>
                  <span className="text-danger __text-10px">
                    ( * Image ratio should be 1:1 )
                  </span>
                  <input id="files" name="image" className='d-none' type="file" />
                </div>
              </div>
              <div className="card-body mt-md-3 p-0">
                <h3 className="font-nameA">Account information </h3>
                <div className="row pt-3">
                  <div className="form-group col-md-6 mb-0">
                    <label htmlFor="firstName">First name </label>
                    <input
                      type="text"
                      className="form-control"
                      id="f_name"
                      name="f_name"
                      defaultValue="Ghulam"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-6 mb-0">
                    <label htmlFor="lastName"> Last name </label>
                    <input
                      type="text"
                      className="form-control"
                      id="l_name"
                      name="l_name"
                      defaultValue="Mustafa"
                    />
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="form-group col-md-6 mb-0">
                    <label htmlFor="inputEmail4">Email </label>
                    <input
                      type="email"
                      className="form-control"
                      id="account-email"
                      defaultValue="gm6681328@gmail.com"
                      disabled=""
                    />
                  </div>
                  <div className="form-group col-md-6 mb-0">
                    <label htmlFor="phone">Phone number </label>
                    <small className="text-primary">
                      ( * Country code is must Like for BD 880 )
                    </small>
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      name="phone"
                      defaultValue=""
                      required=""
                    />
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="form-group col-md-6 mb-0">
                    <label htmlFor="si-password">New password</label>
                    <div className="password-toggle">
                      <input
                        className="form-control"
                        name="password"
                        type="password"
                        id="password"
                      />
                      <label className="password-toggle-btn">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          style={{ display: "none" }}
                        />
                        <i
                          className="czi-eye password-toggle-indicator"
                          onchange="checkPasswordMatch()"
                        />
                        <span className="sr-only">Show Password </span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group col-md-6 mb-0">
                    <label htmlFor="newPass">Confirm password </label>
                    <div className="password-toggle">
                      <input
                        className="form-control"
                        name="confirm_password"
                        type="password"
                        id="confirm_password"
                      />
                      <div>
                        <label className="password-toggle-btn">
                          <input
                            className="custom-control-input"
                            type="checkbox"
                            style={{ display: "none" }}
                          />
                          <i
                            className="czi-eye password-toggle-indicator"
                            onchange="checkPasswordMatch()"
                          />
                          <span className="sr-only">Show Password </span>
                        </label>
                      </div>
                    </div>
                    <div id="message" />
                  </div>
                  <div className="col-12 d-flex flex-wrap justify-content-between __gap-15 __profile-btns">
                    <a
                      className="btn btn-danger"
                      href="javascript:"
                      
                    >
                      Delete account
                    </a>
                    <button type="submit" className="btn btn--primary">
                      Update{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
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

export default ProfileInfo