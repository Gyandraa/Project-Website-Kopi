import type { Products } from "../../types/productsTypes";
import { Link } from "react-router-dom";
type Props = {
  productSlider: Products[];
};

export default function ProductSlider({ productSlider }: Props) {
  const sliderProduct = productSlider.slice(0, 4);

  return (
    <div className="mt-10 overflow-x-auto scroll-smooth">
      <div className="flex  justify-center">
        <div className="flex gap-6">
          {sliderProduct.map((product) => (
            <div
              key={product.id}
              className="min-w-[200px] bg-gray-800 rounded-2xl p-4 
            shadow-md hover:shadow-xl 
            transition duration-300 
            hover:-translate-y-2 cursor-pointer text-center"
            >
              <Link to={`/productDetail/${product.id}`}>
                <div className="w-full h-40 overflow-hidden rounded-xl justify-center items-center flex">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover 
                           hover:scale-110 transition duration-300"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-amber-400 font-semibold text-lg">
                    {product.name}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
