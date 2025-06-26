import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  IconButton
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import StockMarketImg from "../assets/GRU_Model.png";
import RealEstateImg from "../assets/RealEstate.png";
import AirQualityImg from "../assets/API.png";

const MAIN_COLOR = "#ccd6f6";
const BG_COLOR = "#0a192f";

// Add a githubLink property for each project
const projects = [
  {
    title: "Stock Market Prediction",
    description:
      "Developed a robust predictive model for Stock Prices using over five years of historical data, enhanced by market sentiment analysis with the GRU model dominating at 95% accuracy.",
    tools: "Python, GRU, Sentiment Analysis",
    githubLink: "https://github.com/yourusername/stock-market-prediction",
    image: StockMarketImg
  },
  {
    title: "Real Estate Price Prediction",
    description:
      "Built a web application to predict real estate prices using historical data, integrating a machine learning model. Deployed the application using Flask for scalability and ease of use. Achieved 85% accuracy in price predictions, providing valuable insights for real estate investors. Developed in Python with an interactive JavaScript frontend.",
    tools: "Python, Flask, JavaScript",
    githubLink: "https://github.com/yourusername/real-estate-price-prediction",
    image: RealEstateImg,
  },
  {
    title: "Air Quality Monitoring System",
    description:
      "Developed a machine learning model to predict air quality levels using a dataset from the Air Division of Jabatan Alam Sekitar (JAS). Deployed the model on AWS S3 for scalable storage and real-time predictions, reducing latency by 25% compared to on-premises solutions.",
    tools: "Python, AWS S3, XGBoost",
    githubLink: "https://github.com/yourusername/air-quality-forecasting",
    image: AirQualityImg
  }
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 4,
        backgroundColor: BG_COLOR,
        color: MAIN_COLOR,
      }}
    >
      <Container>
        <Typography
          variant="h4"
          className="section-title"
          gutterBottom
          sx={{ color: MAIN_COLOR, fontWeight: "bold", py: 3}}
        >
          Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  backgroundColor: "#112240",
                  color: MAIN_COLOR,
                  border: `2px solid ${MAIN_COLOR}`,
                  boxShadow: `0 0 12px 2px ${MAIN_COLOR}66, 0 0 24px 4px ${MAIN_COLOR}33`,
                  transition: "box-shadow 0.3s, border-color 0.3s",
                  '&:hover': {
                    boxShadow: `0 0 24px 6px ${MAIN_COLOR}cc, 0 0 48px 12px ${MAIN_COLOR}88`,
                    borderColor: MAIN_COLOR,
                  },
                }}
              >
                {project.image && (
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px"
                    }}
                  />
                )}
                <CardHeader
                  title={
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span>{project.title}</span>
                      {project.githubLink && (
                        <IconButton
                          aria-label="GitHub repository"
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: MAIN_COLOR,
                            ml: 1,
                            "&:hover": {
                              color: "#fff",
                              backgroundColor: "#233554",
                            },
                          }}
                          size="small"
                        >
                          <GitHubIcon />
                        </IconButton>
                      )}
                    </Box>
                  }
                  sx={{
                    color: MAIN_COLOR,
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                  }}
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: MAIN_COLOR }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
                    {project.tools.split(", ").map((tool, i) => (
                      <Chip
                        key={i}
                        label={tool}
                        size="small"
                        sx={{
                          backgroundColor: "#233554",
                          color: MAIN_COLOR,
                          fontWeight: "bold",
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
