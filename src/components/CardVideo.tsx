import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Grid } from "@mui/material";
type Props = {
  url: string;
};

const CardVideo = ({ url }: Props) => {
  const [play, setPlay] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setPlay(true);
  };
  const handleMouseLeave = () => {
    setPlay(false);
  };
  return (
    <Grid
      container
      spacing={2}
      ml={{ xs: 0 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Grid item xs={2}>
        <ReactPlayer
          sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation"
          playing={play}
          muted={true}
          controls={true}
          loading="lazy"
          url={url}
          width="500px"
          height="350px"
          style={{ borderRadius: "20px", overflow: "hidden" }}
          className="recipeVideo"
        />
      </Grid>
    </Grid>
  );
};

export default CardVideo;
