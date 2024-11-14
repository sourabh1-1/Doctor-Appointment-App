import { useState } from "react";
import convertTime from "../../utils/convertTime";
import { BASE_URL, token } from "./../../config";
import { toast } from "react-toastify";
const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const bookingHandler = async () => {
    if(!selectedSlot){
      toast.info("Select Appointment Day");
      return;
    }
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method:"post",
          body:JSON.stringify({"timeSlot":selectedSlot.item}),
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      
      if (!res.ok) {
        throw new Error(data.message + "Please try again");
      }
      const data = await res.json();
      toast.success("Appointment Sucessfull");

      // if (data.session.url) {
      //   window.location.href = data.session.url;
      // }
    } catch (err) {
      toast.error(err.message);
    }
  };
  

  const handleSlotClick = (item,index) => {
    setSelectedSlot({item,index});
  };

  return (
    <div className="shadow-panelShadow  p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Ticket Price</p>
        <span className="textx-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} rupee
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
        {timeSlots?.map((item, index) => (
        <li
          key={index}
          className={`flex items-center justify-between mb-2 cursor-pointer ${
            selectedSlot?.index === index ? 'bg-blue-300 rounded-md w-[19rem] h-6' : ''
          }`}
          onClick={() => handleSlotClick(item,index)}
        >
          <p className="text-[15px] leading-6 text-textColor font-semibold">
            {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
          </p>
          <p className="text-[15px] leading-6 text-textColor font-semibold">
            {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
          </p>
        </li>
      ))}
        </ul>
      </div>
      <button onClick={bookingHandler} className="btn w-full px-2 rounded-md">
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;