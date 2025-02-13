import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Overview from "./pages/Overview";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";
import CustomersPage from "./pages/CustomersPage";
import Orders from "./pages/Orders";
import Newsletter from "./pages/Newsletter";
import { ThemeProvider } from "@material-tailwind/react";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
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
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
