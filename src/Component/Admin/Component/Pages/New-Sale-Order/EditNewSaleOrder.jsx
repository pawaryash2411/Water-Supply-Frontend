import React from 'react'
import './NewSaleOrder.css'

const EditNewSaleOrder = () => {
  return (

    <>
    <main id="main" className="main">
      <section className="section">
        
        <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
          <h5 className="d-inline">
            <b>Edit Order</b>
          </h5>
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
              <div className="form-group">
                <label>Price USD</label>
                <input type="number" className="form-control c2" placeholder={0.5} />
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
            <div className="col-md-3">
              <div className="form-group">
                <label>Amount</label>
                <input type="text" className="form-control c2" placeholder={0} />
              </div>
            </div>
        
            <div className="col-md-3">
              <div className="form-group">
                <label>Customer ID</label>
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
            <div className="col-md-3">
              <div className="form-group">
                <label>Oder Date</label>
                <input type="text" className="form-control c2" />
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
            {/* <div class="d-grid gap-2 d-flex justify-content-center my-4">
                  <button class="button" style="vertical-align:middle"><span>Save</span></button>
                  <button class="button" style="vertical-align:middle"><span>Cancel</span></button>
                </div> */}
            <div className="d-grid gap-2 d-flex justify-content-center my-4">
              <button className="button" style={{ verticalAlign: "middle" }}>
                <span>Save</span>
              </button>
              {/* <button class="button" style="vertical-align:middle"><span>Edite</span></button> */}
              {/* <button class="button" style="vertical-align:middle; background-color: #db0909;"><span>Refress</span></button> */}
            </div>
          </div>
          {/* form end */}
          
        </div>
      </section>
    </main>
    </>
  
  )
}

export default EditNewSaleOrder