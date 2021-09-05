import './Product.css';

function Product({
  category,
  description,
  id,
  image,
  title,
  price,
  onAddToCart,
}) {
  return (
    <div className="product">
      <img src={image} className="product-image" />
      <span>{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => onAddToCart(id)}>Add to Cart (${price})</button>
    </div>
  );
}

export default Product;
