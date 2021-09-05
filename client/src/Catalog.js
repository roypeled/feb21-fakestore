import Product from './Product.js';

export default function Catalog({products, onAddToCart}) {
    return (
        <div className="products">
            {Array.isArray(products) && products.length > 0
                ? products.map(product => <Product key={product.id} {...product} onAddToCart={onAddToCart} />)
                : "Loading..."}
        </div>
    );
}