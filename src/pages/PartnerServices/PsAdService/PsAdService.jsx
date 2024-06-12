import { useEffect } from "react";
import psad1 from "../../../assets/pertnerServices/psad1.png";
import psad2 from "../../../assets/pertnerServices/psad2.png";
import psad3 from "../../../assets/pertnerServices/psad3.png";

import Aos from "aos";
import { Link } from "react-router-dom";

const PsAdService = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-[#021D49] text-white pb-24">
      <div className="text-center">
        <h2
          className="text-2xl md:text-5xl"
          style={{ fontFamily: "Roboto", fontWeight: 500 }}
        >
          APP DEVELOPMENT
        </h2>
        <p className="text-center py-10">
          App development is the process of creating software applications for
          <br />mobile devices or computers to perform specific tasks or provide certain functionalities.{" "}
        </p>
        <Link
          to="/app-development"
          className="btn mt-5 bg-[#BD981B] hover:bg-blue-950 hover:text-white text-black sm:w-[220px] md:w-[170px] text-center py-2"
        >
          View All Services
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-4 sm:ml-8 md:mx-16 lg:mx-20 my-6 sm:my-8 md:my-10 lg:my-12 shadow-md shadow-blue-800 border-2 mx-5 p-4 md:border-solid border-[#082D6C] rounded-2xl px-10 border-none">
        {/* card 1 */}
        <div
          className="card w-full shadow-2xl border-4 border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={psad1} alt="Solution 1" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>UX/UI </p>
            <div className="card-actions pt-5">
              <a
                className="text-white bg-blue-900 rounded-xl hover:bg-yellow-500 hover:text-black shadow-2xl pt-2 "
                href="/ui-ux-design"
                style={{
                  width: "132px",
                  height: "44px",
                }}
              >
                View Details
              </a>
            </div>
          </div>
        </div>
        {/* card 2*/}
        <div
          className="card w-full shadow-2xl border-4 border-[#082D6C] z-index"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10 ">
            <img src={psad2} alt="Solution 2" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              Android App <br />
              Development
            </p>
            <div className="card-actions pt-5">
              <a
                className="text-white bg-blue-900 rounded-xl hover:bg-yellow-500 hover:text-black shadow-2xl pt-2 "
                href="/app-development"
                style={{
                  width: "132px",
                  height: "44px",

                }}
              >
                View Details
              </a>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div
          className="card w-full shadow-2xl border-4 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img
              src={psad3}
              alt="Pertner Services App Development 3"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              IOS App
              <br /> Development
            </p>
            <div className="card-actions pt-5">
              <a
                className="text-white bg-blue-900 rounded-xl hover:bg-yellow-500 hover:text-black shadow-2xl pt-2 "
                href="/app-development"
                style={{
                  width: "132px",
                  height: "44px",
                }}
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsAdService;
