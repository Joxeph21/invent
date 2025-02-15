import { signinwithGoogle } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";

export default function useOAuth() {
  const { mutate: googleSignIn, isPending: isLoading } = useMutation({
    mutationKey: ["user"],
    mutationFn: signinwithGoogle,
  });
  return {
    googleSignIn,
    isLoading,
  };
}
