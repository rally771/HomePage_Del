import WorldMap from "../assets/img/worldmap.png"
export default function GlobeSection(){
    return (
        <section className="bg-light py-5" id="globeSection">
          <div className="container-fluid globalSection">
            <div className="content-box">
              <h2 className="bold mb-3 text-center">
              <span className="ps-2">We Are Widely Spread Across The Globe</span>
            </h2>
            <p className="text-center text-muted mb-5 regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
            </div>

            <div className="position-relative mapSection regular fs-16 white">
              <img src={WorldMap} alt="World Map" className="img-fluid" />
              <div className="position-absolute" style={{ top: "19.4%", left: "14.6%" }}>
                <span className="countryName navBg">CANADA</span>
              </div>
              <div className="position-absolute" style={{ top: "34%", left: "17%" }}>
                <span className="countryName navBg">UNITED STATES OF AMERICA</span>
              </div>
              <div className="position-absolute" style={{ bottom: "34%", left: "28%" }}>
                <span className="countryName navBg">BRAZIL</span>
              </div>
              <div className="position-absolute" style={{ bottom: "16%", left: "29%" }}>
                <span className="countryName navBg">ARGENTINA</span>
              </div>
              <div className="position-absolute" style={{ top: "20.6%", right: "41.6%" }}>
                <span className="countryName navBg">DENMARK</span>
              </div>
              <div className="position-absolute" style={{ top: "28%", right: "43%" }}>
                <span className="countryName navBg">GERMANY</span>
              </div>
              <div className="position-absolute" style={{ top: "49%", right: "44%" }}>
                <span className="countryName navBg">CONGO</span>
              </div>
              <div className="position-absolute" style={{ top: "71.4%", right: "39%" }}>
                <span className="countryName navBg">ANGOLIA</span>
              </div>
              <div className="position-absolute" style={{ top: "25%", right: "24%" }}>
                <span className="countryName navBg">CHINA</span>
              </div>
              <div className="position-absolute" style={{ top: "46%", right: "26%" }}>
                <span className="countryName navBg">INDIA</span>
                <img src="pin.png" alt="" srcset="" className="pin" />
              </div>
              <div className="position-absolute" style={{ top: "35%", right: "7%" }}>
                
                <span className="countryName navBg d-block mt-1">PHILIPPINES</span>
                <img src="pin.png" alt="" srcset="" className="pin" />

              </div>
              <div className="position-absolute" style={{ bottom: "21%", right: "8%" }}>
                <span className="countryName navBg">AUSTRALIA</span>
                <img src="pin.png" alt="" srcset="" className="pin" />

              </div>
              
              <div className="mt-5 position-absolute text-left">
              <div className="text-left-content">
                <div className="tet-left-title">23+</div>
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