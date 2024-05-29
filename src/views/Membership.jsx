import React from "react";
import bannerImage from "../assets/images/membership-image.jpg";
import Banner from "../shared/Banner";
import MembershipCard from "../shared/MembershipCard";
import SectionLayout from "../shared/SectionLayout";

const Membership = () => {
  const membershipDetails = [
    {
      title: "Bronze",
      details: [
        "Access to 1 gym location",
        "High speed internet",
        "Smart phone app",
        "Complimentary goal session with trainer",
      ],
      price: "$9.99/Bi",
    },
    {
      title: "Platinum",
      details: [
        "Access to all gym locations",
        "All Bronze membership perks",
        "Unlimited access to all weekly fitness classes/ online fitness classes",
        "Access to all recovery tools including hydro massage, and much more!",
      ],
      price: "$16.99/Bi",
    },
    {
      title: "Gold",
      details: [
        "Access to all gym locations",
        "All of Bronze/Platinum membership perks",
        "Guest privileges- bring a friend to workouts",
        "Unlimited small group training",
      ],
      price: "$20.99/bi",
    },
  ];
  return (
    <div>
      <Banner
        title="BECOME A MEMBER"
        btnText="Join Now"
        variant="default"
        backgroundImage={bannerImage}
      />
      <SectionLayout
        title="Find the Membership plan
        that works the best for you"
        bgColor="bg-neutral-300"
        text="Van Core Fitness offers versatile membership plans for all fitness
        levels. Choose from Basic, Pro, and Premium memberships, each tailored
        to your needs. Enjoy workouts, nutrition guidance, live classes, and
        more, making fitness accessible and enjoyable for all."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <MembershipCard membershipDetails={membershipDetails[0]} />
          <MembershipCard membershipDetails={membershipDetails[1]} />
          <MembershipCard membershipDetails={membershipDetails[2]} />
        </div>
      </SectionLayout>
    </div>
  );
};

export default Membership;
