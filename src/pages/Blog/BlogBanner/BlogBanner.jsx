import background from "../../../assets/blogs/banner-bg.png";
const BlogBanner = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 pb-16 pt-10 lg:mt-11">
      <div
        className="border-2 border-gray-800"
        style={{
          backgroundImage: `url(${background})`,
          // opacity: 0.9,
          objectFit: "fill"
        }}
      >
        <div className=" max-w-full mx-auto px-5">
          <h2
            className="text-center text-4xl p-10 font-bold"
            style={{
              fontFamily: "FONTSPRING DEMO",
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            GO THROUGH OUR BLOG
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
