import uiuxFeature11 from "../../../assets/uiux-design/grid 1.png";
import uiuxFeature12 from "../../../assets/uiux-design/ux-design 1.png";
import uiuxFeature13 from "../../../assets/uiux-design/ui-design-2 1.png";
import uiuxFeature14 from "../../../assets/uiux-design/web-design-2 1.png";
import uiuxFeature15 from "../../../assets/uiux-design/coding 2.png";
import uiuxFeature16 from "../../../assets/uiux-design/smartphone 1.jpg";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";

const UiUxFeature1 = () => {
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
    <div className="bg-[#021D4A] py-5 mt-[30rem] lg:mt-[35%]">
      <div className="px-4 md:px-8 lg:px-20 mx-auto backdrop:sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-10 lg:py-20 text-white shadow-2xl rounded-2xl">
        <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 ">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature11}
                alt="Wd Feature 1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              INFORMATION ARCHITECTURE DESIGN
            </h6>

            <p>
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
              {/*  */}
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 ">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature12}
                alt="Wd Feature 2"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              USER EXPERIENCE(UX) DEVELOPMENT
            </h6>
            <p>
              {heroData ? (
                heroData.map(item => (
                  // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                  <div key={item.id}>
                    <h2>{item.uxpara2}</h2>
                  </div>
                ))
              ) : (
                <span>Loading...</span>
              )}
              {/* We construct highly responsive Graphical User Interfaces (GUI)
              that include elements like 2D/3D animations and embedded media,
              providing an organic, unified user experience throughout our
              custom solutions. */}
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 ">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature13}
                alt="Wd Feature 3"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              USER INTERFACE (UI) DEVELOPMENT
            </h6>
            <p>
              {heroData ? (
                heroData.map(item => (
                  // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                  <div key={item.id}>
                    <h2>{item.uxpara3}</h2>
                  </div>
                ))
              ) : (
                <span>Loading...</span>
              )}

            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 ">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature14}
                alt="Wd Feature 4"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              WEB & MOBILE APP UI/UX DEVELOPMENT
            </h6>
            <p>
              {heroData ? (
                heroData.map(item => (
                  // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                  <div key={item.id}>
                    <h2>{item.uxpara4}</h2>
                  </div>
                ))
              ) : (
                <span>Loading...</span>
              )}

            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 ">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature15}
                alt="Wd Feature 5"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              FRONT-END PROGRAMMING
            </h6>
            <p>
              {heroData ? (
                heroData.map(item => (
                  // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                  <div key={item.id}>
                    <h2>{item.uxpara5}</h2>
                  </div>
                ))
              ) : (
                <span>Loading...</span>
              )}

            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 ">
              <img
                className="w-1/2 hover:animate-ping"
                src={uiuxFeature16}
                alt="Wd Feature 6"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              INTUITIVE & INTERACTIVE SOLUTION
            </h6>
            <p>
              {heroData ? (
                heroData.map(item => (
                  // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                  <div key={item.id}>
                    <h2>{item.uxpara6}</h2>
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
  );
};

export default UiUxFeature1;
