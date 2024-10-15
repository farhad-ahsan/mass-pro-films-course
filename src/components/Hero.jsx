import { useContext } from "react";
import { alpha, Grid, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import SignupStepsModal from "./SignupStepsModal";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Facebook, YouTube } from "@mui/icons-material";

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
            pt: { xs: 8, sm: 12 },
            pb: { xs: 1, sm: 2 },
          }}
        >
          <Stack
            spacing={1}
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
                fontWeight: "bold",
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
              sx={{ pt: 1, width: { xs: "100%", sm: "auto" } }}
            >
              <Button
                size="large"
                variant="contained"
                sx={{
                  bgcolor: "red",
                  fontWeight: "bold",
                  fontSize: "24px",
                  "&:hover": {
                    bgcolor: "darkred",
                  },
                }}
                onClick={handleOpen}
              >
                BUY NOW
              </Button>
            </Stack>
          </Stack>
          <Box
            id="image"
            sx={(theme) => ({
              mt: { xs: 2, sm: 2 },
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
              src="https://www.youtube.com/embed/DfeQLjRoURY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer;  gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </Box>
          <Grid container justifyContent={"space-between"}>
            <Grid container item xs>
              <IconButton
                color="inherit"
                href="https://www.instagram.com/Massprofilms"
                aria-label="X"
                style={{
                  alignSelf: "flex-start",
                  padding: "4px",
                  marginRight: "8px",
                  marginTop: "16px",
                  background:
                    "linear-gradient(to bottom, #405DE6, #833AB4, #C13584, #F77737, #FCAE45)",
                }}
              >
                <InstagramIcon sx={{ fontSize: "100px", color: "white" }} />
              </IconButton>
              <Typography
                // textAlign="center"
                color="text.secondary"
                sx={{ alignSelf: "center", justifyContent: "center" }}
              >
                Check out our work on Instagram <br />{" "}
                <IconButton
                  color="inherit"
                  href="https://www.instagram.com/Massprofilms"
                  aria-label="X"
                  sx={{ alignSelf: "flex-start", color: "#C13584" }}
                >
                  <b>@MassProFilms</b>
                </IconButton>
              </Typography>
            </Grid>
            <Grid container item xs>
              <IconButton
                color="inherit"
                href="https://www.facebook.com/massprofilms"
                aria-label="X"
                sx={{ alignSelf: "center", justifyContent: "center" }}
              >
                <Facebook sx={{ fontSize: "100px", color: "#0679E9" }} />
              </IconButton>
              <Typography
                // textAlign="center"
                color="text.secondary"
                sx={{ alignSelf: "center" }}
              >
                Check out our work on Facebook <br />{" "}
                <IconButton
                  color="inherit"
                  href="https://www.facebook.com/massprofilms"
                  aria-label="X"
                  sx={{
                    alignSelf: "center",
                    justifyContent: "center",
                    color: "#0679E9",
                  }}
                >
                  <b>MassProFilmsFB</b>
                </IconButton>
              </Typography>
            </Grid>
            <Grid container item xs>
              <IconButton
                color="inherit"
                href="https://www.youtube.com/@massprofilms935"
                aria-label="X"
                sx={{ alignSelf: "flex-start" }}
              >
                <YouTube sx={{ fontSize: "100px", color: "#FF0000" }} />
              </IconButton>
              <Typography
                // textAlign="center"
                color="text.secondary"
                sx={{ alignSelf: "center" }}
              >
                Check out our work on Youtube <br />{" "}
                <IconButton
                  color="inherit"
                  href="https://www.youtube.com/@massprofilms935"
                  aria-label="X"
                  sx={{ alignSelf: "flex-start", color: "#FF0000" }}
                >
                  <b>MassProFilmsYT</b>
                </IconButton>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
