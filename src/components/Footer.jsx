import React from "react";
import Imgslides from "./ReactCarouselSub";
function Footer() {
    return (
        <div>
            <div class="d-flex justify-content-center w-79 p-20 " style={{gap: "90px"}}>
                <div className="footer-container" >
                    <img width={250} src="https://i.ibb.co/sgNfKkB/Logo-1.png" alt=""  className="grromer-footeremoji"/>
                    <p className="icons-chamber" >
                        <span><i style={{ color: "white", padding: "10px" }} class="bi bi-instagram p-10"> </i> </span>
                        <span><i style={{ color: "white", padding: "10px" }} class="bi bi-twitter-x  p-10"></i> </span>
                        <span><i style={{ color: "white", padding: "10px" }} class="bi bi-linkedin  p-10"></i></span>
                    </p>

                </div>
                <div className="footer-container">
                    <p style={{ paddingTop: "80px" }}> <i style={{ color: "white", }} class="bi bi-envelope "></i> <span class="text-white groomer-card-footer-email" style={{paddingLeft:"10px",fontFamily:"Poppins"}}>Groomer.online@gmail.com</span></p>
                    <p>  <i style={{ color: "white" }} class="bi bi-telephone"></i> <span class="text-white groomer-card-footer-email" style={{paddingLeft:"10px",fontFamily:"Poppins"}}>+91 9876543210</span></p>
                    <p> <i style={{ color: "white" }} class="bi bi-geo-alt"></i> <span class="text-white groomer-card-footer-email" style={{paddingLeft:"10px",fontFamily:"Poppins"}}>Hi-tech city, Hyderabad</span></p>
                </div>
                <div className="footer-container foonter-terms" >
                    <p style={{ paddingTop: "80px",fontFamily:'Poppins' }} class="text-white groomer-card-footer-email">Terms and Conditions</p>
                    <p class="text-white groomer-card-footer-email" style={{fontFamily:"Poppins"}}>Privacy and Policy</p>
                </div>
            </div>
            <center> <hr className="footer-hr" style={{ color: "gold", width: "1205px", }} /></center>
            <div class="d-flex">
                <div style={{paddingLeft:"200px"}}>
                    <img className="copyright-img"
                    src="https://i.ibb.co/sgNfKkB/Logo-1.png" 
                      alt=""  />
                </div>
                <div className="copyRight-data"> 
                    <p className="groomer-copyrightpara" style={{ color: "white",fontFamily:"Poppins",fontWeight:"400px",fontSize:"14px" }}> Copyright <i style={{ color: "white",paddingLeft:"7px",paddingRight:"7px"}} class="bi bi-c-circle "></i> 2024 GROOMER VOGUE AND BEAUTY PRIVATE LIMITED,. All rights reserved.</p>
                </div>
            </div>
            {/* <Practice/> */}
            {/* <Dummy/> */}
            {/* <Imgslides/> */}
        </div>
    
    )
}
export default Footer;