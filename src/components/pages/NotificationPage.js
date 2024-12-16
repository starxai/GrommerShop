import "../css/NotificationPage.css";
import Footer from "../Footer";

function NotificationPage() {
  const notifications = [
    {
      title: "Appointment cancelled",
      message:
        "You have cancelled your appointment that was booked for 11:00 AM on 24th April, 2024 with Bounce Salon. The booking amount that was charged will be refunded to  you within 24 hours.",
      time: "10 min ago",
    },
    {
      title: "Order placed",
      message:
        "Your order of 1 Olivient virgin olive oil of 120 ml bottle has been placed via Amazon. The order will be delivered within 3-4 business days.",
      time: "12 min ago",
    },
    {
      title: "Appointment rescheduled",
      message:
        "Your appointment that was booked for 11:00 AM on 24th April, 2024 with Bounce salon has been rescheduled for 12:00 PM on 20th April, 2024. ",
      time: "2 days ago",
    },
    {
      title: "Order placed",
      message:
        "Your order of 1 Olivient virgin olive oil of 120 ml bottle has been placed via Amazon. The order will be delivered within 3-4 business days.",
      time: "2 days ago",
    },
    {
      title: "Payment successful",
      message: "Payment of ₹750 via Axis bank credit card has been successful.",
      time: "5 days ago",
    },
  ];
  return (
    <div className="notification-page">
      <h3 className="notification-page-title">Notifications</h3>
      <div className="notification-container">
        {notifications.map((notifaction, index) => {
          return (
            <div key={index} className="notification-item">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h4 style={{ fontSize: "16px" }}>{notifaction.title}</h4>
                <p style={{ fontSize: "12px" }}>{notifaction.time}</p>
              </div>
              <p>{notifaction.message}</p>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
export default NotificationPage;
