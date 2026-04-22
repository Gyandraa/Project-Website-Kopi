import { getDataById } from "../service/data";
import { useQuery } from "@tanstack/react-query";
import type { Products } from "../types/productsTypes";
export default function useProductsById(id: number) {
  const { data, isPending, isError, error } = useQuery<Products>({
    queryKey: ["products", id],
    queryFn: () => getDataById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return {
    products: data ?? null,
    isPending,
    isError,
    error,
  };
}
