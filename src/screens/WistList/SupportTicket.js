import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai'
const SupportTicket = () => {
  return (
    <div>
     <section className="">
  <div className="card __card border-0">
  <h3 className="headerTitle my-3 text-center">Support Ticket</h3>
    <div className="card-body p-0">
      <div className="table-responsive">
        <table className="table mb-0 __ticket-table">
          <thead className="thead-light">
            <tr>
              <th className="border-t-0">
                <div className="py-2">
                  <span className="d-block spandHeadO ">Topic</span>
                </div>
              </th>
              <th className="border-t-0">
                <div className="py-2 ml-2">
                  <span className="d-block spandHeadO ">Submition date</span>
                </div>
              </th>
              <th className="border-t-0">
                <div className="py-2">
                  <span className="d-block spandHeadO">Type</span>
                </div>
              </th>
              <th className="border-t-0">
                <div className="py-2">
                  <span className="d-block spandHeadO">Status</span>
                </div>
              </th>
              <th className="border-t-0 text-center">
                <div className="py-2">
                  <span className="d-block spandHeadO">Action </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
  <div className="mt-3 text-end">
    <button
      type="submit"
      className="btn btn--primary float-right"
      data-bs-toggle="modal"
      data-bs-target="#open-ticket"
    >
      Add new ticket
    </button>
  </div>


</section>
{/* <!-- Modal --> */}
<div class="modal fade" id="open-ticket" tabindex="-1" aria-bs-labelledby="exampleModalLabel" aria-bs-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content mx-auto w-75">
      <div class="modal-header">
      <div class="row">
<div class="col-md-12"><h5 class="modal-title font-nameA ">Submit new ticket</h5></div>
<div class="col-md-12 text-black mt-3">
<span>You will get response.</span>
</div>
</div>
      </div>
      <div class="modal-body">
      <form
  className="mt-3"
  method="post"
  action=""
  id="open-ticket"
>
  <input
    type="hidden"
    name="_token"
    
  />{" "}
  <div className="form-row">
    <div className="form-group col-md-12">
      <label htmlFor="firstName">Subject</label>
      <input
        type="text"
        className="form-control"
        id="ticket-subject"
        name="ticket_subject"
        required=""
      />
    </div>
  </div>
  <div className="row">
    <div className="form-group col-md-6">
      <div className="">
        <label className="" htmlFor="inlineFormCustomSelect">
          Type
        </label>
        <select
          className="custom-select form-control"
          id="ticket-type"
          name="ticket_type"
          required=""
        >
          <option value="Website problem">Website Problem</option>
          <option value="Partner request">Partner request</option>
          <option value="Complaint">Complaint</option>
          <option value="Info inquiry">Info Inquiry </option>
        </select>
      </div>
    </div>
    <div className="form-group col-md-6">
      <div className="">
        <label className="" htmlFor="inlineFormCustomSelect">
          Priority
        </label>
        <select
          className="form-control custom-select"
          id="ticket-priority"
          name="ticket_priority"
          required=""
        >
          <option value="">Choose priority</option>
          <option value="Urgent">Urgent</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-12">
      <label htmlFor="detaaddressils">Describe your issue</label>
      <textarea
        className="form-control"
        rows={6}
        id="ticket-description"
        name="ticket_description"
        defaultValue={""}
      />
    </div>
  </div>
  <div className="modal-footer p-0 border-0">
    <button type="button" className="btn btn-secondary" data-dismiss="modal">
      Close
    </button>
    <button type="submit" className="btn btn--primary">
      Submit a ticket
    </button>
  </div>
</form>

      </div>
   
    </div>
  </div>
</div>

    </div>
  )
}

export default SupportTicket