import React from "react";
import { Container, Typography, Box, Grid, Avatar } from "@mui/material";
import FadeInSection from "./FadeInSection";

const MAIN_COLOR = "#ccd6f6";
const BG_COLOR = "#0a192f";

import profilePic from public/divalifta.png 

const tech_stack = [
  "SQL",
  "Python",
  "R",
  "C#",
  "React.js",
  "JavaScript (ES6+)"
];

const About = () => (
  <Box
    id="about"
    sx={{
      py: 5,
      backgroundColor: BG_COLOR,
      color: MAIN_COLOR,
    }}
  >
    <Container>
      <FadeInSection>
        <Typography
          variant="h4"
          className="section-title"
          gutterBottom
          sx={{ color: MAIN_COLOR, fontWeight: "bold" }}
        >
          About Me
        </Typography>
      </FadeInSection>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <FadeInSection>
            <Typography variant="body1" sx={{ color: MAIN_COLOR }} paragraph>
              I recently completed my MSc in Data Science from the University of Malaya (UM), where my dissertation focused on User Engagement Analysis on Social Media Filters. Before that, I completed my Engineering degree at the University of Technology Malaysia (UTM), conducting research on Risk Assessment for a 3D-Printed Prosthetic Arm. Throughout my academic journey, I actively participated in various societies and took on several leadership roles.
            </Typography>
            <Typography variant="body1" sx={{ color: MAIN_COLOR }} paragraph>
              My current passion lies in Artificial Intelligence and Machine Learning. In my free time, I enjoy creating fitness content and creating healthy recipes.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="body1" sx={{ color: MAIN_COLOR, mb: 1 }}>
                Here are some technologies I have been working with:
              </Typography>
              <Box component="ul" className="tech-stack" sx={{ pl: 3, color: MAIN_COLOR, m: 0 }}>
                {tech_stack.map((tech_item, i) => (
                  <FadeInSection key={tech_item} delay={`${i + 1}00ms`}>
                    <li style={{ marginBottom: 4, fontSize: "1rem" }}>{tech_item}</li>
                  </FadeInSection>
                ))}
              </Box>
            </Box>
          </FadeInSection>
        </Grid>
        <Grid item xs={12} md={6}>
          <FadeInSection>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Avatar
                alt="Divalifta"
                src={profilePic}
                sx={{
                  width: { xs: 180, sm: 220, md: 240 },
                  height: { xs: 220, sm: 280, md: 320 },
                  border: `4px solid ${MAIN_COLOR}`,
                  boxShadow: "0 4px 24px 0 rgba(204,214,246,0.15)",
                  margin: "auto",
                }}
              />
            </Box>
          </FadeInSection>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default About;
