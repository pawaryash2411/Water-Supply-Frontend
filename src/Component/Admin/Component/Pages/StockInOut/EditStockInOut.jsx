import React from 'react'
import './StockInOut.css'

const EditStockInOut = () => {
  return (
    <main id="main" className="main">
  <section className="section">
    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
      <h5 className="d-inline">
        <b> Edit Stock In/Out</b>
      </h5>
      <hr style={{backgroundColor:'black',}} />
      <div className="row mt-3">
        <div className="row mx-1">
          <div className="col-md-4">
            <div className="form-group ">
              <label>Date</label>
              <input
                type="date"
                className="form-control c2"
                placeholder="Enter Order Number"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group ">
              <label>Salesman</label>
              <select
                className="form-select c2"
                aria-label="Default select example"
              >
                <option selected="">Select Salesman</option>
                <option>Deji</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group ">
              <label>Product</label>
              <select
                className="form-select c2"
                aria-label="Default select example"
              >
                <option selected="">Select</option>
                <option>Disposal Bottel</option>
                <option>20 Gallon Water Bottles</option>
                <option>Ice Product</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-1 mx-1">
          <div className="col-md-4">
            <div className="form-group ">
              <label>Qty</label>
              <input type="text" className="form-control c2" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Stock Status</label>
              <select
                className="form-select c2"
                aria-label="Default select example"
              >
                <option selected="">Select</option>
                <option>STOCK IN (Fill)</option>
                <option>STOCK OUT (Fill)</option>
                <option>STOCK IN (Empty)</option>
                <option>STOCK OUT (Empty)</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Remarks</label>
              <input type="text" className="form-control c2" />
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

export default EditStockInOut