import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
// import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const userTestimonials = [
  {
    name: "Zaraan Farooq",
    occupation: "Life-Changing Experience!",
    rating: "5/5",
    testimonial:
      "I enrolled in the content creation coaching program, and it exceeded my expectations. The step-by-step guidance helped me create engaging content for my business. Highly recommended!",
  },
  {
    name: "Zuhaib Khan",
    occupation: "Practical and Actionable",
    rating: "4.5/5",
    testimonial:
      "This filmmaking course was easy to follow, especially the editing software modules. I learned valuable skills and even got tips on using social media effectively.",
  },
  {
    name: "Maria Imran",
    occupation: "Content Creation U Rocks!",
    rating: "5/5",
    testimonial:
      "Mass Pro Films is a game-changer. His system is practical, and I’m now confidently creating content for multiple businesses.",
  },
  {
    name: "Rana Hammad",
    occupation: "Clarity and Confidence",
    rating: "4/5",
    testimonial:
      "The Ultimate Guide to Content Creation for Coaches helped me shift my mindset. Now, I create content with clarity and confidence.",
  },
  {
    name: "Hamza Malik",
    occupation: "Highly Informative",
    rating: "4.5/5",
    testimonial:
      "This course on content creation strategies for coaches and trainers provided valuable insights. The instructor’s rating speaks for itself!",
  },
  {
    name: "Hassan Fadul",
    occupation: "Expertise Unleashed!",
    rating: "5/5",
    testimonial:
      "I joined this content creation coaching program, and it transformed my approach. The three content pillars—connect, entertain, and learn—are now my secret weapons.",
  },
];

export default function Reviews() {
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
                  // avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
