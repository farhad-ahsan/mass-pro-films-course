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
// import SignupStepsModal from "./SignupStepsModal";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

const tiers = [
  {
    title: "Content Creation Course",
    subheader: "Early bird discount",
    price: "5999/rs",
    description: [
      "60 Days of watch Time",
      "50+ Lessons",
      "15 Chapters",
      "Private Community for Creators",
    ],
    buttonText: "Buy Now",
    buttonVariant: "contained",
  },
];

export default function Pricing() {
  const user = React.useContext(UserContext);
  // const [modalOpen, setModalOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    if (user) {
      navigate("/course");
    } else {
      navigate("/signup-steps");
      // setModalOpen(true);
    }
  };

  // const handleClose = () => {
  //   setModalOpen(false);
  // };
  return (
    <>
      {/* <SignupStepsModal open={modalOpen} handleClose={handleClose} /> */}
      <Box>
        <Container
          id="pricing"
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
              textAlign: "center",
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
                    borderRadius: "48px",
                    background: "linear-gradient(#2583e2, #062a4c)",
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
                        // display: "flex",
                        alignItems: "baseline",
                        color: "grey.50",
                      }}
                    >
                      <Typography component={"h3"} variant="body1">
                        Original Price
                      </Typography>
                      <Typography
                        style={{
                          textDecoration: "line-through",
                        }}
                        variant="h4"
                      >
                        10000rs
                      </Typography>
                      <Typography component={"h3"} variant="body1">
                        Discounted Price
                      </Typography>
                      <Typography
                        component="h3"
                        variant="h2"
                        fontWeight={600}
                        color={"red"}
                      >
                        5999/rs
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
                            color: "red",
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
                      // color="red"
                      sx={{
                        color: "white",
                        bgcolor: "red",
                        "&:hover": {
                          bgcolor: "darkred",
                        },
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
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
