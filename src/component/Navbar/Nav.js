import logo from "../img/logo.svg";
import logo2 from "../img/logo-2.png";
import "./nav.css";
export default function Nav() {
  window.addEventListener("scroll", function (event) {
    const bodyrect = document.body.getBoundingClientRect().top;
    if (this.scrollY > 0) {
      document
        .getElementsByClassName("header-one")[0]
        .classList.add("header-fixed");
    } else {
      document
        .getElementsByClassName("header-one")[0]
        .classList.remove("header-fixed");
    }
  });
  return (
    <>
      <div className="header-one">
        <div className="nav">
          <div className="logo">
            <a href="#">
              <img src={logo} />
            </a>
          </div>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input placeholder="what is your mind today?" type="search"></input>
            <button type="submit">Search</button>
          </div>
          <div className="icon">
            <i className="fa-solid fa-location-dot"></i>
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="sign">
            <button>sign in</button>
          </div>
        </div>
        <nav className="nav-2">
          <div className="logo-2">
            <img src={logo2} />
          </div>
          <div className="navbar">
            <ul>
              <li>
                <a href="#">MOBILES & MORE</a>
              </li>
              <li>
                <a href="#">MEN</a>
              </li>
              <li>
                <a href="#">WOMEN</a>
              </li>
              <li>
                <a href="#">HOME & KITCHEN</a>
              </li>
              <li>
                <a href="#">APPLIANCES</a>
              </li>
              <li>
                <a href="#">SPORTS & MORE</a>
              </li>
              <li>
                <a href="#">ESSENTIALS</a>
              </li>
              <li>
                <a href="#">OFFERS</a>
              </li>
              <li>
                <a href="#">GLOBAL SHOPPING</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="nav-3">
          <div className="navbar-2">
            <ul>
              <li>
                <a href="#">Jaw Dropping Deals</a>
              </li>
              <li>
                <a href="#">Refurbished Mobile</a>
              </li>
              <li>
                <a href="#">Express Shipping</a>
              </li>
              <li>
                <a href="#">Men's Clothing</a>
              </li>
              <li>
                <a href="#">Women's Fashion</a>
              </li>
              <li>
                <a href="#">Footwear</a>
              </li>
              <li>
                <a href="#">Kitchen & Dinning</a>
              </li>
              <li>
                <a href="#">Audio & Headphones</a>
              </li>
              <li>
                <a href="#">Bags & Luggage</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
