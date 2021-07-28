import './index.scss';
import { useParams } from 'react-router';
import { Button, Col } from 'reactstrap';
import { useFetchDetails } from '../../hooks/useFetchDetails';
import Breadcrumbs from '../breadcrumb';

function Detail() {  

  const {id}= useParams<{ id: string }>();
  const {detail,loading}=useFetchDetails(id);
  const {title,description,picture,price,condition,sold_quantity}=detail.item;
  return (
    <Col md={{size:10,offset:1}}>
      {Breadcrumbs([{text:`Inicio`,active:false,href:`/`},{text:`Resultados`,active:false,href:`/items`},{text:`Categoría`,active:true,href:`/`}])}
      <div className="container-detail">
        {
        loading?
          <div>Cargando...</div>
        :
        <div>
          <div>
            <div className="picture">
              <img src={picture} alt={title}></img>
            </div>
            <div className="feature">
              <p>{condition}<span> - </span>{`${sold_quantity} Vendidos`}</p>
              <p>{title}</p>
              <p><span>$</span>{price.amount}</p>
              <div className="Button">
                <Button>Comprar</Button>
              </div>     
            </div>                            
          </div>
          <div className="description">
            <h2>Descripción del producto</h2>
            <p>{description}</p>
          </div>
        </div>
        }
      </div>
    </Col>
  );
}

  
export default Detail;