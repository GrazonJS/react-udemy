import { useEffect, useState } from "react";
const url = "https://api.github.com/users/GrazonJS";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);
  if (isLoading) {
    return <h2>loading...</h2>;
  }
  if (isError) {
    return <h2>Error occured</h2>;
  }
  return <h2>vicky</h2>;
};

export default MultipleReturnsFetchData;
