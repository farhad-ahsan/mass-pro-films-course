import * as React from "react";
import { useState } from "react";

import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia } from "@mui/material";
import PropTypes from "prop-types";
import VideoPlayer from "./VIdeoPlayer";

export default function VideoCard({ data }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal && (
        <VideoPlayer data={data} handleClose={() => setOpenModal(false)} />
      )}
      <Card
        sx={{ width: "100%", minHeight: "300px" }}
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={data.snippet.thumbnails.standard.url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.snippet.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

VideoCard.propTypes = {
  data: PropTypes.object,
};
