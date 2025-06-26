import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Typewriter from "typewriter-effect";
import PixelWalk from "../assets/diva_jump.gif";

const MAIN_COLOR = "#ccd6f6";

const Intro = () => {
  return (
    <Box
      id="intro"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a192f",
        color: MAIN_COLOR,
        py: 10,
        textAlign: "center",
      }}
    >
      <Stack spacing={4} alignItems="center">
        {/* 👣 Centered walking animation */}
        <Box
          component="img"
          src={PixelWalk}
          alt="Pixel Jumping"
          sx={{
            width: "120px",
            height: "auto",
          }}
        />

        <Typography variant="h3" sx={{ fontWeight: "bold", color: MAIN_COLOR }}>
          <Typewriter
            options={{
              strings: ["Hi, I’m Divalifta"],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </Typography>

        <Typography variant="h5" sx={{ color: MAIN_COLOR }}>
          Data Science | Engineering  | AI/ML Enthusiast
        </Typography>

        <Button
          variant="contained"
          href="#projects"
          size="large"
          sx={{
            backgroundColor: MAIN_COLOR,
            color: "#0a192f",
            "&:hover": {
              backgroundColor: "#b0c4de",
            },
          }}
        >
          View My Projects
        </Button>
      </Stack>
    </Box>
  );
};

export default Intro;




