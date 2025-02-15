import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Overview from "./pages/Overview";
import Settings from "./pages/Settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";
import CustomersPage from "./pages/CustomersPage";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Newsletter from "./pages/Newsletter";
import { ThemeProvider } from "@material-tailwind/react";
import SignUp from "./pages/SignUp";
import AuthCallback from "./components/AuthCallback";
import CompleteProfile from "./pages/CompleteProfile";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 120000,
    },
  },
});

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "analytics",
          element: <Analytics />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "customers",
          element: <CustomersPage />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "newsletter",
          element: <Newsletter />,
        },
      ],
    },
    {
      path: "complete-profile",
      element: <CompleteProfile />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "auth-callback",
      element: <AuthCallback />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
