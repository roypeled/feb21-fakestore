import {useEffect, useState} from 'react';
import './Categories.css';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/api/categories')
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className="categories">
            <h3>Categories</h3>
            <ul className="categories-list">
                {categories.map(category => <li className="category-item">{category}</li>)}
            </ul>
            <form>
                <input/>
                <button>Send</button>
            </form>
        </div>
    );
}