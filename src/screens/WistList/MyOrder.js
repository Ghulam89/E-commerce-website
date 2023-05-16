import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai'
const MyOrder = () => {
  return (
    <div>
         <h3 className="headerTitle my-3 text-center">My Order</h3>
  <div className="card __card shadow-0">
    <div className="card-body p-0">
      <div className="table-responsive">
        <table className="table __table text-center">
          <thead className="thead-light">
            <tr>
              <td className="tdBorder">
                <div className="py-2">
                  <span className="d-block spandHeadO ">Order ID</span>
                </div>
              </td>
              <td className="tdBorder orderDate">
                <div className="py-2">
                  <span className="d-block spandHeadO">Order Date</span>
                </div>
              </td>
              <td className="tdBorder">
                <div className="py-2">
                  <span className="d-block spandHeadO"> Status</span>
                </div>
              </td>
              <td className="tdBorder">
                <div className="py-2">
                  <span className="d-block spandHeadO"> Total</span>
                </div>
              </td>
              <td className="tdBorder">
                <div className="py-2">
                  <span className="d-block spandHeadO"> Action</span>
                </div>
              </td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <center className="mb-2 mt-3 p-3">No order found</center>
      
      </div>
    </div>
  </div>


    </div>
  )
}

export default MyOrder