import { CiCoffeeCup } from "react-icons/ci";
import { GiCoffeeCup } from "react-icons/gi";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { FaCoffee } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { GiCoffeeBeans } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import ProductSlider from "../component/products/productSlider";
import UseProductSlider from "../hooks/useProductSlider";

export default function HomePages() {
  const { productSlider, isPending, isError, error } = UseProductSlider();

  if (isPending) {
    return <p className="text-center text-white">Loading...</p>;
  } else if (isError) {
    return (
      <p className="text-center text-white">Terjadi Error {error?.message}</p>
    );
  } else if (!productSlider) {
    return <p className="text-center text-white">Product not found</p>;
  }
  return (
    <>
      {/* Halaaman utama*/}
      <div className="mt-30 px-30 ">
        <div className="flex items-center justify-between">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold leading-snug">
              START YOUR DAY RIGHT WITH FRESHLY BREWED COFFEE
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Awali hari Anda dengan secangkir kopi segar. Nikmati aroma dan
              cita rasa kopi terbaik kami untuk memulai hari Anda dengan
              semangat dan energi yang baru.
            </p>
            <Link to="/menu">
              <button className="mt-8 px-6 py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 transition duration-300 shadow-md">
                Lihat Menu
              </button>
            </Link>
            <div className="flex gap-5 mt-8">
              <div className="flex flex-col items-center  p-2 rounded-xl shadow-sm hover:shadow-xl transition">
                <CiCoffeeCup className="text-4xl text-amber-500 mb-2" />
                <p className="font-medium text-gray-700 text-center">
                  Quality First
                </p>
              </div>

              <div className="flex flex-col items-center  p-2 rounded-xl shadow-sm hover:shadow-xl transition">
                <PiCoffeeBeanFill className="text-4xl text-amber-500 mb-2" />
                <p className="font-medium text-gray-700 text-center">
                  Fresh Beans
                </p>
              </div>

              <div className="flex flex-col items-center p-2 rounded-xl shadow-sm hover:shadow-xl transition">
                <GiCoffeeCup className="text-4xl text-amber-500 mb-2" />
                <p className="font-medium text-gray-700 text-center">
                  Coffee Community
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/banner.jpg"
              alt="banner"
              loading="lazy"
              className="w-80 h-80 object-cover rounded-xl  "
            />
            <img
              src="/images/banner2.jpg"
              alt="banner2"
              loading="lazy"
              className="w-40 h-40 object-cover rounded-xl absolute -bottom-6 -left-6 border-4 border-white shadow-xl -rotate-20"
            />
          </div>
        </div>
      </div>

      {/* Halaaman Keunggulan Kopi Kami*/}
      <div className="py-38 px-8">
        <h2 className="text-2xl font-bold text-center mb-16">
          Kenapa Harus Pilih Kami?
        </h2>

        <div className="flex items-center justify-center gap-15">
          <div className="flex flex-col gap-6">
            <div className="p-4 rounded-xl bg-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
              <FaCoffee className="text-3xl text-amber-500 mb-2" />
              <h3 className="text-amber-500 font-semibold">Kopi Berkualitas</h3>
              <p className="text-gray-700 text-sm">
                Menggunakan biji kopi pilihan terbaik dari petani lokal
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
              <GiCoffeeBeans className="text-3xl text-amber-500 mb-2" />
              <h3 className="text-amber-500 font-semibold">Fresh Beans</h3>
              <p className="text-gray-700 text-sm">
                Selalu menggunakan biji kopi yang fresh
              </p>
            </div>
          </div>

          <div>
            <img
              src="/images/banner3.jpg"
              alt="banner"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="p-4 rounded-xl bg-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
              <MdOutlineWorkspacePremium className="text-3xl text-amber-500 mb-2" />
              <h3 className="text-amber-500 font-semibold">Tempat Nyaman</h3>
              <p className="text-gray-700 text-sm">
                Suasana cozy untuk nongkrong, kerja, maupun chill
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
              <TbTruckDelivery className="text-3xl text-amber-500 mb-2" />
              <h3 className="text-amber-500 font-semibold">Pelayanan Cepat</h3>
              <p className="text-gray-700 text-sm">
                Pesanan diproses cepat dan bisa delivery ke lokasi kamu
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Halaman untuk Produk */}
      <div className="mt-20 py-16 px-6 md:px-12 lg:px-20 bg-gray-900">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-amber-400 text-sm tracking-widest ">
              Coffee Category
            </p>
            <h3 className="text-2xl md:text-2xl font-bold text-white leading-snug mt-2">
              Our Coffee, Your Experience
            </h3>
            <p className="text-gray-400 mt-2 max-w-md">
              Temukan berbagai pilihan kopi terbaik dengan cita rasa yang khas
              dan pengalaman yang tak terlupakan.
            </p>
          </div>

          <Link to="/menu">
            <button
              className="bg-amber-500 text-gray-900 px-6 py-3 rounded-xl font-medium 
                hover:scale-110 transition duration-300
                 shadow-md hover:shadow-xl self-start md:self-auto"
            >
              Our Products
            </button>
          </Link>
        </div>

        <div className="mt-20 mb-20 justify-center items-center">
          <ProductSlider productSlider={productSlider} />
        </div>
      </div>
    </>
  );
}
