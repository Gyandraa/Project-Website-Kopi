import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}
