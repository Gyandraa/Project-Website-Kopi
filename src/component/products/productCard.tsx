import type { Products } from "../../types/products";

type Props = {
  products: Products[];
};
export default function ProductCard({ products }: Props) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="w-60 h-full"
            />
          </div>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.rating}</p>
        </div>
      ))}
    </div>
  );
}
