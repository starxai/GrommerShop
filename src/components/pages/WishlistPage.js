import { useState, useEffect, useContext } from "react";
import "../css/WishListPage.css";
import { getWishlistApi } from "../../api/Wishlist_service";
import { getSignleSalon } from "../../api/Salons_service";
import { Store2 } from "../../App";
import { SalonList } from "../HomePage/Homepage";

function WishlistPage() {
  const { user } = useContext(Store2);
  const [wishlist, setWishlist] = useState("salons");
  const [wishlistData, setWishlistData] = useState([]);
  const [wishlistLoading, setWishlistLoading] = useState(true);
  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadWishlistData() {
      try {
        const data = await getWishlistApi();
        if (data.data) {
          setWishlistData(data.data);
          setWishlistLoading(false);
        }
      } catch (error) {}
    }
    loadWishlistData();
  }, []);

  useEffect(() => {
    if (!wishlistLoading) {
      setSalons([]);
      async function fetchSalons() {
        for (let i in wishlistData) {
          try {
            const data = await getSignleSalon(
              wishlistData[i].wishlist_salon_uuid,
              user.user_uuid
            );
            if (data.data.salon) {
              setError(null);
              setSalons((prevSalons) => {
                const newSalons = [...prevSalons];
                newSalons.push(data.data.salon);
                return newSalons;
              });
            }
          } catch (error) {}
        }
      }

      fetchSalons();
    }
  }, [wishlistLoading]);

  return (
    <div className="wishlist-page">
      <h2 className="wishlist-page-title">Wishlist</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <input
            type="radio"
            className="radio-button"
            id="wishlist-products"
            style={{ cursor: "pointer" }}
            checked={wishlist === "products"}
            onChange={() => {
              setWishlist("products");
            }}
          />
          <label style={{ cursor: "pointer" }} htmlFor="wishlist-products">
            Products
          </label>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <input
            type="radio"
            className="radio-button"
            id="wishlist-salons"
            style={{ cursor: "pointer" }}
            checked={wishlist === "salons"}
            onChange={() => {
              setWishlist("salons");
            }}
          />
          <label htmlFor="wishlist-salons" style={{ cursor: "pointer" }}>
            Salons
          </label>
        </div>
      </div>
      <br />
      {wishlist === "salons" ? (
        <div className="wishlist-salons">
          {salons.length > 0 ? (
            <div style={{ paddingInline: "20px" }}>
              <div className="salon-list-container">
                <SalonList
                  salons={salons}
                  wishlistData={wishlistData}
                  wishlistLoading={wishlistLoading}
                  setWishlistLoading={setWishlistLoading}
                />
              </div>
            </div>
          ) : (
            <p>Wishlist Empty</p>
          )}
        </div>
      ) : (
        <div className="wishlist-products"></div>
      )}
    </div>
  );
}
export default WishlistPage;
