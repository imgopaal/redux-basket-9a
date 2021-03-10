import React from 'react'
import './App.css'
import {Link} from 'react-router-dom';


function ItemPlate({item,name,src,price}) {
    return (
        <div className="item-plate">
            <Link to={`product${item}`}>
            <h3 className="title">{name}</h3><img alt={name} src={src}></img><h4 className="price">${" "}{price}</h4>
            </Link>
        </div>
    )
}
export default ItemPlate;