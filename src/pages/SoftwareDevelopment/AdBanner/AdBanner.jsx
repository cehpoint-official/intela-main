import adbannerImg from "../../../assets/services/app-development-banner.png";
import unlockExclusive from "../../../assets/images/mobile 1.png";
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { Link } from "react-router-dom";

const AdBanner = () => {
  const [toggle, setToggle] = useState(false)
  const [clickChat, setClickChat] = useState(false)
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
  const handleClick = () => {
    setToggle(!toggle)
  }
  const chatClick = () => {
    setClickChat(!clickChat)
  }
  useEffect(() => {
    document.addEventListener("click", () => {
      setToggle(false)
      setClickChat(false)
    })
    return () => {
      document.removeEventListener("click", () => {
        setToggle(false)
        setClickChat(false)

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
  const getData = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'app-requestDemo'), user); // Add data to Firestore
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  const requestquotation = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'app-development'), quot); // Add data to Firestore
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Define the collection reference from Firestore
        const heroCollection = collection(db, 'app-development'); // Ensure that this 'para1' matches your collection name in Firebase
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
    <div className="">
      <div className="mx-4 md:mx-8 lg:mx-20 lg:pt-[18%] md:mt-40 mt-[30rem]">
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <img
            src={unlockExclusive}
            alt=""
            className="md:mb-0 md:mr-4 mx-auto md:mx-0 w-[120px] md:w-[120px] md:mt-[5%] mt-[45%]"
          // style={{ maxWidth: "120%" }}
          />
        </div>
        <div className=" text-center mx-10">
          <h2
            className="md:text-3xl"
            style={{ fontFamily: "Roboto", fontWeight: 500 }}
          >
            APP DEVELOPMENT
          </h2>
          <p className="text-center py-3">
            VIRTUAL WORKPLACE AND CUTTING EDGE TECHNOLOGY ALLOW OUR CLIENT TO
            WORK MORE PRODUCTIVELY FROM ANY <br />
            PLACE SECURELY FROM ANY PLATFORM GLOBALLY.
          </p>
        </div>
      </div>
      <div className=" bg-[#f7efef1a] mx-4 md:mx-8 lg:mx-32">
        <div className="flex flex-col md:flex-row justify-between items-center sm:px-10 py-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 p-2">
            <div className="p-3 h-full w-full">
              <img
                src={adbannerImg}
                alt="App Development Banner image"
                className="object-cover md:h-full md:w-full"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-white text-left mx-4 md:mx-8 z-10 md:mb-0 ">
            <h2 className="text-xl md:text-2xl lg:text-3xl mt-5 mb-3  md:mb-5 text-center">
              APP DEVELOPMENT SERVICES
            </h2>
            <p className="text-sm md:text-base lg:text-base text-center mb-5 mt-10">
              {/* Get custom software development services tailored to your needs.
              our experienced team of developers will help you create the
              perfect solution for your business */}
              {heroData ? (
                heroData.map(item => (
                  // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                  <div key={item.id}>
                    <h2>{item.pagraph1}</h2>
                  </div>
                ))
              ) : (
                <span>Loading...</span>
              )}

            </p>
            <div class="flex justify-center items-center  flex-col md:flex-row gap-4 mt-10 md:gap-8">
              <button onClick={e => {
                e.stopPropagation()
                setToggle(!toggle)
              }} href="#" class="btn  bg-yellow-500  text-black hover:bg-blue-950 md:w-auto md:px-4 lg:w-[200px] sm:w-[300px] px-7">
                Request a Demo
              </button>
              {/* pop_up start request Demo*/}
              <div className={` z-[29] ${toggle ? "" : "hidden"} m-2 absolute top-40 md:right-64 right-0 flex justify-center items-center`}>
                <div className="bg-[#072966] shadow-md shadow-slate-400 rounded-2xl m-2 w-auto md:p-4 p-2">
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
                      onClick={e => e.stopPropagation()} class=" text-black border border-gray-300 bg-white h-8 rounded-sm text-sm" type="search" />
                  </div>
                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Contact number:</p>
                    <input
                      value={user.Contactnumber}
                      onChange={e => setUser({ ...user, Contactnumber: e.target.value })}
                      onClick={e => e.stopPropagation()} class=" text-black border border-gray-300 bg-white h-8 rounded-sm text-sm" type="search" />
                  </div>
                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Email:</p>
                    <input
                      value={user.Email}
                      onChange={e => setUser({ ...user, Email: e.target.value })} onClick={e => e.stopPropagation()} class=" text-black border border-gray-300 bg-white h-8 rounded-sm text-sm" type="search" />
                  </div>
                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Date:</p>
                    <input onClick={e => e.stopPropagation()}
                      value={user.Date}
                      onChange={e => setUser({ ...user, Date: e.target.value })}
                      class=" text-black border border-gray-300 bg-white w-[10rem] rounded-sm text-sm" type="date" />
                  </div>
                  <div className='flex mt-5 justify-between space-x-2'>
                    <div className='flex space-x-2'>
                      <p className='mt-[1%] font-semibold'>Demo Service Title:</p>
                      <i class="bi bi-exclamation-circle text-yellow-300 text-lg"></i>
                    </div>
                    <input
                      value={user.Demotitle}
                      onChange={e => setUser({ ...user, Demotitle: e.target.value })}
                      onClick={e => e.stopPropagation()} class=" text-black border border-gray-300 bg-white h-8 rounded-sm text-sm" type="search" />
                  </div>
                  <div className='flex mt-5 justify-between space-x-2'>
                    <div className='flex space-x-2'>
                      <p className='mt-[1%] font-semibold'>Demo Service Description:</p>
                      <i class="bi bi-exclamation-circle text-yellow-300 text-lg"></i>
                    </div>
                    <input
                      value={user.Demoservice}
                      onChange={e => setUser({ ...user, Demoservice: e.target.value })}
                      onClick={e => e.stopPropagation()} class=" text-black border border-gray-300 bg-white h-8 rounded-sm text-sm" type="search" />
                  </div>
                  <div className='flex mt-5 justify-between'>
                    <p className='mt-[1%] font-semibold'>Initial Payment:</p>
                    <input
                      value={user.Initialpayment}
                      onChange={e => setUser({ ...user, Initialpayment: e.target.value })}
                      onClick={e => e.stopPropagation()} class=" text-black border border-gray-300 bg-white rounded-sm text-sm" type="search" />
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
              <Link to="/contact"
                class="btn  bg-yellow-500  text-black hover:bg-blue-950 md:w-auto md:px-4 lg:w-[200px]"
              >Request a Quotation
              </Link>
            </div>
            {/* pop_up 2 startus chat- */}
            <div className={` z-[29] ${clickChat ? "" : "hidden"} absolute top-48 right-0 md:right-64 flex justify-center items-center`}>
              <div className="bg-[#072966] shadow-md shadow-slate-400 rounded-2xl h-[50%] m-2 md:w-[24rem] md:p-4 p-2">
                <div className="flex justify-end">
                  <button onClick={chatClick}><i class="bi bi-x-lg"></i></button>
                </div>
                <div className="text-center">
                  <p className="text-2xl">web developemnt</p>
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
                        <input onClick={e => e.stopPropagation()} type="t text-black ext" id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon" class="py-1 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
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
            {/* pop-up 2 start */}
            {/* request Quotation start*/}
            <div className={` z-[29] ${quotation ? "" : "hidden"} absolute top-80 left-[40%] flex justify-center items-center`}>
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
                  <input onClick={e => e.stopPropagation()}
                    value={quot.Name}
                    onChange={e => setQuot({ ...quot, Name: e.target.value })}
                    name='Name'
                    placeholder='Enter Name'
                    className="border border-gray-300 bg-white h-8 rounded-sm text-sm text-black" type="text" />
                </div>

                <div className='flex mt-5 justify-between'>
                  <p className='mt-[1%] font-semibold'>Contact number:</p>
                  <input onClick={e => e.stopPropagation()}
                    class="border border-gray-300 bg-white h-8 rounded-sm text-sm text-black"
                    value={quot.Contactnumber}
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
            </div>

            {/* request Quotation end*/}

          </div>
        </div>
      </div >
    </div >
  );
};

export default AdBanner;