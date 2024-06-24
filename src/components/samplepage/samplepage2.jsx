import React from "react"
import { useState } from "react"

 function Filterapply ({ filterOptions}) 
    {
        console.log(filterOptions)

        const [personGender,SetPersonGender] = React.useState("")

        const [filterOptions, setFilterOptions] = useState({
            distance: "",
            priceFrom: "",
            priceTo: 1000,
            ratings: "",
            services: "",
            sort: "",
            sortOrder: "",
            combos: "",
            manhood: "",
          });
        


        const handlefilterchange = (event) =>{
            const{name,value} = event.target;
            setFilterOptions((prevOptions) =>({
                ...prevOptions,
                [name]:value
            })
            )
        }

        const[inputvalue,setinputvalue] = useState("")
        const locationinputchange = async (event) =>{
                setinputvalue(event.target.value);
             //   handleLocationChange(inputvalue)
        }



        function genderConformation(gender){
            SetPersonGender(gender)
          }
return(
    <div>
        <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                        <span class="fs-5 d-none d-sm-inline">Filters</span>
                                    </a>
                                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">


                                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                            
                                        </a>
                                        <input className="search-bar" placeholder="Search Here" />

                                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">

                                        </ul>


                                        <li>
                                            <a href="#submenu1-2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                                <span class="ms-1 d-none d-sm-inline"><p style={{ color: "white" }}>Age Group</p>
                                                </span></a>
                                            <ul class="collapse nav flex-column ms-1" id="submenu1-2" data-bs-parent="#menu">
                                                <li class="w-100">
                                                    <a class="nav-link px-0"> <span class="d-none d-sm-inline">
                                                        <label for="customRange2" class="form-label text-white">Less than five </label>
                                                        <input type="range" style={{ color: "white" }} class="form-range" min="0" max="5" id="customRange2" />
                                                    </span></a>
                                                </li>

                                            </ul>
                                        </li>





                                        <li>
                                            <hr style={{ width: "250px", color: "gold" }} />
                                        </li>



                                    
                                      <li>


                                         


                                            <div className="accordion" id="accordionExample" style={{ backgroundColor: "black" }}>
  <div className="accordion-item" style={{ backgroundColor: "black", color: "white", border: "none" }}>
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
        style={{
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderBottom: "none",
          outline: "none",      // added
          boxShadow: "none"     // added
        }}
      >
        Sexual-orientation
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <input
          onClick={(e) => genderConformation(e.target.value)}
          value="male"
          name="gender"
          type="radio"
          onChange={handlefilterchange}
        />{" "}
        <label htmlFor="">male</label>
        <br />
        <input
          onClick={(e) => genderConformation(e.target.value)}
          value="Female"
          name="gender"
          type="radio"
          onChange={handlefilterchange}
        />{" "}
        <label htmlFor="">Female</label>
      </div>
    </div>
  </div>
</div>




                                       



                                       
                                        </li>

                                        <li>
                                            <hr style={{ width: "250px", color: "gold" }} />
                                        </li>

                                        <li>
                                            <a href="#submenu2.2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                                <span class="ms-1 d-none d-sm-inline"><p style={{ color: "white" }}>Location</p>
                                                </span></a> 
                                            <ul class="collapse nav flex-column ms-1" id="submenu2.2" data-bs-parent="#menu" >

                                                <li>
                                                   <a class="nav-link px-0"> <span class="d-none d-sm-inline"><input placeholder="Enter Your  location" type="text" onChange={locationinputchange}  className="location-input"  /></span></a>  


                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <hr style={{ width: "250px", color: "gold" }} />
                                        </li>

                                                    
                                        <li>
                                            <a href="#submenu1-4" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                                <span class="ms-1 d-none d-sm-inline"><p style={{ color: "white" }}>Distance</p>
                                                </span></a>
                                            <ul class="collapse nav flex-column ms-1" id="submenu1-4" data-bs-parent="#menu">
                                                <li class="w-100">
                                                    <a class="nav-link px-0"> <span class="d-none d-sm-inline">
                                                        <label for="customRange2" class="form-label text-white">Less than 3 km </label>
                                                        <input type="range" style={{ color: "white" }} class="form-range" min="0" max="3" id="customRange2" />
                                                    </span></a>
                                                </li>

                                            </ul>
                                        </li>
                                    
                                        <li>
                                            <hr style={{ width: "250px", color: "gold" }} />
                                        </li>




                                        <li>
                                            <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                                <span class="ms-1 d-none d-sm-inline"><span style={{ color: "white" }}>Services</span></span> </a>
                                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                                <li class="w-100">
                                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"><input type="checkbox" /></span><span style={{ color: "white" }}> All</span> </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"><input type="checkbox" /></span> <span style={{ color: "white" }}>Face pointing</span> </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"><input type="checkbox" /></span> <span style={{ color: "white" }}>Facial</span> </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"><input type="checkbox" /></span> <span style={{ color: "white" }}> Haircut</span></a>
                                                </li>
                                                <li>
                                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"><input type="checkbox" /></span> <span style={{ color: "white" }}> Manicure</span></a>
                                                </li>
                                                <li>
                                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"><input type="checkbox" /></span> <span style={{ color: "white" }}>pedicure</span>  </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"><input type="checkbox" /></span> <span style={{ color: "white" }}> shaving</span></a>
                                                </li>
                                            </ul>
                                        </li>


                                        <li>
                                            <hr style={{ width: "250px", color: "gold" }} />
                                        </li>

                                        <li>
                                            <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                                <span class="ms-1 d-none d-sm-inline"><p style={{ color: "white" }}>price</p>
                                                </span></a>
                                            <ul class="collapse nav flex-column ms-1 " id="submenu2" data-bs-parent="#menu">
                                                <li class="w-100">
                                                    <a class="nav-link px-0"> <span class="d-none d-sm-inline"><span style={{ color: "white" }}>From : </span> <input className="cost-input" placeholder="₹200" type="text" /></span> <span style={{ color: "white" }}>To :</span> <input className="cost-input" placeholder="₹400" type="text" /></a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <hr style={{ width: "250px", color: "gold" }} />
                                        </li>



                                        <li>
                                            <a href="#submenu4" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                                <span class="ms-1 d-none d-sm-inline"><p style={{ color: "white" }}>Rating</p></span> </a>
                                            <ul class="collapse nav flex-column ms-1" id="submenu4" data-bs-parent="#menu">
                                              
                                              


                                              
                                            <li class="w-100">
                                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"><input className="rating-input" type="checkbox" />   </span><span>
                                                        <i style={{ color: "white" }} class="bi bi-star-fill"></i>
                                                        <i style={{ color: "white" }} class="bi bi-star-fill"></i>
                                                        <i style={{ color: "white" }} class="bi bi-star-fill"></i>
                                                        <i style={{ color: "white" }} class="bi bi-star-fill"></i>
                                                        <i style={{ color: "white" }} class="bi bi-star-fill"></i>
                                                    </span></a>
                                    </li> 
                                                <li>
                                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"><input type="checkbox" /></span>
                                                        <span>
                                                            <i style={{ color: "white" }} class="bi bi-star-fill"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star-fill"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star-fill"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star-fill"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star"></i>
                                                        </span></a>
                                                </li>
                                                <li>
                                                    <a  href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"><input type="checkbox" /></span>

                                                        <span>
                                                            <i style={{ color: "white" }} class="bi bi-star-fill"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star-fill"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star-fill"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star"></i>

                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a  href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"><input type="checkbox" /></span>
                                                        <span>
                                                            <i style={{ color: "white" }} class="bi bi-star-fill"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star-fill"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star"></i>

                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"><input type="checkbox" /></span>
                                                        <span>
                                                            <i style={{ color: "white" }} class="bi bi-star-fill"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star"></i>
                                                            <i style={{ color: "white" }} class="bi bi-star"></i>

                                                        </span>
    </a>   
                                                </li>


    </ul> 
    </li> 

                                    </ul>
                                    <hr />
    </div>)
}

export default Filterapply