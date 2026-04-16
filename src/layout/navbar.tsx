import { PiShoppingCartSimpleFill } from "react-icons/pi";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-4 px-8 bg-white shadow-md">
      <div className="flex-1">
        <h2 className="font-sans text-3xl font-extrabold tracking-tighter text-gray-900">
          KopiKita
        </h2>
      </div>

      <div className="flex-1 flex justify-center gap-6 text-gray-800">
        <h3 className="cursor-pointer hover:text-black">Home</h3>
        <h3 className="cursor-pointer hover:text-black">Lokasi</h3>
        <h3 className="cursor-pointer hover:text-black">Menu</h3>
        <h3 className="cursor-pointer hover:text-black">Order</h3>
      </div>

      <div className="flex-1 flex justify-end">
        <PiShoppingCartSimpleFill size={24} className="cursor-pointer " />
      </div>
    </div>
  );
}
