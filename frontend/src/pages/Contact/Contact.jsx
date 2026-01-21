import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import Header from "../../components/layout/Header";
import SubscribeUs from "../../components/layout/SubscribeUs";
import ContactLocation from "./components/ContactLocation";
import Contactform from "./components/Contactform ";
import ContactMap from "./components/ContactMap";
import Contactme from "./components/Contactme";
import Footer from "../../components/layout/Footer";

const Contact = () => {
  return (
    <div className="max-w-screen-2xl text-base mx-auto px-8">
      <Header />
      <PageTitle
        h1={"Let's Connect"}
        p={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. "
        }
        title="Our Offices"
      />
      <div className="relative -top-27.5">
        <div className="relative lg:w-235 mx-auto">
          <div className="lg:grid grid-cols-2 gap-4 mb-12.5">
            <ContactLocation />
          </div>

          <div>
            <div className="relative z-10 bg-white">
              <Contactform />
            </div>

            <div className="relative bottom-15 h-105 overflow-hidden left-1/2 right-1/2 -mx-[50vw] w-screen mb-25">
              <ContactMap />
            </div>
          </div>

          <div>
            <Contactme />
          </div>
        </div>
      </div>
      <SubscribeUs />
      <Footer />
    </div>
  );
};

export default Contact;
