import { CiCoffeeCup } from "react-icons/ci";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <>
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
              className="w-100 h-100 object-cover rounded-xl  "
            />
            <img
              src="/images/banner2.jpg"
              alt="banner2"
              className="w-50 h-50 object-cover rounded-xl absolute -bottom-6 -left-6 border-4 border-white shadow-xl -rotate-20"
            />
          </div>
        </div>
      </div>
    </>
  );
}
