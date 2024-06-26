import { Helmet } from "react-helmet-async";
import background from "../../../assets/images/background-image.png";
import gradientOverlay from "../../../assets/images/baygrond.png";
import Deltapath from "../Deltapath/Deltapath";
import Hero from "../Hero/Hero";
import ItSolution from "../ItSolution/ItSolution";
import OtherService from "../OtherService/OtherService";
import UnlockExclusive from "../UnlockExclusive/UnlockExclusive";
import WhoWeAre from "../WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Intela ~ Home</title>
      </Helmet>
      <div
        className="relative bg-cover h-screen lg:[100vh]"
        style={{
          backgroundImage: `url(${background})`,
          height: "40vh",
          // backgroundColor: "yellow",
        }}
      >
        <div
          className="absolute inset-0  flex items-center justify-center"
          style={{
            backgroundImage: `url(${gradientOverlay})`,
            opacity: 0.9,
          }}
        >
          <div className="lg:h-full">
            <div className="text-white text-center">
              <Hero />
            </div>
          </div>
        </div>
      </div>
      <WhoWeAre />
      <ItSolution />
      <OtherService />
      <UnlockExclusive />
      <Deltapath />
    </>
  );
};

export default Home;
// bg-[#233787]