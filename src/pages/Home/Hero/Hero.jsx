import React, { useEffect, useState } from "react";
import hero from "../../../assets/images/hero-image.png";
import { db } from "../../../config/firebase"; // Import the Firebase db instance
import { addDoc, collection, getDocs } from 'firebase/firestore'; // Import Firestore functions for adding documents

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Define the collection reference from Firestore
        const heroCollection = collection(db, 'home'); // Ensure that this 'para1' matches your collection name in Firebase
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
    <div className="z-30 mx-8 md:mx-8 lg:mt-24 mt-[75%]">
      <div className="flex lg:mx-8 flex-col mt-20 md:mt-0 lg:mt-20 bg-[#f7efef1a] md:flex-row justify-between items-center h-full rounded-2xl ">
        <div className="w-full md:w-1/2 mx-4 md:mx-0 transition-opacity hover:opacity-75">
          <img
            src={hero}
            alt="hero-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-white mx-4 p-4 md:mx-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-5">
            OUR SOLUTION CAN HELP CLIENTS WORK PRODUCTIVELY
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            {heroData ? (
              heroData.map(item => (
                // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                <div key={item.id}>
                  <h2>{item.para1}</h2>
                </div>
              ))
            ) : (
              <span>Loading...</span>
            )}
          </p>
          {/* Example form */}

        </div>
      </div>
      <div className="text-center mt-4 md:mt-8 md:mx-8 rounded-2xl bg-[#9486864d] opacity-70 z-20 h-[80px] md:h-[100px] p-4  flex items-center">
        <p className="text-yellow-300 text-xs md:text-sm lg:text-base">
          {heroData ? (
            heroData.map(item => (
              // Ensure that `item.paragraph1` matches the field name in your Firestore documents
              <div key={item.id}>
                <h2>{item.para2}</h2>
              </div>
            ))
          ) : (
            <span>Loading...</span>
          )}

        </p>
      </div>
    </div>
  );
};

export default Hero;
