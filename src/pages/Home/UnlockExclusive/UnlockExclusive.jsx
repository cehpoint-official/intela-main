import unlockExclusive from "../../../assets/images/mobile 1.png";
import unlockLogo from "../../../assets/images/unlock-logo.png";

const UnlockExclusive = () => {
  return (
    <div className="bg-[#021D49] py-10 md:py-20 text-white px-4 md:px-20">
      <div className="mb-10 md:mb-20 mx-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          UNLOCK EXCLUSIVE DEALS WITH OUR TRUSTED PARTNERS
        </h2>
        <h3 className="text-xl text-center">OUR PARTNERS</h3>
        <p className="text-sm md:text-base text-center">
          CEHPOINT is a leading provider of IT solutions, serving both national
          and international clients with a comprehensive range of services. The
          services encompass a wide range of solutions tailored to meet the
          unique needs and challenges faced by its clients. These offerings
          encompass training, cybersecurity, and various IT services...
        </p>
      </div>
      {/* round */}
      <div className=''>
        <div className="flex flex-col md:flex-row justify-between items-center border-[#2f6591] border-2 w-full bg-[#082D6C]  xl:px-40 md:rounded-full rounded-2xl    ">

          <div className="flex  md:justify-around    w-full px-4 py-2 md:py-0">
            <div className='flex items-center md:gap-8 w-full md:w-auto justify-evenly '>
              <img
                className="md:w-36 md:h-40 h-32 object-cover"
                src="https://intela-main.web.app/assets/mobile%201-wDbbyiH_.png"
                alt="UnlockExclusive"
              />
              <div>
                <button
                  className=" bg-yellow-500 text-white hover:bg-[#021D49] rounded-lg py-1 font-semibold text-xl  px-8"
                  href="/services"
                >
                  Services
                </button>
              </div>
            </div>

          </div>
          <div className='border-b md:border-b-0 md:border-2 md:h-32 md:w-0 w-[90%]  border-[#2f6591]'>

          </div>
          <div className="flex  md:justify-around   w-full px-4 py-9 md:py-0">
            <div className='flex items-center md:gap-8 w-full md:w-auto justify-evenly '>
              <img
                className="w-32 h-12  md:w-40 md:h-14 object-fill "
                src="https://intela-main.web.app/assets/unlock-logo-MIfhpqvL.png"
                alt="UnlockExclusive"
              />
              <div>
                <button
                  className=" bg-yellow-500 text-white hover:bg-[#021D49] rounded-lg py-1 font-semibold text-xl  px-8"
                  href="/services"
                >
                  Services
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default UnlockExclusive;
