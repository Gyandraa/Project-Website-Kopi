import { Route, Routes } from "react-router-dom";
import HomePages from "../pages/home";
import MenuPages from "../pages/menu";
import LokasiPages from "../pages/LokasiPages";
import OrderHistory from "../pages/orderHistory";
import CartPages from "../pages/cart";
import CheckoutPages from "../pages/checkout";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/lokasi" element={<LokasiPages />} />
        <Route path="/menu" element={<MenuPages />} />
        <Route path="/history-order" element={<OrderHistory />} />
        <Route path="/cart" element={<CartPages />} />
        <Route path="/checkout" element={<CheckoutPages />} />
      </Routes>
    </>
  );
}
