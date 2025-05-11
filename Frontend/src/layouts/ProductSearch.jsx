const ProductSearch = () => {
    return (
      <section className="container position-relative" style={{ marginTop: "-110px", zIndex: "20" }}>
        <div className="productCard row">
          <div className="col-11 mx-auto">

          
        <div className="row">
          <div className="col-md-2 navBg">
            <div className="my-2 py-1">
              <span className="white  d-inline-flex align-items-center">
                 Product Search
              </span>
            </div>
          </div>
        </div>
        <div className="row bg-white shadow pb-4">
              <div className="col-md-3">
                <label className="form-label small text-muted">Category</label>
                <select className="form-select form-select-sm">
                  <option>Wireline</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label small text-muted">Product Type</label>
                <select className="form-select form-select-sm">
                  <option>Select...</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label small text-muted">Product Name</label>
                <select className="form-select form-select-sm">
                  <option>Select...</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label small text-muted">Search</label>
                <div className="input-group input-group-sm">
                  <input type="text" className="form-control" placeholder="Enter keywords" />
                  <button className="btn btn-warning text-white">
                    
                  </button>
                </div>
              </div>
            </div>
            </div>
         </div>   
      </section>
    );
  };
  

  export default ProductSearch