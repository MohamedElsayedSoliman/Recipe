import React from "react";
import { Link } from "react-router-dom";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  CardActions,
  CardMedia,
} from "@mui/material";

import { useDataContext } from "../Context/data";

type Props = {
  search: string;
};

const RecipeCards = ({ search }: Props) => {
  const { recipeData } = useDataContext();

  const filteredRecipeData = search
    ? recipeData.filter((item) => item.name.toLowerCase().includes(search))
    : recipeData;

  let bg: string;
  let cls: string;
  let col: string;
  const bgColor = (idx: number) => {
    if (idx === 0 || idx === 3 || idx === 6) {
      bg = "#2c3e50";
      cls = "text";
      col = "#9cb3c9";
    } else if (idx === 1 || idx === 4 || idx === 7) {
      bg = "#BDC3BD";
      cls = "text-gradient";
      col = "#77322b";
    } else {
      bg = "#2b6777";
      cls = "txt";
      col = "#9cb3c9";
    }
    return [bg, cls, col];
  };

  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ marginTop: "150px", gap: "30px" }}
      >
        {filteredRecipeData
          .filter((item: any) => item.description !== "")
          .slice(0, 9)
          .map((item: any, idx: number) => {
            return (
              <Grid xs={6} sm={4} md={3} item key={idx}>
                <Card
                  className="card"
                  sx={{
                    background: `${bgColor(idx)[0]}`,
                    borderRadius: "20px",
                    boxShadow: "5px 5px 10px #09080c,-5px -5px 10px #25202e",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="150"
                      image={item.thumbnail_url}
                      alt="green iguana"
                      style={{ width: "100%", objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        noWrap
                        className={`${bgColor(idx)[1]}`}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={`${bgColor(idx)[2]}`}
                        fontFamily="Helvetica,sans-serif"
                      >
                        {item.description.slice(0, 182)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      paddingBottom: "20px",
                    }}
                  >
                    <Link
                      to={`/recipe/${item.name}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        sx={{
                          color: "white",
                          fontFamily: "Rubik",
                          background: "black",
                          fontSize: { xs: "0.480rem", md: "0.875rem" },
                        }}
                      >
                        Discover our recipe Now
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default RecipeCards;
