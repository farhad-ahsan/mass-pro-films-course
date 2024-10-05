import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const WHO_IS_THIS_FOR = [
  "Beginners/No Experience",
  "Students of any age",
  "Full Time Creators",
  "Brand Owners",
  "Agencies",
  "9 to 5 Job People",
];

export default function WhoIsThisFor() {
  return (
    <Container
      id="WhoIsThisFor"
      sx={{
        py: { xs: 2, sm: 4 },
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
        <Typography component="h2" variant="h4" color="text.primary">
          WHO IS THIS FOR?
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {WHO_IS_THIS_FOR.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 0,
                // p: 1,
              }}
            >
              <CardContent
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    p: 2,
                    pb: "10px !important",
                  },
                })}
              >
                <Typography variant="body2" color="text.secondary">
                  {skill}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
