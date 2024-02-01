import React from 'react'
import { Link } from 'react-router-dom' 
import './AddCustomerPayment.css'

const AddCustomerPayment = () => {
  return (

<>

<main id="main" className="main">
  <section className="section">
    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
              <div className="row">
            <div className="col-md-7 col-sm-12 ">
              <h5 className="">
                <b>Add Customer Payment</b>
              </h5>
            </div>
            <div className='col-md-3 col-sm-12' >
              <div className="form-group ">
         
                <input
                  type="search"
                  className="form-control   "
                  placeholder="Search"
                />
              </div>
            </div>
            <div className='col-md-1 col-sm-12'>
              <button type="button" className="btn btn-danger 
                py-1">
                  Search
                </button>
            </div>
         
          </div>
      <hr className=" m-0 my-4   " style={{
                            background: 'black',
                        }} />
      <div className="row mt-3">
        <div className="col-md-3">
          <div className="form-group">
            <label>Account </label>
            <input type="text" className="form-control c2" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Customer Name</label>
            <input type="text" className="form-control c2" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Balance Bottle</label>
            <input type="text" className="form-control c2" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Balance Amount</label>
            <input type="text" className="form-control c2" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Payment Receiver</label>
            <select
              className="form-select c2"
              aria-label="Default select example"
            >
              <option selected="">Select Salesman</option>
              <option value={1}>rohan</option>
              <option value={1}>uohan</option>
              <option value={1}>eohan</option>
              <option value={1}>mohan</option>
            
            </select>
          </div>
        </div>
       
        <div className="col-md-3">
          <div className="form-group">
            <label>Payment Date</label>
            <input type="date" className="form-control c2" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Payment Mode </label>
            <select
              className="form-select c2"
              aria-label="Default select example"
            >
                  <option selected="">Mobile Wallet</option>
                  <option value={1}>EVC Plus</option> 
                  <option value={1}>Online</option>
                   <option value={1}>Cash</option>
                   <option value={1}>eDahab</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Payment Received</label>
            <input type="number" className="form-control c2" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Tax / Discount </label>
            <input type="number" className="form-control c2" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Cheque No</label>
            <input type="text" className="form-control c2" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Remarks</label>
            <input type="text" className="form-control c2" />
          </div>
        </div>
        <div className="row">
          <div className="d-grid gap-2 d-flex justify-content-center mt-4">
            <button className="button" style={{ verticalAlign: "middle" }}>
              <span>Save</span>
            </button>
          </div>
        </div>
        {/* form end */}
        {/* Table Strat */}
        <div className="row mt-4">
          <div className="">
            <div className="table-responsive">
              <table
                className="table table-hover"
                style={{ justifyContent: "center" }}
              >
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="text-center"
                      style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                    >
                      Account
                    </th>
                    <th
                      scope="col"
                      style={{
                        paddingLeft: "3rem",
                        textAlign: "center",
                        whiteSpace: "nowrap"
                      }}
                    >
                      Customer Name
                    </th>
                    <th
                      scope="col"
                      style={{
                        paddingLeft: "2rem",
                        textAlign: "center",
                        whiteSpace: "nowrap"
                      }}
                    >
                      Balance Bottle
                    </th>
                    <th
                      scope="col"
                      style={{
                        paddingLeft: "3rem",
                        textAlign: "center",
                        whiteSpace: "nowrap"
                      }}
                    >
                      Balance Amount
                    </th>
                    <th
                      scope="col"
                      style={{
                        paddingLeft: "3rem",
                        textAlign: "center",
                        whiteSpace: "nowrap"
                      }}
                    >
                      Payment Receiver
                    </th>
                    <th
                      scope="col"
                      style={{
                        paddingLeft: "3rem",
                        textAlign: "center",
                        whiteSpace: "nowrap"
                      }}
                    >
                      Select Bank
                    </th>
                    <th
                      scope="col"
                      style={{
                        paddingLeft: "3rem",
                        textAlign: "center",
                        whiteSpace: "nowrap"
                      }}
                    >
                      Payment Date
                    </th>
                    <th
                      scope="col "
                      style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                    >
                      Payment Mode{" "}
                    </th>
                    <th
                      scope="col "
                      style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                    >
                      Tax / Discount{" "}
                    </th>
                    <th
                      scope="col "
                      style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                    >
                      Cheque No
                    </th>
                    <th
                      scope="col "
                      style={{ paddingLeft: "2rem", whiteSpace: "nowrap" }}
                    >
                      Remarks
                    </th>
                    <th
                      scope="col "
                      style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      1231
                    </td>
                    <td
                      className="text-center"
                      style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                    >
                      23-10-2023
                    </td>
                    <td className="text-center" style={{ paddingLeft: 29 }}>
                      ABC
                    </td>
                    <td className="text-center">100</td>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      1231
                    </td>
                    <td
                      className="text-center"
                      style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                    >
                      23-10-2023
                    </td>
                    <td className="text-center" style={{ paddingLeft: 29 }}>
                      ABC
                    </td>
                    <td className="text-center">100</td>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      1231
                    </td>
                    <td
                      className="text-center"
                      style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                    >
                      23-10-2023
                    </td>
                    <td className="text-center" style={{ paddingLeft: 29 }}>
                      ABC
                    </td>
                    <td className="text-center" style={{ paddingLeft: "3rem" }}>
                      <div className="parent_div ">
                        <div
                          style={{ cursor: "pointer" }}
                          className="edit_icon"
                          aria-label="Example icon button with a menu icon"
                        >
                          <Link to="/admin/edit_customer_payment" style={{textDecoration:"none"}}><i className="ri-pencil-line" /></Link>
                        </div>
                        <div
                          style={{ cursor: "pointer" }}
                          className="delete_icon"
                          aria-label="Example icon button with a menu icon"
                        >
                          <i className="ri-delete-bin-6-line " />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      1231
                    </td>
                    <td
                      className="text-center"
                      style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                    >
                      23-10-2023
                    </td>
                    <td className="text-center" style={{ paddingLeft: 29 }}>
                      ABC
                    </td>
                    <td className="text-center">100</td>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      1231
                    </td>
                    <td
                      className="text-center"
                      style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                    >
                      23-10-2023
                    </td>
                    <td className="text-center" style={{ paddingLeft: 29 }}>
                      ABC
                    </td>
                    <td className="text-center">100</td>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      1231
                    </td>
                    <td
                      className="text-center"
                      style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                    >
                      23-10-2023
                    </td>
                    <td className="text-center" style={{ paddingLeft: 29 }}>
                      ABC
                    </td>
                    <td className="text-center" style={{ paddingLeft: "3rem" }}>
                      <div className="parent_div ">
                        <div
                          style={{ cursor: "pointer" }}
                          className="edit_icon"
                          aria-label="Example icon button with a menu icon"
                        >
                          <Link to="/admin/edit_customer_payment" style={{textDecoration:"none"}}><i className="ri-pencil-line" /></Link>
                        </div>
                        <div
                          style={{ cursor: "pointer" }}
                          className="delete_icon"
                          aria-label="Example icon button with a menu icon"
                        >
                          <i className="ri-delete-bin-6-line " />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      1231
                    </td>
                    <td
                      className="text-center"
                      style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                    >
                      23-10-2023
                    </td>
                    <td className="text-center" style={{ paddingLeft: 29 }}>
                      ABC
                    </td>
                    <td className="text-center">100</td>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      1231
                    </td>
                    <td
                      className="text-center"
                      style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                    >
                      23-10-2023
                    </td>
                    <td className="text-center" style={{ paddingLeft: 29 }}>
                      ABC
                    </td>
                    <td className="text-center">100</td>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      1231
                    </td>
                    <td
                      className="text-center"
                      style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                    >
                      23-10-2023
                    </td>
                    <td className="text-center" style={{ paddingLeft: 29 }}>
                      ABC
                    </td>
                    <td className="text-center" style={{ paddingLeft: "3rem" }}>
                      <div className="parent_div ">
                        <div
                          style={{ cursor: "pointer" }}
                          className="edit_icon"
                          aria-label="Example icon button with a menu icon"
                        >
                         
                          <Link to="/admin/edit_customer_payment" style={{textDecoration:"none"}}><i className="ri-pencil-line" /></Link>

                        </div>
                        <div
                          style={{ cursor: "pointer" }}
                          className="delete_icon"
                          aria-label="Example icon button with a menu icon"
                        >
                          <i className="ri-delete-bin-6-line " />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

</>
  
  )
}

export default AddCustomerPayment