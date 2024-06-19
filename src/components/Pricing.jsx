import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SignupStepsModal from "./SignupStepsModal";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

const tiers = [
  {
    title: "Content Creation Course",
    subheader: "Early bird discount",
    price: "6000/rs",
    description: [
      "9 Hours of watch Time",
      "50+ Lessons",
      "15 Chapters",
      "Private Community for Creators",
    ],
    buttonText: "Start now",
    buttonVariant: "contained",
  },
  // {
  //   title: 'Free',
  //   price: '0',
  //   description: [
  //     '10 users included',
  //     '2 GB of storage',
  //     'Help center access',
  //     'Email support',
  //   ],
  //   buttonText: 'Sign up for free',
  //   buttonVariant: 'outlined',
  // },
  // {
  //   title: 'Professional',
  //   subheader: 'Recommended',
  //   price: '15',
  //   description: [
  //     '20 users included',
  //     '10 GB of storage',
  //     'Help center access',
  //     'Priority email support',
  //     'Dedicated team',
  //     'Best deals',
  //   ],
  //   buttonText: 'Start now',
  //   buttonVariant: 'contained',
  // },
  // {
  //   title: 'Enterprise',
  //   price: '30',
  //   description: [
  //     '50 users included',
  //     '30 GB of storage',
  //     'Help center access',
  //     'Phone & email support',
  //   ],
  //   buttonText: 'Contact us',
  //   buttonVariant: 'outlined',
  // },
];

export default function Pricing() {
  const user = React.useContext(UserContext);
  const [modalOpen, setModalOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    if (user) {
      navigate("/course");
    } else {
      setModalOpen(true);
    }
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <SignupStepsModal open={modalOpen} handleClose={handleClose} />
      <Box>
        <Container
          id="pricing"
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
            <Typography
              mb="25px"
              component="h2"
              variant="h4"
              color="text.primary"
            >
              Master the Art of Content Creation
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Ready to start? <br /> Enroll today and take the first step
              towards mastering the art of content creation!
            </Typography>
          </Box>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            {tiers.map((tier) => (
              <Grid item key={tier.title} xs={12} sm={12} md={12}>
                <Card
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    border: "1px solid",
                    borderColor: "primary.main",
                    background: "linear-gradient(#033363, #021F3B)",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        mb: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "grey.100",
                      }}
                    >
                      <Typography component="h3" variant="h6">
                        Content Creation Course
                      </Typography>
                      <Chip
                        icon={<AutoAwesomeIcon />}
                        label={tier.subheader}
                        size="small"
                        sx={{
                          background: (theme) =>
                            theme.palette.mode === "light" ? "" : "none",
                          backgroundColor: "primary.contrastText",
                          "& .MuiChip-label": {
                            color: "primary.dark",
                          },
                          "& .MuiChip-icon": {
                            color: "primary.dark",
                          },
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                        color: "grey.50",
                      }}
                    >
                      <Typography
                        sx={{
                          textDecoration: "line-through",
                          mr: 8,
                        }}
                        component="h3"
                        variant="h2"
                      >
                        10000rs
                      </Typography>
                      <Typography component="h3" variant="h2">
                        6000/rs
                      </Typography>
                      <Typography component="h3" variant="h6">
                        &nbsp; LifeTime Access
                      </Typography>
                    </Box>
                    <Divider
                      sx={{
                        my: 2,
                        opacity: 0.2,
                        borderColor: "grey.500",
                      }}
                    />
                    {tier.description.map((line) => (
                      <Box
                        key={line}
                        sx={{
                          py: 1,
                          display: "flex",
                          gap: 1.5,
                          alignItems: "center",
                        }}
                      >
                        <CheckCircleRoundedIcon
                          sx={{
                            width: 20,
                            color: "primary.light",
                          }}
                        />
                        <Typography
                          component="text"
                          variant="subtitle2"
                          sx={{
                            color: "grey.200",
                          }}
                        >
                          {line}
                        </Typography>
                      </Box>
                    ))}
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      onClick={handleOpen}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
