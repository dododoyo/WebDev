import {Link,useParams} from "react-router-dom";
import products from "../data";
const SingleProduct = () => {
  const {productId} = useParams();
  const product = products.find((each_product) => each_product.id === productId);
  return (
    <section className="section product">
      <img src={product.image} alt={product.name} />
      <h5>{product.name}</h5>
      <Link to="/products">Back to products</Link>

    </section>
  )
}

export default SingleProduct