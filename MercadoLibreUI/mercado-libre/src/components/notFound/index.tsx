import { Link } from "react-router-dom";

function NotFound() {
    return (
      <div className="vip-error-screen not-found">
      <span className="ch-icon-attention"></span>
    
      <p className="error-title">Parece que la página no existe</p>
      <Link to={`/`}>Ir a la página principal</Link>
    </div>
    );
  }
  
  export default NotFound;
  