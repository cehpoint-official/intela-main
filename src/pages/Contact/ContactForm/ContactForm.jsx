import location from "../../../assets/contact/Vector.png";
import phone from "../../../assets/contact/Vector (1).png";
import envelope from "../../../assets/contact/envelope 1.png";
import { useForm, Controller } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebase"; // Adjust the import path if necessary

const ContactForm = () => {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "contact"), {
        ...data,
        timestamp: new Date(), // Adding a timestamp if needed
      });
      alert("Your request has been submitted successfully!");
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Error submitting your request. Please try again.");
    }
  };

  return (
    <div className="bg-[#021D4A] text-white md:p-10 lg:pt-[35rem]">
      <div className="md:flex md:justify-center gap-10">
        <div className="md:mt-5 lg:mr-0 lg:w-[30rem] pt-9 bg-[#3f63a1] bg-opacity-10 rounded-lg sm:py-4">
          <h2 className="mb-10 mt-2 text-2xl font-bold ml-10 text-center">Get in touch</h2>
          <p className="ml-10 text-sm pr-5">
            Use our contact form for all information requests or contact us
            directly using the contact information below. Feel free to get in
            touch with us via email or phone
          </p>
          <div className="flex ml-8 mt-9">
            <img className="w-[20px] h-[20px]" src={location} alt="Location" />
            <div>
              <p className="text-sm ml-2">OUR OFFICE LOCATION</p>
              <p className="text-sm ml-2">
                108, Soi Pramote, Surawongse Road, Bangrak, Bangkok – 10500,
                Thailand
              </p>
            </div>
          </div>
          <div className="flex ml-10 mt-8">
            <img className="w-[20px] h-[20px]" src={phone} alt="phone" />
            <div>
              <p className="text-sm ml-2">CONTACT NUMBER</p>
              <p className="text-sm ml-2">+66 62 949-2899</p>
            </div>
          </div>
          <div className="flex ml-10 mt-8">
            <img className="w-[20px] h-[20px]" src={envelope} alt="Location" />
            <div>
              <p class
                className="text-sm ml-2">EMAIL</p>
              <p className="text-sm ml-2">info@intelasolution.com</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/3 md:p-5 bg-[#3f63a1] bg-opacity-10 rounded-lg px-2 lg:pr-4">
          <h2 className="mb-5 mt-10 text-xl font-bold ml-10">HOW WE CAN ASSIST YOU</h2>
          <div className="md:ml-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full md:max-w-xs mb-3 bg-gray-600"
                    {...field}
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full md:max-w-xs mb-3 bg-gray-600"
                    {...field}
                  />
                )}
              />

              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="input input-bordered w-full md:max-w-xs mb-3 bg-gray-600"
                    {...field}
                  />
                )}
              />

              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <textarea
                    placeholder="Message"
                    className="input-bordered rounded-xl w-full md:max-w-xs p-10 mb-8 bg-gray-600"
                    {...field}
                  />
                )}
              />

              <div className="md:text-center">
                <button
                  type="submit"
                  className="w-[160px] bg-yellow-500 hover:bg-blue-950 hover:text-white md:mr-0 rounded-lg md:ml-28 mb-5 md:px-1 py-2"
                >
                  Submit Your Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
