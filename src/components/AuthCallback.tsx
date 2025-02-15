import useGetStore from "@/features/store/useGetStore";
import useGetUserSession from "@/features/user/useGetUserSession";
import FullLoader from "@/ui/FullLoader";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function AuthCallback() {
  const [searchParams] = useSearchParams();
  const error = searchParams.get("error") || null;
  const navigate = useNavigate();
  const hasRun = useRef(false);
  const { session, isLoading: gettingSession } = useGetUserSession();
  const userId = session?.user?.id;
  const { data, isLoading } = useGetStore(userId as string);

  useEffect(() => {
    if (error && !hasRun.current) {
      hasRun.current = true;
      setTimeout(() => {
        toast.error("User denied request");
        navigate("/login");
      }, 500);
    }
  }, [error]);

  useEffect(() => {
    if (!gettingSession && !userId) {
      navigate("/login");
    }
  }, [gettingSession, userId]);

  useEffect(() => {
    if (data) {
      if (
        !data.business_name ||
        !data.business_email ||
        !data.business_type ||
        !data.business_address
      ) {
        navigate("/complete-profile", { state: { userId } });
      } else {
        navigate("/");
      }
    }
  }, [data, navigate, userId]);
  if (isLoading || gettingSession) return <FullLoader />;

  return <FullLoader />;
}
