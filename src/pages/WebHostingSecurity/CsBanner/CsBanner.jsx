import csbannerImg from "../../../assets/wh-security/cs-banner.png";
import unlockExclusive from "../../../assets/images/mobile 1.png";
import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

const CsBanner = () => {
  const [toggle, setToggle] = useState(false);
  const [clickChat, setClickChat] = useState(false);
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [specificService, setSpecificService] = useState('');
  const [expectation, setExpectation] = useState('');
  const [heroData, setHeroData] = useState(null);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const chatClick = () => {
    setClickChat(!clickChat);
  };

  useEffect(() => {
    document.addEventListener("click", () => {
      setToggle(false);
      setClickChat(false);
    });
    return () => {
      document.removeEventListener("click", () => {
        setToggle(false);
        setClickChat(false);
      });
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const heroCollection = collection(db, 'cyber-security');
        const snapshot = await getDocs(heroCollection);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setHeroData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRequestDemo = async () => {
    try {
      await addDoc(collection(db, 'demo-requests'), {
        name,
        contactNumber,
        email,
        meetingDate,
        specificService,
        expectation,
        timestamp: new Date(),
      });
      alert('Demo request submitted successfully!');
      setToggle(false); // Close the modal after submission
      // Clear the form fields
      setName('');
      setContactNumber('');
      setEmail('');
      setMeetingDate('');
      setSpecificService('');
      setExpectation('');
    } catch (error) {
      console.error('Error submitting demo request:', error);
      alert('Error submitting demo request.');
    }
  };

  return (
    <div className="">
      <div className="mx-4 md:mx-8 lg:mx-20 lg:pt-[25%] md:mt-40 mt-[20rem]">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <img
            src={unlockExclusive}
            alt=""
            className="md:mb-0 md:mr-4 mx-auto md:mx-0 w-[120px] md:w-[120px] md:mt-[5%] mt-[45%]"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="text-center mx-10">
          <h2
            className=" md:text-3xl"
            style={{ fontFamily: "Roboto", fontWeight: 500 }}
          >
            CYBER SECURITY SERVICES
          </h2>
          <p className="text-center py-3">
            VIRTUAL WORKPLACE AND CUTTING EDGE TECHNOLOGY ALLOW OUR CLIENT TO
            WORK MORE PRODUCTIVELY FROM ANY <br />
            PLACE SECURELY FROM ANY PLATFORM GLOBALLY.
          </p>
        </div>
      </div>
      <div className=" bg-[#f7efef1a] mx-4 md:mx-8 lg:mx-32">
        <div className="flex flex-col md:flex-row justify-between items-center- sm:px-10 py-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="p-5 h-full w-full">
              <img
                src={csbannerImg}
                alt="App Development Banner image"
                className="w-full h-full object-cover"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-white text-left mx-4 md:mx-8 md:mb-0">
            <h2 className="text-xl md:text-2xl text-center lg:text-3xl  md:mb-5 mx-10">
              CYBER SECURITY SERVICES{" "}
            </h2>
            <p className="text-sm md:text-base lg:text-base text-justify mb-5">
              {heroData ? (
                heroData.map(item => (
                  <div key={item.id}>
                    <h2>{item.cyberpara1}</h2>
                  </div>
                ))
              ) : (
                <span>Loading...</span>
              )}
            </p>
            <div className="flex justify-center items-center">
              <button
                onClick={e => {
                  e.stopPropagation();
                  setToggle(!toggle);
                }}
                className="btn  bg-yellow-500  text-black hover:bg-blue-950 md:w-auto md:px-4 lg:w-[200px] sm:w-[300px] px-7"
                style={{ fontFamily: "Inter", fontWeight: 500 }}
              >
                Book a consultation
              </button>
              {/* pop-up start */}
              <div className={`z-[29] ${toggle ? "" : "hidden"} absolute top-32 left-0 md:left-96 flex justify-center items-center`}>
                <div className="bg-[#072966] shadow-md shadow-slate-400 rounded-2xl w-auto m-2 p-2 md:p-4">
                  <div className="flex justify-end">
                    <button onClick={handleClick}><i className="bi bi-x-lg"></i></button>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl">Book Consultation</p>
                    <p className="mt-3">Fill below details and we will get back to you.</p>
                  </div>
                  <div className="border border-dashed mt-2"></div>
                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Name:</p>
                    <input
                      onClick={e => e.stopPropagation()}
                      className="border border-gray-300 bg-white h-8 rounded-sm text-sm text-black"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Contact number:</p>
                    <input
                      onClick={e => e.stopPropagation()}
                      className="border border-gray-300 bg-white h-8 rounded-sm text-sm text-black"
                      type="text"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                    />
                  </div>
                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Email:</p>
                    <input
                      onClick={e => e.stopPropagation()}
                      className="border border-gray-300 bg-white h-8 rounded-sm text-sm text-black"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Meeting Date:</p>
                    <input
                      onClick={e => e.stopPropagation()}
                      className="border border-gray-300 bg-white w-[10rem] rounded-sm text-sm text-black"
                      type="date"
                      value={meetingDate}
                      onChange={(e) => setMeetingDate(e.target.value)}
                    />
                  </div>
                  <div className='flex mt-5 justify-between space-x-2'>
                    <div className='flex space-x-2'>
                      <p className='mt-[1%] font-semibold'>Choose the specific Service:</p>
                      <i className="bi bi-exclamation-circle text-yellow-300 text-lg"></i>
                    </div>
                    <input
                      onClick={e => e.stopPropagation()}
                      className="border border-gray-300 bg-white h-28 rounded-sm text-sm text-black"
                      type="text"
                      value={specificService}
                      onChange={(e) => setSpecificService(e.target.value)}
                    />
                  </div>
                  <div className='flex mt-5 justify-between space-x-2'>
                    <div className='flex space-x-2'>
                      <p className='mt-[1%] font-semibold'>Expectation:</p>
                      <i className="bi bi-exclamation-circle text-yellow-300 text-lg"></i>
                    </div>
                    <input
                      onClick={e => e.stopPropagation()}
                      className="border border-gray-300 bg-white h-24 rounded-sm text-sm text-black"
                      placeholder="Kindly explain"
                      type="text"
                      value={expectation}
                      onChange={(e) => setExpectation(e.target.value)}
                    />
                  </div>
                  <div>
                    <div className="flex justify-center items-center text-black w-full mt-6">
                      <button
                        onClick={handleRequestDemo}
                        className="bg-yellow-500 py-2 px-6 rounded-md"
                      >
                        Request a Demo
                      </button>
                    </div>
                    <p className="text-center">Or</p>
                    <div className="text-center cursor-pointer" onClick={e => {
                      e.stopPropagation();
                      setClickChat(!clickChat);
                    }}>
                      Chat With Us
                    </div>
                  </div>
                </div>
              </div>
              {/* pop-up end */}
              {/* pop-up 2 start */}
              <div className={` z-[29] ${clickChat ? "" : "hidden"} absolute top-48 right-64 flex justify-center items-center`}>
                <div className="bg-[#072966] shadow-md shadow-slate-400 rounded-2xl h-[50%] w-[24rem] p-10 ">
                  <div className="flex justify-end">
                    <button onClick={chatClick}><i className="bi bi-x-lg"></i></button>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl">Cyber Security</p>
                    <p className="mt-3">Cyber security involves creating</p>
                  </div>
                  <div className="border border-dashed mt-2"></div>
                  <div className='flex space-x-5 mt-6  relative'>
                    <div className='h-8 rounded-full bg-white w-8 mt-4'></div>
                    <div className="border border-gray-300 bg-white h-10 mt-4 p-2 rounded-sm text-sm text-black">
                      Lorem ipsum dolor sit amet.
                    </div>
                  </div>
                  <div className='flex space-x-5 mt-6  relative'>
                    <div className="border border-gray-300 p-2 bg-white h-10 mt-4 rounded-sm text-sm text-black">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <div className='h-8 rounded-full bg-white w-8 mt-4'></div>
                  </div>
                  <div>
                    <div className="mt-8 flex w-full">
                      <label htmlFor="hs-trailing-button-add-on-with-icon" className="sr-only">Label</label>
                      <div className="flex rounded-lg shadow-sm">
                        <input
                          type="text"
                          id="hs-trailing-button-add-on-with-icon"
                          name="hs-trailing-button-add-on-with-icon"
                          className="py-1 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        />
                        <button
                          type="button"
                          className="w-[3rem] h-[2rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-white text-black disabled:opacity-50 disabled:pointer-events-none"
                        >
                          <i className="bi bi-send-fill"></i>
                        </button>
                      </div>
                      <i className="bi bi-paperclip text-2xl ms-4 rotate-90"></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* pop-up 2 end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CsBanner;
