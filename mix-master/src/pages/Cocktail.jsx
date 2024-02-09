import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios(`${singleCocktailUrl}${id}`);
  console.log("the cocktail page for the console");
  console.log({ data });
  return { id, data };
};

function Cocktail() {
  const { data, id } = useLoaderData();
  return <div>Cocktail</div>;
}

export default Cocktail;
