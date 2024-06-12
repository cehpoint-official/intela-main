import { Helmet } from "react-helmet-async";
import background from "../../assets/services/banner-background.png";
import gradientOverlay from "../../assets/images/baygrond.png";
import PartnerBanner from "./PartnerBanner/PartnerBanner";
import PsWdService from "./PsWdService/PsWdService";
import PsAdService from "./PsAdService/PsAdService";
import PsCsService from "./PsCsService/PsCsService";

const PartnerServices = () => {
  return (
    <div className="z-30">
      <Helmet>
        <title>Intela ~ Services ~ Partner Services</title>
      </Helmet>
      <div
        className="relative bg-cover h-screen z-20"
        style={{
          backgroundImage: `url(${background})`,
          height: "40vh",
        }}
      >
        <div
          className="absolute inset-0  flex items-center justify-center"
          style={{
            backgroundImage: `url(${gradientOverlay})`,
            opacity: 0.9,
          }}
        >
          <div className="bg-[#233787] mt-28">
            <div className="text-white text-cente mb-12 md:mb-0 -z-10">
              <PartnerBanner />
            </div>
          </div>
        </div>
      </div>
      <PsWdService />
      <PsAdService />
      <PsCsService />
    </div>
  );
};

export default PartnerServices;
