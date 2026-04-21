import { FaCoffee } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { GiCoffeeBeans } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
export default function FeatureSection() {
  return (
    <>
      <div className="py-38 px-8">
        <h2 className="text-2xl font-bold text-center mb-10">
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
        <div className="text-center mt-10">
          <Link to="/about">
            <button
              className="bg-amber-500  text-white font-bold px-6 py-3 rounded-xl 
             shadow-md hover:shadow-xl
             hover:bg-amber-600
             active:scale-95
             transition-all duration-300
             relative overflow-hidden"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
