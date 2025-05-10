const FeaturedProducts = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* Left Large Card */}
        <div className="col-md-6">
          <div className="card h-100 text-white position-relative">
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
        <div className="col-md-6 d-flex flex-column gap-4">
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

      {/* View All Button */}
      <div className="text-center mt-4">
        <button className="btn btn-primary px-4">
          View All &nbsp; &rarr;
        </button>
      </div>
    </div>
  );
};

  export default FeaturedProducts