import { getUserSession } from "@/services/apiUser";
import { useQuery } from "@tanstack/react-query";

export default function useGetUserSession() {
  const {
    data: session,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user-session"],
    queryFn: getUserSession,
  });

  return {
    error,
    isLoading,
    session,
  };
}
