import './index.scss';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { Col } from 'reactstrap';
import { useFetchResults } from '../../hooks/useFetchResults';
import ItemResult from './item';
import NotItems from './noItems';

function Results() {  
  const location = useLocation();
  const {search} = queryString.parse(location.search);
  const {results,loading}=useFetchResults(search?search.toString():"");
  const {items}=results;

  return (
      <Col md={{size:10,offset:1}}>
        <div className="container-results">
          {
            loading?<div>Cargando...</div>:items&&items.length?items.map(product=> ItemResult(product)):<NotItems/>            
          }          
        </div>
      </Col>
  );

        }
export default Results;
  