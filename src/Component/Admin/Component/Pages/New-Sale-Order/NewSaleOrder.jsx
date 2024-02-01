import React from 'react'
import './NewSaleOrder.css'
import { Link } from 'react-router-dom'

const NewSaleOrder = () => {
  return (
    <>
      <main id="main" className="main">
        <section className="section">

          <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
            {/* <h5 className="d-inline">
            <b>New Order</b>
          </h5> */}
            <div className="row">
              <div className="col-md-7 col-sm-12 ">
                <h5 className="">
                  <b>Sale Order</b>
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
                  <label>Select Product</label>
                  <select
                    className="form-select c2"
                    aria-label="Default select example"
                  >
                    <option selected="">1.5 LTR</option>
                    <option value={1}>19 LTR</option>
                    <option value={1}>600 ML</option>
                    <option value={1}>1.5 LTR</option>
                    <option value={1}>CAPS</option>

                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <label>Price</label>
                <input
                  type="number"
                  className="form-control c2  "
                  placeholder="Price"
                />
                <div class="form-check form-check-inline mt-1">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">Price USD</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Price SHS</label>
                </div>

              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>S-Quantity</label>
                  <input type="text" className="form-control c2" placeholder={0} />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>R-Quantity</label>
                  <input type="text" className="form-control c2" placeholder={0} />
                </div>
              </div>
              </div>
              <div className='row mt-1'>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Amount</label>
                  <input type="text" className="form-control c2" placeholder={0} />
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label>Customer Name/ID</label>
                  <input type="text" className="form-control c2" />
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
                  <label>Select Salesman</label>
                  <select
                    className="form-select c2"
                    aria-label="Default select example"
                  >
                    <option selected="">Select Salesman</option>
                    <option value={1}>rohan </option>
                    <option value={1}>Ahmad</option>
                    <option value={1}>Nelu</option>
                    <option value={1}>Rahul</option>
                  </select>
                </div>
              </div>
              </div>
              <div className='row'>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Oder Date</label>
                  <input type="date" className="form-control c2" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Invoice </label>
                  <input type="text" className="form-control c2" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Bill Book </label>
                  <input type="text" className="form-control c2" />
                </div>
              </div>
              </div>
              <div className="d-grid gap-2 d-flex justify-content-center my-4">
                <button className="button" style={{ verticalAlign: "middle" }}>
                  <span>Save</span>
                </button>

              </div>
          
            {/* form end */}
            {/* Table Strat */}

            <div className="row">
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
                          Select Product
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          S-Quantity
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          R-Quantity
                        </th>
                        <th
                          scope="col"
                          className="text-center"
                          style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
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
                          Customer Name
                        </th>
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
                          className="text-center"
                          style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                        >
                          Select Salesman
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Oder Date
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Invoice
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Bill Book
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center" style={{ paddingLeft: "4rem" }}>
                          19 LTR
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          2300
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          5
                        </td>
                        <td className="text-center">4</td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          5000
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          102
                        </td>
                        <td className="text-center">ABC</td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          indore
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          rohan
                        </td>
                        <td className="text-center">10-2-2023</td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          12
                        </td>
                        <td className="text-center">1001</td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          <div className="parent_div ">
                            <div
                              style={{ cursor: "pointer" }}
                              className="edit_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <Link to="/admin/new_sale_order/edit_sale_order" style={{ textDecoration: "none" }}><i className="ri-pencil-line" /></Link>

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
                          19 LTR
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          2300
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          5
                        </td>
                        <td className="text-center">4</td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          5000
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          102
                        </td>
                        <td className="text-center">ABC</td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          indore
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          rohan
                        </td>
                        <td className="text-center">10-2-2023</td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          12
                        </td>
                        <td className="text-center">1001</td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          <div className="parent_div ">
                            <div
                              style={{ cursor: "pointer" }}
                              className="edit_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <Link to="/admin/new_sale_order/edit_sale_order" style={{ textDecoration: "none" }}><i className="ri-pencil-line" /></Link>

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
        </section>
      </main>
    </>

  )
}

export default NewSaleOrder