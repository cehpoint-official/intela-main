import { Helmet } from "react-helmet-async";
import background from "../../../assets/solution/background-img.png";
import gradientOverlay from "../../../assets/images/baygrond.png";
import SolutionBanner from "../SolutionBanner/SolutionBanner";
import ExclusiveValue from "../ExclusiveValue/ExclusiveValue";
import MicroTeam from "../MicroTeam/MicroTeam";
import FeatureSolution from "../FeatureSolution/FeatureSolution";
import Client from "../Client/Client";
import FgProduct from "../FgProduct/FgProduct";
import Articles from "../Articles/Articles";
import TrCompanies from "../TrCompanies/TrCompanies";

const Solution = () => {
  return (
    <div>
      <Helmet>
        <title>Intela ~ Solution</title>
      </Helmet>
      <div
        className="relative bg-cover h-screen"
        style={{
          backgroundImage: `url(${background})`,
          height: "40vh",
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: `url(${gradientOverlay})`,
            opacity: 0.9,
          }}
        >
          <div className=" bg-[#2f47a9] bg-opacity-70 text-white text-center ">
            <SolutionBanner />
          </div>
        </div>
      </div>
      <ExclusiveValue />
      <FgProduct />
      <MicroTeam />
      <Articles />
      <TrCompanies />
      <FeatureSolution />
      <Client />
    </div>
  );
};

export default Solution;
