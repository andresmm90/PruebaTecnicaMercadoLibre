import './index.scss';
import { Link } from "react-router-dom";
import Product from "../../../models/Product";
import shippingIcon from './assets/ic_shipping.png';

function ItemResult(product:Product) {   
    const {id,title,picture,price,condition,free_shipping}=product;
    return <div key={`produc-${id}`} className="container-results-item">
      <div className="image-item">
        <Link to={`/items/${id}`}>
          <img src={picture} />
        </Link>
      </div>
      <div className="info-item">
        <div className="price">{price.amount}{free_shipping&&<span><img src={shippingIcon} /></span>}</div>
        <div className="title"><Link to={`/items/${id}`}>{title}</Link></div>  
        <div className="condition">{condition}</div>        
      </div>        
      </div>;
  }
  
    
  export default ItemResult;
    