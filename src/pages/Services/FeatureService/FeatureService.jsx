import service1 from "../../../assets/services/search-1 1.png";
import service2 from "../../../assets/services/google-ads-logo 1.png";
import service3 from "../../../assets/services/horn 1.png";
import service4 from "../../../assets/services/app-window-code 1.png";
import service5 from "../../../assets/services/browser-page-media 1.png";
import service6 from "../../../assets/services/send-email 1.png";
import service7 from "../../../assets/services/service7.jpg";
import service8 from "../../../assets/services/subtitles 1.png";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";
const FeatureService = () => {
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
    <div className="px-4 py-16 mx-4 md:mx-8 lg:mx-20 backdrop:sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:mt-8 lg:py-20 shadow-blue-900 text-white shadow-2xl rounded-2xl mt-[70%]">
      <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-3 lg:grid-cols-4 md:mt-36 mt-72 lg:mt-60 mx-6">
        {/* services 1 */}
        <div>
          <div className="flex items-center justify-center w-10 h-10 lg:mt-28 rounded-full bg-yellow-500 ">
            <img
              className="w-1/2 hover:animate-bounce"
              src={service1}
              alt="service1"
            />
          </div>
          <h6 className="mb-2 mt-2 font-semibold">
            {heroData ? (
              heroData.map(item => (
                // Ensure that `item.paragraph1` matches the field name in your Firestore documents
                <div key={item.id}>
                  <h2>{item.options}</h2>
                </div>
              ))
            ) : (
              <span>Loading...</span>
            )}

            {/* SEARCH ENGINE OPTIMISATION */}
          </h6>
          <ul className="mb-3 text-sm list-disc space-y-2">
            <li>User Experience</li>
            <li>Technical SEO</li>
            <li>Mobile Optimization</li>
            <li>Content Quality</li>
          </ul>
        </div>
        {/* services 2 */}
        <div>
          <div className="flex items-center justify-center lg:mt-28 w-10 h-10 rounded-full bg-yellow-500">
            <img
              className="w-1/2"
              src={service2}
              alt="service2"
            />
          </div>
          <h6 className="mb-3 mt-3 font-semibold leading-5">GOOGLE ADS</h6>
          <ul className="mb-3 text-sm list-disc space-y-2">
            <li> Google Certified Expert</li>
            <li>Max Relevant Keywords Coverage</li>
            <li>Pay per Click Strategy</li>
          </ul>
        </div>
        {/* services 3 */}
        <div>
          <div className="flex items-center justify-center lg:mt-28 w-10 h-10 rounded-full bg-yellow-500">
            <img
              className="w-1/2 "
              src={service3}
              alt="service1"
            />
          </div>
          <h6 className="mb-3 mt-3 font-semibold  leading-5">
            SOCIAL MEDIA MARKETING
          </h6>
          <ul className="mb-3 text-sm list-disc space-y-2">
            <li> Build relevant target audience Base</li>
            <li>Engagement post for Audience</li>
            <li>Detailed Insight Report</li>
            <li>Engaging Social Media Contest</li>
          </ul>
        </div>
        {/* services 4 */}
        <div>
          <div className="flex items-center justify-center lg:mt-28 w-10 h-10  rounded-full bg-yellow-500">
            <img
              className="w-1/2 "
              src={service4}
              alt="service1"
            />
          </div>
          <h6 className="mb-3 mt-3 font-semibold leading-5">SMS MARKETING</h6>
          <ul className="mb-3 text-sm list-disc space-y-2">
            <li> Customised Sender ID</li>
            <li>DND / NON DND route</li>
            <li>Bulk SMS Service</li>
            <li>Detailed report</li>
          </ul>
        </div>
        {/* services 5 */}
        <div>
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500">
            <img
              className="w-1/2"
              src={service5}
              alt="service5"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5">
            CUSTOMISED LANDING PAGE
          </h6>
          <ul className="mb-3 text-sm list-disc  space-y-2">
            <li> SEO based design</li>
            <li>Unique Optimized template</li>
            <li>Responsive for all devices</li>
            <li>Customized form for Lead submission</li>
          </ul>
        </div>
        {/* services 6 */}
        <div>
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 ">
            <img
              className="w-1/2"
              src={service6}
              alt="service6"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5">EMAIL MARKETING</h6>
          <ul className="mb-3 text-sm list-disc  space-y-2">
            <li> Build relevant target audience Base</li>
            <li>Engagement post for Audience</li>
            <li>Detailed Insight Report</li>
            <li>Engaging Social Media Contest</li>
          </ul>
        </div>
        {/* services 7*/}
        <div>
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500">
            <img
              className="w-1/2"
              src={service7}
              alt="service6"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5">WEBSITE DEVELOPMENT</h6>
          <ul className="mb-3 text-sm list-disc  space-y-2">
            <li> Ecommerce Website</li>
            <li>Business Website</li>
            <li>Extreme Typography</li>
            <li>PHP Development</li>
            <li>Css, Shopify, Html Language</li>
            <li>Page optimization</li>
          </ul>
        </div>
        {/* services 8*/}
        <div>
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 ">
            <img
              className="w-1/2"
              src={service8}
              alt="service6"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5">APP DEVELOPMENT</h6>
          <ul className="mb-3 text-sm list-disc  space-y-2">
            <li> SEO based design</li>
            <li>Unique Optimized template</li>
            <li>Responsive for all devices</li>
            <li>Customized form for Lead submission</li>
          </ul>
        </div>
      </div >
    </div >
  );
};

export default FeatureService;
