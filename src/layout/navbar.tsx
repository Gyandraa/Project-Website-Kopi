import { PiShoppingCartSimpleFill } from "react-icons/pi";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-4 px-8 bg-white shadow-md">
      <div className="flex-1">
        <h2 className="font-sans text-3xl font-extrabold tracking-tighter text-gray-900">
          KopiKita
        </h2>
      </div>

      <div className="flex-1 flex justify-center gap-8 text-gray-700 font-medium">
        <h3 className="relative cursor-pointer group">
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </h3>

        <h3 className="relative cursor-pointer group">
          Lokasi
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </h3>

        <h3 className="relative cursor-pointer group">
          Menu
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </h3>

        <h3 className="relative cursor-pointer group">
          Order
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </h3>
      </div>
      <div className="flex-1 flex justify-end">
        <PiShoppingCartSimpleFill size={24} className="cursor-pointer " />
      </div>
    </div>
  );
}
