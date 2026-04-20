import { useQuery } from "@tanstack/react-query";
import { getData } from "../service/data";
import type { Products } from "../types/products";

export default function UseProductSlider() {
  const { data, isPending, isError, error } = useQuery<Products[]>({
    queryKey: ["productSlider"],
    queryFn: getData,
  });

  return {
    productSlider: data ?? [],
    isPending,
    isError,
    error,
  };
}
