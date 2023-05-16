import React from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
const MyWallet = () => {
  return (
    <div>
                <h3 className="headerTitle my-3 text-center">My Wallet</h3>
      <div class="card __card">
        <div class="card-header border-0 bg-white p-3">
          <div class="d-flex __gap-6px flex-wrap justify-content-between">
            <div>
              <span>Transaction history</span>
            </div>
            <div>
              <span>Wallet amount : $0.0</span>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table __table">
              <thead class="thead-light">
                <tr>
                  <td class="tdBorder">
                    <div class="py-2">
                      <span class="d-block spandHeadO ">SL</span>
                    </div>
                  </td>
                  <td class="tdBorder">
                    <div class="py-2">
                      <span class="d-block spandHeadO">Transaction type </span>
                    </div>
                  </td>
                  <td class="tdBorder">
                    <div class="py-2">
                      <span class="d-block spandHeadO">Credit </span>
                    </div>
                  </td>
                  <td class="tdBorder">
                    <div class="py-2">
                      <span class="d-block spandHeadO"> Debit</span>
                    </div>
                  </td>
                  <td class="tdBorder">
                    <div class="py-2">
                      <span class="d-block spandHeadO"> Balance</span>
                    </div>
                  </td>
                  <td class="tdBorder">
                    <div class="py-2">
                      <span class="d-block spandHeadO"> Date</span>
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
            <center class=" mb-2 p-3">No transaction found</center>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWallet;
