import React from "react";
import profileImage from "../assets/images/profile-01.jpg";

const TestimonialsCard = () => {
  return (
    <>
      <div className="bg-white p-6 shadow-xl">
        <div className="flex justify-center pb-10">
          <img src={profileImage} alt="" className="rounded-full h-40" />
        </div>
        <div className="text-center">
          <p className="pb-5">
            “Van Core Fitness is a hidden gem! I joined a month ago, and I've
            already seen incredible results. The trainers here are like fitness
            wizards, and the equipment is straight out of the future”
          </p>
          <h4 className="font-semibold text-xl">Seth R.</h4>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;
