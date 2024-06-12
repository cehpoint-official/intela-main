import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import solution1 from "../../../assets/images/it-solution-1.png";
import solution2 from "../../../assets/images/it-solution-2.png";
import solution3 from "../../../assets/images/it-solution-3.png";
import solution4 from "../../../assets/images/it-solution-4.png";
import partner1 from "../../../assets/images/partner1.png";
import partner2 from "../../../assets/images/partner2.png";
import partner3 from "../../../assets/images/partner3.png";
import partner4 from "../../../assets/images/partner4.png";
import partner5 from "../../../assets/images/partner5.png";
const Deltapath = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#021D49] py-8 sm:py-12 md:py-16 lg:py-20 text-white px-4 sm:px-8 md:px-16 lg:px-20">
      <p className="pb-6 sm:pb-8 md:pb-10 lg:pb-12 text-center">
        Deltapath Mobile application & Deltapath Engage can be downloaded easily
        by clicking the icon – once your application is downloaded then you can
        reach our sales team to provide you the username & password for further
        testing.
      </p>
      {/* card start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-11 mx-6">
        {/* 1st card start */}
        <div
          className="card w-full bg-blue-600 bg-opacity-30 text-neutral-content py-20"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <div className="card-body items-center text-center">
            <div className="card-title text-2xl mb-2 text-yellow-500 ml-5">Deltapath Engage</div>
            <p >Mac App store</p>
            <div className="card-actions justify-center">
              <a
                className="btn w-[100px] md:w-[130px] h-[45px] bg-yellow-500 hover:bg-blue-950 hover:text-white rounded-lg mt-5"
                href="https://apps.apple.com/us/app/deltapath-engage/id1529241873?mt=12"
              >
                Download
              </a>
            </div>
          </div>
        </div>
        {/* 1st card end */}

        {/* 2nd card start */}
        <div
          className="card w-full bg-blue-600 bg-opacity-30 text-neutral-content py-20"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <div className="card-body items-center text-center">
            <div className="card-title text-2xl mb-2 text-yellow-500 ml-5">Deltapath Engage</div>
            <p >Mac App store</p>
            <div className="card-actions justify-center">
              <a
                className="btn w-[100px] md:w-[130px] h-[45px] bg-yellow-500 hover:bg-blue-950 hover:text-white rounded-lg mt-5"
                href="https://apps.apple.com/us/app/deltapath-engage/id1529241873?mt=12"
              >
                Download
              </a>
            </div>
          </div>
        </div>
        {/* 2nd card end */}

        {/* 3rd card start */}
        <div
          className="card w-full bg-blue-600 bg-opacity-30 text-neutral-content py-20"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <div className="card-body items-center text-center">
            <div className="card-title text-2xl mb-2 text-yellow-500 ml-5">Deltapath Engage</div>
            <p >Mac App store</p>
            <div className="card-actions justify-center">
              <a
                className="btn w-[100px] md:w-[130px] h-[45px] bg-yellow-500 hover:bg-blue-950 hover:text-white rounded-lg mt-5"
                href="https://apps.apple.com/us/app/deltapath-engage/id1529241873?mt=12"
              >
                Download
              </a>
            </div>
          </div>
        </div>
        {/* 3rd card end */}

      </div>
      {/* card end */}



      <div className="pt-14">
        <h2 className="mx-6 text-3xl font-bold text-center">Our Recently Posted Blog</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6 sm:my-8 md:my-10 lg:my-12 rounded-2xl mx-4">
        {/* 1st card start */}
        <div
          className="card w-full shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={solution1} alt="Solution 1" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>Check out our newest blog post!....</p>
            <div className="card-actions">
              <a
                className="bg-blue-900 hover:bg-yellow-600 text-white shadow-2xl pt-2 mt-5"
                href="/blog"
                style={{
                  width: "132px",
                  height: "44px",
                  borderRadius: "15px",
                }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        {/* 1st card end */}

        {/* 2nd card start */}
        <div
          className="card w-full shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={solution2} alt="Solution 2" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>Explore our latest blog post!...</p>
            <div className="card-actions">
              <a
                className="bg-blue-900 hover:bg-yellow-600 text-white shadow-2xl pt-2"
                href="/blog"
                style={{
                  width: "132px",
                  height: "44px",
                  borderRadius: "15px",
                }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        {/* 2nd card end */}

        {/* 3rd card start */}
        <div
          className="card w-full shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={solution3} alt="Solution 3" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              Discover our freshest blog post!...</p>
            <div className="card-actions">
              <a
                className="bg-blue-900 hover:bg-yellow-600 text-white shadow-2xl pt-2"
                href="/blog"
                style={{
                  width: "132px",
                  height: "44px",
                  borderRadius: "15px",
                }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        {/* 3rd card end */}
        {/* 4th card start */}
        <div
          className="card w-full shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={solution4} alt="Solution 4" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>Here's the newest addition to our blog!...</p>
            <div className="card-actions">
              <a
                className="bg-blue-900 hover:bg-yellow-600 text-white shadow-2xl pt-2"
                href="/blog"
                style={{
                  width: "132px",
                  height: "44px",
                  borderRadius: "15px",
                }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        {/* 4th card end */}
      </div>



      {/* images */}
      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-5 bg-[#021D49] ">
        <div className="flex justify-evenly">
          <img src={partner1} alt="Partner1" />
        </div>
        <div className="flex justify-evenly">
          <img src={partner2} alt="Partner1" />
        </div>
        <div className="flex justify-evenly">
          <img src={partner3} alt="Partner1" />
        </div>
        <div className="flex justify-evenly">
          <img src={partner4} alt="Partner1" />
        </div>
        <div className="flex justify-evenly">
          <img src={partner5} alt="Partner1" />
        </div>


      </div>
    </div>
  );
};

export default Deltapath;
