import products from "../data";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <>
      <section className="section">
        <div className="products">
          {products.map((each_product) => {
            return (
              <article key={each_product.id}>
                <h5>{each_product.name}</h5>
                <Link to={`/products/${each_product.id}`}>more info</Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
