import { useEffect, useState } from "react";
import networkBanner from "../../../assets/images/network-banner.png";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../config/firebase";

const NetworkBanner = () => {
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
  const bannerData = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'networkrequestDemo'), user); // Add data to Firestore
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="relative bg-[#f7efef1a] z-30 mt-[15rem] mx-4 md:mx-8 lg:mx-20 lg:mt-72">
      <div className="flex flex-col md:flex-row justify-between items-center h-full">
        <div className="w-full md:w-1/2 mx-4 md:mx-0">
          <img
            src={networkBanner}
            alt="banner-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-white text-left mx-4 md:mx-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-5">
            How To Monitor Your Application Services Across Your Platform
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-5">
            Protect your network from vulnerable sources, measure performance of
            your application to monitor against the increasing sophistication of
            hacker threats
          </p>
          <button onClick={e => {
            e.stopPropagation()
            setToggle(!toggle)
          }} className="btn bg-[#BD981B] hover:bg-blue-950 hover:text-white w-full md:w-[150px] mr-0 md:mr-4 mb-2 md:mb-0 font-inter text-25 font-medium">
            Request a demo
          </button>
          {/* request Demo Pop_up */}
          <div className={` z-[29] ${toggle ? "" : "hidden"} absolute top-44 right-[30%] flex justify-center items-center`}>
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
            <div className="bg-[#072966] shadow-md shadow-slate-400 rounded-2xl w-auto p-5">
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
                  name='Name'
                  placeholder='Enter Name'
                  className="border border-gray-300 bg-white h-8 rounded-sm text-sm text-black" type="text" />
              </div>

              <div className='flex mt-5 justify-between'>
                <p className='mt-[1%] font-semibold'>Contact number:</p>
                <input
                  class="border border-gray-300 bg-white h-8 rounded-sm text-sm text-black"
                  value={user.Contactnumber}
                  onChange={e => setUser({ ...user, Contactnumber: e.target.value })}
                  name='Contactnumber'
                  placeholder='contact number'
                  type="number" />
              </div>
              <div className='flex mt-5 justify-between'>
                <p className='mt-[1%] font-semibold'>Email:</p>
                <input
                  value={user.Email}
                  onChange={e => setUser({ ...user, Email: e.target.value })}
                  name='Email'
                  placeholder='email'
                  class="border border-gray-300 bg-white h-8 rounded-sm text-sm text-black" type="text" />
              </div>
              <div className='flex mt-5 justify-between'>
                <p className='mt-[1%] font-semibold'>Date:</p>
                <input
                  value={user.Date}
                  onChange={e => setUser({ ...user, Date: e.target.value })}
                  name='Date'
                  placeholder='date'
                  class="border border-gray-300 bg-white w-[10rem] rounded-sm text-sm text-black" type="date" />
              </div>
              <div className='flex mt-5 justify-between space-x-2'>
                <div className='flex space-x-2'>
                  <p className='mt-[1%] font-semibold'>Demo Service Title:</p>
                  <i class="bi bi-exclamation-circle text-yellow-300 text-lg"></i>
                </div>
                <input
                  value={user.Demotitle}
                  onChange={e => setUser({ ...user, Demotitle: e.target.value })}
                  name='Demotitle'
                  placeholder='demotitle'
                  class="border border-gray-300 bg-white h-8 rounded-sm text-sm text-black" type="search" />
              </div>
              <div className='flex mt-5 justify-between space-x-2'>
                <div className='flex space-x-2'>
                  <p className='mt-[1%] font-semibold'>Demo Service Description:</p>
                  <i class="bi bi-exclamation-circle text-yellow-300 text-lg"></i>
                </div>
                <input
                  value={user.Demoservice}
                  onChange={e => setUser({ ...user, Demoservice: e.target.value })}
                  name='Demoservice'
                  placeholder='demoservice'
                  class="border border-gray-300 bg-white h-8 rounded-sm text-sm text-black" type="search" />
              </div>
              <div className='flex mt-5 justify-between'>
                <p className='mt-[1%] font-semibold'>Initial Payment:</p>
                <input
                  value={user.Initialpayment}
                  onChange={e => setUser({ ...user, Initialpayment: e.target.value })}
                  name='Initialpayment'
                  placeholder='initial payment'
                  class="border border-gray-300 bg-white rounded-sm text-sm text-black" type="search" />
              </div>
              <div>
                <div href="#" className=" flex justify-center items-center text-black w-full mt-6 ">
                  <button
                    onClick={bannerData}
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
          {/* chat pop-up */}
          <div className={` z-[29] ${clickChat ? "" : "hidden"} absolute top-56 right-24 flex justify-center items-center`}>
            <div className="bg-[#072966] shadow-md shadow-slate-400 rounded-2xl h-[50%] w-[24rem] p-10 ">
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
                  <div className="mt-8 flex w-full" onClick={e => e.stopPropagation()}>
                    <div class="flex rounded-lg shadow-sm">
                      <input type="text" class="py-1 px-4 w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:ring-blue-500 text-black" />
                      <button type="button" class="w-[3rem] h-[2rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-white text-black">
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
  );
};

export default NetworkBanner;
