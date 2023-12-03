import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className='section'>
      <h2>404</h2>
      <h4>Page Not Found</h4>
      <Link to= "/" className="btn">Home</Link>

    </section>
  );
};
export default Error;
