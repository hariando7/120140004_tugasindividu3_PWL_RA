import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const beranda = () => {
  const gradientStyle = {
    background: 'linear-gradient(116deg, #F39D19 59.54%, #F1F3F2 0%)',
  };
  return (
    <>
      <div className="m-auto fixed w-full">
        <Header />
      </div>

      {/* landing page */}
      <div className="landing flex w-full h-screen">
        <div className="left w-[60%] pl-[105px]">
          <div className="wrap h-full flex flex-col justify-center">
            <div className="head text-[105px] font-extrabold leading-[100px]">
              Gitar Ando <br />
              <span className="text-[#5E42CE]">Hobi</span>
            </div>
            <div className="subhead text-[18px] mt-8 w-[90%]">
              Ini adalah halaman utama pada hobi ando. halaman ini menampilkan informasi seputar gitar. penulis web sangat mencintai gitar. gitar adalah hobi yang dimiliki penulis, baginya gitar menjadi bagian yang tidak terpisahkan dalam hidup nya, dari gitar dapat menuangkan ide gagasan penulis dalam mengobati hidup.
            </div>
            <div className="btn mt-6">
              <a
                className="bg-[#5E42CE] p-2 px-5 rounded inline-block hover:bg-[#42337d] text-white"
                href="/tentang"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>
        <div className="right w-[40%] mt-52 mr-24">
          <img src="Images/gitarHome.jpeg" alt="" className="rounded-xl shadow-lg" />
        </div>
      </div>
      {/* landing page */}

      {/* build */}
      <div className="bg-slate-300">
        <div className="wrap container m-auto flex pt-[140px] pb-[140px] pl-20">
          <div className="left w-[50%]">
            <div className="head text-[87px]">
              Jenis Jenis <br /> Gitar
            </div>
            <div className="subhead text-[19px] mt-5">
              Berikut ini jenis gitar dan pengertiannya
            </div>
          </div>
          <div className="right w-[50%] flex flex-wrap justify-center p-5 gap-5 mr-10 text-white">
            <Card title="Gitar Klasik">
              Biasanya digunakan untuk musik klasik dan memiliki senar nilon.
            </Card>
            <Card title="Gitar Akustik">
              Cocok untuk berbagai genre musik dan umumnya memiliki senar baja.
            </Card>
            <Card title="Gitar Elektrik">
              Dirancang untuk dimainkan dengan bantuan amplifier dan sering digunakan dalam musik rock, pop, dan genre lainnya.
            </Card>
            <Card title="Gitar Bass">
              Lebih besar dan memiliki senar yang lebih tebal, digunakan untuk melodi bass dalam musik.
            </Card>
          </div>
        </div>
      </div>
      {/* build */}

      {/* Footer */}
      <div className="">
        <Footer />
      </div>
      {/* Footer */}
    </>
  );
};

export default beranda;
