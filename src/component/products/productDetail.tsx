import { useParams } from "react-router-dom";
import { useState } from "react";
import useProductsById from "../../hooks/useProductsById";

export default function ProductDetail() {
  const { id } = useParams();
  const { products, isPending, isError, error } = useProductsById(Number(id));

  const [size, setSize] = useState<"small" | "large">("small");
  const [qty, setQty] = useState(1);

  if (isPending) return <p className="text-center mt-10">Loading...</p>;
  if (isError) return <p className="text-center mt-10">{error?.message}</p>;
  if (!products) return <p className="text-center mt-10">Not Found</p>;

  const finalPrice =
    (size === "large" ? products.price + 5000 : products.price) * qty;

  return (
    <>
      <div className="  px-10 py-5">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 grid md:grid-cols-2 gap-10 shadow-lg">
          <div>
            <img
              src={products.image}
              alt={products.name}
              className="w-full h-[400px] object-contain"
            />

            <div className="grid grid-cols-3  mt-5">
              <img
                src={products.image}
                className="h-24 object-contain mx-auto"
              />

              <img
                src={products.image}
                className="h-24 object-contain mx-auto"
              />

              <img
                src={products.image}
                className="h-24 object-contain mx-auto"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {products.name}
              </h2>

              <p className="text-gray-500 mt-3">{products.description}</p>

              <p className="mt-5 text-xl font-semibold text-gray-900">
                Rp {finalPrice.toLocaleString("id-ID")}
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold mb-2">Size:</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSize("small")}
                    className={`px-4 py-2 rounded-full border text-sm ${
                      size === "small" ? "bg-gray-900 text-white" : "bg-white"
                    }`}
                  >
                    Small
                  </button>
                  <button
                    onClick={() => setSize("large")}
                    className={`px-4 py-2 rounded-full border text-sm ${
                      size === "large" ? "bg-gray-900 text-white" : "bg-white"
                    }`}
                  >
                    Large (+5k)
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold mb-2">Quantity</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                    className="w-10 h-10 border rounded-full"
                  >
                    -
                  </button>

                  <span className="text-lg font-medium">{qty}</span>

                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-10 h-10 border rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              <button className="bg-lime-300 py-3 rounded-full font-semibold hover:opacity-90">
                Buy Now
              </button>

              <button className="border py-3 rounded-full font-semibold hover:bg-gray-100">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
