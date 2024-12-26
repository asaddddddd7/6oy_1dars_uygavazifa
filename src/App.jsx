import React from "react";
import  bgcolor  from "./image/bg-color.svg";
import logo from './image/vektor.png'
import logo2 from "./image/logo2.png";
import samsung from "./image/samsung.png";
import monday from "./image/a.png";
import segment from "./image/segment.png"
import white from "./image/white.png";
import player from "./image/player.png";
function App() {
  return (
    <div>
      <header className="header">
        <div className="header-container container">
          <h2>ShapeVoice</h2>
          <select name="example" id="example">
            <option value="value1">Product</option>
            <option value="value2">Product</option>
          </select>
          <select name="example" id="example">
            <option value="value1">Template</option>
            <option value="value2">Template</option>
          </select>
          <p className="paragref1">Blog</p>
          <p className="paragref2">Pricing</p>
          <p className="sign">Sign In</p>
          <button className="free-btn">Start Free</button>
          <img src={bgcolor} className="position" alt="Background" />
        </div>
      </header>
      <main className="main">
        <div className="main-container container">
          <div className="main-left">
            <h1>Managing business payments has never been easier </h1>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything.
            </p>
            <div className="main-flex">
              <button>Our Process</button>
              <div className="plyer">
                <img src={player} alt="" />
              </div>
              <p>See How It Works</p>
            </div>
          </div>
          <div className="main-right">
            <h2>Get Started for Free</h2>
            <form action="">
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Password" />
              <button>Get Started</button>
            </form>
          </div>
        </div>
      </main>
      <div className="logo">
        <div className="logo-container container">
          <p className="logo_top-p">
            Trusted By Over 100+ Startups and freelance business
          </p>
          <div className="logo-flex">
            <img src={logo} alt="logo-img" />
            <img src={logo2} alt="logo-img" />
            <img src={samsung} alt="logo-img" />
            <img src={monday} alt="logo-img" />
            <img src={segment} alt="logo-img" />
          </div>
          <h2>Believing neglected so so allowance</h2>
          <h3>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </h3>
          <button>We so opinion friends me message as delight.</button>
          <div className="logo-cards">
            <div className="logo-card logo-card1">
              <img src={white} alt="" />
              <p className="card-h">Led Ask Possible Mistress</p>
              <p className="card-p">
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </p>
            </div>
            <div className="logo-card">
              <img src={white} alt="" />
              <p className="card-h">Led Ask Possible Mistress</p>
              <p className="card-p">
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </p>
            </div>
            <div className="logo-card">
              <img src={white} alt="" />
              <p className="card-h">Led Ask Possible Mistress</p>
              <p className="card-p">
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="chek-flex container">
        <p>Track your crytpo portfolio on the best way possible</p>
        <button>Check It Out</button>
      </div>
    </div>
  );
}

export default App;
