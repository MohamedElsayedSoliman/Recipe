import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const UnmatchRoute: React.FC = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ background: "#131A25", minHeight: "100vh" }}
      >
        <Typography
          variant="h3"
          component="h2"
          gutterBottom={true}
          align="center"
          color="white"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2.5rem" },
            whiteSpace: "nowrap",
          }}
        >
          Please go back to the main page
        </Typography>
      </Box>
    </>
  );
};

export default UnmatchRoute;
