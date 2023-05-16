import React from "react";
import FlashCarsousel from "./FlashCarsousel";
import './flash.css';
const FlashDeal = () => {
  return (
    <>
      <div className="container-fluid bg-light px-2 px-md-5 py-5">
        <div className="row">
          <div class="col-xl-3 col-lg-4 mt-2 countdown-card">
            <div class="m-2">
              <div class="flash-deal-text">
                <span>Flash deal</span>
              </div>
              <div class="text-center text-white">
                <div class="countdown-background">
                  <span
                    class="cz-countdown d-flex justify-content-center align-items-center"
                    data-countdown="12/08/2023 11:59:00 PM"
                  >
                    <span class="cz-countdown-days">
                      <span class="cz-countdown-value">256</span>
                      <span>Day</span>
                    </span>
                    <span class="cz-countdown-value p-1">:</span>
                    <span class="cz-countdown-hours">
                      <span class="cz-countdown-value">00</span>
                      <span>Hrs</span>
                    </span>
                    <span class="cz-countdown-value p-1">:</span>
                    <span class="cz-countdown-minutes">
                      <span class="cz-countdown-value">01</span>
                      <span>Min</span>
                    </span>
                    <span class="cz-countdown-value p-1">:</span>
                    <span class="cz-countdown-seconds">
                      <span class="cz-countdown-value">31</span>
                      <span>Sec</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
          

      <FlashCarsousel/>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashDeal;
