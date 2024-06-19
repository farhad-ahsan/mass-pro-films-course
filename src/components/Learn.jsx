import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Chip } from "@mui/material";

const SKILL_TO_LEARN = [
  "Photography",
  "Videography",
  "Adobe Photoshop",
  "Canva",
  "Adobe Premier",
  "Cap cut",
  "Adobe After Effects",
  "Adobe Audition",
  "Graphic Designing",
  "Preproduction",
  "Script Writing",
  "Story Board/AV Board Making",
  "Direction",
  "Photo & Video Lighting",
  "Use of Artificial Intelligence in Media Productions",
  "Execution of Projects",
  "Advertising",
  "International Marketing",
  "Digital Marketing",
  "How to sell your Skill",
];

export default function Learn() {
  return (
    <Box
      sx={() => ({
        bgcolor: "#06090a",
      })}
    >
      <Container
        id="skills"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4" color="white">
            Skills you are going to Learn
          </Typography>
          {/* <Typography variant="body1" color="text.secondary">
          See what our customers love about our products. Discover how we excel
          in efficiency, durability, and satisfaction. Join us for quality,
          innovation, and reliable support.
        </Typography> */}
        </Box>
        <Grid container spacing={2}>
          {SKILL_TO_LEARN.map((skill, index) => (
            <Grid item key={index}>
              <Chip
                variant="outlined"
                label={skill}
                sx={{
                  backgroundColor: "grey.900",
                  color: "white",
                  borderColor: "grey.800",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
