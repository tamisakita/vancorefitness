import React, { useEffect } from "react";
import Banner from "../shared/Banner";
import bannerImage from "../assets/images/trainning.jpg";
import CardLayout from "../shared/CardLayout";
import ButtonComponent from "../shared/ButtonComponent";
import AOS from "aos";
import "aos/dist/aos.css";

import classesImg1 from "../assets/images/classes1.jpg";
import classesImg2 from "../assets/images/classes2.jpg";
import classesImg3 from "../assets/images/classes3.jpg";
import classesImg4 from "../assets/images/classes4.jpg";

const Classes = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Banner
        title="DISCOVER OUR CLASSES"
        btnText="Join Now"
        variant="default"
        backgroundImage={bannerImage}
      />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 my-20 md:m-20 gap-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <CardLayout
          bgImage={classesImg1}
          title="Cycling"
          text="Cycling is a great way for you to improve your cardiovascular health and build up endurance levels. Here at Van-Core-Fitness we offer a fantastic cycling program, from beginners- up to expert level.  Be prepared for a high intensity/ high calorie burn, as this will push you to your limits. To enhance the experience, we play music that will match the intensity of your ride."
        />
        <CardLayout
          bgImage={classesImg2}
          title="Strength training"
          text="Designed to build muscles, increase metabolism, and improve your overall strength. Here at Van-Core-Fitness we provide you with a variety of workout regiments that will test your limits. From total body burn to total body strength. We welcome people of all levels of experience to join."
        />
        <CardLayout
          bgImage={classesImg3}
          title="Cardio"
          text="Cardio workouts are great for improving your cardiovascular fitness and burning calories fast. At Van-Core-Fitness we guarantee to keep you moving, motivated and engaged in these workout sessions. We combine groups, great music and fun vibes all in one so you’re sure to get the best!"
        />
        <CardLayout
          bgImage={classesImg4}
          title="Personal Training"
          text="Here at Van-Core-Fitness, you can train with one of our industry leading personal trainers. Our personal trainers will help you with whatever your fitness goals are, and help you focus on achieving those goals while also having a fun experience at the gym that is rewarding. Our personal trainers will take the time to work with you on an individualized fitness program that best suits your fitness goals, and guide you each step of the way."
        />
      </div>
      <div className="flex justify-center mb-20 lg:mb-40">
        <ButtonComponent variant="orange" btnText="Join Now" />
      </div>
    </div>
  );
};

export default Classes;
