// import "./App.css";
import { useState, createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { getToken, removeToken } from "./context/StorageToken";
import PaymentRoute from "./Routes/PaymentRoute";
import CancelRoute from "./Routes/CancelRoute";
import { userDetailsAPI } from "./api/User_Login_Auth";
import PublicRoute from "./Routes/PublicRoute";
import { getAllSalons } from "./api/Salons_service";
import Login from "./components/HomePage/LoginPage";
import SaloonList from "./components/HomePage/SaloonListingPage";
// import SalonMainPage from "./components/HomePage/SalonDetailPage";
import Register from "./components/Register";
import Home from "./components/HomePage/Homepage";
import Notfound from "./helper/Page404";
import OTP from "./components/HomePage/OTPpage";
import MenuBar from "./components/HomePage/userProfile/menubar";
import AboutPage from "./components/HomePage/AboutUsPage";
import SalonMainPage from "./components/HomePage/SalonDetailPage";
import PageBooking from "./components/HomePage/SaloonBookingPage";
import PaymentPage from "./CheckoutPage";
import Profile from "./context/profilepage/profile";
import Bookinghistory from "./components/HomePage/bookinghistory";
import Wishlist from "./components/HomePage/wishlist";
import MainLayout from "./components/HomePage/MainLayout";
import SalonList from "./components/HomePage/SalonList.jsx";
import SalonPage from "./components/HomePage/SalonPage.jsx";

// import Register from "./Components/Register";
// import Bookings from "./Components/Bookings";
// import Wishlist from "./Components/Wishlist";
// import MenuItems from "./Components/MenuItems";
// import AboutUs from "./Components/AboutUs";
// import Salons from "./Components/Salons";
// import SalonPage from "./Components/SalonPage";
// import Reschedule from "./Components/Reschedule";
// import Cancel from "./Components/Cancel";
// import Review from "./Components/Review";
// import HomePage from "./Components/HomePage";
// import Login from "./Components/Login";
// import BookSalon from "./Components/BookSalon";
// import NotFound from "./Components2/Page404";
// import SalonPay from "./Components/SalonPay";
// import PayementFail from "./Components/PayementFail";
// import HomeService from "./Components/HomeService";

export const Store = createContext();
export const Store2 = createContext();

function App() {
  const [isAuth, setisAuth] = useState(null);
  const [bookingDetails, setbookingDetails] = useState(null);
  const [singleSalon, setsingleSalon] = useState(null);
  const [user, setuser] = useState(null);
  const [searchSalon, setsearchSalon] = useState(null);

  const HaveKey = async () => {
    let token = getToken();
    if (token && !isAuth) {
      let response = await userDetailsAPI();
      if (response.code === 200) {
        setuser(response.data);
        setisAuth(token);
      }
      if (response.code === 401) {
        // ? if there is wrong token or no token then it remove token from browser
        removeToken();
      }
      if (response.code === 500) {
        alert(response.message);
      }
    }
  };

  const fetchAllSalons = async () => {
    if (!searchSalon) {
      let response = await getAllSalons();
      let onlyname = response.data.salons.map((item) => ({
        salonId: item.salon_uuid,
        salonName: item.salon_name,
      }));
      setsearchSalon(onlyname);
    }
  };

  useEffect(() => {
    HaveKey();
    fetchAllSalons();
  }, []);

  return (
    <BrowserRouter>
      <Store.Provider value={[isAuth, setisAuth]}>
        <Store2.Provider
          value={{
            bookingDetails,
            setbookingDetails,
            singleSalon,
            setsingleSalon,
            user,
            setuser,
            searchSalon,
            setsearchSalon,
          }}
        >
          <Routes>
            <Route to="/" element={<MainLayout />}>
              {/* Define routes for different pages */}
              <Route path="" element={<Home />} />
              {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
              {/* <Route path="/ranu" element={<PayementFail />} /> */}
              <Route path="/menu" element={<SalonList />} />
              <Route path="/About" element={<AboutPage />} />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <Register />
                  </PublicRoute>
                }
              />

              <Route path="/bookinghistory" element={<Bookinghistory />} />
              <Route path="/wishlist" element={<Wishlist />} />

              <Route
                path="/salon-details"
                element={
                  // <PublicRoute>
                  <SalonPage />
                  // </PublicRoute>
                }
              />
              <Route
                path="/booking"
                element={
                  //  <PublicRoute>
                  <PageBooking />
                  //   </PublicRoute>
                }
              />
              <Route
                path="/checkout"
                element={
                  //   <PublicRoute>
                  <PaymentPage />
                  //   </PublicRoute>
                }
              />

              {/* <Route
              path="/saloonlisting"
              element={
                <PublicRoute>
                 <SaloonList/>
                 </PublicRoute>
                 }
                 /> */}
              <Route
                path="/otp"
                element={
                  <PublicRoute>
                    <OTP />
                  </PublicRoute>
                }
              />

              {/* <Route
              path="/saloon"
              element={
                <SaloonList/>
                }
                /> */}

              {/* <Route path="/menu" element={<MenuItems />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/salons" element={<Salons />} />
            <Route path="/salon/:id" element={<SalonPage />} />
            <Route
              path="/salon/payment/:id/:pay/:transactionID"
              element={
                <PaymentRoute>
                <SalonPay />
                </PaymentRoute>
                }
                /> */}
              {/* <Route
              path="/bookings"
              element={
                <ProtectedRoute>
                <Bookings />
                </ProtectedRoute>
                }
                />
                <Route
              path="/wishlist"
              element={
                <ProtectedRoute>
                <Wishlist />
                </ProtectedRoute>
                }
                /> */}

              {/* <Route
              path="/reschedule/:id"
              element={
                <ProtectedRoute>
                <Reschedule />
                </ProtectedRoute>
                }
                />
                <Route
                path="/cancel/:id"
                element={
                  <CancelRoute>
                  <Cancel />
                  </CancelRoute>
                  }
                  />
                  <Route
                  path="/review/:id"
                  element={
                    <ProtectedRoute>
                    <Review />
                    </ProtectedRoute>
                    }
                    /> */}
              {/* A catch-all route for handling unknown URLs */}
              {/* <Route path="/BookSalon" element={<BookSalon />} /> */}
              <Route path="*" element={<Notfound />} />
            </Route>
          </Routes>
        </Store2.Provider>
      </Store.Provider>
    </BrowserRouter>
  );
}

export default App;
