import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import { Main, PrivacyPolicy, Terms } from "./pages";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-conditions" element={<Terms />} />
      </Routes>
    </Box>
  );
}

export default React.memo(App);
