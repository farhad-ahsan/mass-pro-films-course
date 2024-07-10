import React, { useContext, useState } from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import SignupStepsModal from "./SignupStepsModal";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  // const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const user = useContext(UserContext);
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
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          backgroundImage:
            theme.palette.mode === "light"
              ? "linear-gradient(180deg, #CEE5FD, #FFF)"
              : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
        })}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ width: { xs: "100%", sm: "70%" } }}
          >
            <Typography
              variant="h1"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignSelf: "center",
                textAlign: "center",
                fontSize: "clamp(3.5rem, 10vw, 4rem)",
              }}
            >
              Turn Content Creation into Full Time Career
            </Typography>
            <Typography
              textAlign="center"
              color="text.secondary"
              sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
            >
              Get Access to over 50+ Classes & Learn More than 20 Skills taught
              by Farhad Ahsan Founder of Mass Pro Films, with Market Driven
              Experience
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              <Button
                size="large"
                variant="outlined"
                color="primary"
                onClick={handleOpen}
              >
                START NOW
              </Button>
            </Stack>
          </Stack>
          <Box
            id="image"
            sx={(theme) => ({
              mt: { xs: 8, sm: 10 },
              alignSelf: "center",
              height: { xs: 200, sm: 700 },
              width: "100%",
              // backgroundImage: `url(${MAIN_IMAGE})`,
              backgroundSize: "cover",
              borderRadius: "10px",
              outline: "1px solid",
              outlineColor:
                theme.palette.mode === "light"
                  ? alpha("#BFCCD9", 0.5)
                  : alpha("#9CCCFC", 0.1),
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                  : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
            })}
          >
            <iframe
              width="100%"
              height="100%"
              style={{
                borderRadius: "10px",
              }}
              src="https://www.youtube.com/embed/c6eyggw2rBs?si=tJoqKG-yA88X3Jkw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer;  gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}
