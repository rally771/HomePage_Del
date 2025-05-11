const FeaturedProducts = () => {
  return (
    <div className="container-fluid my-5 overflow-hidden pe-0" id="product">
      <div className="row">
        <div className="col-md-12">
          <div className="container-fluid position-relative">
            <div className="row">
              <div className="col-md-10">
                  <p className="bold fs-60 compText">
                    Competitive Wireline Innovation
                    With A Focus On Quality
                  </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 ms-5 place-items-center">
                    <span className="orangeLine">&nbsp;</span>
              </div>
            </div>
            <img src="compPipe.png" className="position-absolute bottom-0 end-0" alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-11 mx-auto px-4 mt-4 pt-3">
          <div className="container-fluid">
                  <div className="row g-4">
        {/* Left Large Card */}
        <div className="col-md-6 pe-4">
          <div className="card text-white position-relative">
            <img
              src="tubing.png"
              className="card-img h-100"
              alt="Tubing Gauge"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end p-4 bg-gradient-overlay">
              <h5 className="card-title">Tubing Gauge</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <div className="orange-box">
                <span>&rarr;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Stacked Cards */}
        <div className="col-md-6 d-flex flex-column gap-4 mt-5 ps-0 pe-4 pt-4">
          {[{
            title: "GS Pulling Tool",
            img: "gspulling.png",
          }, {
            title: "F Collar Stop",
            img: "img3.png",
          }].map((item, idx) => (
            <div className="card text-white position-relative h-50" key={idx}>
              <img
                src={item.img}
                className="card-img h-100"
                alt={item.title}
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end p-3 bg-gradient-overlay">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
                <div className="orange-box">
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          </div>
        </div>
      </div>
      <div className="row row mt-4 pt-2">
        <div className="col-12">
          <div className="text-center mt-4">
        <button className="btn btn-primary px-4">
          View All &nbsp; &rarr;
        </button>
      </div>
        </div>
      </div>

    </div>
  );
};

  export default FeaturedProducts