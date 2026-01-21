import React from "react";
import Layout from "../../components/layout/Layout";
import HomeBaner from "./components/HomeBaner.jsx";
import HomeStory from "./components/HomeStory.jsx";
import HomeFeatured from "./components/HomeFeatured.jsx";
import HomeMore from "./components/HomeMore.jsx";
import HomeCoffeeMagazine from "./components/HomeCoffeeMagazine.jsx";
import HomeParallax from "./components/HomeParallax.jsx";
import HomeBlog from "./components/HomeBlog.jsx";
import SubscribeUs from "../../components/layout/SubscribeUs.jsx";
import Footer from "../../components/layout/Footer.jsx";

const Home = () => {
  return (
    <Layout>
      <div className="overflow-x-hidden max-w-screen-2xl text-base mx-auto">
        <HomeBaner />
        <div className="w-full px-8.5 lg:w-235 lg:mx-auto">
          <HomeStory />
          <HomeFeatured />
          <HomeMore />
          <HomeCoffeeMagazine />
          <HomeParallax />
          <HomeBlog />
        </div>
        <SubscribeUs />
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
