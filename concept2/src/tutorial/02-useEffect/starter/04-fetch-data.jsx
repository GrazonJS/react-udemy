import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState(0);

  useEffect(() => {
    console.log(users);
  }, []);
  return (
    <>
      <h3>Fetch Data Example</h3>
    </>
  );
};
export default FetchData;
