import { Link } from "react-router-dom";
import type { Products } from "../../types/productsTypes";

type Props = {
  products: Products[];
};

export default function ProductList({ products }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 px-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
        >
          <Link to={`/productDetail/${product.id}`}>
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-50 object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>

              <p className="text-red-400 font-bold mt-1">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
