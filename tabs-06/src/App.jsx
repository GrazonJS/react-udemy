import { useEffect, useState } from "react";
import "./App.css";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  console.log(jobs);

  if (isLoading) {
    return (
      <section>
        <div>Loading....</div>
      </section>
    );
  }

  return <JobInfo jobs={jobs} />;
}

export default App;
