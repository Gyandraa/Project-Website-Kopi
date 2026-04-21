import { useQuery } from "@tanstack/react-query";
import { getData } from "../service/data";
import type { Products } from "../types/productsTypes";

export default function useProductSlider() {
  const { data, isPending, isError, error } = useQuery<Products[]>({
    queryKey: ["productSlider"],
    queryFn: getData,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return {
    productSlider: data ?? [],
    isPending,
    isError,
    error,
  };
}
