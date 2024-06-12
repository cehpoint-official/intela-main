import { Helmet } from "react-helmet-async";
import blogImg1 from "../../../assets/blogs/blogImg1.png";
import blogImg2 from "../../../assets/blogs/blogImg2.png";
import blogImg3 from "../../../assets/blogs/blogImg3.png";
import blogImg4 from "../../../assets/images/network-banner.png";
import blogImg5 from "../../../assets/blogs/blogImg5.png";
import blogImg6 from "../../../assets/blogs/blogImg6.png";
import { useEffect, useState } from "react";
import Aos from "aos";
import BlogBanner from "../BlogBanner/BlogBanner";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/firebase";

const Blog = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [items, setItems] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'blog-manager'), (snapshot) => {
      const itemsArray = [];
      snapshot.forEach((doc) => {
        itemsArray.push({ id: doc.id, ...doc.data() });
      });
      setItems(itemsArray); // Show only the first 5 items
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  //new work end


  return (
    <div>
      <Helmet>
        <title>Intela ~ Blog</title>
      </Helmet>
      <div className="bg-[#021D4A] py-10">
        <BlogBanner />
        <div className="px-5 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg text-white rounded-2xl shadow-2xl">
          <div className="grid gap-8 md:grid-cols-2 sm:max-w-sm sm:mx-auto md:max-w-full">

            {
              items ? (items.map(item => (<div key={item.id}
                className="overflow-hidden transition-shadow duration-300 p-5 bg-[#3b4960] bg-opacity-25 rounded shadow-sm"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img
                  src={item.imgUrl} alt={item.name}
                  className="object-fill w-full h-64"
                />

                <div className="p-5 border-t-0">
                  <a
                    href="/"
                    aria-label="Category"
                    title="Visit the East"
                    className="inline-block mb-3 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    style={{
                      fontFamily: "Antic",
                      fontWeight: 400,
                      fontSize: "24px",
                    }}
                  >
                    {/* THE LATEST CYBERSECURITY THREATS TO WATCH */}
                    {item.title}
                  </a>
                  <p
                    className="mb-2 text-white"
                    style={{ fontFamily: "Inter", fontWeight: 400 }}
                  >
                    {item.content}
                  </p>

                </div>
              </div>

              )))
                : (
                  <span>Loading...</span>
                )
            }








          </div>
        </div>
      </div>
    </div >
  );
};

export default Blog;
