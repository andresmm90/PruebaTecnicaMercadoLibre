import { Link } from "react-router-dom";
import { Col } from "reactstrap";

function NotFound() {
    return (
      <Col md={{size:10,offset:1}}>
        <div className="container-results">
          <span className="ch-icon-attention"></span>          
          <p className="error-title">Parece que la página no existe</p>
          <Link to={`/`}>Ir a la página principal</Link>
        </div>        
    </Col>
    );
  }
  
  export default NotFound;
  