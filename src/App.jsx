import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Journey } from "./components/journey";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import FAQ from "./components/faq";
import Timeline from "./components/timeline";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
//import ImageSlider from './components/ImageSlider';

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Gallery data={landingPageData.Gallery}/>
      <Journey data={landingPageData.Journey} />
      <Team data={landingPageData.Team} />
      <Timeline data={landingPageData.Timeline} />
      <FAQ data={landingPageData.FAQ} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
