import React from 'react'
import './AddNewProduct.css'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';

const AddNewProduct = () => {
  return (
    <>
      <main id="main" className="main">
        <section className="section">
          <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
            {/* <h5 className="d-inline">
              <b>New Product</b>
            </h5> */}
               <div className="row">
            <div className="col-md-7 col-sm-12 ">

              <h5 className="">
                <b>New Product</b>
              </h5>
            </div>
            <div className='col-md-3 col-sm-12' >
              <div className="form-group ">
                {/* <label>Search by ID or Name</label> */}
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

            <hr style={{backgroundColor:'black',}} />
            <div className="row mt-3">
              <div className="row mx-1 " >
                <div className="col-md-4 ">
                  <div className="form-group mx-1">
                    <label>Product Name</label>
                    <input
                      type="text"
                      className="form-control c2 mt-1 "
                      placeholder="Enter Product Name"
                    />
                  </div>
                </div>
                <div className="col-md-4 ">
                <label>Price</label>
                <input
                  type="number"
                  className="form-control c2 mt-1 "
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

              
                <div className="col-md-4 ">
                  <div className="form-group mx-1">
                    <label htmlFor="usr">Select Type</label>
                    <select
                      className="form-select c2 mt-1 "
                      aria-label="Default select example"
                    >
                      <option selected="">Select category</option>
                      <option value="Disposal">Disposal</option>
                      <option value="20 Gallon Water Bottles">
                        20 Gallon Water Bottles
                      </option>
                      <option value="Ice Product">Ice Product</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 d-flex justify-content-center my-4">
                <button className="button" style={{ verticalAlign: "middle" }}>
                  <span>Save</span>
                </button>
              </div>
            </div>
         
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
                          SNO
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Product Name
                        </th>
                        <th
                          scope="col"
                          style={{ paddingLeft: "2rem", textAlign: "center" }}
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Bottle Type
                        </th>
                        <th scope="col " style={{ paddingLeft: "3rem" }}>
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center" style={{ paddingLeft: "4rem" }}>
                          1
                        </td>
                        <td className="text-center" style={{ paddingLeft: "4rem" }}>
                          19 LTR
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          250
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          Disposal
                        </td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          <div className="parent_div ">
                            <div
                              style={{ cursor: "pointer" }}
                              className="edit_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <Link to='/admin/editproduct' style={{textDecoration:"none"}}>  <i className="ri-pencil-line" /></Link>

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
                          2
                        </td>
                        <td className="text-center" style={{ paddingLeft: "4rem" }}>
                          19 LTR
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          250
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          Disposal
                        </td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          <div className="parent_div ">
                            <div
                              style={{ cursor: "pointer" }}
                              className="edit_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <Link to='/admin/editproduct' style={{textDecoration:"none"}}>  <i className="ri-pencil-line" /></Link>

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
      {/* End #main */}
    </>

  )
}

export default AddNewProduct