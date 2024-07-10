import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Modal,
  Typography,
  Container,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import WhatsAppForm from "./WhatsappForm";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const steps = [
  "Step 1: Send a Payment of 6000rs to one of the listed payment options below",
  "Step 2: Enter your name",
  "Step 3: Enter your email address",
  "Step 4: Submit this information via WhatsApp and send us the payment proof. You will have access to your account shortly.",
];

const PaymentOptions = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Jazz Cash
        </AccordionSummary>
        <AccordionDetails sx={{ fontWeight: "bold" }}>
          Account Title: Farhad Ahsan
          <br />
          Account number: 03044794791
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Meezan Bank
        </AccordionSummary>
        <AccordionDetails sx={{ fontWeight: "bold" }}>
          Account Title: Farhad Ahsan
          <br />
          Account number: 02350103461829
          <br />
          Canal road Mughalpura
        </AccordionDetails>
      </Accordion>
    </>
  );
};
export const SignupStepsPage = () => {
  const navigate = useNavigate();
  return (
    // <Modal open={open} onClose={handleClose}>
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
          maxHeight: "85vh",
          overflow: "auto",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          To access the Course you need to complete these steps
        </Typography>
        <List>
          {steps.map((step, index) => (
            <>
              <ListItem key={index}>
                <ListItemText primary={step} />
              </ListItem>
              {index === 0 && <PaymentOptions />}
            </>
          ))}
        </List>
        <WhatsAppForm
          handleClose={() => {
            navigate("/");
          }}
        />
      </Box>
    </Container>
    // </Modal>
  );
};

const SignupStepsModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
            maxHeight: "85vh",
            overflow: "auto",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            To access the Course you need to complete these steps
          </Typography>
          <List>
            {steps.map((step, index) => (
              <>
                <ListItem key={index}>
                  <ListItemText primary={step} />
                </ListItem>
                {index === 0 && <PaymentOptions />}
              </>
            ))}
          </List>
          <WhatsAppForm handleClose={handleClose} />
        </Box>
      </Container>
    </Modal>
  );
};

SignupStepsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default SignupStepsModal;
