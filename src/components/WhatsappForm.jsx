import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const WhatsAppForm = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validate = () => {
    let tempErrors = { name: "", email: "" };
    let isValid = true;

    if (name.trim() === "") {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (email.trim() === "") {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const phoneNumber = "923044794791"; // Replace with the desired phone number
      const text = `Name: ${encodeURIComponent(
        name
      )}%0AEmail: ${encodeURIComponent(email)}`;
      const link = `https://wa.me/${phoneNumber}?text=${text}`;
      window.open(link, "_blank");
      handleClose();
    }
  };

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          error={!!errors.email}
          helperText={errors.email}
        />
        <Button variant="contained" color="primary" type="submit" sx={{ m: 1 }}>
          Send via WhatsApp
        </Button>
      </Box>
    </Container>
  );
};

WhatsAppForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
export default WhatsAppForm;
