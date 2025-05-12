
import React, { useContext } from 'react';
import DataContext from '../context/DataContext';


export default function Banner (){

    const { data, loading, error } = useContext(DataContext);
    if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error: {error.message}</p>;
      }
      console.log(data)
    return (
        <div className="container-fluid px-0 position-relative" id="banner">
            <img src="bannerImage.png" className="w-100" alt="" srcset="" />
            <div className="row w-100 position-absolute top-0 left-0">
                <div className="offset-md-6 col-md-6 col-xxl-5" >
                <p className="white bold banner-text">{
                    data.data.bannerData.title
                    }
                </p>
                <p className="bannerDescr regular white">
                    {data.data.bannerData.description}
                </p>
                <button className="explore white regular">
                    Explore <span className="arrowImage">&nbsp;</span>
                </button>
                </div>
            </div>
        </div>
    )
}