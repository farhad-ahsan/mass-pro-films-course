import * as React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import LOGO from "../assets/logo0.png";
// import {SignupStepsPage} from "./SignupStepsModal";
// import SignupStepsModal from "./SignupStepsModal";

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

function AppAppBar() {
  const [open, setOpen] = useState(false);
  const user = React.useContext(UserContext);
  const navigate = useNavigate();

  // const [modalOpen, setModalOpen] = useState(false);
  const isRoot = window.location.pathname === "/";

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
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
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to the home page after sign-out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <>
      {/* <SignupStepsModal open={modalOpen} handleClose={handleClose} /> */}
      <div>
        <AppBar
          position="fixed"
          sx={{
            boxShadow: 0,
            bgcolor: "transparent",
            backgroundImage: "none",
            mt: 2,
          }}
        >
          <Container maxWidth="lg">
            <Toolbar
              variant="regular"
              sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
                borderRadius: "999px",
                bgcolor:
                  theme.palette.mode === "light"
                    ? "rgba(255, 255, 255, 0.4)"
                    : "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(24px)",
                maxHeight: 40,
                border: "1px solid",
                borderColor: "divider",
                boxShadow:
                  theme.palette.mode === "light"
                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                    : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
              })}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  ml: "-18px",
                  px: 0,
                }}
              >
                <img
                  onClick={() => navigate("/")}
                  src={LOGO}
                  style={logoStyle}
                  alt="logo"
                />
                {isRoot && (
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <MenuItem
                      onClick={() => scrollToSection("highlights")}
                      sx={{ py: "6px", px: "12px" }}
                    >
                      <Typography variant="body2" color="text.primary">
                        Highlights
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => scrollToSection("reviews")}
                      sx={{ py: "6px", px: "12px" }}
                    >
                      <Typography variant="body2" color="text.primary">
                        Reviews
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => scrollToSection("skills")}
                      sx={{ py: "6px", px: "12px" }}
                    >
                      <Typography variant="body2" color="text.primary">
                        Skills
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => scrollToSection("pricing")}
                      sx={{ py: "6px", px: "12px" }}
                    >
                      <Typography variant="body2" color="text.primary">
                        Pricing
                      </Typography>
                    </MenuItem>
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 0.5,
                  alignItems: "center",
                }}
              >
                {!user && (
                  <Button
                    color="error"
                    variant="outlined"
                    size="large"
                    sx={{ fontWeight: "bold" }}
                    component={Link}
                    to="/login"
                  >
                    Sign in
                  </Button>
                )}
                {user ? (
                  <>
                    <Button
                      onClick={handleSignOut}
                      color="error"
                      variant="contained"
                      size="small"
                    >
                      Sign Out
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      size="small"
                      component={Link}
                      to="/course"
                    >
                      Go to Course
                    </Button>
                  </>
                ) : (
                  <Button
                    sx={{
                      bgcolor: "red",
                      "&:hover": {
                        bgcolor: "darkred",
                      },
                    }}
                    variant="contained"
                    size="small"
                    onClick={handleOpen}
                  >
                    BUY NOW
                  </Button>
                )}
              </Box>
              <Box sx={{ display: { sm: "", md: "none" } }}>
                <Button
                  variant="text"
                  color="primary"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  sx={{ minWidth: "30px", p: "4px" }}
                >
                  <MenuIcon />
                </Button>
                <Drawer
                  anchor="right"
                  open={open}
                  onClose={toggleDrawer(false)}
                >
                  <Box
                    sx={{
                      minWidth: "60dvw",
                      p: 2,
                      backgroundColor: "background.paper",
                      flexGrow: 1,
                    }}
                  >
                    <MenuItem onClick={() => scrollToSection("highlights")}>
                      Highlights
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection("reviews")}>
                      Reviews
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection("skills")}>
                      Skills
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection("pricing")}>
                      Pricing
                    </MenuItem>
                    <Divider />
                    {!user && (
                      <MenuItem>
                        <Button
                          color="error"
                          variant="outlined"
                          size="large"
                          sx={{ fontWeight: "bold", width: "100%" }}
                          component={Link}
                          to="/login"
                        >
                          Sign in
                        </Button>
                      </MenuItem>
                    )}
                    {user ? (
                      <>
                        <MenuItem>
                          <Button
                            color="error"
                            variant="contained"
                            onClick={handleSignOut}
                            sx={{ width: "100%" }}
                          >
                            Sign Out
                          </Button>
                        </MenuItem>
                        <MenuItem>
                          <Button
                            color="primary"
                            variant="contained"
                            component={Link}
                            to="/course"
                            sx={{ width: "100%" }}
                          >
                            Go to Course
                          </Button>
                        </MenuItem>
                      </>
                    ) : (
                      <MenuItem>
                        <Button
                          sx={{
                            bgcolor: "red",
                            width: "100%",
                            "&:hover": {
                              bgcolor: "darkred",
                            },
                          }}
                          variant="contained"
                          onClick={handleOpen}
                        >
                          Start Now
                        </Button>
                      </MenuItem>
                    )}
                  </Box>
                </Drawer>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
}

export default AppAppBar;
