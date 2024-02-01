import React from 'react'
import { Link } from 'react-router-dom' 

import './CustomerLedger.css'

const CustomerLedger = () => {
  return (
    <>
    <main id="main" className="main">
      <section className="section">
        <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
      
              <div className="row">
            <div className="col-md-7 col-sm-12 ">
              <h5 className="">
                <b>Customer Ledger</b>
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
          <hr className="m-0 mb-3 mt-3"
              style={{
                background: 'black',
              }} />
          <div className="row mt-3">
            <div className="col-md-3">
              <div className="form-group">
                <label>Customer Name/ID</label>
                <input type="text" className="form-control c2" placeholder={1} />
              </div>
            </div>
        
            <div className="col-md-3">
              <div className="form-group">
                <label>Ledger Type</label>
                <select
                  className="form-select c2"
                  aria-label="Default select example"
                >
                  <option selected="">All Date Wiste Ledger</option>
                  <option value={1}>All Month wise Ledger</option>
                  <option value={1}>Form and To (Date Wise Ledger)</option>
                  <option value={1}>Form and To (Month Wise Ledger)</option>
                </select>
              </div>
            </div>
        
            <div className="col-md-3">
              <div className="form-group">
                <label>Address</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Contact </label>
                <input type="number" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Security Balance</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Outstanding Bottle</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Outstanding Balance</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            {/* form end */}
            {/* Table Strat */}
            <div className="col-md-3">
              <div className="form-group">
                <label>Total Sale Water Bottle</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Total Return Empty Bottle</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Bottle Balance</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Billing Amount</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Total Amount</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Payment Received</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Tax / Discount</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Balance</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            {/* <hr className="m-0 mb-3"
              style={{
                background: 'black',
              }} /> */}
            <div className="row mt-2">
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
                          Customer ID
                        </th>
                  
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Ledger Type
                        </th>
                        {/* <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Customer ID
                        </th> */}
                        {/* <th
                          scope="col"
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          Name
                        </th> */}
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Contact
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Security Balance
                        </th>
                        <th
                          scope="col"
                          className="text-center"
                          style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                        >
                          Outstanding Bottle
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Outstanding Balance
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Total Sale Water Bottle
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Total Return Empty Bottle
                        </th>
                        <th
                          scope="col"
                          className="text-center"
                          style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                        >
                          Bottle Balance
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Billing Amount
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Total Amount
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Payment Received
                        </th>
                        <th
                          scope="col"
                          className="text-center"
                          style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                        >
                          Tax / Discount
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Balance
                        </th>
                        <th
                          scope="col"
                          style={{ paddingLeft: "3rem", textAlign: "center" }}
                        >
                          Action{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                     
                    
                    
                        <td
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          1231
                        </td>
                        <td className="text-center">100</td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          1231
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          1231
                        </td>
                        <td className="text-center">100</td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          1231
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          1231
                        </td>
                        <td className="text-center">100</td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          1231
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          1231
                        </td>
                        <td className="text-center">100</td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          1231
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          1231
                        </td>
                        <td className="text-center">100</td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          1231
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem" }}
                        >
                          <div className="parent_div ">
                            <div
                              style={{ cursor: "pointer" }}
                              className="edit_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <Link to="/admin/edit_customer_ledger" style={{textDecoration:"none"}}>
                                <i className="ri-pencil-line" /></Link>
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
                     
                    
                    
                     <td
                       className="text-center"
                       style={{ paddingLeft: "4rem" }}
                     >
                       1231
                     </td>
                     <td className="text-center">100</td>
                     <td
                       className="text-center"
                       style={{ paddingLeft: "4rem" }}
                     >
                       1231
                     </td>
                     <td
                       className="text-center"
                       style={{ paddingLeft: "4rem" }}
                     >
                       1231
                     </td>
                     <td className="text-center">100</td>
                     <td
                       className="text-center"
                       style={{ paddingLeft: "4rem" }}
                     >
                       1231
                     </td>
                     <td
                       className="text-center"
                       style={{ paddingLeft: "4rem" }}
                     >
                       1231
                     </td>
                     <td className="text-center">100</td>
                     <td
                       className="text-center"
                       style={{ paddingLeft: "4rem" }}
                     >
                       1231
                     </td>
                     <td
                       className="text-center"
                       style={{ paddingLeft: "4rem" }}
                     >
                       1231
                     </td>
                     <td className="text-center">100</td>
                     <td
                       className="text-center"
                       style={{ paddingLeft: "4rem" }}
                     >
                       1231
                     </td>
                     <td
                       className="text-center"
                       style={{ paddingLeft: "4rem" }}
                     >
                       1231
                     </td>
                     <td className="text-center">100</td>
                     <td
                       className="text-center"
                       style={{ paddingLeft: "4rem" }}
                     >
                       1231
                     </td>
                     <td
                       className="text-center"
                       style={{ paddingLeft: "3rem" }}
                     >
                       <div className="parent_div ">
                         <div
                           style={{ cursor: "pointer" }}
                           className="edit_icon"
                           aria-label="Example icon button with a menu icon"
                         >
                           <Link to="/admin/edit_customer_ledger" style={{textDecoration:"none"}}>
                             <i className="ri-pencil-line" /></Link>
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
            <div className="d-grid gap-2 d-flex justify-content-center my-4">
              <button className="button" style={{ verticalAlign: "middle" }}>
                <span>Save</span>
              </button>
           
            </div>
          </div>
        </div>
      </section>
    </main>
    {/* End #main */}
  </>
  
  )
}

export default CustomerLedger