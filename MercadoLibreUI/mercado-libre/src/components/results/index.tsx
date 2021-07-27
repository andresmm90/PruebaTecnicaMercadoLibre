import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useFetchResults } from '../../hooks/useFetchResults';

function Results() {  
  const location = useLocation();
  const {search} = queryString.parse(location.search);
  const {items}=useFetchResults(search?search.toString():"");
  return (
    <div>
      {
        items.map((x:any,i:number)=><div key={i}>hola</div>)
      }
    </div>
  );
}

  
export default Results;
  