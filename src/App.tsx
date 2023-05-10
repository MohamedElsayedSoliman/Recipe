import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Provider from "./Context/data";
import AuthProvider from "./Context/AuthContext";
import { ThemeProvider, createTheme } from "@mui/material";
import Register from "./pages/Register";

import SignIn from "./components/SignIn";
import ForgetPassword from "./components/ForgetPassword";

import UnmatchRoute from "./components/UnmatchRoute";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Recipe from "./pages/Recipe";
import Payment from "./pages/Payment";

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 300,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Provider>
            <Routes>
              <Route path="/Register" element={<Register />} />
              <Route index path="/SignIn" element={<SignIn />} />
              <Route path="/ForgetPassword" element={<ForgetPassword />} />
              <Route
                path="/"
                element={
                  <ProtectedRoutes>
                    {" "}
                    <Home />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/career"
                element={
                  <ProtectedRoutes>
                    <Career />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/recipe"
                element={
                  <ProtectedRoutes>
                    <Recipe />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/recipe/:recipeDetails"
                element={
                  <ProtectedRoutes>
                    <Recipe />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/payment"
                element={
                  <ProtectedRoutes>
                    <Payment />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="*"
                element={
                  <ProtectedRoutes>
                    <UnmatchRoute />{" "}
                  </ProtectedRoutes>
                }
              />
            </Routes>
          </Provider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
