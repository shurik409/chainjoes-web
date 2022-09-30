import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import { Main, PrivacyPolicy, Terms, Test } from "./pages";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-conditions" element={<Terms />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </Box>
  );
}

export default React.memo(App);
