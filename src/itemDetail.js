import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function ItemDetail({ match }) {
  useEffect(() => fetchItems(): Promise<void>
        fetchItem();
        console.log(match)
      },[]);


  const [item, setItems] = useState({
    images: {};
  })

  const fetchItem = async () => {
const fetchItem = await fetch (`https://fortnite-public-api-theapinetwork.com/prod09/item/get?ids={match.param.id}`)
const item = await fetchItem.json();
  return (
    <div>
     <h1>{item.name}</h1>
     <img src={item.images.transparent} alt=''/>
    </div>
  );
}
 
export default Item;