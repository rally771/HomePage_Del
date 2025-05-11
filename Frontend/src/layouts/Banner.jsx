

export default function Banner (){
    return (
        <div className="container-fluid px-0 position-relative" id="banner">
            <img src="bannerImage.png" className="w-100" alt="" srcset="" />
            <div className="row w-100 position-absolute top-0 left-0">
                <div className="offset-md-6 col-md-5" >
                <p className="white bold banner-text">Modern Innovation
                With A History Of
                Excellence
                </p>
                <p className="bannerDescr regular">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et perferendis reiciendis est sequi quidem. Soluta, exercitationem provident
                </p>
                <button className="explore">
                    
                </button>
                </div>
            </div>
        </div>
    )
}