import benefit1 from "../../../assets/services/Vector.png";
import benefit2 from "../../../assets/services/Vector (1).png";
import benefit3 from "../../../assets/services/Vector (2).png";
import benefit4 from "../../../assets/services/Vector (3).png";
import benefit5 from "../../../assets/services/Vector (4).png";
const ServiceBenefit = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-20 pb-10">
      <div>
        <h2 className="text-gray-400 text-center px-5 mb-8  pt-5 lg:mt-8 font-semibold">
          INDUSTRIES THAT CAN BENEFIT FROM SERVICES SOLUTION, WE HELP THE
          COMPANY TO CREATE THEIR <br />
          DIGITAL CONTENT ONLINE AND MARKETING
        </h2>
      </div>

      <div className=" sm:max-w-xl sm:space-x-36 md:max-w-full lg:max-w-screen-xl space-y-8 lg:px-8 py-8 mx-auto">
        <div className="grid gap-x-6 sm:grid-cols-3 lg:grid-cols-5 justify-center items-stretch">
          {/* card 1 */}
          <div className="text-center border-2 p-3 rounded-lg shadow-md shadow-blue-400 ">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4">
              <img src={benefit1} alt="Travel &amp; Tourism" className="w-full h-auto" />
            </div>
            <h6 className="mb-2 text-sm text-white font-bold leading-5 tracking-wider uppercase">
              Travel & Tourism
            </h6>
          </div>
          {/* card 2 */}
          <div className="text-center border-2 p-3 rounded-lg shadow-md shadow-blue-400 ">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4">
              <img src={benefit2} alt="Realstate" className="w-full h-auto" />
            </div>
            <h6 className="mb-2 text-sm text-white font-bold leading-5 tracking-wider uppercase">
              Realstate
            </h6>
          </div>
          {/* card 3 */}
          <div className="text-center border-2 p-3 rounded-lg shadow-md shadow-blue-400 ">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4">
              <img src={benefit3} alt="Hospitality &amp; healthcare" className="w-full h-auto" />
            </div>
            <h6 className="mb-2 text-sm text-white font-bold leading-5 tracking-wider uppercase">
              Hospitality & healthcare
            </h6>
          </div>
          {/* card 4 */}
          <div className="text-center border-2 p-3 rounded-lg shadow-md shadow-blue-400">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4">
              <img src={benefit4} alt="Hotel & Restaurant" className="w-full h-auto filter invert" />
            </div>
            <h6 className="mb-2 text-sm text-white font-bold leading-5 tracking-wider uppercase">
              Hotel &amp; Restaurant
            </h6>
          </div>
          {/* card 5 */}
          <div className="text-center border-2 p-3 rounded-lg shadow-md shadow-blue-400">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4">
              <img src={benefit5} alt="Online Training" className="w-full h-auto filter invert" />
            </div>
            <h6 className="mb-2 text-sm text-white font-bold leading-5 tracking-wider uppercase">
              Online Training
            </h6>
          </div>
        </div>
      </div>
      <p className="text-sm text-white text-center my-5">
        Our digital marketing team can help in developing the contents and
        digitalise them for clients in a various forms. We are dedicated to help
        businesses in the travel, hotel & restaurant, education, healthcare, and
        real estate industries gain more leads, conversions, and loyal
        customers.Thinking to generate the leads for your business is always the
        first step for your long term success, whether it’s through your
        website, your Facebook channel, or a dedicated landing page, there are
        many options to choose from. There are also many ways to produce those
        leads including through SEO, SEM, direct response ads, social media
        marketing, direct mail campaigns, partnerships and more! With so many
        options available, it’s important to determine what constitutes a
        valuable lead for your business.After all, you don’t want to spend time
        on leads that ultimately won’t be profitable for you. We can be your
        consultant to help you with a better planning on this.
      </p>
    </div>
  );
};

export default ServiceBenefit;
