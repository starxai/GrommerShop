import React, { useEffect, useState } from "react";
import Context from "../../context/axiox";
import { getToken } from "../../context/StorageToken";

function Timeslots({ handleslot, id }) {
  {
    /*  const [timeslots, settimeslots] = useState([
        { date: "09:00Am - 09:30Am" }, { date: "09:30Am - 10:00Am" },
        { date: "10:00Am - 10:30Am" }, { date: "10:30Am - 11:00Am" },
        { date: "11:00Am - 11:30Am" }, { date: "11:30Am - 12:00Pm" },
        { date: "12:00Pm - 12:30Pm" }, { date: "12:30Pm - 01:00Pm" },
        { date: "01:00Pm - 01:30Pm" }, { date: "01:30Pm - 02:00Pm" },
        { date: "02:00Pm - 02:30Pm" }, { date: "02:30Pm - 03:00Pm" },
        { date: "03:30Pm - 04:00Pm" }, { date: "04:00Pm - 04:30Pm" },
        { date: "04:30Pm - 05:00Pm" }, { date: "05:00Pm - 05:30Pm" },
        { date: "05:30Pm - 06:00Pm" }, { date: "06:00Pm - 06:30Pm" },
        { date: "06:30Pm - 07:00Pm" }, { date: "07:00Pm - 07:30Pm" },
        { date: "07:30Pm - 08:00Pm" }, { date: "08:00Pm - 08:30Pm" },
        { date: "08:30Pm - 09:00Pm" }, { date: "09:00Pm - 09:30Pm" },
        { date: "09:30Pm - 10:00Pm" }
    ]);
*/
  }
  const [number, setnumber] = useState(null);
  const [number2, setnumber2] = useState(null);
  const [timings, settimings] = useState([]);

  const active = "active-btn";
  const notactive = "non-active-btn";

  function handleactive(data, data2) {
    setnumber(data);
    handleslot(data, data2);
  }

  const handleslots = async () => {
    let headerlist = {
      Authorization: `Bearer ${getToken()}`,
    };

    try {
      let response = await fetch(`${Context}/user/showtimings/${id}`, {
        headers: headerlist,
      });

      let data = await response.json();

      if (data.code === 200) {
        settimings(data.data);
      } else {
        console.error("Error fetching timeslots:", data.message);
      }
    } catch (error) {
      console.error("Error fetching timeslots:", error);
    }
  };

  useEffect(() => {
    handleslots();
  }, [id]);

  useEffect(() => {
    console.log(timings);
  }, [timings]);

  return (
    <div className="time-slots">
      <div style={{ height: "300px" }}>
        <div
          style={{
            width: "235px",
            backgroundColor: "black",
            margin: "20% auto",
            marginTop: "-50px",
            padding: "10px",
          }}
        >
          <div className="scroll-bar">
            <div className="time-slots-map">
              {timings.map((data, index) => (
                <button
                  id={data.slot_uuid}
                  key={index}
                  className={number === data.slot_time ? active : notactive}
                  onClick={() => handleactive(data.slot_time, data.slot_uuid)}
                >
                  {data.slot_time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeslots;
