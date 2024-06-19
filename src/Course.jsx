import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppAppBar from "./components/AppAppBar";
import { alpha } from "@mui/material";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Playlist from "./Playlist";
import { PLAYLISTS } from "./constants";

export default function CoursePage() {
  const [expanded, setExpanded] = useState(PLAYLISTS[0].id);
  return (
    <>
      <CssBaseline />
      <AppAppBar />

      <Box
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
              Welcome Aboard Creators
            </Typography>
            <Typography
              textAlign="center"
              color="text.secondary"
              sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
            >
              Embark on a creative quest with Mass Pro Films’ Content Creation
              Mastery Course. Unleash your potential, craft stunning narratives,
              and join a community of visionaries. Transform passion into
              profession. Your story awaits—let’s begin this transformative
              journey together. Welcome, creators!
            </Typography>
          </Stack>
        </Container>
        {PLAYLISTS.map((playlist, index) => (
          <Playlist
            playlistId={playlist.id}
            title={playlist.title}
            expanded={expanded}
            setExpanded={setExpanded}
            key={index}
          />
        ))}
      </Box>
    </>
  );
}

// <Grid container spacing={2}>
//   {videoData.map((video, index) => (
//     <Grid item xs={3} key={index}>
//       <VideoCard data={video} />
//     </Grid>
//   ))}
// </Grid>
