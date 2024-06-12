import { useEffect } from "react";
import solution1 from "../../../assets/images/it-solution-1.png";
import solution2 from "../../../assets/images/it-solution-2.png";
import solution3 from "../../../assets/images/it-solution-3.png";
import solution4 from "../../../assets/images/it-solution-4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const ItSolution = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#021D49] pb-20">
      <div className="text-3xl text-white font-bold sm:mx-10 lg:mx-20 py-5 mx-10">
        IT SOLUTION AND SERVICES
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 shadow-blue-800 shadow-xl lg:mx-20 sm:mx-10 bg-[#205ed14d] text-white rounded-2xl border-2 border-solid  overflow-hidden mx-10">

        {/* start */}
        <div
          className="card w-full  sm:w-full md:w-[calc(100%-1rem)] lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-2xl border-8 border-solid border-[#082D6C] transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <figure>
            <img
              src={solution1}
              alt="Solution1"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="mx-6">
            <div className="font-medium mt-6 text-2xl">INFRASTRUCTURE AND SECURITY PRODUCT</div>
            <p className="font-light text-sm mt-2">
              Infrastructure and security products are essential tools for managing and protecting digital systems, ensuring reliability and safety.
            </p>
            <div className="card-actions ">
              <Link to="/contact"
                className="bg-blue-800 hover:bg-yellow-600 hover:text-black font-semibold text-white shadow-2xl pt-2 transition-transform transform mt-4 my-5"
                href="/cyber-security"
                style={{
                  width: "145px",
                  height: "44px",
                  borderRadius: "15px",
                  textAlign: "center"
                }}
              >
                Get touch with us
              </Link>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="border-t-2 border-b border-white w-full sm:hidden"></div>
        {/* start */}
        <div
          className="card w-full sm:w-full md:w-[calc(100%-1rem)] lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <figure>
            <img
              src={solution2}
              alt="Solution2"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="mx-6">
            <div className="font-medium mt-6 text-2xl">VOLP AND CONFERENCE SOLUTION</div>
            <p className="font-light text-sm mt-4">
              VoIP and conference solutions are modern ways to make calls and hold virtual meetings over the internet.
            </p>
            <div className="card-actions ">
              <Link to="/contact"
                className="bg-blue-800 hover:bg-yellow-600 hover:text-black font-semibold text-white shadow-2xl pt-2 transition-transform transform mt-6 my-5"
                href="/cyber-security"
                style={{
                  width: "145px",
                  height: "44px",
                  borderRadius: "15px",
                  textAlign: "center"
                }}
              >
                Get touch with us
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-b border-white w-full sm:hidden"></div>
        {/* end */}
        <div className="border-t-2 border-b border-white w-full sm:hidden"></div>

        {/* start */}
        <div
          className="card w-full sm:w-full md:w-[calc(100%-1rem)] lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <figure>
            <img
              src={solution3}
              alt="Solution3"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="mx-6">
            <div className="font-medium mt-6 text-2xl">APPLICATION DEV AND INTEGRATION</div>
            <p className="font-light text-sm">
              Application development and integration involve creating software programs and connecting them to work seamlessly together.
            </p>
            <div className="card-actions ">
              <Link to="/contact"
                className="bg-blue-800 hover:bg-yellow-600 hover:text-black font-semibold text-white shadow-2xl pt-2 transition-transform transform mt-4 my-5"
                href="/cyber-security"
                style={{
                  width: "145px",
                  height: "44px",
                  borderRadius: "15px",
                  textAlign: "center"
                }}
              >
                Get touch with us
              </Link>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="border-t-2 border-b border-white w-full sm:hidden"></div>
        {/* start */}
        <div
          className="card w-full sm:w-full md:w-[calc(100%-1rem)] lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <figure>
            <img
              src={solution3}
              alt="Solution3"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="mx-6">
            <div className="font-medium mt-6 text-2xl">PROJECT AND CONSULTANCY</div>
            <p className="font-light text-sm mt-4">
              Project and consultancy services involve providing expertise and guidance to organizations to help them plan
            </p>
            <div className="card-actions ">
              <Link to="/contact"
                className="bg-blue-800 hover:bg-yellow-600 hover:text-black font-semibold text-white shadow-2xl pt-2 transition-transform transform mt-12 my-5"
                href="/cyber-security"
                style={{
                  width: "145px",
                  height: "44px",
                  borderRadius: "15px",
                  textAlign: "center"
                }}
              >
                Get touch with us
              </Link>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div >
  );
};

export default ItSolution;
