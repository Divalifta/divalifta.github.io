import React from "react";
import { Container, Typography, Box, Grid, Avatar } from "@mui/material";
import FadeInSection from "./FadeInSection";

const MAIN_COLOR = "#ccd6f6";
const BG_COLOR = "#0a192f";

const profilePic = "/diva_new.jpg";

const tech_stack = [
  "SQL",
  "Python",
  "R",
  "C#",
  "React.js",
  "Javascript ES6+"
];

const About = () => {
  return (
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
                A data science graduate with an engineering background, a passion for machine learning, and a curiosity for building things that matter.
              </Typography>

              <Typography variant="body1" sx={{ color: MAIN_COLOR }} paragraph>
                Currently finishing my Master of Data Science, I've spent the past few years exploring how data, automation, and cloud technologies can drive real-world impact.
              </Typography>

              <Typography variant="body1" sx={{ color: MAIN_COLOR }} paragraph>
                Outside of academics, I've taken on strategic and compliance responsibilities at Tafa International Certification, a certification body partnered with TÜV Austria where I contribute to aligning operations with international standards and supporting audit readiness. I’m also involved in JIT, a company exploring drone-based tech solutions across sectors.
              </Typography>

              <Typography variant="body1" sx={{ color: MAIN_COLOR }} paragraph>
                In my free time, I create health and fitness content through Instagram and TikTok, combining my passion for health and productivity.
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography variant="body1" sx={{ color: MAIN_COLOR }} paragraph>
                  Here are some technologies I have been working with:
                </Typography>
                <ul className="tech-stack" style={{ paddingLeft: "1.2em", color: MAIN_COLOR }}>
                  {tech_stack.map((tech_item, i) => (
                    <FadeInSection key={tech_item} delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  ))}
                </ul>
              </Box>
            </FadeInSection>
          </Grid>
          <Grid item xs={12} md={6}>
            <FadeInSection>
              <Avatar
                alt="Divalifta"
                src={profilePic}
                sx={{
                  width: 240,
                  height: 320,
                  margin: "auto",
                  border: `4px solid ${MAIN_COLOR}`,
                  boxShadow: "0 4px 24px 0 rgba(204,214,246,0.15)",
                }}
              />
            </FadeInSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
