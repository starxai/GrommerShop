import React from "react"
import Quotations from "./Qutoes";
import Footer from "../Footer";
import GetInTouch from "./GetInTouch";
import ReasonToUseGroomer from "../ReasonToUseGroomer";
// import NewCard from "./CardsMain";
import Card from "./Card";
import GroomerCard from "./GroomerCard";
import HomeSaloon from "../HomeSallonService";
import Login from "./LoginPage";
import { Link,Outlet } from "react-router-dom";
import RegisterFormPage from "../Register";
import AboutPage from "./AboutUsPage";
import SalonMainPage from "./SalonDetailPage";
import GroomerLayout from "./Rough";
import ProductCard from "../../ProductCard";
import PageBooking from "./SaloonBookingPage"
import Navbar from "./NavbarComponent";
import BackGroundImage from "../HomePageImage";
// import NavBar from "./Nabar";
// import GroomerCard from "./GroomerCard";
// import CardsGenerator from "./CardsGenerate";

function HomePage() {
    return (
          
            <div>
       
                    <Navbar></Navbar>

                    <BackGroundImage></BackGroundImage>


                <div className="groomer-card">
                    {/* <GroomerCard></GroomerCard> */}
                </div>
                <div >
                    <GroomerCard></GroomerCard>
                </div>

                    <Card></Card>
      
                    <div>
                      <ProductCard></ProductCard>
                    </div>
                    <Quotations></Quotations>
                    <HomeSaloon></HomeSaloon>
                    <ReasonToUseGroomer></ReasonToUseGroomer>
                    <GetInTouch></GetInTouch>
                    <Footer></Footer>
                <div>
                    {/* <GroomerLayout></GroomerLayout> */}
                    {/* <SalonMainPage></SalonMainPage> */}
                </div>



                <div>

                </div>
            {/* </div> */}
            <Outlet></Outlet>
        
        </div>

    )
}
export default HomePage;