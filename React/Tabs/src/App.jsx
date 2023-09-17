import SelectedUser from "./SelectedExperience";
import useFetch from "./useFetch";
import { useState } from "react";
import ExperienceSelector from "./ExperienceSelector";
import SelectedExperience from "./SelectedExperience";
import Title from "./Title";

const App = () => {
  const url = "https://course-api.com/react-tabs-project";
  const [isLoading, isError, jobs] = useFetch(url);
  const [selectedJob, setSelectedJob] = useState(0);

  // jobs = [job, . ..]
  // job = {company,dates,duties,id,order,title}

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (isError) {
    return <h1>Something Went Wrong</h1>;
  }

  const job = jobs[selectedJob];

  return (
    <>
      <Title/>

      <section className="jobs-center">
        
        <ExperienceSelector selectedJob={selectedJob} jobs={jobs} setSelectedJob={setSelectedJob}/>
        <SelectedExperience job={job}/>
      </section>
    </>
  );
};

export default App;
