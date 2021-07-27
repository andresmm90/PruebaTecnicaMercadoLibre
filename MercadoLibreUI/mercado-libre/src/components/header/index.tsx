import './index.scss';
import logo from './assets/Logo_ML.png';
import lupIcon from './assets/ic_Search.png';
import { Input, Container,Row,Col } from 'reactstrap';
import {  useHistory } from 'react-router-dom';
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
          <div className="container-header">
            <Container>
              <Row>
                <Col md="1"><img src={logo} className="header-logo" alt="logo" /></Col>
                <Col md="10">
                  <Input type="text" name="search" placeholder="Nunca dejes de buscar" onChange={handleChange} onKeyPress={handleSearch} />
                </Col>
                <Col md="1"></Col>
              </Row>
            </Container>
          </div>              
        </header>    
    );
  }
  
  export default Header;
  