import React from "react";
import { Box, Typography, Container } from "@mui/material";

const MAIN_COLOR = "#ccd6f6";
const BG_COLOR = "#0a192f";

const Credits = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        textAlign: "center",
        backgroundColor: BG_COLOR,
        color: MAIN_COLOR,
      }}
    >
      <Container>
        <Typography variant="body2" sx={{ color: MAIN_COLOR }}>
          Built and designed by Divalifta.
        </Typography>
        <Typography variant="body2" sx={{ color: MAIN_COLOR }}>
          All rights reserved. ©
        </Typography>
      </Container>
    </Box>
  );
};

export default Credits;
