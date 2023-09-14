import { useState } from "react";
const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    if (e.target.id == "name") {
      setName(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // talk with the server.
    console.log(name);
    console.log(email);
  }

  return (
    <form onSubmit={handleSubmit} action="" className="form">
      <h4>Controlled Inputs</h4>

      <div className="form-row">
        <label className="form-label" htmlFor="name">
          name
        </label>
        <input
          type="text"
          name=""
          id="name"
          value={name}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-row">
        <label className="form-label" htmlFor="email">
          email
        </label>
        <input
          type="email"
          name=""
          id="email"
          value={email}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};

export default ControlledInputs;
