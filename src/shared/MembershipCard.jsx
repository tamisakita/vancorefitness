import React from "react";
import ButtonComponent from "./ButtonComponent";

const MembershipCard = ({ membershipDetails }) => {
  return (
    <div className="flex flex-col justify-between items-center text-center bg-white p-10 lg:p-20 gap-10 shadow-2xl border border-amber-500 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
      <h3 className="font-anton text-4xl text-amber-600">
        {membershipDetails.title}
      </h3>
      <ul>
        {membershipDetails.details.map((item, index) => (
          <li key={index} className="pb-4">
            {item}
          </li>
        ))}
      </ul>
      <h3 className="font-anton text-4xl text-dark-gray">
        {membershipDetails.price}
        <br />
        Weekly
      </h3>
      <ButtonComponent variant="orange" btnText="Join Now" />
    </div>
  );
};

export default MembershipCard;
