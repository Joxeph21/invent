import { getStoreAPI } from "@/services/apiStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useGetStore(id?: string) {
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["store", id],
    queryFn: async () => {
      if (!id) return null;
      return getStoreAPI(id);
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (error) {
      navigate("/login");
    }
  }, [error, navigate]);

  return {
    data,
    isLoading,
  };
}
