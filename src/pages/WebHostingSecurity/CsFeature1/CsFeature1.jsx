import { useEffect, useState } from "react";
import csfImg1 from "../../../assets/wh-security/cs-feature1.png";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/firebase";

const CsFeature1 = () => {
  const [webAppVAPT, setWebAppVAPT] = useState(false);
  const [networkVAPT, setNetworkVAPT] = useState(false);
  const [mobileAppVAPT, setMobileAppVAPT] = useState(false);
  const [wirelessNetworkVAPT, setWirelessNetworkVAPT] = useState(false);
  const [toggle, setToggle] = useState(false)
  const [consultaion, setConsultaion] = useState(false)
  const [user, setUser] = useState({
    Name: "",
    Contactnumber: "",
    Email: "",
    MeetingDate: "",
    Choose: "",
    Expection: "",
  })
  const handleBook = () => {
    setConsultaion(!consultaion)
  }
  useEffect(() => {
    document.addEventListener("click", () => {
      setConsultaion(false)
    })
    return () => {
      document.removeEventListener("click", () => {
        setConsultaion(false)

      })
    }
  }, [])
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
  const getData = async (e) => {
    e.preventDefault();
    try {
      const checkboxes = {
        webAppVAPT,
        networkVAPT,
        mobileAppVAPT,
        wirelessNetworkVAPT,
      };

      const docRef = await addDoc(collection(db, 'cyber-security'), {
        ...user,
        ...checkboxes,
      });// Add data to Firestore
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const [items, setItems] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'cyber-security'), (snapshot) => {
      const itemsArray = [];
      snapshot.forEach((doc) => {
        itemsArray.push({ id: doc.id, ...doc.data() });
      });
      setItems(itemsArray.slice(0, 1)); // Show only the first 5 items
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  //new work end
  const [viewmore, setViewmore] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Define the collection reference from Firestore
        const viewcollection = collection(db, 'cyber-security-viewmore'); // Ensure that this 'para1' matches your collection name in Firebase
        const snapshot = await getDocs(viewcollection); // Fetch data from Firestore
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setViewmore(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className=" bg-[#011C49] lg:mt-[25rem] md:mt-[8rem] mt-[28rem] ">
      <div className="mx-4 md:mx-8 bg-[#072966] lg:mx-20 rounded-2xl ">
        <div className="flex flex-col md:flex-row justify-center items-center h-full lg:mt-[25%]">
          <div className="w-full md:w-1/2 mx-10 md:mx-10 my-10 pl-8 bg-[#011b4911]">
            {items ? (
              items.map(item => (
                // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                <div key={item.id}>
                  <img
                    src={item.imgUrl} alt={item.name}
                    className="w-full h-full object-cover pt-6"
                  />
                </div>
              ))
            ) : (
              <span>Loading...</span>
            )}
          </div>
          <div className="w-full md:w-1/3 text-white md:mx-10 text-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl md:mb-5 md:mt-10 mb-3 mx-4">
              Vulnerability Assessment and Penetration Testing (VAPT)
            </h2>
            <p
              className="text-sm md:text-base lg:text-lg pt-8 mb-5 mx-3"
              style={{ fontFamily: "Roboto" }}
            >
              {items ? (
                items.map(item => (
                  // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                  <div key={item.id}>
                    <h2>{item.msg}</h2>
                  </div>
                ))
              ) : (
                <span>Loading...</span>
              )}

            </p>
            <button
              onClick={e => {
                e.stopPropagation()
                setToggle(!toggle)
              }}
              className="text-[#BD981B] py-5 mx-3 underline" href="">
              View More
            </button>
            <br />
            <br />
            {/* view-more pop-up */}
            <div className={` z-[29] ${toggle ? "" : "hidden"} absolute top-[55rem] left-0 md:left-20 flex justify-center items-center`}>
              <div className="bg-[#072966] shadow-md shadow-slate-400 rounded-2xl h-[50%] md:w-[60%] md:p-4 p-2 m-2">
                <div className="flex justify-end">
                  <button onClick={handleClick}><i class="bi bi-x-lg"></i></button>
                </div>
                <div className="text-center">
                  <p className="text-2xl">Vulnerability Assessment</p>
                  <p className="mt-3">Vulnerability Assessment identifies weaknesses, while Penetration Testing validates them through simulated attacks.</p>
                </div>
                <div className="border border-dashed mt-2"></div>
                <div>
                  <p className="pt-5 text-xl">(VAPT)</p>
                  <p className="mt-5">
                    {viewmore ? (
                      viewmore.map(item => (
                        // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                        <div key={item.id}>
                          <h2>{item.vaptviewmore}</h2>
                        </div>
                      ))
                    ) : (
                      <span>Loading...</span>
                    )}
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex text-lg space-x-4">
                    <b>Estimated Time:  </b>
                    <p>
                      {viewmore ? (
                        viewmore.map(item => (
                          // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                          <div key={item.id}>
                            <h2>{item.estimatedtime1}</h2>
                          </div>
                        ))
                      ) : (
                        <span>Loading...</span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex text-lg space-x-4">
                    <b>Estimated Cost:  </b>
                    <p>
                      {viewmore ? (
                        viewmore.map(item => (
                          // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                          <div key={item.id}>
                            <h2>{item.estimatedcost1}</h2>
                          </div>
                        ))
                      ) : (
                        <span>Loading...</span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex text-lg space-x-4">
                    <b>Consultant no:</b>
                    <p>
                      {viewmore ? (
                        viewmore.map(item => (
                          // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                          <div key={item.id}>
                            <h2>{item.number1}</h2>
                          </div>
                        ))
                      ) : (
                        <span>Loading...</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* book consultaion pop-up */}
            <div className={`z-[29] ${consultaion ? "" : "hidden"} absolute top-[55rem] left-0 md:left-[20rem] flex justify-center items-center`} onClick={() => setConsultaion(false)}>
              <div className="bg-[#072966] shadow-md shadow-slate-400 rounded-2xl h-[50%] md:w-[70%] md:p-4 p-2 m-2" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-end">
                  <button onClick={handleBook}><i className="bi bi-x-lg"></i></button>
                </div>
                <div className="text-center">
                  <p className="text-2xl">Vulnerability Assessment and Penetration Testing (VAPT):</p>
                </div>
                <div className="border border-dashed mt-2"></div>
                <div className='flex mt-5 justify-between'>
                  <p className='mt-[1%] font-semibold'>Name:</p>
                  <input value={user.Name}
                    onChange={e => setUser({ ...user, Name: e.target.value })} onClick={e => e.stopPropagation()} class="border border-gray-300 text-black bg-white h-8 rounded-sm text-sm" type="search" />
                </div>
                <div className='flex mt-5 justify-between'>
                  <p className='mt-[1%] font-semibold'>Contact number:</p>
                  <input value={user.Contactnumber}
                    onChange={e => setUser({ ...user, Contactnumber: e.target.value })} onClick={e => e.stopPropagation()} class="border text-black border-gray-300 bg-white h-8 rounded-sm text-sm" type="search" />
                </div>
                <div className='flex mt-5 justify-between'>
                  <p className='mt-[1%] font-semibold'>Email:</p>
                  <input value={user.Email}
                    onChange={e => setUser({ ...user, Email: e.target.value })} onClick={e => e.stopPropagation()} class="border text-black border-gray-300 bg-white h-8 rounded-sm text-sm" type="search" />
                </div>
                <div className='flex mt-5 justify-between'>
                  <p className='mt-[1%] font-semibold'>Meeting Date:</p>
                  <input value={user.MeetingDate}
                    onChange={e => setUser({ ...user, MeetingDate: e.target.value })} onClick={e => e.stopPropagation()} class="border text-black border-gray-300 bg-white w-[10rem] rounded-sm text-sm" type="date" />
                </div>
                {/* checkbox */}
                <div className=''>
                  <p value={user.Choose}
                    onChange={e => setUser({ ...user, Choose: e.target.value })} className='mt-[1%] font-semibold'>Choose the specific Service: <i class="bi bi-exclamation-circle text-yellow-300 text-lg"></i></p>
                  <div className="block ">
                    <div class="mt-2">
                      <input
                        className="form-check-input h-4 w-4"
                        type="checkbox"
                        value=""
                        id="webAppVAPT"
                        checked={webAppVAPT}
                        onChange={(e) => setWebAppVAPT(e.target.checked)}
                      />
                      <label class="form-check-label ms-2" for="id">
                        Web Application VAPT
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        className="form-check-input h-4 w-4"
                        type="checkbox"
                        value=""
                        id="netAppVAPT"
                        checked={networkVAPT}
                        onChange={(e) => setNetworkVAPT(e.target.checked)}
                      />
                      <label class="form-check-label ms-2" for="id2">
                        Network VAPT
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        className="form-check-input h-4 w-4"
                        type="checkbox"
                        value=""
                        id="mobileAppVAPT"
                        checked={mobileAppVAPT}
                        onChange={(e) => setMobileAppVAPT(e.target.checked)}
                      />
                      <label class="form-check-label ms-2" for="id3">
                        Mobile Application VAPT
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        className="form-check-input h-4 w-4"
                        type="checkbox"
                        value=""
                        id="wirelessAppVAPT"
                        checked={wirelessNetworkVAPT}
                        onChange={(e) => setWirelessNetworkVAPT(e.target.checked)}
                      />
                      <label class="form-check-label ms-2" for="id4">
                        Wireless Network VAPT
                      </label>
                    </div>
                  </div>
                </div>
                <div className='flex mt-5 justify-between space-x-2'>
                  <div className='flex space-x-2'>
                    <p className='mt-[1%] font-semibold'>Expection:</p>
                    <i class="bi bi-exclamation-circle text-yellow-300 text-lg"></i>
                  </div>
                  <textarea value={user.Expection}
                    onChange={e => setUser({ ...user, Expection: e.target.value })} onClick={e => e.stopPropagation()} class="border text-black border-gray-300 bg-white h-24 rounded-sm text-sm" placeholder="Kindly explain" name="" id=""></textarea>
                </div>
                <div href="#" className=" flex justify-center items-center text-black w-full mt-6 ">
                  <button
                    onClick={getData}
                    className="bg-yellow-500 py-2 px-6 rounded-md">Request a Demo</button>
                </div>
              </div>
            </div>
            <div className="mb-4 items-center flex justify-center">
              <button
                onClick={e => {
                  e.stopPropagation()
                  setConsultaion(!consultaion)
                }}
                class="btn  bg-yellow-500 flex justify-center items-center   text-black hover:bg-blue-950 md:w-auto md:px-4 lg:w-[200px] sm:w-[300px] px-7"
                href="#"
                style={{ fontFamily: "Inter", fontWeight: 500 }}
              >
                Book a consultation
              </button>
            </div>

          </div>
        </div>
      </div>
    </div >
  );
};

export default CsFeature1;
