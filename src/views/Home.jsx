import React from "react";
import Banner from "../shared/Banner";
import Info from "../shared/Info";
import InfoImage1 from "../assets/images/home-info.jpg";
import InfoLeft from "../shared/InfoLeft";
import TestimonialsCard from "../shared/TestimonialsCard";

import bannerImage from "../assets/images/home-image.jpg";
import profileImage from "../assets/images/profile-01.jpg";
import profileImage2 from "../assets/images/profile-02.jpg";
import profileImage3 from "../assets/images/profile-03.jpg";

const Home = () => {
  return (
    <div>
      <Banner
        title="DISCOVER YOUR STRENGTH. SHAPE YOUR STORY."
        btnText="Join Now"
        variant="default"
        backgroundImage={bannerImage}
      />
      <Info
        image={InfoImage1}
        imageAlt="VanCore Fitness Gym"
        title="GYM MEMBERSHIPS Starting at $9.99"
        text={`Van Core Fitness isn't just a gym; it's your path to fitness
        excellence. With convenient locations, top-notch equipment,
        personalized programs, and a tight-knit fitness community, we've got
        all the bases covered, so you can concentrate on smashing your goals.`}
        btnVariant="orange"
        btnText="Join Now"
      />
      <InfoLeft
        image={InfoImage1}
        imageAlt="VanCore Fitness Gym"
        title="Our promise to you"
        text={`Help you find your starting point.
        Show you the ropes.
        Provide you with a welcoming, clean, and safe environment.
        Provide top-quality equipment and innovative fitness programs.
        Be with you every step of the way.
        `}
        btnVariant="orange"
        btnText="Join Now"
      />
      <div className="bg-dark-gray opacity-90 p-20">
        <h2 className="font-anton text-center text-5xl text-white pb-16">
          Why people love Van Core Fitness
        </h2>
        <div className="grid grid-rows-3 gap-10 md:grid-cols-3 md:grid-rows-1">
          <TestimonialsCard
            image={profileImage}
            imageAlt="Van Core Fitness Customer"
            text="“Van Core Fitness is a hidden gem! I joined a month ago, and I've
            already seen incredible results. The trainers here are like fitness
            wizards, and the equipment is straight out of the future”"
            name="Seth R."
          />
          <TestimonialsCard
            image={profileImage2}
            imageAlt="Van Core Fitness Customer"
            text="“Van Core Fitness is the real deal. I've been a member for over a year, and it's become my second home. The staff is incredibly friendly and supportive, and the community is fantastic.”"
            name="Sherry G."
          />
          <TestimonialsCard
            image={profileImage3}
            imageAlt="Van Core Fitness Customer"
            text="“Van Core Fitness has changed my life! Not only have I achieved my fitness goals, but I've also made lifelong friends here. The group classes are a blast, and the gym's playlist is always on point”"
            name="Trey H."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
