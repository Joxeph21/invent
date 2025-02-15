import useGetUserSession from "@/features/user/useGetUserSession";
import FullLoader from "@/ui/FullLoader";
import React from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session, isLoading: gettingSession, error } = useGetUserSession();

  if (error) {
    toast.error("Session Expired, Please Log in");
    return <Navigate to="/login" replace />;
  }

  if (gettingSession) return <FullLoader />;

  if (session) return children;

  return <Navigate to="/login" replace />;
}
