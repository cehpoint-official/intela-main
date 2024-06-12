import { useEffect } from "react";
import pswd1 from "../../../assets/pertnerServices/pswd1.png";
import pswd2 from "../../../assets/pertnerServices/pswd2.png";
import pswd3 from "../../../assets/pertnerServices/pswd3.png";
import pswd4 from "../../../assets/pertnerServices/pswd4.png";
import Aos from "aos";
import { Link } from "react-router-dom";

const PsWdService = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-[#021D49] text-white pb-10 h-full py-9 mt-[89%] lg:mt-[30%]">
      <div className="text-center mt-[40%] md:mt-[6rem]">
        <h2
          className=" text-2xl md:text-5xl"
          style={{ fontFamily: "Roboto", fontWeight: 500 }}
        >
          WEB DEVELOPMENT
        </h2>
        <p className="text-center py-10">
          Web development involves creating and maintaining websites,
          making them functional,<br />user-friendly, and visually appealing.{" "}
        </p>

        <Link
          to="/web-development"
          className="btn bg-[#BD981B] hover:bg-blue-950 hover:text-white text-black sm:w-[220px] md:w-[170px] text-center py-2"
        >
          View All Services
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-4 sm:ml-8 md:mx-16 lg:mx-20 my-6 sm:my-8 md:my-10 lg:my-12  shadow-md shadow-blue-800 object-center border-2 p-4 md:border-solid border-[#082D6C] rounded-2xl px-10 border-none">
        {/* card 1 */}
        <div
          className="card w-full shadow-2xl border-4 border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={pswd1} alt="Solution 1" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p >
              Custom Website
              Development
            </p>
            <div className="card-actions pt-5">
              <a
                className="text-white bg-blue-900 rounded-xl hover:bg-yellow-500 hover:text-black shadow-2xl pt-2 "
                href="/web-development"
                style={{
                  width: "132px",
                  height: "44px",

                  // backgroundColor: "rgba(255, 255, 255, 0.1)",
                  // borderRadius: "15px",
                }}
              >
                View Details
              </a>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div
          className="card w-full shadow-2xl border-4 border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={pswd2} alt="Solution 2" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              E Commerce

              Website
            </p>
            <div className="card-actions pt-5">
              <a
                className="text-white bg-blue-900 rounded-xl hover:bg-yellow-500 hover:text-black shadow-2xl pt-2 "
                href="/web-development"
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
          className="card w-full shadow-2xl border-4 border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img
              src={pswd3}
              alt="Pertner Services Web Development 3"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              WordPress
              Website
            </p>
            <div className="card-actions pt-5">
              <a
                className="text-white bg-blue-900 rounded-xl hover:bg-yellow-500 hover:text-black shadow-2xl pt-2 "
                href="/web-development"
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
        {/* card 4 */}
        <div
          className="card w-full shadow-2xl border-4 border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img
              src={pswd4}
              alt="Pertner Services Web Development 4"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              Portfolio <br />
              Website
            </p>
            <div className="card-actions pt-5">
              <a
                className="text-white bg-blue-900 rounded-xl hover:bg-yellow-500 hover:text-black shadow-2xl pt-2 "
                href="/web-development"
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
    </div >
  );
};

export default PsWdService;
