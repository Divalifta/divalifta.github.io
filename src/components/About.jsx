import React from "react";
import { Container, Typography, Box, Grid, Avatar } from "@mui/material";
import FadeInSection from "./FadeInSection";

const MAIN_COLOR = "#ccd6f6";
const BG_COLOR = "#0a192f";

// Fix: Use require or import for local images to ensure correct path resolution in build
const profilePic = process.env.PUBLIC_URL + "/diva_new.jpg";


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
              I am a data science graduate with an engineering background, passionate about machine learning and building impactful solutions.
            </Typography>

            <Typography variant="body1" sx={{ color: MAIN_COLOR }} paragraph>
              Over the past few years, I have explored how data, automation, and cloud technologies can create real-world value.
            </Typography>

            <Typography variant="body1" sx={{ color: MAIN_COLOR }} paragraph>
              Professionally, I have taken on strategic and compliance roles at TSI, a certification body partnered with TÜV Austria. There, I help align operations with international standards and support audit readiness. I am also involved with JIT, a company developing drone-based technology solutions across various sectors.
            </Typography>

            <Typography variant="body1" sx={{ color: MAIN_COLOR }} paragraph>
              In my free time, I create health and fitness content on Instagram and TikTok, combining my interests in wellness and productivity.
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
