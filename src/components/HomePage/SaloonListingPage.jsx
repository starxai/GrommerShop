import React, { useContext, useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./NavbarComponent";
import { getAllSalons,filterData } from "../../api/Salons_service";
import { Store } from "../../App";
import { useBlur } from "../../context/blurContext";
import { removeToken } from "../../context/StorageToken";
import Carousel from "./Carousel2";
import toggleimg from '../images/Frame 137.jpg'
import services from "../servicesdetails";
import Squarecard from "./squarecard";
import { date } from "yup";
import Filterapply from "./filterapply";
import FilteredCards from "./filtercards";
import Filterapplyy from "./filterapplyy";


function SaloonList() {
 
    

    const [personGender,SetPersonGender] = React.useState("")
    const [dropDown,SetDropDown] = React.useState("")
    const [dummyvariable,setsammyvariable]=useState()
    console.log(dropDown)
    console.log(personGender)
    // const images = [
    //     { url: 'https://i.pinimg.com/originals/9b/a2/57/9ba25796112cad616be27e473ae1e149.jpg', alt: 'Image 1' },
    //     { url: 'https://cdn.pixabay.com/photo/2018/12/03/21/22/cartoon-3854292_1280.png', alt: 'Image 2' },
    //     { url: 'image3.jpg', alt: 'Image 3' },
       
    //   ];

      function genderConformation(gender){
        SetPersonGender(gender)
      }

          {/*   useEffect(() =>{
        fetch('http://localhost:3000//user/salons?city=gwalior&location=26.231489173332882,78.16314771591767').then(
            response => console.log(response))
    },[]) */}



//    var [pname,SetPname] = React.useState(["first","second","third","fourth"])
//    var [price,SetPrice]= React.useState([10,20,30])
//    var [cartoonpic,SetCartoonpic] = React.useState([
//     "https://pngfre.com/wp-content/uploads/ben-10-poster.png",
//     'https://img.freepik.com/free-vector/cute-koala-hanging-tree-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-8369.jpg?size=338&ext=jpg&ga=GA1.1.867424154.1713571200&semt=sph'
//    ])
//    console.log(cartoonpic)







    const navigate = useNavigate();

    // ? ------------------------------------------------------------
    //  ?  ----------- UseContext ---------------------
    // ? -----------------------------------------------------------
    const [, setisAuth] = useContext(Store);
  
    // ? ------------------------------------------------------------
    //  ?  ----------- All useStates---------------------
    // ? -----------------------------------------------------------
    const { isBlur } = useBlur();
    const [issmallscreen, setIsSmallScreen] = useState(false);
    const [cardData, setcardData] = useState([]);
    const [allCards, setallCards] = useState([]);
    const [loading, setloading] = useState(true);
    const [totalPages, settotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredCardsLocation, setFilteredCardsLocation] = useState(null);
    const [saloonlocationloading , setsaloonlocationloading] =useState(true)
   // const [filtercardstatus,setfileteredcardstatus] = useState(true)

    const [salonname,setsaloonname]=useState([])
    const [salonnameloading,setsalonnameloading]=useState(true)
    console.log(allCards)
    console.log("crads")
    // ? ------------------------------------------------------------
    //  ?  ----------- Functions ---------------------
    // ? -----------------------------------------------------------
  
    const calculateAverageRating = (reviewData) => {
      if (!reviewData || reviewData.length === 0) {
        return 0; // If there are no reviews or reviewData is undefined, return 0
      }
      const totalRatings = reviewData.reduce(
        (sum, review) => sum + review.rating,
        0
      );
      const averageRating = totalRatings / reviewData.length;
      return Number(averageRating.toFixed(1)); // Round to 1 decimal place
    };
  
    // Map and update salon data with average ratings
    const CardData = cardData.map((card) => ({
      ...card,
      ratings: calculateAverageRating(card.reviewData),
    }));
  
    // Generate unique location options for filtering
    const locations = ["All", ...new Set(CardData.map((card) => card.Location))]; 
   console.log("locations")
   console.log(locations)
    // State to manage filter options
    const [filterOptions, setFilterOptions] = useState({
     
      distance: "",
      priceFrom: "",
      priceTo: 1000,
      ratings: "",
      services: "",
      sort: "",
      sortOrder: "",
     // combos: ""
      manhood: "",
    });
  
    const [selectedLocation, setSelectedLocation] = useState("All"); // State to manage the selected location filter
    const [showFilters, setShowFilters] = useState(true); // State to control filter popup visibility
    // console.log(selectedLocation, "selected location");
    // console.log(filterOptions, "seethis");
   
    
            
    const fetchSalons = async () => {
      console.log(getAllSalons)
      let response;
      // console.log(filterOptions, "check");
  
      if (filterOptions && showFilters) {
        console.log("filteropetions opening")
        setloading(false);
        response = await filterData(filterOptions);
        console.log("excuting")
        console.log("filter response" + response.data.salons )
      } else {

        response = await getAllSalons();
        console.log("all salons")
        
      }

  
       
   


      //  Success
      if (response.code === 200) {
        console.log(response.data.salons)
       let update = response.data.salons.map((item, index) => ({
          id: item.salon_uuid,
          content: item.salon_name,
          imageSrc: item.salon_photos,
       //   Location: item.salon_area,
          Location : item.salon_area
          ,
          address: item.salon_address,
          distance: item.distance?.toFixed(2) || null,
          ratings: item.rating,
          NoR: item.totalFeedback,
          services: item.salon_services.map((item) => ({
            ServiceName: item.service_name,
            DiscountedPrice: item.service_discount,
            OriginalPrice: item.service_original_price,
          }

        )) ,
          Combos: item.salon_combo_services.map((item) => ({
            ComboName: item.combo_name,
            ComboPrice: item.combo_price,
            ComboServices: item.combo_services_name,
          })),
          
        }));
        
  
        // Apply sorting based on filterOptions
        if (filterOptions.sort === "distance") {
            
          update.sort(
            (a, b) =>
              (parseFloat(a.distance) || 0) - (parseFloat(b.distance) || 0)
          );
        } else if (filterOptions.sort === "ratings") {
          update.sort((a, b) => {
            const ratingA = parseFloat(a.ratings) || 0;
            const ratingB = parseFloat(b.ratings) || 0;
            return ratingB - ratingA;
          });
        }
  
        setcardData([...update]);
         
        let x = Math.ceil(update.length / cardsPerPage);
        settotalPages(x);
        setallCards([...update]);
  
        setloading(false);
      }
      // ! if there is an error code
      if (response.code === 500) {
        removeToken();
        setisAuth(null);
        navigate("/");
        return;
      }
    };
  
  
  
    // Function to toggle the filter popup
   {/* const toggleFilterPopup = () => {
      setShowFilters(true);
    };
  */}
    // Function to apply filter changes
    const handleFilterApply = () => {
     // setFilteredCardsLocation(false)
    // setfileteredcardstatus(false)
      setShowFilters(true);
      handleApplyFilters();
     setsalonnameloading(false)
    //  setShowFilters(false);
    };
    useEffect(() =>{
      console.log(showFilters)
    },[showFilters])
  
    // Function to apply filters and update displayed cards
    // const handleApplyFilters = () => {
    //   // Filter logic based on filterOptions and selectedLocation
    //   const filteredCards = cardData.filter((card) => {
    //     let showCard = true;
  
    //     // Filter based on distance
    //     if (filterOptions.distance !== "All") {
    //       const [minDistance, maxDistance] = filterOptions.distance.split("-");
    //       showCard =
    //         showCard &&
    //         parseFloat(card.distance) >= parseFloat(minDistance) &&
    //         parseFloat(card.distance) < parseFloat(maxDistance);
    //     }
  
    //     // Filter based on price range
    //     if (filterOptions.priceFrom !== "" && filterOptions.priceTo !== "") {
    //       showCard =
    //         showCard &&
    //         card.services.some((service) => {
    //           return (
    //             service.DiscountedPrice >= parseInt(filterOptions.priceFrom) &&
    //             service.DiscountedPrice <= parseInt(filterOptions.priceTo)
    //           );
    //         });
    //     }
  
    //     // Filter based on ratings
    //     if (filterOptions.ratings !== "All") {
    //       showCard =
    //         showCard && card.ratings >= parseFloat(filterOptions.ratings);
    //     }
  
    //     // Filter based on services
    //     if (filterOptions.services !== "All") {
    //       if (filterOptions.combos) {
    //         showCard =
    //           showCard &&
    //           card.Combos &&
    //           card.Combos.some((combo) =>
    //             combo.ComboServices.includes(filterOptions.services)
    //           );
    //         showCard =
    //           showCard ||
    //           (card.services &&
    //             card.services.some((service) => {
    //               return service.ServiceName === filterOptions.services;
    //             }));
    //       } else {
    //         showCard =
    //           showCard &&
    //           card.services.some((service) => {
    //             return service.ServiceName === filterOptions.services;
    //           });
    //       }
    //     }
  
    //     if (selectedLocation !== "All") {
    //       showCard = showCard && card.Location === selectedLocation;
    //     }
  
    //     return showCard;
    //   });
  
    //   if (filterOptions.sort === "distance") {
    //     filteredCards.sort((a, b) => {
    //       const distA = parseFloat(a.distance);
    //       const distB = parseFloat(b.distance);
    //       return filterOptions.sortOrder === "asc"
    //         ? distA - distB
    //         : distB - distA;
    //     });
    //   } else if (filterOptions.sort === "ratings") {
    //     filteredCards.sort((a, b) => {
    //       const ratingsA = parseFloat(a.ratings);
    //       const ratingsB = parseFloat(b.ratings);
    //       return filterOptions.sortOrder === "asc"
    //         ? ratingsA - ratingsB
    //         : ratingsB - ratingsA;
    //     });
    //   } else if (filterOptions.sort === "price") {
    //     filteredCards.sort((a, b) => {
    //       const priceA = Math.min(
    //         ...a.services.map((service) => service.DiscountedPrice)
    //       );
    //       const priceB = Math.min(
    //         ...b.services.map((service) => service.DiscountedPrice)
    //       );
    //       return filterOptions.sortOrder === "asc"
    //         ? priceA - priceB
    //         : priceB - priceA;
    //     });
    //   }
    //   setallCards(filteredCards);
    // };
    useEffect(() =>{

    },[salonname])
  
    const handleApplyFilters = () => {
      fetchSalons();
    };
  
    const handleLocationChange  = (location) => {
      console.log(location);
      if (location === "All") {
       setFilteredCardsLocation(null);
      } else {
     // console.log(allCards)
      let update = allCards.filter((item) => item.Location === location);
       setFilteredCardsLocation(update);
        console.log(filteredCardsLocation)
        
      }
      // setSelectedLocation(location);
    };
    // console.log(filteredCardsLocation);

  
  
   useEffect(() => {
      handleApplyFilters();
    }, [selectedLocation]);
  
    const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());
   
    

    function getCardsPerPage() {
      // if (window.innerWidth < 980) {
      //   return allCards.length; // Display all cards in one page
      // } else
      if (window.innerWidth >= 980 && window.innerWidth < 1024) {
        return 9; // Display 9 cards per page
      } else {
        return 12; // Display 12 cards per page
      }
    }    
  
     useEffect(() => {
       function handleResize() {
         setCardsPerPage(getCardsPerPage());
       }


      
       window.addEventListener("resize", handleResize);
       return () => window.removeEventListener("resize", handleResize);
     }, []);
  
     const resetFiltersFunc = () => {
       setallCards(cardData);
     };
  
     const handlePrevPage = () => {
       setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
     };
  
     const handleNextPage = () => {
       setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
     const indexOfLastCard = currentPage * cardsPerPage;
     const indexOfFirstCard = indexOfLastCard - cardsPerPage;
     const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);
  
     const handlePageChange = (pageNumber) => {
       setCurrentPage(pageNumber);
     };
  
     useEffect(() => {
       setIsSmallScreen(window.innerWidth < 700);
    }, [window.innerWidth]);

       

        const[inputvalue,setinputvalue] = useState("")
        const locationinputchange = async (event) =>{
                setinputvalue(event.target.value);
                handleLocationChange(inputvalue)
        }
       

        useEffect(() =>{
           
        },[inputvalue])
        const [toggle,settoggle]= useState(false)
       const   handletoggle = () =>{
        settoggle(prevToggle => !prevToggle);
            console.log("toggle"+toggle)
          }
          
           


        //console.log("data",getAllSalons())    
    return ( 
        
        <div>
            <div>
                <Navbar></Navbar>
                
            </div>

            <div className="saloon-listing-cover-image">
                <div className="saloon-listing-image-container">
                    <img className="saloon-listing-center-image" src="https://i.ibb.co/KrrQjHC/jeppe-monster-T-g-TN3-Po9-RQ-unsplash-1-1.jpg" alt="" />
                    <h1 class="seconds secondpage-salonsexplore" style={{
                        position: "relative", bottom: "45px", fontFamily: "Avegas Royale",
                        fontWeight: 400, fontSize: "60px"
                    }}> All The  To slaoon Explore</h1>
                </div>
                </div> 

            <div className="listing-main-container">

                <div class="container-fluid">
                    <div class="row flex-nowrap">

                        <div class="col-auto col-md-2 col-xl-3  px-sm-3 px-0 ">
                            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-3 text-white min-vh-100  ">
                     {/*     <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation" style={{backgroundColor:"white",marginLeft:"300px",marginTop:"100px"}}  onClick={()=>console.log("Toglle")}
                    >
                     
                </button>  */}
                <button className="toggle-button-filters">
            {/*    <span className="navbar-toggler-icon" onClick={ ()=>handletoggle()}></span> */}
            <img src={toggleimg} onClick={ ()=>handletoggle()}></img>  
                </button>
                                 


                                <div className="one-side-border" > <button class="d-none d-sm-inline filters-apply-button" style={{color:"white",backgroundColor:"black",width:"100px"}} onClick={handleFilterApply}>Apply</button>
                          {/*    <div className="filtercard-positions">  <Filterapply  onChange={(value)=>handleLocationChange(value)} toggle={toggle} value={selectedLocation} setFilteredCardsLocation={setFilteredCardsLocation} options={locations}  setFilterOptions={setFilterOptions} setsaloonname={setsaloonname} setsalonnameloading={setsalonnameloading} setsaloonlocationloading={setsaloonlocationloading}/></div> */}
                              <div className="filtercard-positions">  <Filterapplyy  onChange={(value)=>handleLocationChange(value)} toggle={toggle} value={selectedLocation} setFilteredCardsLocation={setFilteredCardsLocation} options={locations}  setFilterOptions={setFilterOptions} setsaloonname={setsaloonname} setsalonnameloading={setsalonnameloading} setsaloonlocationloading={setsaloonlocationloading}/></div>
                            {console.log("salonname"+salonname)}{console.log(salonnameloading)}
                       {/*       <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">


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
    */}  </div>

                            </div>
                        </div>


                     <div class="col py-3 sortbyorder">


                            <div className="dropdown-box-container" >
    
                                <select className="popular-dropdown-button"  onChange={(e)=>SetDropDown(e.target.value)}>
                                    <option disabled selected value="">Sort by popular</option>
                                    <option value="Hair cut"> Hair cut</option>
                                    <option value="body massage">body massage</option>
                                    <option value="Hair color">Hair color</option>
                                </select>
                            </div>

                            <div className="listing-card-saloon-container">

                        

          
                               <>


                               
                                         
                                <div className="displaysalonspage-mainsalons"  style={{marginLeft:"20px",display:"grid",gridTemplateColumns:"300px 300px 300px"}} >
                                    
                                  
                          {/*      {salonnameloading ? (
                  <div  style={{display:"grid",gridTemplateColumns:"310px 310px 310px"}}>
                  {
                    salonname ? salonname.map( (data,index) =>{
                      console.log(data)
                      return(

                        <Squarecard {...data} index={index}/> 
                    
                          <FilteredCards data={data}/>
                     <div style={{color:"white"}}>{data.salon_name}</div>
                      )
                  

                  
                  
                    }):""
                  }
                    </div>
                ) : (
              <div></div>
                )} */}   {console.log(cardData)}
                          {console.log("filteered cards")}
                          {console.log(filteredCardsLocation)}
                                 {
                                 

                                    filteredCardsLocation  ? (
                                            <div className="displaysalonspage-salons"  style={{display:"grid",gridTemplateColumns:"310px 310px 310px"}}>
                                                {
                                                    filteredCardsLocation.map((data,index) =>
                                                        <div key={index} > 
                                                        
                                                        <Squarecard {...data} index={index}/> 
                                                    

                                                    
                                                        </div>
                                                    )
                                                }  

                                         
                                            
                                     </div> 
                                        )
                                        :
                                    (


                               <div style={{color:"white"}}>
                                  
                                  
                                    <div style={{color:"white"}}>
                                      {
                                     <div className="displaysalonspage-salons" style={{display:"grid",gridTemplateColumns:"310px 310px 310px"}}>
                                     {
                                         cardData.map((data,index) =>
                                             <div key={index} > 
                                             
                                             <Squarecard {...data} index={index}/> 
                                         

                                         
                                             </div>
                                         )
                                     }  

                              
                                 
                          </div> 
                                      }
                                    </div>
                                   
                               </div>
                                      
                                
                                        )
                                    }   
                                 
                                 </div>
                                     {/*  <label style={{display:"grid",gridTemplateColumns:"300px 300px 300px",height:"494px"}}>
                                            {
                                                services.map((data, index)  => (
                                                    <Squarecard {...data} /> 
                                                    
                                                )
                                                    

                                                    
                                        
                
                                                   
                                                )
                                             }

                                            </label>  */}
                                 
                                
                                
                    {/*

                         
                        {
                          
                            services.map(data  =>
                                <div class="cards-container">
                                <div className="cards-positions-container">
                                <div id="carouselExampleIndicators" class="carousel slide">
                                                <div class="carousel-indicators">
                                                    <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                    <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                    <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                </div>
                                                <div class="carousel-inner" style={{ width: "300px" }}>
                                                <div class="carousel-item active">
                                                        <img src={data.img} class="d-block w-100" alt="..." />
                                                    </div>
                                                   
                                                    
                                                    <div class="carousel-item">
                                                        <img src={data.img} class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src={data.img} class="d-block w-100" alt="..." />
                                                    </div>
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>


                                            <span className="heart-icon"><i style={{ color: "white", fontSize: "20px" }} class="bi bi-heart"></i></span>
                                            <span className="location-icon"><i style={{ color: "white" }} class="bi bi-geo-alt-fill"></i>{data.location}</span>
                                        </div>
                                        <div className="card-position">
                                            <div class="card-body">
                                                <h5 style={{ color: "white" }} class="card-title">{data.service}</h5>
                                                <p style={{ color: "white" }} class="card-text">{data.about} </p>
                                                <p style={{ color: "white" }}>₹ {data.price} / person <Link to="/saloondetails"><span><i style={{ color: "white", float: "right", fontSize: "26px" }} class="bi bi-arrow-right-circle"></i></span></Link></p>
                                            </div>
                                        </div>
                                    </div>


                            
                                                            )
                                                        }
                                                        
                                                    */}
                                                      {/*  <div class="cards-wrapper">

                                                {
                                                    .map((data,index) =>(
                                                        <div key={index}>
                                                            <Squarecard {...data}/>
                                                        </div>
                                                    ))
                                                }
                                            </div> */}
                        
                                   
                                      </>

                                                {/* <Carousel/> */}
                                            
                                                </div>


                                                </div>
                                                    </div>
                                                    </div>
                                                    </div>

                                                </div>
                                               )  
                                                            }
                                                            export default SaloonList;
                                                                                                    
                                                   
                                                
                   
                   

