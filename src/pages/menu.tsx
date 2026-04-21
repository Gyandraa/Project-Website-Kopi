import ProductList from "../component/products/productList";
import useProducts from "../hooks/useProducts";

export default function MenuPages() {
  const { products, isPending, error } = useProducts();

  if (isPending) {
    return <p className="text-center ">Loading...</p>;
  } else if (error) {
    return <p className="text-center">Terjadi Kesalahan</p>;
  } else if (products.length === 0) {
    return <p className="text-center">Product Tidak Ditemukan</p>;
  }

  return (
    <>
      <div className="py-5 px-4 bg-gray-200">
        <div className="bg-white rounded-3xl px-10 py-5 ">
          <h2 className="text-2xl font-bold mb-6 ">
            Menu <span className="text-amber-500">Kami</span>
          </h2>

          <ProductList products={products} />
        </div>
      </div>
    </>
  );
}
