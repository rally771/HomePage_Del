export function ContactUs(){
    return (
    <section className="getintouch text-white py-5" id="aboutus">
      <div className="container-fluid text-center py-2">
        <h2 className="bold">Get In Touch</h2>
        <p className="mb-4 regular">Need to get in touch with our Support or Sales team?</p>
        <button className="getInTouch text-white regular">
          Get Quote <img src="whiteRightArrow.png" className="arrowImg" alt="" srcset="" />
        </button>
      </div>
    </section>
    )
}

export  function Footer(){
        return(<footer className="navBg text-white py-3">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-6 fs-13 regular">
                  Copyright ©2023 Hunting Gear & Design International Corporation | Privacy | T&C
                </div>
                <div className="col-md-6 text-md-end">
                  
                </div>
              </div>
            </div>
          </footer>)
}