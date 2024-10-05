import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import { useMediaQuery, useTheme } from "@mui/material";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
// import MAIN_IMAGE from "../assets/mainCourseHeroImage.jpg";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Market-Driven Experience",
    description:
      "Learn from real-world projects and scenarios that mirror today's content creation landscape.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Hands-On Learning",
    description:
      "Engage with actual projects that challenge you to apply your knowledge and hone your craft.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Community and Support",
    description:
      "Join a vibrant community of creators, where collaboration and feedback fuel your growth.",
  },
  // {
  //   icon: <ThumbUpAltRoundedIcon />,
  //   title: "Flexibility",
  //   description:
  //     "Access our classes at your own pace, from anywhere, to fit your unique schedule and learning style.",
  // },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Rich Curriculum",
    description:
      "Explore a diverse range of topics, from storytelling and branding to digital marketing and analytics.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Practical Skills",
    description:
      "Acquire the tools and techniques essential for producing captivating and impactful content.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Personalized Feedback",
    description:
      "Receive tailored advice and critiques from Farhad Ahsan and our team of experts.",
  },
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Highlights() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="highlights"
      sx={() => ({
        py: { xs: 2, sm: 4 },
        color: "white",
        bgcolor: "#06090a",
      })}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 2, sm: 4 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: "center",
          }}
        >
          <Typography component="h2" variant="h4">
            Unlock Your Creative Potential with Mass Pro Films Content Creation
            Coaching Program
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Embark on a transformative journey with Mass Pro Films comprehensive
            Content Creation Coaching Program, meticulously designed to elevate
            your skills and turn your passion into a thriving career. With over
            50 expert-led classes, you&apos;ll dive deep into the art and
            science of content creation, guided by the seasoned insights of
            Farhad Ahsan, our esteemed founder and industry maven.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {isSmallScreen ? (
            <AutoPlaySwipeableViews>
              {items.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Stack
                    direction="column"
                    color="inherit"
                    component={Card}
                    spacing={1}
                    useFlexGap
                    sx={{
                      p: 3,
                      height: "100%",
                      border: "1px solid",
                      borderColor: "grey.800",
                      background: "transparent",
                      backgroundColor: "grey.900",
                    }}
                  >
                    <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                    <div>
                      <Typography fontWeight="medium" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "grey.400" }}>
                        {item.description}
                      </Typography>
                    </div>
                  </Stack>
                </Grid>
              ))}
            </AutoPlaySwipeableViews>
          ) : (
            <>
              {items.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Stack
                    direction="column"
                    color="inherit"
                    component={Card}
                    spacing={1}
                    useFlexGap
                    sx={{
                      p: 3,
                      height: "100%",
                      border: "1px solid",
                      borderColor: "grey.800",
                      background: "transparent",
                      backgroundColor: "grey.900",
                    }}
                  >
                    <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                    <div>
                      <Typography fontWeight="medium" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "grey.400" }}>
                        {item.description}
                      </Typography>
                    </div>
                  </Stack>
                </Grid>
              ))}
            </>
            // <Testimonials />
          )}

          {/* {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))} */}
        </Grid>
      </Container>
    </Box>
  );
}
