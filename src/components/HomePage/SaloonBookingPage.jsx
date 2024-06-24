import React ,{useState} from "react";
import DatePickerComponent from './DatePicker';
import Navbar from "./NavbarComponent";
import { Link,useLocation,useNavigate } from "react-router-dom";
import Calender from "./calender";
import Slottimings from "./timeslots";
import { number } from "yup";
import { getToken } from "../../context/StorageToken";
import { daysToWeeks } from "date-fns/fp";
import Context from "../../context/axiox";
import { post } from "jquery";
function PageBooking() {
    const navigate = useNavigate()
   const location = useLocation()
   const { salon_name,salon_address,selectedTreatments,id } = location.state || {};
   const [date,setdate] = useState()
   const [time,settime] = useState()
   const [slot_uuid,setslot_uuid] = useState()
   console.log(salon_name)
   console.log(salon_address)
   console.log(selectedTreatments)
   console.log(id) 
   const handledate = (date) =>{
    setdate(date)
   }

    const handleslots = async (time,dataa) =>{
        settime(time)
        console.log(time)
       setslot_uuid(dataa)
    }


    const handleapppointment = async () =>{

        let bodyContent = JSON.stringify({
            salon_uuid:id,
            slot_uuid:slot_uuid,
            duration: 60,
            timing:time,
            date:date,
            services:selectedTreatments,
            combos: ["Super saving"]
          });

          let headerlist2 = {
            Authorization: `Bearer ${getToken()}`,
            Accept: "*/*",
            "Content-Type": "application/json",
        };

          let response = await fetch(`${Context}/user/create_appointment`,{
            method:"post",
            mode:"cors",
            body:bodyContent,
            headers:headerlist2
          })

          let data = await response.json();
          navigate('/checkout')
          console.log(data)



    }




    return (
        <div>
            <Navbar></Navbar>
            <br /> 
            <div className="booking-page" style={{ color: "white" }}>

                <div class="container-fluid">
                    <div class="row flex-nowrap">
                        <div class="col-auto col-md-3 col-xl-3 px-sm-2 px-0 bg-Dark" >
                            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

                                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                    <li class="nav-item">
                                        <a class="nav-link align-middle px-0">

                                            <div style={{marginLeft:"25px"}}>
                                            <Link to='/saloon'><span style={{ color: "white",fontSize:"14px" }}>salons </span></Link>
                                                <span><i style={{ color: "white",fontSize:"14px"  }} class="bi bi-chevron-right"></i></span>
                                                <span style={{ color: "white",fontSize:"14px"  }}> saloon details</span>
                                                <span><i style={{ color: "white" }} class="bi bi-chevron-right"></i></span>
                                                <span style={{ color: "white",fontSize:"14px"  }}> date&time</span>
                                            </div>
                                        </a>
                                    </li>

                                    <div className="booking-saloon-header">
                                        <h3 className="salonbookingpage-salonname" style={{height:"32px",fontFamily:"Avegas Royale",fontFamily:"Avegas Royale"}}>{salon_name}</h3>
                                        <p className="salonbookingpage-salonadress" style={{fontSize:"16px"}}>{salon_address}</p>

                                    </div>


                                    <div>
                                        <div className="gap-provider"  style={{marginLeft:"50px"}}>
                                        <h5 style={{fontSize:"16px"}}>service selected</h5>
                                        <ol type="number">  {selectedTreatments && selectedTreatments.map(data =>
                                                
                                         
                                            <li style={{fontSize:"14px"}} >{data}</li>     )}
                                           {/* <li style={{fontSize:"14px"}}>Facial</li>
                                            <li style={{fontSize:"14px"}}>shave</li> */}
                                        </ol>
                                        </div>
                                        <div className="gap-provider salondetailspage-date" style={{marginLeft:"60px"}}>
                                            <h5  style={{fontSize:"16px"}}>Date</h5>
                                            <p style={{fontSize:"14px"}}>{date}</p>
                                        </div>

                                        <div className="gap-provider salondetailspage-time" style={{marginLeft:"60px"}}>
                                            <h5 style={{fontSize:"16px"}}>Time</h5>
                                            <p style={{fontSize:"14px"}}>{time}</p>
                                        </div>

                                    </div>
                                   
                                 
                                    {/* <li>
                                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
                                        <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                            <li class="w-100">
                                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
                                            </li>
                                            <li>
                                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
                                            </li>
                                            <li>
                                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                                            </li>
                                            <li>
                                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                                            </li>
                                        </ul>
                                    </li> */}

                                </ul>

                            </div>
                        </div>
                        <div class="col py-3">

                            <div class="container">
                                <div class="row">
                                    <div class='col-sm-6 salonbookingspage-datepicker'>
                                   
                                    <Calender  handledate={handledate}/>
                                    <div className="salonbookingspage-timeslots" style={{height:"500px"}}>
                                    <Slottimings  id={id}  handleslot={handleslots} /> </div>
                                           {/* <Link to="/checkout"><button className="proceed-btn" onClick={() => handleapppointment()}>Proceed to check out</button></Link>*/}
                                         <button className="proceed-btn" onClick={() => handleapppointment()}>Proceed to check out</button>
                                    
                                        {/* <section>
            <div class="form-group">
                <div class="input-group">
                    <input type="datetime-local" class="form-control" />
                    <span style={{color:"white"}} class="glyphicon glyphicon-calender"></span>
                </div>
            </div>
         </section> */}
{/* 

                                        <section>

                                            <div className="container mt-4">
                                                <h1>Date Picker Example</h1>
                                                <DatePickerComponent />
                                            </div>

                                            <div>
                                                <label style={{color:"white"}} for="dateofbirth">Date Of Birth</label>
                                                <input placeholder="date " type="date" name="dateofbirth" id="dateofbirth" />
                                            </div>


                                        </section> */}




                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageBooking;