


export default function Resources() {
  return (
    <section className="container-fluid py-5">
      <div className="row">
        <div className="resourceDiv mx-auto">
          <div className="resourceContent">
            <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="bold">Resources</h2>
            <button className="regular d-inline-flex align-items-center">
              View All
            </button>
          </div>
          <p className="text-muted regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          </div>
          

          <div className="row g-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="col-md-3 pe-0">
                <div className="card h-100 shadow-sm">
                  <img src={`/img/${item}.png`} alt={`Resource ${item}`} className="card-img-top"/>
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
        </div>
      </div>

    </section>

  )
}