import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import SwipeableViews from "react-swipeable-views";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { autoPlay } from "react-swipeable-views-utils";
import { useMediaQuery, useTheme } from "@mui/material";

const userTestimonials = [
  {
    name: "Sikandar Usman",
    occupation: "Life-Changing Experience!",
    rating: "5/5",
    testimonial:
      "I was doing a small job before this course When i started this course it was a very life changing experience after completing it i resign from my job & started hunting projects & right now after 3 months iam doing very well for me. Highly recommended!",
  },
  {
    name: "Arooj Asim",
    occupation: "Practical and Actionable",
    rating: "4.5/5",
    testimonial:
      "My 13 year child has done this course & now he is making gaming & Vlogging content on youtube. I am very happy that my son is doing something productive Thank you Mass Pro Films.",
  },
  {
    name: "Sarmad Salahudin",
    occupation: "Best online Course yet!",
    rating: "5/5",
    testimonial:
      "Mass Pro Films is a game-changer. I am a teacher used to record my lectures i was facing many technical issues but after buying this course everything seems right now it is Pakistan Biggest Course.",
  },
  {
    name: "Maria Yasir",
    occupation: "Best Earning source",
    rating: "5/5",
    testimonial:
      "I am a House Wife & i was trying to support my husband financially for a long time Content Creation Program helps me to earn from home now i am selling my Graphic Designing & Video Editing Services on Upwork.",
  },
  {
    name: "Umar Chohan",
    occupation: "Highly Informative",
    rating: "4.5/5",
    testimonial:
      "Just Completed This Giagantic Course now i want to become a product photographer",
  },
  {
    name: "Zakriya Arif",
    occupation: "It Was Fun!",
    rating: "5/5",
    testimonial:
      "I joined this content creation coaching program, and it transformed my approach. Full High Quality & he way they have teached Post Production is very Fun & informative.",
  },
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Testimonials = () => {
  return (
    <>
      {userTestimonials.map((testimonial, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flexGrow: 1,
              p: 1,
            }}
          >
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {testimonial.testimonial}
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                pr: 2,
              }}
            >
              <CardHeader
                title={testimonial.name}
                subheader={testimonial.occupation}
              />
            </Box>
          </Card>
        </Grid>
      ))}
    </>
  );
};
export default function Reviews() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      id="reviews"
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
        <Typography component="h2" variant="h4" color="text.primary">
          Reviews
        </Typography>
        <Typography variant="body1" color="text.secondary">
          See what our valuable community loves about our program. Discover how
          we excel in supporting creators, making them valuable assets in the
          market. Join our program and start your content creation journey!
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {isSmallScreen ? (
          <AutoPlaySwipeableViews>
            {userTestimonials.map((testimonial, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{ display: "flex" }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexGrow: 1,
                    p: 1,
                  }}
                >
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.testimonial}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      pr: 2,
                    }}
                  >
                    <CardHeader
                      title={testimonial.name}
                      subheader={testimonial.occupation}
                    />
                  </Box>
                </Card>
              </Grid>
            ))}
          </AutoPlaySwipeableViews>
        ) : (
          <Testimonials />
        )}
      </Grid>
    </Container>
  );
}
