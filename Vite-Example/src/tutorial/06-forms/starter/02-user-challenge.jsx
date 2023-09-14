import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [theData, setData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return ;

    setData(data.push({ name: e.target.name.value,id:Date.now() }));
    setName('');
  };

  
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h3>Users</h3>
      <ul>
        {theData.map((eachUser) => {
          // console.log(eachUser);
          let { id, name } = eachUser;

          name = name.charAt(0).toUpperCase() + name.slice(1);

          return (
            <li key={id}>
              <h4>{name}</h4>
              <button onClick={() =>{
                setData(
                  theData.filter((eachPerson) => eachPerson.id !== id)
                );
              }}className="btn">remove</button>
            </li>
          );
        })}
      </ul>

      {/* render users below */}
    </div>
  );
};
export default UserChallenge;
