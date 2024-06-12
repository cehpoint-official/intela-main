import React, { useEffect, useState } from 'react';
import bannerImg from '../../../assets/services/banner-img.png';
import unlockExclusive from '../../../assets/images/mobile 1.png';
import { useAddRequestMutation, useDeleteRequestMutation, useGetRequestQuery } from '../../../redux/requestApi';
import { db } from '../../../config/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [quotation, setQuotation] = useState(true)

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

  const { data, error, isLoading } = useGetRequestQuery()
  const [addRequest] = useAddRequestMutation()
  const [deleteRequest] = useDeleteRequestMutation()
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
  // inpute value catche
  const getData = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'service'), user); // Add data to Firestore
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  // const requestquotation = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const docRef = await addDoc(collection(db, 'service'), quot); // Add data to Firestore
  //     console.log('Document written with ID: ', docRef.id);
  //   } catch (error) {
  //     console.error('Error adding document: ', error);
  //   }
  // };
  // firebase access Collection
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Define the collection reference from Firestore
        const heroCollection = collection(db, 'service'); // Ensure that this 'para1' matches your collection name in Firebase
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
      <div className="mx-4 md:mx-8 lg:mt-32 mt-[29rem]">
        <div className="flex flex-col md:flex-row items-center justify-center h-full mt-72 lg:mt-80 md:mt-12 pt-4">
          <img
            src={unlockExclusive}
            alt="Unlock Exclusive"
            className="w-30 md:w-30 h-30 md:h-30"
          />
        </div>

        <h2 className="text-center text-lg md:text-2xl lg:text-2xl mb-6 mt-3 md:mt-5">
          OUR TRUSTED SERVICE PROVIDER FOR COMPREHENSIVE IT SOLUTION
        </h2>
      </div>
      <div className=" bg-[#f7efef1a] z-30 mx-4 md:mx-8 lg:mx-20">
        <div className="flex flex-col md:flex-row justify-between  items-center h-full">
          <div>
            <img
              src={bannerImg}
              alt="Hero Image"
              className="w-full h-full md:mx-5"
            // style={{ maxWidth: '80%' }}
            />
          </div>
          <div className="w-full md:w-1/2  text-white mx-4 md:mx-8">
            <h2 className="text-lg md:text-xl lg:text-xl font-bold mb-2 md:mb-5 ">
              HOW DIGITAL TRANSFORMATION CAN HELP ORGANIZATIONS REACH THEIR GOALS
            </h2>
            <p className="text-sm md:text-sm lg:text-base text-justify mb-4 md:mb-5 lg:mx-5 mx-5">
              {heroData ? (
                heroData.map(item => (
                  // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                  <div key={item.id}>
                    <h2>{item.digital}</h2>
                  </div>
                ))
              ) : (
                <span>Loading...</span>
              )}
            </p>
            <div class="flex justify-center items-center  flex-col md:flex-row gap-4 pb-3 mt-10 md:gap-8">
              <button
                onClick={e => {
                  e.stopPropagation()
                  setToggle(!toggle)
                }} href="#" class="btn  bg-yellow-500  text-black hover:bg-blue-950 md:w-auto md:px-4 lg:w-[200px] sm:w-[300px] px-7">
                Request a Demo
              </button>
              {/* pop_up start request */}
              <div className={` z-[29] ${toggle ? "" : "hidden"}  m-2 absolute top-80 md:right-[30%] right-0 flex justify-center items-center`}>
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
              {/* request quation Pop-up */}
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
                      onChange={e => setQuot({ ...quot, Contactnumber: e.target.value })}
                      name='Contactnumber'
                      placeholder='contact number'
                      type="number" />
                  </div>
                  <div>
                    <div href="#" className=" flex justify-center items-center text-black w-full mt-6 ">
                      <button
                        onClick={requestquotation}
                        className="bg-yellow-500 py-2 px-6 rounded-md">Request a Demo asdd</button>
                    </div>
                    <p className="text-center">Or</p>
                    <Link className="text-center cursor-pointer" to="/chatPage">Chat With Us</Link>
                  </div>
                </div>
              </div> */}
              <Link to="/contact" class="btn  bg-yellow-500  text-black hover:bg-blue-950 md:w-auto md:px-4 lg:w-[200px]"
              >Request a Quotation
              </Link>
            </div>
            {/* pop_up 2 start chat */}
            <div className={` z-[29] ${clickChat ? "" : "hidden"} absolute top-48 right-64 flex justify-center items-center`}>
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
        </div >
      </div >
    </>
  );
};

export default Banner;
