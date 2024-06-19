import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Learn from "./components/Learn";
import WhoIsThisFor from "./components/WhoIsThisFor";
import Reviews from "./components/Testimonials";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <>
      <CssBaseline />
      <AppAppBar />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <Divider />
        <Highlights />
        <Reviews />
        <Divider />
        <Divider />
        <Learn />
        <Divider />
        <WhoIsThisFor />
        <Divider />
        <Pricing />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}
