import { Person } from './Person';
import { people } from "../../../data.js";

const List = () => {
  return (
    <div>
      
      {people.map((eachPerson) => {
        return (
          <Person  {...eachPerson} />
        );
      })}
    </div>
  );
};
export default List;
