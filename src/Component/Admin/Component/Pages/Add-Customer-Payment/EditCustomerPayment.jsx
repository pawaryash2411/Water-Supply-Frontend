import React from 'react'

const EditCustomerPayment = () => {
  return (

    <>
<main id="main" className="main">
  <section className="section">
    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
      <h5 className="d-inline">
        <b>Edit Customer Payment</b>
      </h5>
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
            <input type="number" className="form-control c2" />
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
       
      </div>
    </div>
  </section>
</main>
</>

  )
}

export default EditCustomerPayment