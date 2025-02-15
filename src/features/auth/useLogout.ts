import { logoutUser } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending: loggingOut } = useMutation({
    mutationFn: logoutUser,
    mutationKey: ["logout-user"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/login", { replace: true });
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
  return {
    logout,
    loggingOut,
  };
}
