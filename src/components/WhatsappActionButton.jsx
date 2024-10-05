import React from "react";
import { Fab } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

export default function WhatsappActionButton() {
  return (
    <Fab
      aria-label="add"
      size="large"
      href={"https://wa.me/923044794791"}
      target="_blank"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        bgcolor: "#008000",
        color: "white",
        height: "72px",
        width: "72px",
        transition: "width 0.2s, height 0.2s",
        "&:hover": {
          height: "84px",
          width: "84px",
          bgcolor: "#008000",
        },
      }}
    >
      <WhatsApp sx={{ fontSize: "52px" }} color="white" />
    </Fab>
  );
}
