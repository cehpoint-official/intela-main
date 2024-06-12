import SdbannerImg from "../../../assets/services/software-development-banner.png";
import unlockExclusive from "../../../assets/images/mobile 1.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../config/firebase";

const PartnerBanner = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }
  useEffect(() => {
    document.addEventListener("click", () => {
      setToggle(false)
    })
    return () => {
      document.removeEventListener("click", () => {
        setToggle(false)

      })
    }
  }, [])
  const [quotation, setQuotation] = useState(false)

  const handleSubmit = () => {
    setQuotation(!quotation)
  }
  useEffect(() => {
    document.addEventListener("click", () => {
      setQuotation(false)
    })
    return () => {
      document.removeEventListener("click", () => {
        setQuotation(false)

      })
    }
  }, [])
  const [user, setUser] = useState({
    Name: "",
    Contactnumber: "",
    Email: "",
    Date: "",
    Demotitle: "",
    Demoservice: "",
    Initialpayment: "",
  })
  const [partner, setPartner] = useState({
    Name: "",
    Contactnumber: "",

  })
  const discussproject = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'partner-services'), partner); // Add data to Firestore
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  return (
    <>
      <div className="mx-4 md:mx-8 lg:mt-20 mt-[99%]">
        <div className="flex flex-col md:flex-row items-center justify-center h-full mt-48 lg:mt-96">
          <img
            src={unlockExclusive}
            alt="Unlock Exclusive"
          />
        </div>

        <h2 className="text-center text-sm md:text-2xl lg:text-2xl mb-6 md:mb-10 mt-3 md:mt-5">
          OUR TRUSTED SERVICE PROVIDER FOR COMPREHENSIVE IT SOLUTION
        </h2>
      </div>
      <div className="relative bg-[#233787] mx-4 md:mx-8 lg:mx-20 z-30">
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src={SdbannerImg}
              alt="hero-image"
              className="w-full h-full object-cover"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="w-full md:w-1/2 text-white md:mx-8">
            <h2
              className="text-xl text-left md:text-2xl lg:text-3xl mb-3 md:mb-5 mx-5"
              style={{ fontFamily: "Antic", fontWeight: 400 }}
            >
              Do you have any projects in mind?
            </h2>
            <p
              className="text-sm md:text-base lg:text-base text-justify mb-5 mx-5"
              style={{ fontFamily: "Roboto", fontWeight: 400 }}
            >
              Consider starting a community garden or tech skills workshops, leading environmental cleanups, establishing mentorship programs, or organizing wellness retreats for impactful projects.
            </p>
            <div className="mx-10 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-5 mt-10">
              <button onClick={e => {
                e.stopPropagation()
                setQuotation(!quotation)
              }}
                className="btn  bg-[#BD981B] hover:bg-blue-950 hover:text-white text-black w-full md:w-[170px] text-center py-2 md:py-0 md:mb-9"
                style={{ fontFamily: "Inter", fontWeight: 500 }}
              >
                Discuss a Project
              </button>

              {/* pop_up discuss*/}
              <div className={` z-[29] ${quotation ? "" : "hidden"} m-2 left-0 absolute top-36 md:left-[40%] flex justify-center items-center`}>
                <div className="bg-[#072966] shadow-md shadow-slate-400 rounded-2xl h-[50%] w-[90%] p-5">
                  <div className="flex justify-end">
                    <button onClick={handleSubmit}><i class="bi bi-x-lg"></i></button>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl">Call Back Request</p>
                    <p className="mt-3">Fill Below Details and we will get Back to you</p>
                  </div>
                  <div className="border border-dashed mt-2"></div>
                  <div>
                  </div>
                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Name:</p>
                    <input
                      onClick={e => e.stopPropagation()}
                      value={partner.Name}
                      onChange={e => setPartner({ ...partner, Name: e.target.value })}
                      name='Name'
                      placeholder='Enter Name'
                      className="border border-gray-300 bg-white h-8 rounded-sm text-sm text-black" type="text" />
                  </div>

                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Contact number:</p>
                    <input
                      class="border border-gray-300 bg-white h-8 rounded-sm text-sm text-black"
                      value={partner.Contactnumber}
                      onClick={e => e.stopPropagation()}
                      onChange={e => setPartner({ ...partner, Contactnumber: e.target.value })}
                      name='Contactnumber'
                      placeholder='contact number'
                      type="number" />
                  </div>
                  <div>
                    <div href="#" className=" flex justify-center items-center text-black w-full mt-6 ">
                      <button
                        onClick={discussproject}
                        className="bg-yellow-500 py-2 px-6 rounded-md">Request a Demo</button>
                    </div>
                    <p className="text-center">Or</p>
                    <div className="text-center cursor-pointer" onClick={e => {
                      e.stopPropagation()
                      setClickChat(!clickChat)
                      // setToggle(false)
                    }} href="#">Chat With Us</div>
                  </div>
                </div>
              </div>
              <Link to="/contact" class="btn  bg-yellow-500  text-black hover:bg-blue-950 md:w-auto md:px-4 lg:w-[200px]"
              >Request a Quotation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerBanner;
