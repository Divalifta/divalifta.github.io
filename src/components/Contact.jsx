import React from "react";
import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { Email } from "@mui/icons-material";

const MAIN_COLOR = "#ccd6f6";
const BG_COLOR = "#0a192f";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        textAlign: "center",
        backgroundColor: BG_COLOR,
        color: MAIN_COLOR,
      }}
    >
      <Container>
        <Typography
          variant="h4"
          className="section-title"
          gutterBottom
          sx={{ color: MAIN_COLOR, fontWeight: "bold" }}
        >
          Get in Touch
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{ color: MAIN_COLOR }}
        >
          I’m open to collaboration, meeting new people and finding opportunities.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 3, flexWrap: "wrap" }}
        >
          <Button
            variant="outlined"
            startIcon={<Email />}
            href="mailto:divaalifta@outlook.com"
            sx={{
              color: MAIN_COLOR,
              borderColor: MAIN_COLOR,
              boxShadow: `0 0 12px 2px ${MAIN_COLOR}66, 0 0 24px 4px ${MAIN_COLOR}33`,
              transition: "box-shadow 0.3s, border-color 0.3s, color 0.3s, background-color 0.3s",
              "&:hover": {
                backgroundColor: "#233554",
                borderColor: MAIN_COLOR,
                color: "#fff",
                boxShadow: `0 0 24px 6px ${MAIN_COLOR}cc, 0 0 48px 12px ${MAIN_COLOR}88`,
              },
            }}
          >
            Email Me
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
