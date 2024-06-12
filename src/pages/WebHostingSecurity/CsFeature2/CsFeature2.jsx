import { useEffect, useState } from "react";
import csFImg2 from "../../../assets/wh-security/cs-feature2.png";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/firebase";

const CsFeature2 = () => {
  const [toggle, setToggle] = useState(false)
  const [infrastructure, setInfrastructure] = useState(false);
  const [codeReview, setCodeReview] = useState(false);
  const [cloudSecurity, setCloudSecurity] = useState(false);
  const [socialenginnering, setSocialEnginnering] = useState(false);
  const [user, setUser] = useState({
    Name: "",
    Contactnumber: "",
    Email: "",
    MeetingDate: "",
    Choose: "",
    Expection: "",
  })
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
  const [consultaion, setConsultaion] = useState(false)
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
  const getData = async (e) => {
    e.preventDefault();
    try {
      const checkboxes = {
        infrastructure,
        codeReview,
        cloudSecurity,
        socialenginnering
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
      setItems(itemsArray.slice(1, 2)); // Show only the first 5 items
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
    <div className="bg-[#011C49] pt-10 ">
      <div className="relative bg-[#072966] mx-4 md:mx-8 lg:mx-20 rounded-2xl">
        <div className="flex flex-col md:flex-row justify-around items-center h-full">
          <div className="w-full md:w-1/3 text-white text-left mx-4 md:mx-8 sm:px-5">
            <h2 className="text-xl md:text-2xl lg:text-3xl  mb-3 md:mb-5 mt-3 mx-3">
              Security Audits and Assessments
            </h2>
            <p
              className="text-sm md:text-base lg:text-lg mb-5 pt-7 mx-3"
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
              }} className="text-[#BD981B] mx-3 py-5 underline" href="">
              View More
            </button>
            {/* pop-up start viewmore*/}
            <div className={` z-[29] ${toggle ? "" : "hidden"} absolute top-12 left-0 md:left-96 flex justify-center items-center`}>
              <div className="bg-[#072966] shadow-md shadow-slate-400 rounded-2xl h-[50%] m-2 md:w-[70%] md:p-4 p-2">
                <div className="flex justify-end">
                  <button onClick={handleClick}><i class="bi bi-x-lg"></i></button>
                </div>
                <div className="text-center ">
                  <p className="text-2xl">Security Audits and Assessments</p>
                  <p className="mt-3">
                    Cybersecurity audits and assessments evaluate vulnerabilities to protect against cyber threats.
                  </p>
                </div>
                <div className="border border-dashed mt-2"></div>
                <div>
                  <p className="pt-5 text-xl">Security Audits and Assessments</p>
                  <p className="mt-3 ">
                    {viewmore ? (
                      viewmore.map(item => (
                        // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                        <div key={item.id}>
                          <h2>{item.secuityviewmore}</h2>
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
                            <h2>{item.estimatedtime2}</h2>
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
                            <h2>{item.estimatedcost2}</h2>
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
                            <h2>{item.number2}</h2>
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
            <br />
            <br />
            {/* book  */}
            <div className={`z-[29] ${consultaion ? "" : "hidden"} absolute top-[5rem] left-0 md:left-[25rem] flex justify-center items-center`} onClick={() => setConsultaion(false)}>
              <div className="bg-[#072966] shadow-md shadow-slate-400 rounded-2xl h-[50%] md:w-[100%] md:p-4 m-2 p-2" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-end">
                  <button onClick={handleBook}><i className="bi bi-x-lg"></i></button>
                </div>
                <div className="text-center">
                  <p className="text-2xl">Security Audits and Assessments:</p>
                </div>
                <div className="border border-dashed mt-2"></div>
                <div className='flex mt-5 justify-between'>
                  <p className='mt-[1%] font-semibold'>Name:</p>
                  <input value={user.Name}
                    onChange={e => setUser({ ...user, Name: e.target.value })} onClick={e => e.stopPropagation()} class="border border-gray-300 text-black h-8 rounded-sm text-sm" type="search" />
                </div>
                <div className='flex mt-5 justify-between'>
                  <p className='mt-[1%] font-semibold'>Contact number:</p>
                  <input value={user.Contactnumber}
                    onChange={e => setUser({ ...user, Contactnumber: e.target.value })} onClick={e => e.stopPropagation()} class="border border-gray-300 text-black h-8 rounded-sm text-sm" type="search" />
                </div>
                <div className='flex mt-5 justify-between'>
                  <p className='mt-[1%] font-semibold'>Email:</p>
                  <input value={user.Email}
                    onChange={e => setUser({ ...user, Email: e.target.value })} onClick={e => e.stopPropagation()} class="border border-gray-300 text-black h-8 rounded-sm text-sm " type="search" />
                </div>
                <div className='flex mt-5 justify-between'>
                  <p className='mt-[1%] font-semibold'>Meeting Date:</p>
                  <input value={user.MeetingDate}
                    onChange={e => setUser({ ...user, MeetingDate: e.target.value })} onClick={e => e.stopPropagation()} class="border border-gray-300 text-black w-[10.2rem] rounded-sm text-sm" type="date" />
                </div>
                <div className=''>
                  <div className=''>
                    <p value={user.Choose}
                      onChange={e => setUser({ ...user, Choose: e.target.value })} className='mt-[1%] font-semibold'>Choose the specific Service: <i class="bi bi-exclamation-circle text-yellow-300 text-lg"></i></p>
                  </div>
                  {/* <input class="border border-gray-300 bg-white h-28 rounded-sm text-sm"
                    type="search" /> */}
                  <div className="block ">
                    <div class="mt-2">
                      <input
                        class="form-check-input h-4 w-4"
                        type="checkbox"
                        value=""
                        id="infrastructure"
                        checked={infrastructure}
                        onChange={(e) => setInfrastructure(e.target.checked)}
                      />
                      <label class="form-check-label ms-2" for="id">
                        Infrastructure Security Audit
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input h-4 w-4" type="checkbox" value=""
                        checked={codeReview}
                        onChange={(e) => setCodeReview(e.target.checked)}
                        id="codeReview" />
                      <label class="form-check-label ms-2" for="id2">
                        Code Review
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input h-4 w-4" type="checkbox" value=""
                        checked={cloudSecurity}
                        onChange={(e) => setCloudSecurity(e.target.checked)}
                        id="cloudSecurity" />
                      <label class="form-check-label ms-2" for="id3">
                        Cloud Security Assessment
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input h-4 w-4" type="checkbox" value=""
                        checked={socialenginnering}
                        onChange={(e) => setSocialEnginnering(e.target.checked)}
                        id="socialenginnering" />
                      <label class="form-check-label ms-2" for="id4">
                        Social Engineering Assessment
                      </label>
                    </div>
                  </div>

                </div>
                <div className='flex mt-5 justify-between space-x-2'>
                  <div className='flex space-x-2'>
                    <p className='mt-[1%] font-semibold '>Expection:</p>
                    <i class="bi bi-exclamation-circle text-yellow-300 text-lg"></i>
                  </div>
                  <div>
                    <textarea class="form-control text-black" id="id"></textarea>
                  </div>
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
          <div className="w-full md:w-1/2 mx-10 md:mx-10 my-10">
            <div className="pl-8  bg-[#011b4970]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CsFeature2;
