import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
  useEffect(() => fetchItems(): Promise<void>
        fetchItems(())
},[]);

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
  }

  const items = await data.json();
  console.log(items.items);
  setItems(items.items);

  return (
    <div>
      {items.map(item => (
        <h1 key={item.itemId>
          <Link to={`/shop/${item.itemId}`}>{item.name}</h1></Link>
      ))}
    </div>
  );
}
 
export default Shop;