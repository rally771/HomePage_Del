export default function Nav() {
    
  return (
    <>
      <header className="bg-white shadow">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 px-4 py-4 mb-0 my-1">
              <img src="logo.png" alt="HGS Logo" height="83" />
            </div>
            <div className="col-md-8 offset-md-1 text-end d-flex flex-column">
              <div className="row ">
                <div className="navBg white regular navSec">
                  <div className="navContent">
                  <span className="me-3 small">SUSTAINABILITY</span>
                  <span className="me-3 small">CAREERS</span>
                  <span className="small">TOLL-FREE: 800-800-8000</span>
                  </div>
                </div>

              </div>
              <div className="row flex-grow-1 ">
                <div className="col-12">
                  <nav className="navbar navbar-expand-lg navbar-light regular h-100">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">PRODUCTS</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">SERVICES</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">RESOURCES</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">CONTACT US</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>
    </>
  )
}   