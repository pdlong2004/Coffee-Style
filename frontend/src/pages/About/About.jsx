import React from "react";
import Header from "../../components/layout/Header";
import PageTitle from "../../components/layout/PageTitle";
import AboutIntroductions from "./components/AboutIntroductions";
import AboutAuthor from "./components/AboutAuthor";
import AboutHistory from "./components/AboutHistory";
import SubscribeUs from "../../components/layout/SubscribeUs";
import Footer from "../../components/layout/Footer";

const About = () => {
  return (
    <div className="max-w-screen-2xl text-base mx-auto lg:px-8">
      <Header />
      <PageTitle
        h1={"About"}
        p={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. "
        }
      />
      <div className="relative -top-27.5 px-7.5">
        <div className="relative lg:w-235 mx-auto">
          <div className="w-full h-80 mx-auto mb-25 bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a780eecdfcc_About-Cover.jpg')] bg-cover bg-center"></div>
          <AboutIntroductions />
          <AboutAuthor />
          <div className="h-85 relative left-1/2 right-1/2 -mx-[50vw] w-screen mb-25 bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a6103ecdfcd_brooke-lark-230509-unsplash.jpg')] bg-cover bg-center"></div>

          <AboutHistory />
        </div>
      </div>

      <SubscribeUs />
      <Footer />
    </div>
  );
};

export default About;
