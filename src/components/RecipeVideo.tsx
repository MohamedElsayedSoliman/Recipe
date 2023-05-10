import React from "react";
import CardVideo from "../components/CardVideo";
import { Box, Typography, Stack } from "@mui/material";
import InstructionCard from "./InstructionCard";
import { Recipe } from "../Context/data";
import { useDataContext } from "../Context/data";

interface Contents {
  video: {
    channelId: string;
    channelName: string;
    description: string;
    lengthText: string;
    publishedTimeText: string;
    title: string;
    videoId: string;
    thumbnails: {
      height: number;
      width: number;
      url: string;
    }[];
  };
}

const RecipeVideo = (props: {
  recipeVideos: Contents[];
  name: string;
  recipeData: Recipe[];
}) => {
  const { price, pay } = useDataContext();
  const limitVideo = (priceItem: string | null) => {
    let index;
    if (priceItem === "$4" && pay === true) {
      index = 4;
    } else if (priceItem === "$10" && pay === true) {
      index = 10;
    } else if (priceItem === "$20" && pay === true) {
      index = 25;
    } else {
      index = 2;
    }
    return index;
  };

  return (
    <Box sx={{ backgroundColor: "#1F1D2B" }} p="20px">
      <InstructionCard recipeData={props.recipeData} recipeName={props.name} />
      <Typography
        sx={{ fontSize: { lg: "2.75rem", xs: "1rem" } }}
        fontWeight={700}
        color="#94a3b8"
        mb="50px"
        fontFamily="Rubik"
      >
        Watch{" "}
        <span
          style={{
            color: "#3C6478",
            textTransform: "capitalize",
            fontFamily: "Rubik",
          }}
        >
          {props.name}
        </span>{" "}
        Recipe videos
      </Typography>

      <Stack
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "50px",
        }}
      >
        {props.recipeVideos?.slice(0, limitVideo(price))?.map((item, index) => (
          <Box key={index}>
            <CardVideo
              url={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            />

            <Typography
              fontWeight={600}
              color="#94a3b8"
              textAlign="center"
              sx={{ fontSize: { xs: "0.6rem", sm: "1rem" } }}
            >
              {item.video.title.replace(/^(.{50}[^\s]*).*/, "$1")}
            </Typography>
            <Typography
              color="#94a3b8"
              textAlign="center"
              sx={{ fontSize: { md: "0.875rem", sm: "0.7rem", xs: "0.45rem" } }}
            >
              {item.video.channelName}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default RecipeVideo;
