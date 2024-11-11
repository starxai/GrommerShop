import React, { useContext, useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./NavbarComponent";
import { getAllSalons, filterData } from "../../api/Salons_service";
import { Store } from "../../App";
import { useBlur } from "../../context/blurContext";
import { removeToken } from "../../context/StorageToken";
import Carousel from "./Carousel2";
import toggleimg from "../images/Frame 137.jpg";
import services from "../servicesdetails";
import Squarecard from "./squarecard";
import { date } from "yup";
import Filterapply from "./filterapply";
import FilteredCards from "./filtercards";
import Filterapplyy from "./filterapplyy";
import { data } from "jquery";

function SaloonList() {
  const [personGender, SetPersonGender] = React.useState("");
  const [dropDown, SetDropDown] = React.useState("");
  const [dummyvariable, setsammyvariable] = useState();

  function genderConformation(gender) {
    SetPersonGender(gender);
  }

  const navigate = useNavigate();

  const [, setisAuth] = useContext(Store);

  const { isBlur } = useBlur();
  const [issmallscreen, setIsSmallScreen] = useState(false);
  const [cardData, setcardData] = useState([]);
  const [allCards, setallCards] = useState([]);
  const [loading, setloading] = useState(true);
  const [totalPages, settotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCardsLocation, setFilteredCardsLocation] = useState(null);
  const [saloonlocationloading, setsaloonlocationloading] = useState(true);
  const [salonsecondname, setsalonsecondname] = useState(true);
  // const [filtercardstatus,setfileteredcardstatus] = useState(true)

  const [salonname, setsaloonname] = useState([]);
  const [salonnameloading, setsalonnameloading] = useState(true);

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
  // console.log("locations")
  //console.log(locations)
  // State to manage filter options
  const [filterOptions, setFilterOptions] = useState({
    distance: "",
    priceFrom: "",
    priceTo: 50,
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

  useEffect(() => {
    handleFilterApply();
  }, [filterOptions, showFilters]);

  const fetchSalons = async () => {
    //  console.log(getAllSalons)
    let response;
    // console.log(filterOptions, "check");

    if (filterOptions && showFilters) {
      //  console.log("filteropetions opening")
      setloading(false);
      response = await filterData(filterOptions);
      // console.log("filterption")

      // console.log("excuting")
      // console.log(  response.data.salons )
    } else {
      response = await getAllSalons();
      // console.log("all salons")
    }

    //  Success
    if (response.code === 200) {
      //  console.log(response.data.salons)
      let update = response.data.salons.map((item, index) => ({
        id: item.salon_uuid,
        content: item.salon_name,
        imageSrc: item.salon_photos,
        //   Location: item.salon_area,
        Location: item.salon_area,
        address: item.salon_address,
        distance: item.distance?.toFixed(2) || null,
        ratings: item.rating,
        NoR: item.totalFeedback,
        services: item.salon_services.map((item) => ({
          ServiceName: item.service_name,
          DiscountedPrice: item.service_discount,
          OriginalPrice: item.service_original_price,
        })),
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

  const handleFilterApply = async () => {
    setShowFilters(true);
    setsalonnameloading(false);
    handleApplyFilters();
  };

  const handleApplyFilters = async () => {
    fetchSalons();
  };

  const handleLocationChange = (location) => {
    // console.log(location);
    if (location === "All") {
      setFilteredCardsLocation(null);
    } else {
      // console.log(allCards)
      let update = allCards.filter((item) => item.Location === location);
      setFilteredCardsLocation(update);
      //  console.log(filteredCardsLocation)
    }
  };

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

  const [inputvalue, setinputvalue] = useState("");
  const locationinputchange = async (event) => {
    setinputvalue(event.target.value);
    handleLocationChange(inputvalue);
  };

  useEffect(() => {}, [inputvalue]);
  const [toggle, settoggle] = useState(false);
  const handletoggle = () => {
    settoggle((prevToggle) => !prevToggle);
  };
  useEffect(() => {}, [salonsecondname]);

  console.log(filteredCardsLocation);
  return (
    <div>
      <div className="saloon-listing-cover-image">
        <div className="saloon-listing-image-container">
          <img
            className="saloon-listing-center-image"
            src="https://i.ibb.co/KrrQjHC/jeppe-monster-T-g-TN3-Po9-RQ-unsplash-1-1.jpg"
            alt=""
          />
          <h1
            class="seconds secondpage-salonsexplore"
            style={{
              position: "relative",
              bottom: "45px",
              fontFamily: "Avegas Royale",
              fontWeight: 400,
              fontSize: "60px",
            }}
          >
            All The To slaoon Explore
          </h1>
        </div>
      </div>

      <div className="listing-main-container">
        <div class="container-fluid">
          <div class="row flex-nowrap">
            <div class="col-auto col-md-2 col-xl-3  px-sm-3 px-0 ">
              <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-3 text-white min-vh-100  ">
                <button className="toggle-button-filters">
                  {/*    <span className="navbar-toggler-icon" onClick={ ()=>handletoggle()}></span> */}
                  <img src={toggleimg} onClick={() => handletoggle()}></img>
                </button>

                <div className="one-side-border">
                  <button
                    class="d-none d-sm-inline filters-apply-button"
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      width: "100px",
                    }}
                    onClick={handleFilterApply}
                  >
                    Apply
                  </button>
                  <div className="filtercard-positions">
                    <Filterapplyy
                      onChange={(value) => handleLocationChange(value)}
                      toggle={toggle}
                      value={selectedLocation}
                      setFilteredCardsLocation={setFilteredCardsLocation}
                      options={locations}
                      setFilterOptions={setFilterOptions}
                      setsaloonname={setsaloonname}
                      setsalonnameloading={setsalonnameloading}
                      setsaloonlocationloading={setsaloonlocationloading}
                      handleFilterApply={() => handleFilterApply()}
                      setsalonsecondname={setsalonsecondname}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="col py-3 sortbyorder">
              <div className="dropdown-box-container">
                <select
                  className="popular-dropdown-button"
                  onChange={(e) => SetDropDown(e.target.value)}
                >
                  <option disabled selected value="">
                    Sort by popular
                  </option>
                  <option value="Hair cut">sort by distance </option>
                  <option value="body massage">sort by ratings</option>
                  <option value="Hair color">
                    sort by pricing(low to high)
                  </option>
                  <option value="Hair color">
                    sort by pricing(high to low)
                  </option>
                </select>
              </div>

              <div className="listing-card-saloon-container">
                <div
                  className="displaysalonspage-mainsalons"
                  style={{
                    marginLeft: "20px",
                    display: "grid",
                    gridTemplateColumns: "300px 300px 300px",
                  }}
                >
                  {filteredCardsLocation && salonsecondname ? (
                    <div
                      className="displaysalonspage-salons"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "310px 310px 310px",
                      }}
                    >
                      {filteredCardsLocation.map((data, index) => (
                        <div key={index}>
                          {console.log("filtercards location excutinh")}
                          <Squarecard {...data} index={index} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ color: "white" }}>
                      {saloonlocationloading ? (
                        <div style={{ color: "white" }}>
                          {
                            <div
                              className="displaysalonspage-salons"
                              style={{
                                display: "grid",
                                gridTemplateColumns: "310px 310px 310px",
                              }}
                            >
                              {cardData.map((data, index) => (
                                <div key={index}>
                                  <Squarecard {...data} index={index} />
                                </div>
                              ))}
                            </div>
                          }
                        </div>
                      ) : (
                        <div>
                          {salonname.map((data, index) => (
                            <div>location data not coming</div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SaloonList;
