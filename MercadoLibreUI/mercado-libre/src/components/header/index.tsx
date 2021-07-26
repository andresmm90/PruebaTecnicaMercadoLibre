import './index.scss';
import logo from './assets/logo_ML.png';

function Header() {
    return (
        <header className="nav-header-app">   
          <div>
            <img src={logo} className="header-logo" alt="logo" />
            <p>
              MERCADO LIBRE
            </p>  
          </div>              
        </header>    
    );
  }
  
  export default Header;
  