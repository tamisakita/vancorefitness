import React from "react";
import bannerImage from "../assets/images/about-image.jpg";
import Banner from "../shared/Banner";
import SectionLayout from "../shared/SectionLayout";
import Gallery from "../shared/Gallery";
import infoImage1 from "../assets/images/about-img1.jpg";
import infoImage2 from "../assets/images/about-img2.jpg";
import Info from "../shared/Info";
import InfoLeft from "../shared/InfoLeft";
import { faq } from "../data/faqData";

const AboutUs = () => {
  return (
    <div>
      <Banner
        title="ABOUT US"
        btnText="Join Now"
        variant="default"
        backgroundImage={bannerImage}
      />
      <SectionLayout
        title="Who we are"
        bgColor="bg-neutral-300"
        text="Founded in the vibrant city of Vancouver, Van-Core-Fitness was created by a small group of like-minded fitness enthusiasts who shared the same passion for fitness, health and the driven desire to create a fantastic community that promotes people to challenge themselves and achieve their health/fitness goals no matter how small or big."
      >
        <Gallery />
        <p className="text-center text-xl pt-20 lg:px-20">
          We are family, and we welcome everyone with open arms to our friendly-
          neighborhood gym. So when choosing a gym that is right for you, leave
          the hard work to your workouts and make the easy choice to be a part
          of a winning team with us at Van-Core-Fitness!
        </p>
      </SectionLayout>
      <Info
        image={infoImage1}
        imageAlt="VanCore Fitness Gym"
        title="Vision"
        text={`Our vision is to be the go-to destination for fitness and wellness, inspiring individuals to lead healthier, happier lives through our exceptional facilities, expert guidance, and vibrant fitness community.`}
        btnVariant="orange"
        btnText="Join Now"
      />
      <InfoLeft
        image={infoImage2}
        imageAlt="VanCore Fitness Gym"
        title="Mission"
        text={`Van Core Fitness is dedicated to empowering individuals to achieve their fitness goals, fostering a welcoming and supportive community, and promoting lifelong health and well-being.
        `}
        btnVariant="orange"
        btnText="Join Now"
      />
      <div className="bg-neutral-300 px-10 py-20 lg:px-20">
        <h2 className="font-anton text-center text-4xl lg:text-5xl text-black pb-20">
          FAQ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ul>
            {faq.slice(0, 5).map((item, index) => (
              <li key={index} className="pb-10">
                <p className="font-bold">{item.question}</p>
                <p>{item.answer}</p>
              </li>
            ))}
          </ul>
          <ul>
            {faq.slice(5, 10).map((item, index) => (
              <li key={index} className="pb-10">
                <p className="font-bold">{item.question}</p>
                <p>{item.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
