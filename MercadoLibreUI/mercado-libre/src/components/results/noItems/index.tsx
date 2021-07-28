import './index.scss';
import lup from "./assets/ic_Search.png";
function NotItems(){
    return <div className="container-no-item">
            <div className="image"><img src={lup} alt="search"/></div>
            <div className="text">
                <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
                <ul>
                    <li>Revisa la ortografía de la palabra.</li>
                    <li>Utiliza palabras más genéricas o menos palabras.</li>                    
                </ul>
            </div>
        </div>
}

export default NotItems;