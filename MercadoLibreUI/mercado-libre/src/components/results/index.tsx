import './index.scss';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import {  Col } from 'reactstrap';
import { useFetchResults } from '../../hooks/useFetchResults';
import ItemResult from './item';
import NotItems from './noItems';
import Breadcrumbs from '../breadcrumb';
import { Helmet } from 'react-helmet';
import { getMoreOcurrence } from '../../utils/utils';

function Results() {  
  const location = useLocation();
  const {search} = queryString.parse(location.search);
  const searchQuery=search?search.toString():"";
  const {results,loading}=useFetchResults(searchQuery);
  const {items}=results;
  const title=loading
    ?"Cargando..."
    :items&&items.length
      ?`${items.length} resultados para ${searchQuery}`
      :"";

   const category=getMoreOcurrence(results.categories);   
  return (
      <Col md={{size:10,offset:1}}>
        {Breadcrumbs(loading?[]:[{text:`Inicio`,active:false,href:`/`},{text:`${category}`,active:true,href:``}])}
        <div className="container-results">
          {
            loading?  
            <> 
              <Helmet>
                <title>Cargando...</title>
              </Helmet>
              <div>Cargando...</div>
            </>
            :items&&items.length?
              <>
                <Helmet>
                  <title>{title}</title>
                  <meta name="description" content="Resultados búsqueda"></meta>
                </Helmet>
                {items.map(product=> ItemResult(product))}
              </>
              :<NotItems/>            
          }          
        </div>
      </Col>
  );

        }
export default Results;
  