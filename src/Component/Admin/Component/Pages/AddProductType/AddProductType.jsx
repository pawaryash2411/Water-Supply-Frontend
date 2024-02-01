import React from 'react'
import './AddProductType.css'
import { Link } from "react-router-dom"

const AddProductType = () => {
  return (
    <>
      <main id="main" className="main">
        <section className="section">
          <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
            {/* <h5 className="d-inline">
              <b>Add Product Type</b>
            </h5> */}
                <div className="row">
            <div className="col-md-7 col-sm-12 ">
              <h5 className="">
                <b>Add Product Type</b>
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
            <hr style={{backgroundColor:'black',}} />
            <div className="row mt-3">
              <div className="row mx-1 " >
                <div className="col-md-4 ">
                  <div className="form-group mx-1">
                    <label> Name</label>
                    <input
                      type="text"
                      className="form-control c2 mt-1 "
                      placeholder="Enter  Name"
                    />
                  </div>
                </div>
             
              
              </div>
              <div className="d-grid gap-2 d-flex justify-content-center my-4">
                <button className="button" style={{ verticalAlign: "middle" }}>
                  <span>Submit</span>
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
                           Name
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
                          ABC
                        </td>
                    
                     
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          <div className="parent_div ">
                            <div
                              style={{ cursor: "pointer" }}
                              className="edit_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <Link to='/admin/editproducttype' style={{textDecoration:"none"}}>  <i className="ri-pencil-line" /></Link>

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

export default AddProductType