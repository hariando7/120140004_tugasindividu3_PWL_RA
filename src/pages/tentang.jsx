import { useState } from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import axios from "axios";

const tentang = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    axios.get('https://api.api-ninjas.com/v1/hobbies?category=general', {
      headers: { 'X-Api-Key': 'TT8M2jYLPiF7KQHKQKF39A==3VEH1zntsDYfnUxb' }
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  };
  return (
    <>
      <div className="h-screen">
        <div className="m-auto fixed w-full">
          <Header />
        </div>
        {/* main content */}
        <div className="py-[10%] mx-auto container">
          <div className="wrap flex justify-center items-center mr-14 ml-14">
            <div className="left w-[80%]">
              <img src="Images/tentangGitar.jpg" alt="" className="w-[66%]" />
            </div>
            <div className="right w-[60%] mr-10">
              <div className="head text-[40px] font-extrabold italic text-center">Tentang <span className="text-[#5E42CE]">Gitar</span></div>
              <div className="text mt-2 text-justify">
                Gitar adalah alat musik berdawai yang dimainkan dengan cara dipetik atau dipetik menggunakan jari atau plektrum. Gitar umumnya memiliki bentuk yang mirip dengan bilah yang pipih dengan leher dan kepala di satu ujung dan badan yang lebih besar di ujung lainnya. Gitar dapat memiliki berbagai jenis dan konfigurasi, termasuk gitar klasik, akustik, dan elektrik.
              </div>
              <div className="est italic font-bold text-[#5E42CE] text-center mt-5">
                EST.2023
              </div>
            </div>
          </div>
        </div>
        {/* main content */}
<hr/>
        <div className="bg-white w-[100%] p-5 rounded-lg min-h-[20rem] text-center">
          <p className="text-xl font-bold mb-4">Klik, untuk Hobi lain :*</p>
          <button className="bg-[#5E42CE] text-white px-4 py-2 rounded mb-5" onClick={fetchData} disabled={loading}>Get Hobi</button>
          <p className="text-2xl font-serif mb-4">{data.hobby}</p>
          <p className="text-2xl font-bold mb-4">{data.category}</p>
        </div>
        {/* Footer */}
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default tentang;