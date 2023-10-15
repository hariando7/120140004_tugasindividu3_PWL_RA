/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useState } from "react";

const kontak = () => {
  const [name, setName] = useState("");
  const [saran, setSaran] = useState("");
  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
    console.log("Nama:", name);
    console.log("Saran:", saran);

    // Membersihkan input form
    setName("");
    setSaran("");
  };

  return (
    <>
      <div className="h-screen">
        <div className="m-auto fixed w-full">
          <Header />
        </div>
        {/* main content */}
        <div className="py-[10%] mx-auto container my-auto">
          <div className="wrap flex justify-center items-center">
            <div className="w-[50%] bg-slate-200 rounded-lg">
              <div className="p-5 rounded-lg min-h-[20rem]">
                <p className="text-xl font-bold mb-4">Contact Us : </p>
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <label htmlFor="Nama">Name</label>
                  <input
                    id="Nama"
                    className="border-2 border-black p-3 text-srBlack"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                  />
                  <label htmlFor="Saran" className="mt-3">
                    Message
                  </label>
                  <textarea
                    className="border-2 border-black p-3 text-srBlack"
                    name=""
                    id="Saran"
                    cols="30"
                    rows="5"
                    value={saran}
                    onChange={(e) => setSaran(e.target.value)}
                    placeholder="Your Message"
                  ></textarea>
                  <button
                    className="bg-[#5E42CE] text-white px-4 py-2  mt-5 mb-2"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
                <p className="text-xl font-light mb-4 text-center">
                  Incoming Messages : {count}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* main content */}
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default kontak;
