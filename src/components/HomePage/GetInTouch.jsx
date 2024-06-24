import React from "react";
function GetInTouch() {
    return (
        <>
        <div className=" Get-Parent-container">
            <div className="getIn-container">

                 <img className="get-image-container" 
                 src="https://i.ibb.co/0sbcfMY/pexels-dmitry-zvolskiy-1570806-1-4.jpg"
                  alt="" />  


                 <div className="logo-relative">
                 <span className="arrow-logo"><i class="bi bi-arrow-down text-white"></i></span>
                    <img className="get-in-logo" src="https://i.ibb.co/rfL10Y1/scroll-down-2.png" alt="" />
                </div> 
            </div>
         <div className="getIn-data-container">
                <h1 class="text-white getintouch" style={{fontFamily:'Avegas Royale',fontSize:"48px",fontWeight:500,lineHeight:"56px"}}>Get In Touch With us</h1>
                <input className="input getintouchinput1" type="text" placeholder="Name" /> <br />
                <input className="input getintouchinput2" type="text" placeholder="Mobile.No" /> <br />
                <input className="input getintouchinput2" type="text" placeholder="Email" /> <br />
                <div className="text-area-container">
                  <textarea className="text-area-division" name="paragraph_text" cols="52" rows="5"></textarea>
                </div>
                <div className="button-submit">
                <button  className="submit-button" >Submit</button>
    </div>  
            </div>
        </div>
        </>
    )

}
export default GetInTouch;