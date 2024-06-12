import { useEffect } from "react";
import otherService1 from "../../../assets/images/other-service1.png";
import otherService2 from "../../../assets/images/other-service2.png";
import otherService3 from "../../../assets/images/other-service3.png";
import otherService4 from "../../../assets/images/other-service4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const OtherService = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#021D49]">
      <div className="text-3xl text-white font-bold mx-10 sm:mx-10 lg:mx-20 py-5">
        OTHER SERVICE OFFERING
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 shadow-blue-600 shadow-xl lg:mx-20 sm:mx-10 bg-[#205ed14d] text-white rounded-2xl border-2 border-solid overflow-hidden mx-10">
        {/* start 1*/}
        <div
          className="card w-full sm:w-full md:w-[calc(100%-1rem)] lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <figure>
            <img src={otherService1} alt="Digital Content Marketing" className="rounded-xl w-full" />
          </figure>
          <div className="mx-3">
            <div className="font-medium mt-6 text-2xl">DIGITAL CONTENT MARKETING</div>
            <p className="font-light text-base mt-4">
              Digital content marketing involves creating and sharing valuable online content to engage and attract potential customers.
            </p>
            <div className="card-actions mt-4 my-5">
              <Link to="/contact"
                className="bg-blue-800 hover:bg-yellow-600 hover:text-black font-semibold text-white shadow-2xl pt-2 transition-transform transform"
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

        {/* start 2*/}
        <div
          className="card w-full sm:w-full md:w-[calc(100%-1rem)] lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <figure>
            <img src={otherService2} alt="otherService1" className="rounded-xl w-full" />
          </figure>
          <div className="mx-3">
            <div className="font-medium mt-6 text-2xl">TOUR AND TRAVEL SERVICES</div>
            <p className="font-light text-base mt-4">
              Tour and travel services help plan and arrange trips for people, handling everything from bookings to activities.
            </p>
            <div className="card-actions ">
              <Link to="/contact"
                className="bg-blue-800 hover:bg-yellow-600 hover:text-black font-semibold text-white shadow-2xl pt-2 transition-transform transform mt-9 my-5"
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

        {/* start 3*/}
        <div
          className="card w-full sm:w-full md:w-[calc(100%-1rem)] lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <figure>
            <img src={otherService3} alt="otherService1" className="rounded-xl w-full" />
          </figure>
          <div className="mx-3">
            <div className="font-medium mt-3 text-2xl">IMPORT AND EXPORT</div>
            <p className="font-light text-sm mt-4">
              Import and export refer to the processes of bringing goods into a country (import) or sending goods out of a country (export) for trade or commerce purposes.
            </p>
            <div className="card-actions ">
              <Link to="/contact"
                className="bg-blue-800 hover:bg-yellow-600 hover:text-black font-semibold text-white shadow-2xl pt-2 transition-transform transform mt-8 my-5"
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

        {/* start 4*/}
        <div
          className="card w-full sm:w-full md:w-[calc(100%-1rem)] lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <figure>
            <img src={otherService4} alt="otherService1" className="rounded-xl w-full" />
          </figure>
          <div className="mx-3">
            <div className="font-medium mt-6 text-2xl">RENOVATION AND CONSTRUCTION</div>
            <p className="font-light text-sm mt-4">
              Renovation and construction involve improving or building structures, such as homes, buildings, or infrastructure, to enhance functionality, aesthetics, or safety.
            </p>
            <div className="card-actions ">
              <Link to="/contact"
                className="bg-blue-800 hover:bg-yellow-600 hover:text-black font-semibold text-white shadow-2xl pt-2 transition-transform transform mt-8 my-5"
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
      </div>
    </div>
  );
};

export default OtherService;
