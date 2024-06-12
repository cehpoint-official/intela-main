import { useEffect, useState } from "react";
import whoWeAre from "../../../assets/images/who-we-are.png";
import { db } from "../../../config/firebase"; // Import the Firebase db instance
import { addDoc, collection, getDocs } from 'firebase/firestore';

const WhoWeAre = () => {
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
    <div className="px-4 md:px-8 lg:px-20 lg:pt-96 pt-64 py-14 md:py-12 bg-[#021D49] text-white">
      <div className="text-2xl md:text-3xl lg:text-3xl text-left mb-4 md:mb-6 text-white font-bold hover:text-gray-400 pl-5">
        WHO WE ARE
      </div>
      <div className="flex flex-col-reverse md:flex-row mx-4 lg:space-x-5">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:me-6 mt-5">
          <div className="text-sm md:text-sm lg:text-base text-white lg:mt-5 leading-5"> {/* Adjust line height */}
            {heroData ? (
              heroData.map(item => (
                // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                <div key={item.id} > {/* Adjust margin-bottom as needed */}
                  <h2 >{item.para}</h2> {/* Remove margin and padding from h2 */}
                </div>
              ))
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2 transition-transform transform hover:scale-105 mt-4">
          <iframe width="560" height="500" src="https://www.youtube.com/embed/zIJz64VvHhM"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen className="w-full h-full rounded-xl"></iframe>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
