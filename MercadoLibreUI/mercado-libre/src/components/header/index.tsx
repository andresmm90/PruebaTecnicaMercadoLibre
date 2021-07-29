import './index.scss';
import logo from './assets/Logo_ML.png';
import lup from './assets/ic_Search.png';
import { Input, Row, Col, Button } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [search, setSearch] = useState("");
  let history = useHistory();

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  }

  const handleSearch = (e: any) => {
    if (e.key === "Enter") {
      history.push(`/items?search=${search}`);
    }
  }

  return (
    <header className="nav-header">
      <Col md={{ size: 10, offset: 1 }}>
        <Row>
          <Col md="1">
            <Link to={`/`}>
              <img src={logo} className="nav-header__logo" alt="logo" />
            </Link>
          </Col>
          <Col md="11">
            <div className='nav-header__search'>
              <Input
                type="text"
                name="search"
                placeholder="Nunca dejes de buscar"
                className='nav-header__search-input'
                onChange={handleChange}
                onKeyPress={handleSearch}
              />
              <Button className='nav-header__search-button'>
                <img src={lup} alt="buscar" />
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </header>
  );
}

export default Header;
