import WorldMap from "../assets/img/worldmap.png"
export default function GlobeSection(){
    return (
        <section className="bg-light py-5">
          <div className="container-fluid globalSection">
            <div className="content-box">
              <h2 className="bold mb-3 text-center">
              <span className="ps-2">We Are Widely Spread Across The Globe</span>
            </h2>
            <p className="text-center text-muted mb-5 regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
            </div>

            <div className="position-relative mapSection">
              <img src={WorldMap} alt="World Map" className="img-fluid" />
              
              <div className="position-absolute" style={{ top: "25%", left: "25%" }}>
                <span className="badge navBg">UNITED STATES OF AMERICA</span>
              </div>
              <div className="position-absolute" style={{ top: "25%", right: "33%" }}>
                <span className="badge navBg">GERMANY</span>
              </div>
              <div className="position-absolute" style={{ top: "33%", left: "33%" }}>
                <span className="badge navBg">CANADA</span>
              </div>
              <div className="position-absolute" style={{ bottom: "33%", left: "25%" }}>
                <span className="badge navBg">BRAZIL</span>
              </div>
              <div className="position-absolute" style={{ bottom: "25%", right: "25%" }}>
                <span className="badge navBg">AUSTRALIA</span>
              </div>
              <div className="position-absolute" style={{ top: "33%", right: "25%" }}>
                
                <span className="badge navBg d-block mt-1">PHILIPPINES</span>
              </div>
              <div className="mt-5 position-absolute bottom-0 left-0">
              <div className="text-left">
                <div className="display-4 fw-bold text-primary">23+</div>
                <p className="text-muted mt-2 mx-auto" style={{ maxWidth: "400px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.
                </p>
              </div>
            </div>
            </div>
            
            
          </div>
        </section>
      );
}