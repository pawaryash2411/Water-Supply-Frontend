import React from 'react'

const EditCustomerSecurityAmount = () => {
  return (
    <>
    <main id="main" className="main">
  <section className="section">
    
    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
      <h5 className="d-inline">
        <b>Edit Customer Security</b>
      </h5>
      <hr className="m-0 mb-2 mt-3"
              style={{
                background: 'black',
              }} />
      <div className="row mt-4">
      
        <div className="col-md-3">
          <div className="form-group">
            <label type="date">Date</label>
            <input type="date" className="form-control c2" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Security Status</label>
            <select
              className="form-select c2"
              aria-label="Default select example"
            >
           <option selected="">Refund</option>
              <option value={1}>Deposit</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Security Detail</label>
            <input type="text" className="form-control c2" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Security Amount</label>
            <input type="number" className="form-control c2" />
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
            <label>Total Deposity</label>
            <input type="text" className="form-control c2" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Total Refund</label>
            <input type="text" className="form-control c2" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Balance</label>
            <input type="text" className="form-control c2" />
          </div>
        </div>
        <div className="d-grid gap-2 d-flex justify-content-center mt-4">
          <button className="button" style={{ verticalAlign: "middle" }}>
            <span>Save</span>
          </button>
        </div>
        {/* form end */}
        {/* Table Strat */}
        {/* <hr className="m-0 mb-3"
              style={{
                background: 'black',
              }} /> */}
       
      </div>
    </div>
  </section>
</main>
</>
  )
}

export default EditCustomerSecurityAmount