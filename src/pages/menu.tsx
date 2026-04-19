import ProductCard from "../component/products/productCard";
import UseProducts from "../hooks/useProducts";

export default function MenuPages() {
  const { products, isPending, error } = UseProducts();

  if (isPending) {
    return <p className="text-center ">Loading...</p>;
  } else if (error) {
    return <p className="text-center">Terjadi Kesalahan</p>;
  } else if (!products) {
    return <p className="text-center">Product Tidak Ditemukan</p>;
  }
  console.log(products);
  return (
    <>
      <div>
        List menu yang kami punya
        <ProductCard products={products} />
      </div>
    </>
  );
}
