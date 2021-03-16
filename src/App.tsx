import { CreateLogin } from './components/CreateLogin/CreateLogin';
import './styles/Globalstyle.css';
import './styles/App.css';

import Marca from './img/marca.svg';
import Phones from './img/phones.svg';
import MarcaFooter from './img/marca-footer.svg';
import IconFace from './img/icon_facebook.svg';
import IconTwitter from './img/icon_twitter.svg';
import IconInsta from './img/icon_instagram.svg';
import { Shop } from './components/Shop/Shop';
import { Checkout } from './components/Checkout/Checkout';
import { Quote } from './components/Quote/Quote';

function App() {
  return (
    <div>
      <header className="menu">
        <a href="/" className="menu-logo">
          <img src={Marca} alt="Bella Olanje - Marca" />
        </a>
        <nav className="menu-nav">
          <ul id="MenuItems">
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">Faq</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="intro">
        <p>Food app</p>
        <h1>
          Why stay hungry when <br />
          you can order form Bella Onojie
        </h1>
        <h4>Download the bella onoje’s food app now on</h4>

        <a href="/" className="btn-playStore">
          PlayStore
        </a>
        <a href="/" className="btn-appStore">
          App Store
        </a>
      </main>
      <div className="img-cell">
        <img src={Phones} alt="Images - Phones" />
      </div>

      <div className="app">
        <h1>How the app works</h1>
      </div>

      <CreateLogin />
      <Shop />
      <Checkout />
      <Quote />

      <footer className="footer">
        <a href="/" className="img_respo">
          <img src={MarcaFooter} alt="Bella Olanje" />
        </a>
        <div className="redes">
          <ul>
            <li>
              <img src={IconTwitter} alt="Twitter" />
            </li>
            <li>
              <img src={IconFace} alt="Facebook" />
            </li>
            <li>
              <img src={IconInsta} alt="Instagram" />
            </li>
          </ul>
        </div>
        <p>Copywright 2020 Bella Onojie.com</p>
      </footer>
    </div>
  );
}

export default App;
