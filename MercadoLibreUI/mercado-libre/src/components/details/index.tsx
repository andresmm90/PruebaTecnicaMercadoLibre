import './index.scss';
import { useParams } from 'react-router';
import { Col } from 'reactstrap';
import { useFetchDetails } from '../../hooks/useFetchDetails';

function Detail() {  

  const {id}= useParams<{ id: string }>();
  const {item}=useFetchDetails(id);
  return (
    <Col md={{size:10,offset:1}}>
      <div className="container-detail">
        <div className="picture">
          <img src={item.picture}></img>
        </div>
        <div className="feature"></div>
        <div className="description">
          <h2>Descripción del producto</h2>
          <p>{item.description}</p>
        </div>
      </div>
    </Col>
  );
}

  
export default Detail;