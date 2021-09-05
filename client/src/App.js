import './App.css';
import {useEffect, useState} from 'react';

import Cart from './Cart.js';
import Categories from './Categories.js';
import Catalog from './Catalog.js';

function App() {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);

  const addToCart = id => {
    const currentQuantity = cartItems[id] ?? 0;
    setCartItems({...cartItems, [id]: currentQuantity + 1});
  };

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data.docs));
  }, []);

  return (
    <div className="App">
      <div className="Header">
        <Categories />
        <Cart products={products} items={cartItems} />
      </div>
      <Catalog products={products} onAddToCart={addToCart} />
    </div>  
  );
}

export default App;
