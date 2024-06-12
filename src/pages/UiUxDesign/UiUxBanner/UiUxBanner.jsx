import uiuxBannerImg from "../../../assets/uiux-design/uiux-banner.png";
import unlockExclusive from "../../../assets/images/mobile 1.png";
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { Link } from "react-router-dom";

const UiUxBanner = () => {
  const [toggle, setToggle] = useState(false)
  const [clickChat, setClickChat] = useState(false)
  const handleClick = () => {
    setToggle(!toggle)
  }
  const chatClick = () => {
    setClickChat(!clickChat)
  }
  useEffect(() => {
    document.addEventListener("click", () => {
      // setToggle(false)
      setClickChat(false)
    })
    return () => {
      document.removeEventListener("click", () => {
        setToggle(false)
        setClickChat(false)

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
  const [quot, setQuot] = useState({
    Name: "",
    Contactnumber: "",

  })
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
  const getData = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'ui-ux-collection'), user); // Add data to Firestore
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  // const requestquotation = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const docRef = await addDoc(collection(db, 'uiux-quotation'), quot); // Add data to Firestore
  //     console.log('Document written with ID: ', docRef.id);
  //   } catch (error) {
  //     console.error('Error adding document: ', error);
  //   }
  // };
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Define the collection reference from Firestore
        const heroCollection = collection(db, 'ui-ux-collection'); // Ensure that this 'para1' matches your collection name in Firebase
        const snapshot = await getDocs(heroCollection); // Fetch data from Firestore
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setHeroData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="mx-4 md:mx-8 lg:mt-[45%] mt-[22rem] lg:mx-20 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-center text-center items-center">
          <img
            src={unlockExclusive}
            alt=""
            className="md:mb-0 md:mr-4 mx-auto md:mx-0 w-[120px] md:w-[120px] md:mt-[5%] mt-[45%]"
            style={{ maxWidth: "100%" }}
          />

          <div>
            <h1
              className="text-xl font-extrabold text-[#BD981B] md:text-4xl lg:text-5xl"
              style={{ fontFamily: "Abhaya Libre ExtraBold" }}
            >
              CEHPOINT
            </h1>
          </div>
        </div>
        <h2 className="text-center font-bold text-sm md:text-2xl lg:text-3xl mb-5">
          OUR TRUSTED SERVICE PROVIDER FOR COMPREHENSIVE IT SOLUTION
        </h2>
      </div>
      <div className=" lg:mt-20 z-30 mx-4 md:mx-8 lg:mx-20">
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src={uiuxBannerImg}
              alt="hero-image"
              className="w-full h-full object-cover"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="w-full md:w-1/2 text-white mx-4 md:mx-8">
            <h2 className="text-xl text-left md:text-2xl lg:text-3xl font-bold mb-3 md:mb-5">
              UI & UX DESIGN AND DEVELOPMENT SERVICES
            </h2>
            <p className="text-sm md:text-base lg:text-base text-justify mb-5">
              {heroData ? (
                heroData.map(item => (
                  // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                  <div key={item.id}>
                    <h2>{item.uxpara1}</h2>
                  </div>
                ))
              ) : (
                <span>Loading...</span>
              )}
              {/* */}
            </p>
            <div class="flex justify-center items-center  flex-col md:flex-row gap-4 mt-10 md:gap-8">
              <button onClick={e => {
                e.stopPropagation()
                setToggle(!toggle)
              }} href="#" class="btn  bg-yellow-500  text-black hover:bg-blue-950 md:w-auto md:px-4 lg:w-[200px] sm:w-[300px] px-7">
                Request a Demo
              </button>
              {/* pop_up start */}
              <div className={` z-[29] ${toggle ? "" : "hidden"} absolute top-[20rem] left-0 md:left-[25rem] flex justify-center items-center`}>
                <div className="bg-[#072966] shadow-md shadow-slate-400 rounded-2xl w-auto md:p-4 p-2 m-2">
                  <div className="flex justify-end">
                    <button onClick={handleClick}><i class="bi bi-x-lg"></i></button>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl">Demo Request</p>
                    <p className="mt-3">Fill below details and we will get back to you.</p>
                  </div>
                  <div className="border border-dashed mt-2"></div>
                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Name:</p>
                    <input
                      value={user.Name}
                      onChange={e => setUser({ ...user, Name: e.target.value })}
                      class="border border-gray-300 bg-white h-8 text-black rounded-sm text-sm" type="search" />
                  </div>
                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Contact number:</p>
                    <input
                      value={user.Contactnumber}
                      onChange={e => setUser({ ...user, Contactnumber: e.target.value })}
                      class="border border-gray-300 text-black bg-white h-8 rounded-sm text-sm" type="search" />
                  </div>
                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Email:</p>
                    <input
                      value={user.Email}
                      onChange={e => setUser({ ...user, Email: e.target.value })}
                      class="border border-gray-300 bg-white text-black h-8 rounded-sm text-sm" type="search" />
                  </div>
                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Date:</p>
                    <input
                      value={user.Date}
                      onChange={e => setUser({ ...user, Date: e.target.value })}
                      class="border border-gray-300 bg-white text-black w-[10rem] rounded-sm text-sm" type="date" />
                  </div>
                  <div className='flex mt-5 justify-between space-x-2'>
                    <div className='flex space-x-2'>
                      <p className='mt-[1%] font-semibold'>Demo Service Title:</p>
                      <i class="bi bi-exclamation-circle text-yellow-300 text-lg"></i>
                    </div>
                    <input
                      value={user.Demotitle}
                      onChange={e => setUser({ ...user, Demotitle: e.target.value })}
                      class="border border-gray-300 text-black bg-white h-8 rounded-sm text-sm" type="search" />
                  </div>
                  <div className='flex mt-5 justify-between space-x-2'>
                    <div className='flex space-x-2'>
                      <p className='mt-[1%] font-semibold'>Demo Service Description:</p>
                      <i class="bi bi-exclamation-circle text-yellow-300 text-lg"></i>
                    </div>
                    <input
                      value={user.Demoservice}
                      onChange={e => setUser({ ...user, Demoservice: e.target.value })}
                      class="border border-gray-300 text-black bg-white h-8 rounded-sm text-sm" type="search" />
                  </div>
                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Initial Payment:</p>
                    <input
                      value={user.Initialpayment}
                      onChange={e => setUser({ ...user, Initialpayment: e.target.value })}
                      class="border border-gray-300 text-black bg-white rounded-sm text-sm" type="search" />
                  </div>
                  <div>
                    <div href="#" className=" flex justify-center items-center text-black w-full mt-6 ">
                      <button
                        onClick={getData}
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
              {/* request quatation pop_up start */}
              {/* <div className={` z-[29] ${quotation ? "" : "hidden"} absolute top-80 left-[40%] flex justify-center items-center`}>
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
                      value={quot.Name}
                      onClick={e => e.stopPropagation()}
                      onChange={e => setQuot({ ...quot, Name: e.target.value })}
                      name='Name'
                      placeholder='Enter Name'
                      className="border border-gray-300 bg-white h-8 rounded-sm text-sm text-black" type="text" />
                  </div>

                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Contact number:</p>
                    <input
                      class="border border-gray-300 bg-white h-8 rounded-sm text-sm text-black"
                      value={quot.Contactnumber}
                      onClick={e => e.stopPropagation()}
                      onChange={e => setQuot({ ...quot, Contactnumber: e.target.value })}
                      name='Contactnumber'
                      placeholder='contact number'
                      type="number" />
                  </div>
                  <div>
                    <div href="#" className=" flex justify-center items-center text-black w-full mt-6 ">
                      <button
                        onClick={requestquotation}
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
              </div> */}
              <Link to="/contact" class="btn  bg-yellow-500  text-black hover:bg-blue-950 md:w-auto md:px-4 lg:w-[200px]"
              >Request a Quotation
              </Link>
            </div>
            {/* pop_up 2 start */}
            <div className={` z-[29] ${clickChat ? "" : "hidden"} absolute top-[26rem] left-[48rem] flex justify-center items-center`}>
              <div className="bg-[#072966] shadow-md shadow-slate-400 rounded-2xl h-[50%] w-[24rem] p-10 ">
                <div className="flex justify-end">
                  <button onClick={chatClick}><i class="bi bi-x-lg"></i></button>
                </div>
                <div className="text-center">
                  <p className="text-2xl">UI/UX Design</p>
                  <p className="mt-3">"Web development involves creating</p>
                </div>
                <div className="border border-dashed mt-2"></div>
                <div className='flex space-x-5 mt-6  relative'>
                  <div className='h-8 rounded-full bg-white w-8 mt-4'></div>
                  <div class="border  border-gray-300 bg-white h-10 mt-4 p-2 rounded-sm text-sm text-black" type="search">Lorem ipsum dolor sit  ,AJGKJ amet.

                  </div>

                </div>
                <div className='flex space-x-5 mt-6  relative'>
                  <div class="border  border-gray-300 p-2 bg-white h-10 mt-4 rounded-sm text-sm text-black" type="search">Lorem ipsum dolor sit  ,AJGKJ amet.
                  </div>

                  <div className='h-8 rounded-full bg-white w-8 mt-4'></div>
                </div>
                <div>
                  <div className="">
                    {/* start */}
                    <div className="mt-8 flex  w-full">
                      <label for="hs-trailing-button-add-on-with-icon" class="sr-only">Label</label>
                      <div class="flex rounded-lg shadow-sm">
                        <input type="text" id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon" class="py-1 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                        <button type="button" class="w-[3rem] h-[2rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-white text-black disabled:opacity-50 disabled:pointer-events-none">
                          <i class="bi bi-send-fill"></i>
                        </button>
                      </div>
                      <i class="bi bi-paperclip text-2xl ms-4 rotate-90"></i>
                    </div>
                    {/* end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UiUxBanner;
