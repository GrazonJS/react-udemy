import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "./CocktailList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  const searchTerm = url.searchParams.get("search") || "";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  console.log(response);

  return { drinks: response.data.drinks, searchTerm };
};

function Landing() {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);
  return (
    <div>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </div>
  );
}

export default Landing;
