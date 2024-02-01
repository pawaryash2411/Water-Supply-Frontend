import React from 'react'
import './AddNewProduct.css'

function EditProduct() {
  return (
    <main id="main" className="main">
      <section className="section">
        <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
          <h5 className="d-inline">
            <b>Edit Product</b>
          </h5>
          <hr style={{backgroundColor:'black',}} />
          <div className="row mt-3">
            <div className="row mx-1">
              <div className="col-md-4">
                <div className="form-group mx-1">
                  <label>Product Name</label>
                  <input
                    type="text"
                    className="form-control c2 mt-1"
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
          
              <div className="col-md-4">
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
         
        </div>
      </section>
    </main>
  )
}

export default EditProduct