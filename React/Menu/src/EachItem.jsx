const EachItem = ({ eachFood }) => {
  // id: ,title: ,category:, price:,img:,desc:
  const { id, title, price, img, desc } = eachFood;
  return (
    <>
      <article className="menu-item">
        <img src={img} alt={title} className="img" />

        <div className="item-info">
          <header>
            <h5>{title}</h5>
            <p className="item-price">$ {price}</p>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </article>
    </>
  );
};
export default EachItem;
