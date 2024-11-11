import { previousDay } from "date-fns";
import React, { useEffect, useState } from "react";
import Context from "../../context/axiox";
import { faLadderWater } from "@fortawesome/free-solid-svg-icons";

function Filterapplyy({
  onChange,
  filterOptions,
  value,
  setFilteredCardsLocation,
  setFilterOptions,
  setsaloonname,
  setsalonnameloading,
  setsaloonlocationloading,
  toggle,
  options,
  handleFilterApply,
  setsalonsecondname,
}) {
  //  console.log(filterOptions)

  const [personGender, SetPersonGender] = useState("");
  const [distance, setdistance] = useState(0);
  const [selectedservices, setselectedservices] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [salonname, setsalonname] = useState();
  const [salonResults, setSalonResults] = useState([]);
  const [ischecked, setischecked] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || options[0]);
  //  const showNotFound = isOpen && filteredOptions.length === 0;
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );
  const allservices = [
    "All",
    "Face pointing",
    "Facial",
    "Haircut",
    "hair",
    "Manicure",
    "pedicure",
    "shaving",
  ];
  {
    /*  const [filterState, setFilterState] = useState({
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
*/
  }

  const handleFilterChange = async (event) => {
    const { name, value } = event.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
    console.log("gender cofirmation is coming");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsOpen(true);
    if (event.target.value === "") {
      setIsOpen(false);
      setFilteredCardsLocation(null);
    }
  };

  const handledistancechange = (event) => {
    const { name, value } = event.target;
    setdistance(value);
    //   console.log(event.target.value)
    // console.log(event.target.name)
    //  setdistance(event.target.name)
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value + "km",
    }));
  };

  function genderConfirmation(gender) {
    SetPersonGender(gender);
  }

  const handlelowprice = (event) => {
    const { name, value } = event.target;

    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const handlehighprice = async (event) => {
    const { name, value } = event.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const handlesalonname = async (event) => {
    const { name, value } = event.target;
    // setsalonname(value);
    if (value === "") {
      console.log("salon searching non");
      setsalonsecondname(true);
      setsaloonlocationloading(true);
    } else {
      console.log("all salons");
      try {
        setsalonsecondname(false);
        setsaloonlocationloading(false);
        let response = await fetch(
          `${Context}/user/search/salon?name=${value}`
        );
        if (response.ok) {
          let data = await response.json();
          //   console.log("filtercompmnen"+data)
          setSalonResults(data);

          setsaloonname(data.data);
          //  setsalonnameloading(true)
          //  console.log(salonResults)
        } else {
          //    console.error("Failed to fetch salon data");
        }
      } catch (error) {
        // console.error("Error fetching salon data:", error);
      }
    }
  };

  const handlefilterservices = async (event) => {
    let update = [...selectedservices];
    if (event.target.checked) {
      setischecked(!ischecked);
      //  console.log(ischecked)
      // console.log(ischecked)
      const { name, value } = event.target;

      let checkservice = update.some((item) => item === value);
      if (!checkservice) {
        update.push(value);
      }
      setselectedservices(update);
      setFilterOptions((prevOptions) => ({
        ...prevOptions,
        [name]: update,
      }));
    } else {
      const { name, value } = event.target;
      update = update.filter((item) => item != value);
      setselectedservices(update);
      console.log(update);
      setFilterOptions((prevOptions) => ({
        ...prevOptions,
        [name]: update,
      }));
    }
  };
  useEffect(() => {
    //   console.log("selected services")
    //  console.log(selectedservices)
  });
  const handlerating = (event) => {
    const { name, value } = event.target;
    if (event.target.checked) {
      setFilterOptions((prevOptions) => ({
        ...prevOptions,
        [name]: value,
      }));
    } else {
      console.log("rating is uncheck");
    }
  };

  const handleSelect = (option) => {
    //setSelectedOption(option);
    setInputValue(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="salonpage-maincontainer">
      <span className="fs-5 d-sm-inline  filteroption">Filters</span>
      <input
        className="search-bar d-sm-inline searching-salonname"
        placeholder="Search Here"
        name="salonname"
        onChange={handlesalonname}
      />
      <div className={`filtercard-position ${toggle ? "show" : "hide"}`}>
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          {/* <span className="fs-5 d-none d-sm-inline" >Filters</span>   */}
        </a>
        <ul
          className=" nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start accordion-main-container"
          id="menu"
        >
          <div
            class="accordion filterapply-accordionmain"
            id="accordionPanelsStayOpenExample"
          >
            <div class="accordion-item filterapply-accordionmain">
              <h2
                class="accordion-header filterapply-accordionmain"
                id="panelsStayOpen-headingOne"
              >
                <button
                  class="accordion-button filterapply-accordionmain filteraccordion-agegroup"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <p style={{ color: "white" }} className="afterhoveragegroup">
                    Age Group
                  </p>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse "
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <li className="w-100">
                    <a className="nav-link px-0 agegroup-display">
                      <span className="d-sm-inline">
                        <label
                          htmlFor="customRange2"
                          className="form-label text-white filter-agegroup-label"
                        >
                          Less than five
                        </label>
                        <input
                          type="range"
                          style={{ color: "white" }}
                          className="form-range"
                          min="0"
                          max="5"
                          id="customRange2"
                        />
                      </span>
                    </a>
                  </li>
                </div>
              </div>
            </div>
            <div class="accordion-item filterapply-accordionmain">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed filterapply-accordionmain filterapply-selectedcategory"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  <p style={{ color: "white" }} className="afterhoveragegroup">
                    {" "}
                    Sexual-orientation{" "}
                  </p>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                  <span class="d-sm-inline">
                    <input
                      value="male"
                      name="manhood"
                      type="radio"
                      onChange={(event) => handleFilterChange(event)}
                    />{" "}
                    <label htmlFor="">male</label>
                    <br class="d-none d-sm-inline" />
                    <input
                      onClick={(e) => genderConfirmation(e.target.value)}
                      value="female"
                      name="manhood"
                      type="radio"
                      onChange={(event) => handleFilterChange(event)}
                    />{" "}
                    <label htmlFor="">Female</label>
                  </span>
                </div>
              </div>
            </div>

            <div class="accordion-item filterapply-accordionmain">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed filterapply-accordionmain filterapplyselect-location"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <span className="d-sm-inline">
                    <p className="location-salons" style={{ color: "white" }}>
                      Location
                    </p>
                  </span>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                  <ul
                    className=" nav flex-column ms-1"
                    id="submenu2.2"
                    data-bs-parent="#menu"
                  >
                    <li>
                      <a className="nav-link px-0">
                        <span className="d-sm-inline">
                          <input
                            placeholder="Enter Your location"
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="location-input"
                          />
                        </span>
                        {isOpen && (
                          <div>
                            {filteredOptions.map((option) => (
                              <div
                                key={option}
                                className={`dropdown-option ${
                                  selectedOption === option
                                    ? "selected"
                                    : "notselected"
                                }`}
                                onClick={() => handleSelect(option)}
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        )}
                        <span
                          style={{ marginLeft: "5px" }}
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          <i className={isOpen ? "arrow down" : "arrow up"}></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item filterapply-accordionmain">
              <h2 class="accordion-header " id="panelsStayOpen-headingfour">
                <button
                  class="accordion-button collapsed filterapply-accordionmain filterapply-distance"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapsefour"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapsefour"
                >
                  <p className="distance-salons" style={{ color: "white" }}>
                    Distance
                  </p>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapsefour"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingfour"
              >
                <div class="accordion-body ">
                  <li className="w-100">
                    <a className="nav-link px-0">
                      <span className="ms-1  d-sm-inline">
                        <label
                          htmlFor="customRange2"
                          className="form-label text-white filter-options-distance"
                        >
                          Less than {distance} km
                        </label>
                        <input
                          type="range"
                          style={{ color: "white" }}
                          className="form-range filter-options-distanceinput"
                          min="0"
                          max="5"
                          id="customRange2"
                          value={distance}
                          name="distance"
                          onChange={handledistancechange}
                        />
                      </span>
                    </a>
                  </li>
                </div>
              </div>
            </div>

            <div class="accordion-item filterapply-accordionmain">
              <h2 class="accordion-header" id="panelsStayOpen-headingfive">
                <button
                  class="accordion-button collapsed filterapply-accordionmain filterapply-services"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapsefive"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapsefive"
                >
                  <p className="groomer-services" style={{ color: "white" }}>
                    Services
                  </p>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapsefive"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingfive"
              >
                <div class="accordion-body">
                  <ul
                    className="services-list"
                    id="submenu3"
                    data-bs-parent="#menu"
                  >
                    {allservices.map((data) => (
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          <span className=" d-sm-inline">
                            <input
                              type="checkbox"
                              value={data}
                              key={data}
                              onChange={handlefilterservices}
                              name="services"
                            />
                          </span>
                          <span style={{ color: "white" }}> {data}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item filterapply-accordionmain">
              <h2 class="accordion-header" id="panelsStayOpen-headingsix">
                <button
                  class="accordion-button collapsed filterapply-accordionmain filterapply-prices"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapsesix"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapsesix"
                >
                  <p className="filter-price" style={{ color: "white" }}>
                    price
                  </p>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapsesix"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingsix"
              >
                <div class="accordion-body">
                  <ul
                    className=" nav flex-column ms-1 pricesfromto"
                    id="submenu2"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <a className="nav-link px-0">
                        <span className="ms-1 d-sm-inline">
                          <span style={{ color: "white" }}>From : </span>
                          <input
                            className="cost-input"
                            placeholder="₹200"
                            type="text"
                            onChange={handlelowprice}
                            name="priceFrom"
                          />
                        </span>
                        <span style={{ color: "white" }}>To :</span>
                        <input
                          className="cost-input"
                          placeholder="₹400"
                          type="text"
                          onChange={handlehighprice}
                          name="priceTo"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item filterapply-accordionmain">
              <h2 class="accordion-header" id="panelsStayOpen-headingseven">
                <button
                  class="accordion-button collapsed filterapply-accordionmain filterapply-rating"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseseven"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseseven"
                >
                  <p className="filter-ratings-font" style={{ color: "white" }}>
                    Rating
                  </p>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseseven"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingseven"
              >
                <div class="accordion-body">
                  <li className="w-100 ratings-star">
                    <a href="#" className="nav-link px-0">
                      <span className=" d-sm-inline">
                        <input
                          className="rating-input"
                          type="checkbox"
                          value="1"
                          name="ratings"
                          onChange={handlerating}
                        />
                      </span>
                      <span>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                      </span>
                    </a>
                  </li>
                  <li className="ratings-star">
                    <a href="#" className="nav-link px-0">
                      <span className="d-sm-inline">
                        <input
                          type="checkbox"
                          value="2"
                          name="ratings"
                          onChange={handlerating}
                        />
                      </span>
                      <span>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star"
                        ></i>
                      </span>
                    </a>
                  </li>
                  <li className="ratings-star">
                    <a href="#" className="nav-link px-0">
                      <span className=" d-sm-inline">
                        <input
                          type="checkbox"
                          value="3"
                          name="ratings"
                          onChange={handlerating}
                        />
                      </span>
                      <span>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star"
                        ></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      <span className=" d-sm-inline">
                        <input
                          type="checkbox"
                          value="4"
                          name="ratings"
                          onChange={handlerating}
                        />
                      </span>
                      <span>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star"
                        ></i>
                      </span>
                    </a>
                  </li>
                  <li className="ratings-star">
                    <a href="#" className="nav-link px-0">
                      <span className="d-sm-inline">
                        <input
                          type="checkbox"
                          value="5"
                          name="ratings"
                          onChange={handlerating}
                        />
                      </span>
                      <span>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star"
                        ></i>
                        <i
                          style={{ color: "white" }}
                          className="bi bi-star"
                        ></i>
                      </span>
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Filterapplyy;
