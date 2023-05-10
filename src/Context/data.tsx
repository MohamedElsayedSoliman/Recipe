import React, { createContext, useState, useEffect, useContext } from "react";
import { recipeOptions } from "../Utils/FetchData";

import axios, { AxiosResponse } from "axios";

export interface Recipe {
  description: string;
  thumbnail_url: string;
  name: string;
  instructions: {
    display_text: string;
  }[];

  slug?: string;
  renditions: {
    url: string;
    poster_url: string;
  }[];
}

const recipeDatas: Recipe[] = [
  {
    name: "French Toast",
    description:
      "This iconic dish is all about the details. While french toast might seem simple, looks can be deceiving. To get that perfectly crispy exterior and creamy, silky custard on the inside we spent weeks eating tons of butter, bread, and syrup to discover the best classic french toast recipe. The end result is indulgent, delicious, and most importantly, easy to make. What’s not to love?",
    thumbnail_url:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/341495.jpg",

    renditions: [
      {
        url: "https://vid.tasty.co/output/215487/square_720/1631150838",
        poster_url:
          "https://img.buzzfeed.com/video-transcoder-prod/output/215487/square_720/1631150838_00001.png",
      },
    ],

    instructions: [
      {
        display_text:
          "Preheat a nonstick electric griddle to 300°F (150°C). (Alternatively, heat a large nonstick skillet over medium-low heat.)",
      },
      {
        display_text:
          "In a large bowl, whisk the eggs until well combined. Add the milk, heavy cream, brown sugar, salt, cinnamon, and vanilla bean paste and whisk until completely combined.",
      },
      {
        display_text:
          "Working in batches, dip each slice of challah in the custard, letting soak for 20–60 seconds on each side, until fully saturated but not soggy.",
      },
      {
        display_text:
          "Lightly grease the griddle with butter. Once melted, add the soaked challah on the griddle and cook, without disturbing, until golden brown and crispy, about 2 minutes. Use a flat spatula to flip the bread and continue cooking until the other side is golden brown, 2 minutes more. Wipe the pan clean between batches and add more butter as needed.",
      },
      {
        display_text:
          "Serve the French toast with a pat of butter, a drizzle of warm maple syrup, a sprinkle of flaky salt, and berries.",
      },
      { display_text: "Enjoy!" },
    ],
  },
  {
    name: "Easy Beef Hand Pies",
    description:
      "A meat pie is a savory pastry featuring a meat-based filling encased in a buttery, flaky golden-brown pie crust. Cooks may either bake meat pies in a pie dish or form them into individual hand pies",
    thumbnail_url:
      "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/11e6176999dd4d3fa7444224e8891cdb.jpeg",

    renditions: [
      {
        url: "https://vid.tasty.co/output/215487/square_720/1631150838",
        poster_url:
          "https://img.buzzfeed.com/video-transcoder-prod/output/215487/square_720/1631150838_00001.png",
      },
    ],
    instructions: [
      {
        display_text:
          "Preheat a nonstick electric griddle to 300°F (150°C). (Alternatively, heat a large nonstick skillet over medium-low heat.)",
      },
      {
        display_text:
          "In a large bowl, whisk the eggs until well combined. Add the milk, heavy cream, brown sugar, salt, cinnamon, and vanilla bean paste and whisk until completely combined.",
      },
      {
        display_text:
          "Working in batches, dip each slice of challah in the custard, letting soak for 20–60 seconds on each side, until fully saturated but not soggy.",
      },
      {
        display_text:
          "Lightly grease the griddle with butter. Once melted, add the soaked challah on the griddle and cook, without disturbing, until golden brown and crispy, about 2 minutes. Use a flat spatula to flip the bread and continue cooking until the other side is golden brown, 2 minutes more. Wipe the pan clean between batches and add more butter as needed.",
      },
      {
        display_text:
          "Serve the French toast with a pat of butter, a drizzle of warm maple syrup, a sprinkle of flaky salt, and berries.",
      },
      { display_text: "Enjoy!" },
    ],
  },

  {
    name: "Instant Pot Texas Smoked Brisket Chowder",
    description:
      "Beef brisket is a tough cut of meat.If cooked properly, brisket can be broken down into flavorful, tender goodness a buttery rich beefy meat. yum!.Traditional American Texas-style barbecue smoked brisket is usually prepared by rubbing the brisket with a dry spice rub, then cooking the beef brisket slowly over charcoal or wood",
    thumbnail_url:
      "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/1a08783ea26843a88d3b14c938976ee0.jpeg",

    renditions: [
      {
        url: "https://vid.tasty.co/output/215487/square_720/1631150838",
        poster_url:
          "https://img.buzzfeed.com/video-transcoder-prod/output/215487/square_720/1631150838_00001.png",
      },
    ],
    instructions: [
      {
        display_text:
          "Preheat a nonstick electric griddle to 300°F (150°C). (Alternatively, heat a large nonstick skillet over medium-low heat.)",
      },
      {
        display_text:
          "In a large bowl, whisk the eggs until well combined. Add the milk, heavy cream, brown sugar, salt, cinnamon, and vanilla bean paste and whisk until completely combined.",
      },
      {
        display_text:
          "Working in batches, dip each slice of challah in the custard, letting soak for 20–60 seconds on each side, until fully saturated but not soggy.",
      },
      {
        display_text:
          "Lightly grease the griddle with butter. Once melted, add the soaked challah on the griddle and cook, without disturbing, until golden brown and crispy, about 2 minutes. Use a flat spatula to flip the bread and continue cooking until the other side is golden brown, 2 minutes more. Wipe the pan clean between batches and add more butter as needed.",
      },
      {
        display_text:
          "Serve the French toast with a pat of butter, a drizzle of warm maple syrup, a sprinkle of flaky salt, and berries.",
      },
      { display_text: "Enjoy!" },
    ],
  },

  {
    name: "Creamy Chicken Instant Ramen",
    thumbnail_url:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/366047.jpg",
    description:
      "This soup has a depth and richness to it that can only be described in one word. Mmmmmmmm",

    renditions: [
      {
        url: "https://vid.tasty.co/output/215487/square_720/1631150838",
        poster_url:
          "https://img.buzzfeed.com/video-transcoder-prod/output/215487/square_720/1631150838_00001.png",
      },
    ],
    instructions: [
      {
        display_text:
          "Preheat a nonstick electric griddle to 300°F (150°C). (Alternatively, heat a large nonstick skillet over medium-low heat.)",
      },
      {
        display_text:
          "In a large bowl, whisk the eggs until well combined. Add the milk, heavy cream, brown sugar, salt, cinnamon, and vanilla bean paste and whisk until completely combined.",
      },
      {
        display_text:
          "Working in batches, dip each slice of challah in the custard, letting soak for 20–60 seconds on each side, until fully saturated but not soggy.",
      },
      {
        display_text:
          "Lightly grease the griddle with butter. Once melted, add the soaked challah on the griddle and cook, without disturbing, until golden brown and crispy, about 2 minutes. Use a flat spatula to flip the bread and continue cooking until the other side is golden brown, 2 minutes more. Wipe the pan clean between batches and add more butter as needed.",
      },
      {
        display_text:
          "Serve the French toast with a pat of butter, a drizzle of warm maple syrup, a sprinkle of flaky salt, and berries.",
      },
      { display_text: "Enjoy!" },
    ],
  },
  {
    name: "Pancake And Waffle Cereal",
    thumbnail_url:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/360217.jpg",
    description:
      "Pancake cereal has practically taken over the internet as the cutest food mash-up. The viral TikTok trend even prompted IHOP to reveal a pancake cereal of its own that was already in the works. But if you thought tiny pancakes were cute, you’ll obsess over the next breakfast-food-turned-cereal trend that was only inevitable: waffle cereal.",

    renditions: [
      {
        url: "https://vid.tasty.co/output/215487/square_720/1631150838",
        poster_url:
          "https://img.buzzfeed.com/video-transcoder-prod/output/215487/square_720/1631150838_00001.png",
      },
    ],
    instructions: [
      {
        display_text:
          "Preheat a nonstick electric griddle to 300°F (150°C). (Alternatively, heat a large nonstick skillet over medium-low heat.)",
      },
      {
        display_text:
          "In a large bowl, whisk the eggs until well combined. Add the milk, heavy cream, brown sugar, salt, cinnamon, and vanilla bean paste and whisk until completely combined.",
      },
      {
        display_text:
          "Working in batches, dip each slice of challah in the custard, letting soak for 20–60 seconds on each side, until fully saturated but not soggy.",
      },
      {
        display_text:
          "Lightly grease the griddle with butter. Once melted, add the soaked challah on the griddle and cook, without disturbing, until golden brown and crispy, about 2 minutes. Use a flat spatula to flip the bread and continue cooking until the other side is golden brown, 2 minutes more. Wipe the pan clean between batches and add more butter as needed.",
      },
      {
        display_text:
          "Serve the French toast with a pat of butter, a drizzle of warm maple syrup, a sprinkle of flaky salt, and berries.",
      },
      { display_text: "Enjoy!" },
    ],
  },
  {
    name: "Personal Cranberry Sauce",
    thumbnail_url:
      "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/8e654f2cc5014ddbac47c65ec9a32ff4.jpeg",
    description:
      "it is tasty,it is taken over the internet as the cutest food mash-up. The viral TikTok trend even prompted IHOP to reveal a pancake cereal of its own that was already in the works. But if you thought tiny pancakes were cute, you’ll obsess over the next breakfast-food-turned-cereal trend that was only inevitable: waffle cereal",

    renditions: [
      {
        url: "https://vid.tasty.co/output/215487/square_720/1631150838",
        poster_url:
          "https://img.buzzfeed.com/video-transcoder-prod/output/215487/square_720/1631150838_00001.png",
      },
    ],
    instructions: [
      {
        display_text:
          "Preheat a nonstick electric griddle to 300°F (150°C). (Alternatively, heat a large nonstick skillet over medium-low heat.)",
      },
      {
        display_text:
          "In a large bowl, whisk the eggs until well combined. Add the milk, heavy cream, brown sugar, salt, cinnamon, and vanilla bean paste and whisk until completely combined.",
      },
      {
        display_text:
          "Working in batches, dip each slice of challah in the custard, letting soak for 20–60 seconds on each side, until fully saturated but not soggy.",
      },
      {
        display_text:
          "Lightly grease the griddle with butter. Once melted, add the soaked challah on the griddle and cook, without disturbing, until golden brown and crispy, about 2 minutes. Use a flat spatula to flip the bread and continue cooking until the other side is golden brown, 2 minutes more. Wipe the pan clean between batches and add more butter as needed.",
      },
      {
        display_text:
          "Serve the French toast with a pat of butter, a drizzle of warm maple syrup, a sprinkle of flaky salt, and berries.",
      },
      { display_text: "Enjoy!" },
    ],
  },
  {
    name: "Hawaii Rice Dish",
    thumbnail_url:
      "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/651a510d05e6459e97c96e726c5ebd22.jpeg",
    description:
      "This homemade cranberry sauce is classic. Made from fresh or frozen cranberries and ready in 20 minutes, it's a must-have for Thanksgiving dinner. Easy to make-ahead, too!",
    renditions: [
      {
        url: "https://vid.tasty.co/output/215487/square_720/1631150838",
        poster_url:
          "https://img.buzzfeed.com/video-transcoder-prod/output/215487/square_720/1631150838_00001.png",
      },
    ],
    instructions: [
      {
        display_text:
          "Preheat a nonstick electric griddle to 300°F (150°C). (Alternatively, heat a large nonstick skillet over medium-low heat.)",
      },
      {
        display_text:
          "In a large bowl, whisk the eggs until well combined. Add the milk, heavy cream, brown sugar, salt, cinnamon, and vanilla bean paste and whisk until completely combined.",
      },
      {
        display_text:
          "Working in batches, dip each slice of challah in the custard, letting soak for 20–60 seconds on each side, until fully saturated but not soggy.",
      },
      {
        display_text:
          "Lightly grease the griddle with butter. Once melted, add the soaked challah on the griddle and cook, without disturbing, until golden brown and crispy, about 2 minutes. Use a flat spatula to flip the bread and continue cooking until the other side is golden brown, 2 minutes more. Wipe the pan clean between batches and add more butter as needed.",
      },
      {
        display_text:
          "Serve the French toast with a pat of butter, a drizzle of warm maple syrup, a sprinkle of flaky salt, and berries.",
      },
      { display_text: "Enjoy!" },
    ],
  },
  {
    name: "Mezcal Hot Chocolate",
    thumbnail_url:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/f188dfac10a243e59adc1423efe85764/BFV88208_DeathbyChocolate_SO_012822_1x1_OO_V7.jpg",
    description:
      "The earthy, savoury, mineral-rich tones of mezcal are ideal for drawing out the fruity notes of quality cacao. Mezcal also tastes phenomenal when stirred into hot milk, with a spoonful of sugar and a twist of orange",

    renditions: [
      {
        url: "https://vid.tasty.co/output/215487/square_720/1631150838",
        poster_url:
          "https://img.buzzfeed.com/video-transcoder-prod/output/215487/square_720/1631150838_00001.png",
      },
    ],
    instructions: [
      {
        display_text:
          "Preheat a nonstick electric griddle to 300°F (150°C). (Alternatively, heat a large nonstick skillet over medium-low heat.)",
      },
      {
        display_text:
          "In a large bowl, whisk the eggs until well combined. Add the milk, heavy cream, brown sugar, salt, cinnamon, and vanilla bean paste and whisk until completely combined.",
      },
      {
        display_text:
          "Working in batches, dip each slice of challah in the custard, letting soak for 20–60 seconds on each side, until fully saturated but not soggy.",
      },
      {
        display_text:
          "Lightly grease the griddle with butter. Once melted, add the soaked challah on the griddle and cook, without disturbing, until golden brown and crispy, about 2 minutes. Use a flat spatula to flip the bread and continue cooking until the other side is golden brown, 2 minutes more. Wipe the pan clean between batches and add more butter as needed.",
      },
      {
        display_text:
          "Serve the French toast with a pat of butter, a drizzle of warm maple syrup, a sprinkle of flaky salt, and berries.",
      },
      { display_text: "Enjoy!" },
    ],
  },

  {
    name: "Sashimi-Style Crunchy Tuna Roll",
    thumbnail_url:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/363523.jpg",
    description:
      " Fiery Spicy Tuna Roll with sashimi grade tuna tossed in a sesame Sriracha sauce, topped with some spicy mayo for that extra oomph.Spicy Tuna Roll is one of those sushi staples in Japanese Restaurants across the US, along with California Rolls, Dragon Rolls, and Rainbow Rolls as opposed to traditional Japanese sushi rolls, like Futomaki and Hosomaki.",
    renditions: [
      {
        url: "https://vid.tasty.co/output/215487/square_720/1631150838",
        poster_url:
          "https://img.buzzfeed.com/video-transcoder-prod/output/215487/square_720/1631150838_00001.png",
      },
    ],
    instructions: [
      {
        display_text:
          "Preheat a nonstick electric griddle to 300°F (150°C). (Alternatively, heat a large nonstick skillet over medium-low heat.)",
      },
      {
        display_text:
          "In a large bowl, whisk the eggs until well combined. Add the milk, heavy cream, brown sugar, salt, cinnamon, and vanilla bean paste and whisk until completely combined.",
      },
      {
        display_text:
          "Working in batches, dip each slice of challah in the custard, letting soak for 20–60 seconds on each side, until fully saturated but not soggy.",
      },
      {
        display_text:
          "Lightly grease the griddle with butter. Once melted, add the soaked challah on the griddle and cook, without disturbing, until golden brown and crispy, about 2 minutes. Use a flat spatula to flip the bread and continue cooking until the other side is golden brown, 2 minutes more. Wipe the pan clean between batches and add more butter as needed.",
      },
      {
        display_text:
          "Serve the French toast with a pat of butter, a drizzle of warm maple syrup, a sprinkle of flaky salt, and berries.",
      },
      { display_text: "Enjoy!" },
    ],
  },
];

type Props = {
  children: React.ReactNode;
};

interface UserContextType {
  recipeData: Recipe[];
  setRecipeData: React.Dispatch<React.SetStateAction<Recipe[]>>;
  price: string | null;
  setPrice: React.Dispatch<React.SetStateAction<string | null>>;
  setPay: React.Dispatch<React.SetStateAction<boolean>>;
  pay: boolean;
}
const iUserContextState = {
  recipeData: recipeDatas,
  setRecipeData: () => {},
  price: "",
  setPrice: () => {},
  setPay: () => {},
  pay: false,
};
export const Context = createContext<UserContextType>(iUserContextState);

const Provider: React.FC<Props> = ({ children }) => {
  const [recipeData, setRecipeData] = useState<Recipe[]>(recipeDatas);
  const [price, setPrice] = useState<string | null>(null);
  const [pay, setPay] = useState<boolean>(false);

  const fetchData = async () => {
    await axios
      .get("https://tasty.p.rapidapi.com/recipes/list", recipeOptions)
      .then((response: AxiosResponse) => {
        console.log(response.data.results);
        setRecipeData(response.data.results);
      });
  };

  useEffect(() => {
    if (recipeData.length > 0) {
      fetchData();
    } else {
      setRecipeData(recipeDatas);
    }
  }, [recipeData]);

  return (
    <Context.Provider
      value={{ recipeData, setRecipeData, price, setPrice, setPay, pay }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;

export const useDataContext = () => useContext(Context);
