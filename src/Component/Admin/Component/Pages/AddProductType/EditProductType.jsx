import React from 'react'
import './AddProductType.css'

function EditProductType() {
  return (
    <main id="main" className="main">
      <section className="section">
        <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
          <h5 className="d-inline">
            <b>Edit Product Type</b>
          </h5>
          <hr style={{backgroundColor:'black',}} />
          <div className="row mt-3">
            <div className="row mx-1">
              <div className="col-md-4">
                <div className="form-group mx-1">
                  <label> Name</label>
                  <input
                    type="text"
                    className="form-control c2 mt-1"
                    placeholder="Enter Name"
                  />
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
  )
}

export default EditProductType