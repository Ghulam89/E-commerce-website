import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai'
const MyLoyaltyPoint = () => {
  return (
    <div>
                <h3 className="headerTitle my-3 text-center">My Loyalty Point</h3>
        <div className="card __card">
  <div className="card-header border-0 bg-white p-3">
    <div className="d-flex flex-wrap __gap-6 justify-content-between align-items-center __gap-15">
      <div>
        <span>Loyalty point history</span>
      </div>
      <div>
        <span>Total loyalty point :</span>
      </div>
      <div>
        <button
          type="button"
          className="btn btn--primary"
          data-bs-toggle="modal"
          data-bs-target="#convertToCurrency"
        >
          Convert to currency
        </button>
      </div>
    </div>
  </div>
  <div className="card-body p-0">
    <div className="table-responsive">
      <table className="table __table">
        <thead className="thead-light">
          <tr>
            <td className="tdBorder">
              <div className="py-2">
                <span className="d-block spandHeadO ">SL</span>
              </div>
            </td>
            <td className="tdBorder">
              <div className="py-2">
                <span className="d-block spandHeadO">Transaction type </span>
              </div>
            </td>
            <td className="tdBorder">
              <div className="py-2">
                <span className="d-block spandHeadO">Credit </span>
              </div>
            </td>
            <td className="tdBorder">
              <div className="py-2">
                <span className="d-block spandHeadO"> Debit</span>
              </div>
            </td>
            <td className="tdBorder">
              <div className="py-2">
                <span className="d-block spandHeadO"> Balance</span>
              </div>
            </td>
            <td className="tdBorder">
              <div className="py-2">
                <span className="d-block spandHeadO"> Date</span>
              </div>
            </td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <center className="mt-3 mb-2">No transaction found</center>
      <div className="card-footer border-0"></div>
    </div>
  </div>
</div>

{/* <!-- Modal --> */}
<div class="modal fade" id="convertToCurrency" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content mx-auto w-50">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Convert to currency</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
  <div className="text-start">roo</div>
  <div className="text-center">
    <span className="text-warning">
      Minimum point for convert to currency is : 200 Point
    </span>
  </div>
  <div className="text-center">
    <span>10 Point = $1.0</span>
  </div>
  <div className="form-row">
    <div className="form-group col-12">
      <input
        className="form-control py-2"
        type="number"
        id="city"
        name="point"
        required=""
      />
    </div>
  </div>
</div>

      <div class="modal-footer">
        <button type="button" class="btn btn-warning text-white" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn--primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default MyLoyaltyPoint