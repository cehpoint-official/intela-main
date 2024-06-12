import { useEffect, useState } from "react";
import adFImg2 from "../../../assets/services/AdFeature2.png";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/firebase";

const AdFeature2 = () => {
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
  const [partner, setPartner] = useState({
    Name: "",
    Contactnumber: "",

  })
  const discussproject = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'app-development'), partner); // Add data to Firestore
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'app-development'), (snapshot) => {
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
        const viewcollection = collection(db, 'app-development-viewmore'); // Ensure that this 'para1' matches your collection name in Firebase
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
    <div className="bg-[#011C49] pt-10">
      <div className="relative z-[27] bg-[#072966] mx-4 md:mx-8 lg:mx-20 rounded-2xl">
        <div className="flex flex-col md:flex-row justify-around items-center h-full">
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
          <div className="w-full md:w-1/3 text-white text-left mx-4 md:mx-8 sm:px-5">
            <h2 className="text-xl md:text-2xl lg:text-3xl  mb-3 md:mb-5 mx-4 mt-5">
              Android App Development
            </h2>
            <p
              className="text-sm md:text-base lg:text-lg mb-4 mt-4 mx-4"
              style={{ fontFamily: "Roboto" }}
            >
              {items ? (
                items.map(item => (
                  // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                  <div key={item.id}>
                    <h2>{item.text}</h2>
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
              className="text-[#BD981B] mx-4 py-5 underline" href="">
              View More
            </button>
            {/* pop_up start */}
            <div className={` z-[29] ${toggle ? "" : "hidden"} absolute top-40 left-0 md:left-20 flex justify-center items-center`}>
              <div className="bg-[#072966] shadow-md shadow-slate-400 rounded-2xl h-[50%] m-2 md:w-[60%] md:p-6 p-2 ">
                <div className="flex justify-end">
                  <button onClick={handleClick}><i class="bi bi-x-lg"></i></button>
                </div>
                <div className="text-center">
                  <p className="text-2xl">Android App Development</p>
                  <p className="mt-3">It's building apps for Android devices..</p>
                </div>
                <div className="border border-dashed mt-2"></div>

                <div>
                  <p className="pt-5 text-xl">Android App Development</p>
                  <p className="mt-5 ">
                    {viewmore ? (
                      viewmore.map(item => (
                        // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                        <div key={item.id}>
                          <h2>{item.AndroidAppviewmore}</h2>
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
                            <h2>{item.estimatedtime}</h2>
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
                            <h2>{item.estimatedcose}</h2>
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
                            <h2>{item.Consultantno}</h2>
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
            {/* discuss */}
            <div className={` z-[29] ${quotation ? "" : "hidden"} m-2 left-0 absolute lg:top-[45rem] top-[20rem] md:left-[40%] flex justify-center items-center`}>
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
                      className="bg-yellow-500 py-2 px-6 rounded-md">Request a Call</button>
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
            <div className="mb-5 flex items-center justify-center">
              <button onClick={e => {
                e.stopPropagation()
                setQuotation(!quotation)
              }}
                class="btn  bg-yellow-500 flex justify-center items-center   text-black hover:bg-blue-950 md:w-auto md:px-4 lg:w-[200px] sm:w-[300px] px-7" href="#"
                style={{ fontFamily: "Inter", fontWeight: 500 }}
              >
                Discuss a Project with Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdFeature2;
