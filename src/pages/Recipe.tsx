import React, { useEffect, useState } from "react";
import { youtubeOptions } from "../Utils/FetchData";
import { useDataContext } from "../Context/data";
import RecipeVideo from "../components/RecipeVideo";
import { useParams } from "react-router-dom";

type RecipeParams = {
  recipeDetails: string;
};
const Recipe: React.FC = () => {
  const [recipeVideos, setRecipeVideos] = useState([]);

  const { recipeData } = useDataContext();
  const { recipeDetails } = useParams<RecipeParams>();

  const recipeName: string = `${recipeDetails || recipeData[0].name}`;

  const fetchData = async () => {
    const youtubeSearchUrl =
      "https://youtube-search-and-download.p.rapidapi.com";
    const response = await fetch(
      `${youtubeSearchUrl}/search?query=${recipeName} recipe`,
      youtubeOptions
    );
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      const data = await response.json().catch((e) => {
        console.log(e.message);
      });

      setRecipeVideos(data.contents);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
    fetchData();
  }, []);

  return (
    <>
      <div>
        <RecipeVideo
          recipeVideos={recipeVideos}
          name={recipeName}
          recipeData={recipeData}
        />
      </div>
    </>
  );
};

export default Recipe;
