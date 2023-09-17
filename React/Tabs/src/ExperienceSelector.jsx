const ExperienceSelector = ({jobs,setSelectedJob,selectedJob}) => {
  return (
    <div className="btn-container">
      {jobs.map((eachJob, index) => {
        return (
          <button
            onClick={() => {
              setSelectedJob(index);
            }}
            key={eachJob.id}
            type="button"
            className={`job-btn ${index === selectedJob && "active-btn"}`}
          >
            {eachJob.company}
          </button>
        );
      })}
    </div>
  );
}
export default ExperienceSelector