import './index.scss';
import { Link } from "react-router-dom";
import Product from "../../../models/Product";
import shippingIcon from './assets/ic_shipping.png';

function ItemResult(product:Product) {   
    const {id,title,picture,price,condition,free_shipping}=product;
    return <article key={`produc-${id}`} className="container-results__item">
      <div className="container-results__item-photo">
        <Link to={`/items/${id}`}>
          <img src={picture} alt={title}/>
        </Link>
      </div>
      <div className="container-results__item-content">
        <div className="container-results__item-content-price">$ {price.amount}{free_shipping&&<img src={shippingIcon} alt="free-shipping"/>}</div>
        <Link className="container-results__item-content-title" to={`/items/${id}`}>{title}</Link>  
        <div className="container-results__item-condition">{condition}</div>        
      </div>        
      </article>;
  }
  
    
  export default ItemResult;
    