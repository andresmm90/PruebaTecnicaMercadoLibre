import './index.scss';
import logo from './assets/Logo_ML.png';
import { Input, Row,Col } from 'reactstrap';
import {  Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [search, setSearch] = useState("");
    let history = useHistory();

    const handleChange = (e:any) => {
      setSearch(e.target.value);
    }

    const handleSearch = (e:any) => {
      if(e.key==="Enter"){
        history.push(`/items?search=${search}`);
      }
     }

    return (
        <header className="nav-header-app">  
         <Col md={{size:10,offset:1}}>            
              <Row>
                <Col md="1"> <Link to={`/`}><img src={logo} className="header-logo" alt="logo" /></Link></Col>
                <Col md="11">
                  <Input type="text" name="search" placeholder="Nunca dejes de buscar" onChange={handleChange} onKeyPress={handleSearch} />
                </Col>                
              </Row> 
          </Col>             
        </header>    
    );
  }
  
  export default Header;
  