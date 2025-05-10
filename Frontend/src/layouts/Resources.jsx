export default function Resources(){
    return(
              <section className="container py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="fw-bold">Resources</h2>
                  <button className="btn btn-primary d-inline-flex align-items-center">
                    View All 
                  </button>
                </div>
                <p className="text-muted mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
                
                <div className="row g-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="col-md-3">
                      <div className="card h-100 shadow-sm">
                        <img src={`/api/placeholder/300/200`} alt={`Resource ${item}`} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                        <div className="card-body">
                          <h5 className="card-title fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
                          <p className="card-text text-muted small mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                          </p>
                          <button className="btn btn-link text-warning p-0 d-inline-flex align-items-center">
                            Read More 
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
        
    )
}