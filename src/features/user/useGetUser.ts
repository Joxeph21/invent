import { getUserAPI } from "@/services/apiUser";
import { useQuery } from "@tanstack/react-query";

export default function useGetUser() {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUserAPI,
  });

  const user = data

  return {
    isLoading,
    user,
    error,
  };
}
