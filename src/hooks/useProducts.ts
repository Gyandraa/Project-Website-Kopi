import { useQuery } from "@tanstack/react-query";
import { getData } from "../service/data";
export default function UseProducts() {
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getData,
  });

  return {
    products: data || null,
    isPending,
    error,
  };
}
