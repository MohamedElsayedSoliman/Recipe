import React, { useState } from "react";

import { Box, Container } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchBar from "../components/SearchBar";
import RecipeCards from "../components/RecipeCards";
import Features from "../components/Features";
import Prices from "../components/Prices";
import Testimonials from "../components/Testimonials";

const Home: React.FC = () => {
  const [search, setSearch] = useState<any>();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          postion: "relative",
          background: "#131A25",
        }}
      >
        <Container>
          <HeroBanner />

          <SearchBar search={search} setSearch={setSearch} />

          <RecipeCards search={search} />
          <Features />
        </Container>
      </Box>
      <Box sx={{ background: "#131A25" }}>
        <Prices />
        <Testimonials />
      </Box>
    </>
  );
};

export default Home;
