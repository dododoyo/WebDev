import { FaAngleDoubleRight } from "react-icons/fa";

const SelectedExperience = ({ job }) => {
  const { company, dates, duties, id, order, title } = job;

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <h4 className="job-company">{company}</h4>
      <p className="job-date">{dates}</p>

      {duties.map((eachDuty, index) => {
        return (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{eachDuty}</p>
          </div>
        );
      })}
    </article>
  );
};
export default SelectedExperience;
