import * as React from "react";

import {
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { Close } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function VideoPlayer({ handleClose, data }) {
  return (
    <Dialog
      maxWidth="xl"
      TransitionComponent={Transition}
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root ": {
          borderRadius: "10px",
          maxWidth: "calc(60vw + 40px)",
        },
      }}
    >
      <DialogContent sx={{ padding: "20px" }}>
        <Grid container justifyContent={"space-between"}>
          <Typography gutterBottom variant="h5" component="div">
            {data.snippet.title}
          </Typography>
          <IconButton aria-label="close" onClick={handleClose}>
            <Close />
          </IconButton>
        </Grid>
        <div
          className="container-wrapper react-player-wrapper text-center"
          style={{
            height: "60vh",
            width: "60vw",
            objectFit: "cover",
            marginTop: "20px",
            marginBottom: "27px",
          }}
        >
          <iframe
            title={data.snippet.title}
            src={`https://www.youtube.com/embed/${data.snippet.resourceId.videoId}`}
            // src={`https://www.youtube.com/embed/${data.snippet.resourceId.videoId}?rel=0&controls=0&modestbranding=1&showinfo=0`}
            style={{ border: "none" }}
            className="video-player-container"
            id="video-player"
            height="100%"
            width="100%"
            allow="accelerometer; gyroscope; autoplay; encrypted-media;"
            allowFullscreen="true"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

VideoPlayer.propTypes = {
  handleClose: PropTypes.func,
  data: PropTypes.object,
};
