import { useQuery } from "@tanstack/react-query";
import { getData } from "../service/data";
import type { Products } from "../types/productsTypes";

export default function useProducts() {
  const { data, isPending, error } = useQuery<Products[]>({
    queryKey: ["products"],
    queryFn: getData,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return {
    products: data ?? [],
    isPending,
    error,
  };
}
