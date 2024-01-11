import SingleItem from "./SingleItem";
import { useFetchData } from "./ReactQueryHooks";

const Items = () => {
  const { data, isLoading, isError } = useFetchData();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="items">
      {data?.taskList?.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
