import React from "react";
import bannerImage from "../assets/images/about-image.jpg";
import Banner from "../shared/Banner";
import SectionLayout from "../shared/SectionLayout";
import Gallery from "../shared/Gallery";
import infoImage1 from "../assets/images/about-img1.jpg";
import infoImage2 from "../assets/images/about-img2.jpg";
import Info from "../shared/Info";
import InfoLeft from "../shared/InfoLeft";

const AboutUs = () => {
  const faq = [
    {
      question: "1. How many locations does Van-Core-Fitness have?",
      answer:
        "We currently have 3 locations, 2 in Vancouver and 1 in Burnaby. We are looking to expand in the near future to best serve our members located in the Vancouver area.",
    },
    {
      question: "2. Is Van-Core-Fitness suitable for all fitness levels?",
      answer:
        "Yes, it is! At Van-Core-Fitness we welcome all and promote people of all fitness levels. Whether you’re a beginner or an experienced athlete, we focus our workouts to what best fits your fitness needs and goals.",
    },
    {
      question: "3. Do you provide personal training?",
      answer:
        "Yes, we do! We have some of the best trained personal trainers in the lower mainland. Our personal trainers will take the time to put together workouts for you, as well as even assist with nutritional planning as well! This is offered for all fitness levels.",
    },
    {
      question: "4. Do you offer a free trial period?",
      answer:
        "We offer free 1 day passes and sometimes run free promotions from time to time. You can drop into any one of our locations for a free 1 day pass, check out the facilities or join one of our classes to see if our gym is for you!",
    },
    {
      question: "5. What is your cancellation policy?",
      answer:
        "Our cancellation policy requires at least 24 hours notice for cancellation to avoid charges. You can contact us for more information.",
    },
    {
      question: "6. What should I bring to the gym?",
      answer:
        "You should bring comfortable attire and running shoes preferably. At all of our locations we do offer towel service and a nutritional/hydration snack bar for all members.",
    },
    {
      question: "7. Can I use my membership at all locations?",
      answer:
        "That depends on which membership package you have, our Bronze membership only allows you access to one gym while our Platinum and Gold membership packages allow you to go to all of our locations. If you have the Bronze package, you can switch locations at the end of the month (before your next billing date) if you choose to do so. Contact us for more details.",
    },
    {
      question: "8. What are your hours of operation?",
      answer:
        "Our operation hours may differ by location and holidays. But our standard hours at our 3 locations are currently Mon-Sat (6am-10pm) and Sundays (8am-9pm). You can email us or contact your nearest Van-Core-Fitness for more details on hours of operation.",
    },
    {
      question: "9. Do you need to book classes or are they drop-in?",
      answer:
        "Many of our workout classes are very popular and fill up fast so it’s best to book classes in advance. We do offer classes from time to time where drop ins are allowed, based on space available. You can book classes on our website, our app, or by talking to someone at the front desk at each of our locations.",
    },
    {
      question:
        "10. How can I access my membership online, and what features are available online?",
      answer:
        "You can access your membership account on our website or on our Van-Core-Fitness app which is free to download on all mobile/smart devices. There are many features, such as workout class scheduling, membership renewal, workout tips and videos and much more. If you need help with your account, contact us by phone or email.",
    },
  ];

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
