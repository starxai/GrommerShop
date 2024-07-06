import React from "react"
import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"

import img from "../images/img1.jpg"

import { getToken } from "../../context/StorageToken"



function Squarecard({
 id,
 imageSrc,
 img2,
 Location,
 content,
 services
,
 price,
 carouselid,
 ash,
 index
}) 

   


{

    const handlewishlist = async ()=> {
        const headerlist = {
            'Authorization': `Bearer ${getToken()}`, // Ensure getToken() returns the correct token
             'Content-Type': 'application/json'
        }
       const bodyvalues ={
        salon_uuid:id
       }
        let response = await fetch(`https://groomerapp-e1f70ad38863.herokuapp.com/user/wishlist/create`,{
            method:"Post",
            body:JSON.stringify(bodyvalues),
           headers:headerlist,
        })

            let data = await response.json()
           // console.log(data)
    }

    const navigaettomaps = (Location) =>{
        const[latitute,longitute]= Location
        let url = `https://maps.google.com/maps?q=${latitute},${longitute}`;
        window.open(url, "_blank");
        return;
    }


    const navigate = useNavigate();
   // console.log(services)
       // const baseurl = 'https://groomerapp-e1f70ad38863.herokuapp.com/';

        const handleonesalon = () =>{
            console.log("clicked")
          //  navigate('/saloondetails',{state:{id}})
          navigate('/salondetails',{state:{id}})
        } 
    return(
     
        <div>
                <div class="cards-container salonspage-totalcard" style={{marginTop:"40px"}}>
                        <div className="cards-positions-container"  >
                            
                        <div id={id} class="carousel slide" >
                                        <div class="carousel-indicators salonspage-carousel-indicators">
                                    <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target={"#"+`${id}`} data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 2"></button>
                                            <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target={"#"+`${id}`} data-bs-slide-to="1" aria-label="Slide 2" ></button>
                                            <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target={"#"+`${id}`} data-bs-slide-to="2" aria-label="Slide 3" ></button>
                                        </div>  {/*{console.log(imageSrc)} */}
                                        <div class="carousel-inner salonspage-image" style={{ width: "300px" }} onClick={(id) =>handleonesalon(id)}>
                                        <div class="carousel-item active">
                                               {/* <img src={imageSrc} class="d-block w-100" alt="..." /> */}
                                              {
                                              
                                                    <img className="salonspage-imagedisplay" src={img} style={{height:"370px",width:"276px"}} />
                                              }
                                            </div>
                                            
                                                
                                        <div class="carousel-item ">
                                            <img className="salonspage-imagedisplay" src={img}  style={{height:"370px",width:"276px"}}  />
                                        </div>
                                        <div class="carousel-item">

                                        {/*    <img className="salonspage-imagedisplay" src={img}  style={{height:"370px",width:"276px"}}  class="d-block w-100" alt="..." /> */}
                                        <img className="salonspage-imagedisplay" src={img}  style={{height:"370px",width:"276px"}}   />
                                     
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target={"#"+`${id}`} data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target={"#"+`${id}`} data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span> 
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>


                                      <button onClick={() =>{handlewishlist()}}> <span className="heart-icon"><i style={{ color: "white", fontSize: "20px" }} class="bi bi-heart"></i></span></button> 
                                       <span onClick={()=>navigaettomaps(Location)} className="location-icon"><i style={{ color: "white" }} class="bi bi-geo-alt-fill"></i></span>
                                       
                                    </div>
                                    <div className="card-position" onClick={(id) =>handleonesalon(id)} >
                                        <div class="card-body salons-display-cardbody" style={{position:"relative",top:"-30px"}}>
                                            <h5 style={{ color: "white",fontSize:"20px"}} class="card-title salons-salonname">{content}</h5>
                                        <div style={{display:"flex"}} >  {
                                            services.map(data =>
                                                <p  style={{ color: "white",display:"block" }} class="card-text salon-salonservices">{data.ServiceName} </p>
                                            )
                                          } </div>
                                            <p style={{ color: "white" }} class="card-text"> </p>
                                        <p className="salons-price" style={{ color: "white" }} >₹ {price} / person  <span  onClick={(id) =>handleonesalon(id)}>    <i style={{ color: "white", float: "right", fontSize: "26px",cursor:"pointer" }} class="bi bi-arrow-right-circle"></i>     </span>   </p>
                            {/*                <p style={{ color: "white" }}>₹ {price} / person <Link to='/saloondetails' ><span><i style={{ color: "white", float: "right", fontSize: "26px" }} class="bi bi-arrow-right-circle"></i></span></Link></p>     */}
                                        </div>
                                    </div>
                                </div>

                   
                   <module />
                   
        </div>
    
    
    )}


    export default Squarecard