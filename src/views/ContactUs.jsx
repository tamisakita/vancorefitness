import React from "react";
import bannerImage from "../assets/images/location1.jpg";
import Banner from "../shared/Banner";
import SectionLayout from "../shared/SectionLayout";
import FormComponent from "../shared/FormComponent";

const ContactUs = () => {
  return (
    <div>
      <Banner
        title="ASK US A QUESTION"
        btnText="Join Now"
        variant="default"
        backgroundImage={bannerImage}
      />
      <SectionLayout
        title="Contact Your Fitness Club"
        bgColor="bg-white"
        text="Can’t find the answers you’re looking for in our FAQ? Use the form below to get in touch with our team at Van-Core-Fitness."
      >
        <FormComponent />
      </SectionLayout>
    </div>
  );
};

export default ContactUs;
