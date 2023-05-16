import React from "react";
import "./navbar.css";
const Topbar = () => {
  return (
    <>
      <div class="topbar p-1" style={{background:'#FBB13F',fontSize:'14px'}} >
        <div class="container-fluid px-2 px-md-5 d-flex justify-content-between">
          <div>
            <div class="topbar-text  dropdown d-md-none ml-auto">
              <a class="topbar-link" href="tel: 000000000">
                <i class="fa fa-phone"></i> 000000000
              </a>
            </div>
            <div class="d-none d-md-block mr-2 text-nowrap">
              <a
                class="topbar-link d-none d-md-inline-block"
                href="tel:000000000"
              >
                <i class="fa fa-phone"></i> 000000000
              </a>
            </div>
          </div>
          <div  className="d-flex" >
            <div class="topbar-text dropdown disable-autohide mr-4">
              <a
                class="topbar-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                <span>USD $</span>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-left"
                style={{minWidth:'160px!important',textAlign:'left'}}
              >
                <li
                  class="dropdown-item cursor-pointer"
                  onclick="currency_change('USD')"
                >
                  USD
                </li>
                <li
                  class="dropdown-item cursor-pointer"
                  onclick="currency_change('BDT')"
                >
                  BDT
                </li>
                <li
                  class="dropdown-item cursor-pointer"
                  onclick="currency_change('INR')"
                >
                  Indian Rupi
                </li>
                <li
                  class="dropdown-item cursor-pointer"
                  onclick="currency_change('EUR')"
                >
                  Euro
                </li>
                <li
                  class="dropdown-item cursor-pointer"
                  onclick="currency_change('JPY')"
                >
                  YEN
                </li>
                <li
                  class="dropdown-item cursor-pointer"
                  onclick="currency_change('MYR')"
                >
                  Ringgit
                </li>
                <li
                  class="dropdown-item cursor-pointer"
                  onclick="currency_change('ZAR')"
                >
                  Rand
                </li>
                <li
                  class="dropdown-item cursor-pointer"
                  onclick="currency_change('QR')"
                >
                  Qatar
                </li>
              </ul>
            </div>
            <div class="topbar-text dropdown disable-autohide  __language-bar text-capitalize">
              <a
                class="topbar-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  class="mr-2"
                  width="20"
                  src="https://6valley.6amtech.com/public/assets/front-end/img/flags/en.png"
                  alt="Eng"
                />
                english
              </a>
              <ul
                class="dropdown-menu dropdown-menu-left"
                style={{textAlign:'left'}}
              >
                <li>
                  <a
                    class="dropdown-item pb-1"
                    href="https://6valley.6amtech.com/lang/en"
                  >
                    <img
                      class="mr-2"
                      width="20"
                      src="https://6valley.6amtech.com/public/assets/front-end/img/flags/en.png"
                      alt="english"
                    />
                    <span style={{textTransform:'capitalize'}}>english</span>
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item pb-1"
                    href="https://6valley.6amtech.com/lang/sa"
                  >
                    <img
                      class="mr-2"
                      width="20"
                      src="https://6valley.6amtech.com/public/assets/front-end/img/flags/sa.png"
                      alt="Arabic"
                    />
                    <span style={{textTransform:'capitalize'}}>Arabic</span>
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item pb-1"
                    href="https://6valley.6amtech.com/lang/bd"
                  >
                    <img
                      class="mr-2"
                      width="20"
                      src="https://6valley.6amtech.com/public/assets/front-end/img/flags/bd.png"
                      alt="Bangla"
                    />
                    <span style={{textTransform:'capitalize'}}>Bangla</span>
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item pb-1"
                    href="https://6valley.6amtech.com/lang/in"
                  >
                    <img
                      class="mr-2"
                      width="20"
                      src="https://6valley.6amtech.com/public/assets/front-end/img/flags/in.png"
                      alt="Hindi"
                    />
                    <span style={{textTransform:'capitalize'}}>Hindi</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
