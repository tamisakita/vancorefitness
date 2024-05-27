import React from "react";
import Banner from "../shared/Banner";
import Info from "../shared/Info";
import InfoImage1 from "../assets/images/home-info.jpg";
import InfoLeft from "../shared/InfoLeft";
import TestimonialsCard from "../shared/TestimonialsCard";

const Home = () => {
  return (
    <div>
      <Banner
        title="DISCOVER YOUR STRENGTH. SHAPE YOUR STORY."
        btnText="Join Now"
        variant="default"
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
      <div className="bg-dark-blue opacity-90 h-[80vh] px-20 py-40">
        <h2 className="font-anton text-center text-5xl text-black pb-10">
          Why people love Van Core Fitness
        </h2>
        <div className="flex flex-row gap-20">
          <TestimonialsCard />
          <TestimonialsCard />
          <TestimonialsCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
