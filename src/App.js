import { useState, createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getToken, removeToken } from "./context/StorageToken";
import { userDetailsAPI } from "./api/User_Login_Auth";
import PublicRoute from "./Routes/PublicRoute";
import { getAllSalons } from "./api/Salons_service";
import Home from "./components/HomePage/Homepage.jsx";
import Notfound from "./helper/Page404";
import AboutPage from "./components/HomePage/AboutUsPage";
import MainLayout from "./components/HomePage/MainLayout";
import SalonList from "./components/HomePage/SalonList.jsx";
import SalonPage from "./components/HomePage/SalonPage.jsx";
import LoginPage from "./components/pages/LoginPage.js";
import RegisterPage from "./components/pages/RegisterPage.js";
import OtpPage from "./components/pages/OtpPage.js";
import AccountPage from "./components/pages/AccountPage.js";
import BookingPage from "./components/pages/BookingPage.js";
import CheckoutPage from "./components/pages/CheckoutPage.js";
import BookingHistory from "./components/pages/BookingHistory.js";
import HomeServiceForm from "./components/pages/HomeServiceForm.js";
import WishlistPage from "./components/pages/WishlistPage.js";
import NotificationPage from "./components/pages/NotificationPage.js";

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
    // fetchAllSalons();
  }, []);

  return (
    <BrowserRouter>
      <Store.Provider value={{ isAuth, setisAuth }}>
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
              <Route path="" element={<Home />} />

              <Route path="/menu" element={<SalonList />} />
              <Route path="/About" element={<AboutPage />} />

              <Route path="/account" element={<AccountPage />} />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/otp"
                element={
                  <PublicRoute>
                    <OtpPage />
                  </PublicRoute>
                }
              />

              <Route path="/bookinghistory" element={<BookingHistory />} />
              <Route path="/wishlist" element={<WishlistPage />} />

              <Route path="/salon-details" element={<SalonPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/notifications" element={<NotificationPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/home-service" element={<HomeServiceForm />} />

              <Route path="*" element={<Notfound />} />
            </Route>
          </Routes>
        </Store2.Provider>
      </Store.Provider>
    </BrowserRouter>
  );
}

export default App;
