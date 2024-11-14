import React, { useState } from "react";
import { formatDate } from "./../../utils/formatDate";

const Appointments = ({ appointments }) => {
  console.log(appointments)
  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Payment
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            BookedOn
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
        </tr>
      </thead>

      <tbody>
        {appointments?.map((item) => (
          <tr key={item._id}>
            <th scope="col" className="px-6 py-3">
            {item.user}
          </th>
          <th scope="col" className="px-6 py-3">
            {item.isPaid?"Paid":"Not Paid"}
          </th>
          <th scope="col" className="px-6 py-3">
            {item.ticketPrice}
          </th>
          <th scope="col" className="px-6 py-3">
            {item.createdAt}
          </th>
          <th scope="col" className="px-6 py-3">
            {item.status}
          </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Appointments;