import './index.scss';
import { useParams } from 'react-router';
import { Button, Col } from 'reactstrap';
import { useFetchDetails } from '../../hooks/useFetchDetails';
import Breadcrumbs from '../breadcrumb';
import {Helmet} from 'react-helmet';

function Detail() {    
  const {id}= useParams<{ id: string }>();
  const {detail,loading}=useFetchDetails(id);
  const {title,description,picture,price,condition,sold_quantity,category_id}=detail.item;
 return (
    <Col md={{size:10,offset:1}}>
      {Breadcrumbs([{text:`Inicio`,active:false,href:`/`},{text:`Resultados`,active:false,href:`/items`},{text:`${category_id}`,active:true,href:``}])}
      <article className="container-detail">
        {
        loading?
        <>
          <Helmet>
            <title>Cargando...</title>
            <meta name="description" content="cargando"></meta>
          </Helmet>
          <div>Cargando...</div>
        </>
        :
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content="Detalle búsqueda"></meta>
          </Helmet>
          <div className="container-detail__product">
            <div className="container-detail__product-picture">
              <img src={picture} alt={title}></img>
            </div>
            <div className="container-detail__product-feature">
              <div className="container-detail__product-condition">{condition}<span> - </span>{`${sold_quantity} Vendidos`}</div>
              <h1 className="container-detail__product-title">{title}</h1>
              <div className="container-detail__product-price">$ {price.amount}</div>              
              <Button className="container-detail__product-button">Comprar</Button>                   
            </div>                            
          </div>
          <div className="container-detail__description">
            <h2 className="container-detail__description-title">Descripción del producto</h2>
            <p  className="container-detail__description-value">{description}</p>
          </div>
        </div>
        }
      </article>
    </Col>
  );
}

  
export default Detail;