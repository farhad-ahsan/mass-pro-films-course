import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import LandingPage from "./LandingPage";
import CoursePage from "./Course";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./UserContext";
import Login from "./Login";
import "./index.css";
import ProtectedRoute from "./ProtectedRoute";
import { SignupStepsPage } from "./components/SignupStepsModal";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup-steps",
      element: <SignupStepsPage />,
    },
    {
      path: "/course",
      element: (
        <ProtectedRoute>
          <CoursePage />
        </ProtectedRoute>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default function App() {
  const defaultTheme = createTheme({ palette: { mode: "light" } });

  return (
    <UserProvider>
      <ThemeProvider theme={defaultTheme}>
        <Router />
      </ThemeProvider>
    </UserProvider>
  );
}
