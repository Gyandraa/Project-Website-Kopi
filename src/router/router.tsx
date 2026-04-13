import { Route, Routes } from "react-router-dom";
import HomePages from "../pages/home";
export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />} />
      </Routes>
    </>
  );
}
