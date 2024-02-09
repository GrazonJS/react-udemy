import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Cocktail from "./CocktailList";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "margarita";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  console.log(response);

  return { drinks: response.data.drinks, searchTerm };
};

function Landing() {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);
  return (
    <div>
      <Cocktail drinks={drinks} />
    </div>
  );
}

export default Landing;
