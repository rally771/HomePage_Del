

export default function Banner (){
    return (
        <div className="container-fluid px-0 position-relative">
            <img src="bannerImage.png" className="w-100" alt="" srcset="" />
            <div className="row w-100 position-absolute top-0 left-0">
                <div className="offset-md-6 col-md-6 white bold banner-text" >
                Modern Innovation
                With A History Of
                Excellence
                </div>
            </div>
        </div>
    )
}