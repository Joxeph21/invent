import { updateStore } from "@/services/apiStore";
import { BusinessFormValues } from "@/utils/Types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useUpdateStore() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: updateStoreInfo, isPending: isLoading } = useMutation({
    mutationKey: ["store"],
    mutationFn: (data: { values: BusinessFormValues; id: string }) =>
      updateStore(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["store"] });
      toast.success("Store Configured");
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return {
    updateStoreInfo,
    isLoading,
  };
}
