
import { previousDay } from "date-fns";
import React, { useEffect, useState } from "react";
import Context from "../../context/axiox";


function Filterapply({ filterOptions,setFilterOptions,setsaloonname,setsalonnameloading,setsaloonlocationloading,toggle}) {
   console.log(filterOptions)

    const [personGender, SetPersonGender] = useState("");
    const[distance, setdistance] = useState(0)
    const [selectedservices,setselectedservices]=useState([])
    const [salonname,setsalonname]=useState()
    const [salonResults,setSalonResults]=useState([])
   
    const allservices = [
        "All",
        "Face pointing",
        "Facial",
        "Haircut",
        "hair",
        "Manicure",
        "pedicure",
        "shaving"
    ]
  {/*  const [filterState, setFilterState] = useState({
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
*/}
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterOptions((prevOptions) => ({
            ...prevOptions,
            [name]: value,
        }));
    };

    const handledistancechange = (event) =>{
            const {name,value} = event.target;
            setdistance(value)
         //   console.log(event.target.value)
           // console.log(event.target.name)
          //  setdistance(event.target.name)
          setFilterOptions((prevOptions) =>({
            ...prevOptions,
            [name]:value
          }))
      
    }

    const [inputValue, setInputValue] = useState("");
    const locationInputChange = (event) => {
        setInputValue(event.target.value);
        // handleLocationChange(inputValue);
    };

    function genderConfirmation(gender) {
        SetPersonGender(gender);
    }

    const handlelowprice = (event) =>{
        const {name,value} = event.target
      
        setFilterOptions((prevOptions) =>({
            ...prevOptions,
            [name]:value
        }))
    }

    const handlehighprice = (event) =>{
        const {name,value} = event.target
        setFilterOptions((prevOptions) =>({
            ...prevOptions,
            [name]:value
        }))
    }

    const handlesalonname = async (event) => {
        const { name, value } = event.target;
       // setsalonname(value);
       if(value ===""){
       setsaloonlocationloading(false)
       }
       else{
        try {
          let response = await fetch(`${Context}/user/search/salon?name=${value}`);
          if (response.ok) {
            let data = await response.json();
            console.log("filtercompmnen"+data)
            setSalonResults(data);
            
            setsaloonname(data.data)
          //  setsalonnameloading(true)
          //  console.log(salonResults)
          } else {
            console.error("Failed to fetch salon data");
          }
        } catch (error) {
          console.error("Error fetching salon data:", error);
        }}
      };

    const handlefilterservices = (event) =>{
        const{name,value} = event.target
        let update = [...selectedservices]
        let checkservice = update.some((item) => item===value);
        if(!checkservice){
         update.push(value)
        };
        setselectedservices(update);
        setFilterOptions((prevOptions) =>({
            ...prevOptions,
            [name]:update
        }))
    }

    const handlerating = (event) =>{
        const{name,value} = event.target
        setFilterOptions((prevOptions) =>({
            ...prevOptions,
            [name]:value
        })
    )}
    


    return (
       // <div className="filtercard-position"> 

<div > 
     <div  className={`filtercard-position ${toggle ? "show" : "hide"}`}>
            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                {/* <span className="fs-5 d-none d-sm-inline" >Filters</span>   */}
             <span className='fs-5 d-sm-inline  filteroption' >Filters</span>
            </a>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                </a>
              {/*  <input className="search-bar d-none d-sm-inline" placeholder="Search Here" name="salonname" onChange={handlesalonname}/>*/}
              <input className="search-bar  d-sm-inline" placeholder="Search Here" name="salonname" onChange={handlesalonname}/>
                <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                </ul>

                <li className="filteragegroup">
                   {/* <a href="#submenu1-2" data-bs-toggle="collapse" className="nav-link px-0 align-middle mobile-agegroup"> */}
                   <a href="#submenu1-2" data-bs-toggle="collapse" className='nav-link px-0 align-middle mobile-agegroup'>
                     <span className="ms-1 d-sm-inline">   
                    
                            <p style={{ color: "white" }} className="afterhoveragegroup">Age Group</p>
                        </span>
                    </a>
                    <ul className="collapse nav flex-column ms-1" id="submenu1-2" data-bs-parent="#menu">
                        <li className="w-100">
                            <a className="nav-link px-0 agegroup-display">
                            
                                 <span className="d-sm-inline"> 
                           
                                    <label htmlFor="customRange2" className="form-label text-white">Less than five</label>
                                    <input type="range" style={{ color: "white" }} className="form-range" min="0" max="5" id="customRange2"/>
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <hr style={{ width: "250px", color: "gold" }} class="d-sm-inline"/>
                </li>

                <li>
                    <div className="accordion" id="accordionExample" style={{ backgroundColor: "black" }}>
                        <div className="accordion-item sexual-orientation" style={{ backgroundColor: "black", color: "white", border: "none" }}>
                            <span class='ms-1 d-sm-inline'>
                            <h2 className="accordion-header ">
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
                                        outline: "none",
                                        boxShadow: "none",
                                    }}
                                >
                                    Sexual-orientation
                                </button>
                            </h2> </span>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <span class='d-sm-inline'>
                                    <input
                                        onClick={(e) => genderConfirmation(e.target.value)}
                                        value="male"
                                        name="manhood"
                                        type="radio"
                                        onChange={handleFilterChange}
                                    />{" "}
                                    <label htmlFor="">male</label>
                                    <br class="d-none d-sm-inline"/>
                                    <input
                                        onClick={(e) => genderConfirmation(e.target.value)}
                                        value="female"
                                        name="manhood"
                                        type="radio"
                                        onChange={handleFilterChange}
                                    />{" "}
                                    <label htmlFor="">Female</label>
                                    </span>   </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <hr style={{ width: "250px", color: "gold" }} class="d-none d-sm-inline"/>
                </li>

                <li>
                
            <a href="#submenu2.2" data-bs-toggle="collapse" className="nav-link px-0 align-middle location-salons">
                     {/*   <span className="ms-1 d-none d-sm-inline location-salons"> */}
                     <span className='d-sm-inline'>
                            <p className="location-salons" style={{ color: "white" }}>Location</p>
                        </span>
                    </a>  
                    <ul className="collapse nav flex-column ms-1" id="submenu2.2" data-bs-parent="#menu">
                        <li>
                            <a className="nav-link px-0">
                                <span className='d-sm-inline'>
                                    <input placeholder="Enter Your location" type="text" onChange={locationInputChange} className="location-input" />
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <hr style={{ width: "250px", color: "gold" }} class="d-sm-inline"/>
                </li>

                <li>
                    <a href="#submenu1-4" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                     {/*   <span className="ms-1 d-none d-sm-inline"> */}
                     <span className="ms-1 d-sm-inline">
                            <p className="distance-salons" style={{ color: "white" }}>Distance</p>
                        </span>
                    </a>
                    <ul className="collapse nav flex-column ms-1" id="submenu1-4" data-bs-parent="#menu">
                        <li className="w-100">
                            <a className="nav-link px-0">
                                <span className="ms-1  d-sm-inline">
                                    <label htmlFor="customRange2" className="form-label text-white" >Less than {distance} km</label>
                                    <input type="range" style={{ color: "white" }} className="form-range" min="0" max="5" id="customRange2"  value={distance} name="distance" onChange={handledistancechange}/> 
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <hr style={{ width: "250px", color: "gold" }} class=" d-sm-inline"/>
                </li>

                <li>
                    <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                        <span className= "ms-1 d-sm-inline">
                            <p className="groomer-services" style={{ color: "white" }}>Services</p>
                        </span>
                    </a>
                    <ul className="collapse nav flex-column ms-1 services-list" id="submenu3" data-bs-parent="#menu">
                        {allservices.map(data => 
                             <li className="w-100">
                             <a href="#" className="nav-link px-0">
                                 <span className=" d-sm-inline">
                                     <input type="checkbox" value={data} key={data} onChange={handlefilterservices} name="services"/>
                                 </span>
                                 <span style={{ color: "white" }} > {data}</span>
                             </a>
                         </li>
                        )}
                     {/*   <li className="w-100">
                            <a href="#" className="nav-link px-0">
                                <span className="d-none d-sm-inline">
                                    <input type="checkbox" />
                                </span>
                                <span style={{ color: "white" }}> All</span>
                            </a>
                    </li>*/}
                       {/* <li>
                            <a href="#" className="nav-link px-0">
                                <span className="d-none d-sm-inline">
                                    <input type="checkbox" />
                                </span>
                                <span style={{ color: "white" }}>Face pointing</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0">
                                <span className="d-none d-sm-inline">
                                    <input type="checkbox" />
                                </span>
                                <span style={{ color: "white" }}>Facial</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0">
                                <span className="d-none d-sm-inline">
                                    <input type="checkbox" />
                                </span>
                                <span style={{ color: "white" }}> Haircut</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0">
                                <span className="d-none d-sm-inline">
                                    <input type="checkbox" />
                                </span>
                                <span style={{ color: "white" }}> Manicure</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0">
                                <span className="d-none d-sm-inline">
                                    <input type="checkbox" />
                                </span>
                                <span style={{ color: "white" }}>pedicure</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0">
                                <span className="d-none d-sm-inline">
                                    <input type="checkbox" />
                                </span>
                                <span style={{ color: "white" }}> shaving</span>
                            </a>
                                </li> */}
                    </ul>
                </li>

                <li>
                    <hr style={{ width: "250px", color: "gold" }} class=" d-sm-inline"/>
                </li>

                <li>
                    <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                        <span className= "ms-1 d-sm-inline">
                            <p className="filter-price" style={{ color: "white" }}>price</p>
                        </span>
                    </a>
                    <ul className="collapse nav flex-column ms-1 pricesfromto" id="submenu2" data-bs-parent="#menu">
                        <li className="w-100">
                            <a className="nav-link px-0">
                                <span className="ms-1 d-sm-inline">
                                    <span style={{ color: "white" }}>From : </span>
                                    <input className="cost-input" placeholder="₹200" type="text" onChange={handlelowprice} name="priceFrom"/>
                                </span>
                                <span style={{ color: "white" }}>To :</span>
                                <input className="cost-input" placeholder="₹400" type="text" onChange={handlehighprice} name="priceTo"/>
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <hr style={{ width: "250px", color: "gold" }} class=" d-sm-inline"/>
                </li>

                <li>
                    <a href="#submenu4" data-bs-toggle="collapse" className="nav-link px-0 align-middle filter-ratings">
                        <span className="ms-1 d-sm-inline">
                            <p style={{ color: "white" }}>Rating</p>
                        </span>
                    </a>
                    <ul className="collapse nav flex-column ms-1" id="submenu4" data-bs-parent="#menu">
                        <li className="w-100 ratings-star">
                            <a href="#" className="nav-link px-0">
                                <span className=" d-sm-inline">
                                    <input className="rating-input" type="checkbox" value='5' name="ratings" onChange={handlerating}/>
                                </span>
                                <span>
                                    <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                                    <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                                    <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                                    <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                                    <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                                </span>
                            </a>
                        </li>
                        <li className="ratings-star">
                            <a href="#" className="nav-link px-0">
                                <span className="d-sm-inline">
                                    <input type="checkbox" value='5' name="ratings" onChange={handlerating}/>
                                </span>
                                <span>
                                    <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                                    <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                                    <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                                    <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                                    <i style={{ color: "white" }} className="bi bi-star"></i>
                                </span>
                            </a>
                        </li>
                        <li className="ratings-star">
                            <a href="#" className="nav-link px-0">
                                <span className=" d-sm-inline">
                                    <input type="checkbox" value='5' name="ratings" onChange={handlerating}/>
                                </span>
                                <span>
                                    <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                                    <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                                    <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                                    <i style={{ color: "white" }} className="bi bi-star"></i>
                                    <i style={{ color: "white" }} className="bi bi-star"></i>
                                </span>
                            </a>
                        </li>
                        <li >
                            <a href="#" className="nav-link px-0">
                                <span className=" d-sm-inline">
                                    <input type="checkbox" value='5' name="ratings" onChange={handlerating}/>
                                </span>
                                <span>
                                    <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                                    <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                                    <i style={{ color: "white" }} className="bi bi-star"></i>
                                    <i style={{ color: "white" }} className="bi bi-star"></i>
                                    <i style={{ color: "white" }} className="bi bi-star"></i>
                                </span>
                            </a>
                        </li>
                        <li className="ratings-star">
                            <a href="#" className="nav-link px-0">
                                <span className="d-sm-inline">
                                    <input type="checkbox" value='5' name="ratings" onChange={handlerating}/>
                                </span>
                                <span>
                                    <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                                    <i style={{ color: "white" }} className="bi bi-star"></i>
                                    <i style={{ color: "white" }} className="bi bi-star"></i>
                                    <i style={{ color: "white" }} className="bi bi-star"></i>
                                    <i style={{ color: "white" }} className="bi bi-star"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <hr class="d-sm-inline"/>
        </div> </div>
    );
}

export default Filterapply;
