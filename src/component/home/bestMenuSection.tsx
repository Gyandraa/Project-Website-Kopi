import { Link } from "react-router-dom";
import useProductSlider from "../../hooks/useProductSlider";
import ProductSlider from "../products/productSlider";
export default function BestMenuSection() {
  const { productSlider, isPending, isError, error } = useProductSlider();

  if (!productSlider) {
    return <p>Product not found</p>;
  }

  if (isPending) {
    return <p className="text-center text-white">Loading...</p>;
  } else if (isError) {
    return <p>Terjadi kesalahan {error?.message}</p>;
  }
  return (
    <>
      <div className="mt-5 py-15 px-6 md:px-12 lg:px-20 bg-gray-900">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-amber-400 text-sm tracking-widest ">
              Menu Andalan Kami
            </p>
            <h3 className="text-2xl md:text-2xl font-bold text-white leading-snug mt-2">
              Our Menu, Your Experience
            </h3>
            <p className="text-gray-400 mt-2 max-w-md">
              Temukan berbagai pilihan menu terbaik dan best seller dengan cita
              rasa yang khas dan pengalaman yang tak terlupakan.
            </p>
          </div>

          <Link to="/menu">
            <button
              className="bg-amber-500 text-gray-900 px-6 py-3 rounded-xl font-medium 
                        hover:scale-110 transition duration-300
                         shadow-md hover:shadow-xl self-start md:self-auto"
            >
              See More
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
