import { useEffect } from "react";
import articlesImg1 from "../../../assets/solution/articles-img1.png";
import articlesImg2 from "../../../assets/solution/articles-img2.png";
import articlesImg3 from "../../../assets/solution/articles-img3.png";
import articlesImg4 from "../../../assets/solution/articles-img4.png";
import articlesImg5 from "../../../assets/solution/articles-img5.png";
import articlesImg6 from "../../../assets/solution/articles-img6.png";
import Aos from "aos";

const Articles = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-[#021D4A] text-white">
      <h2
        className="text-center
         text-xl Md:text-2xl lg:text-3xl pt-10"
        style={{ fontFamily: "Antic", fontWeight: 400 }}
      >
        WE ARE HERE TO HELP YOUR BUSINESS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7 md:gap-5 py-5 mx-auto sm:max-w-xl md:max-w-full lg:mx-10 px-9 md:py-10 rounded-2xl shadow-2xl ">
        <div
          className="card w-full pt-5 shadow-2xl bg-[#082C6B]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img
              className="w-11/12"
              src={articlesImg1}
              alt="Articles Image 1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card">Deltapath Acute</h2>

            <div className="card-actions justify-end">
              <a className=" text-yellow-500" href="#">
                Read more &gt;
              </a>
            </div>
          </div>
        </div>
        <div
          className="card w-full pt-5 shadow-xl bg-[#082C6B]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img
              className="w-11/12"
              src={articlesImg2}
              alt="Articles Image 2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card">Deltapath Push-To-Talk</h2>

            <div className="card-actions justify-end">
              <a className=" text-yellow-500" href="#">
                Read more &gt;
              </a>
            </div>
          </div>
        </div>
        <div
          className="card w-full pt-5 shadow-xl bg-[#082C6B]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img
              className="w-11/12"
              src={articlesImg3}
              alt="Articles Image 3"
            />
          </figure>
          <div className="card-body">
            <h2 className="card">Deltapath UC Service Provider Edition</h2>

            <div className="card-actions justify-end">
              <a className=" text-yellow-500" href="#">
                Read more &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7 md:gap-5 py-5 mx-auto sm:max-w-xl md:max-w-full lg:mx-10 px-9  md:py-10 rounded-2xl shadow-2xl">
        <div
          className="card w-full pt-5 shadow-2xl bg-[#082C6B]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img
              className="w-11/12"
              src={articlesImg4}
              alt="Articles Image 4"
            />
          </figure>
          <div className="card-body">
            <h2 className="card">Deltapath Acute</h2>

            <div className="card-actions justify-end">
              <a className=" text-yellow-500" href="#">
                Read more &gt;
              </a>
            </div>
          </div>
        </div>
        <div
          className="card w-full pt-5 shadow-xl bg-[#082C6B]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img
              className="w-11/12"
              src={articlesImg5}
              alt="Articles Image 5"
            />
          </figure>
          <div className="card-body">
            <h2 className="card">Deltapath Push-To-Talk</h2>

            <div className="card-actions justify-end">
              <a className=" text-yellow-500" href="#">
                Read more &gt;
              </a>
            </div>
          </div>
        </div>
        <div
          className="card w-full pt-5 shadow-xl bg-[#082C6B]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img
              className="w-11/12"
              src={articlesImg6}
              alt="Articles Image 6"
            />
          </figure>
          <div className="card-body">
            <h2 className="card">Deltapath UC Service Provider Edition</h2>

            <div className="card-actions justify-end">
              <a className=" text-yellow-500" href="#">
                Read more &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-10">
        <button
          class="btn  bg-yellow-500  text-black hover:bg-blue-950 md:w-auto md:px-4 lg:w-[200px] sm:w-[300px] px-7"
          href="/blog"
        >
          Explore more Article
        </button>
      </div>
    </div>
  );
};

export default Articles;
