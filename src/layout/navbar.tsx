import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="relative flex items-center justify-between py-4 px-8 bg-white shadow-md">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tighter text-gray-900">
          KopiKita
        </h2>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-gray-700 font-medium">
        <Link to="/">
          <h3 className="relative cursor-pointer group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </h3>
        </Link>

        <Link to="/lokasi">
          <h3 className="relative cursor-pointer group">
            Lokasi
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </h3>
        </Link>

        <Link to="/menu">
          <h3 className="relative cursor-pointer group">
            Menu
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </h3>
        </Link>

        <Link to="/history-order">
          <h3 className="relative cursor-pointer group">
            HistoryOrder
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </h3>
        </Link>
      </div>

      <Link to="/cart">
        <div className="group cursor-pointer flex flex-col items-center">
          <PiShoppingCartSimpleFill
            size={24}
            className="text-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:text-black"
          />
          <span className="w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full mt-1"></span>
        </div>
      </Link>
    </div>
  );
}
