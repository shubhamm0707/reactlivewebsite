import './Header.css';



function Header(){
    return (
<section className="header">
        <nav>
          <a href="index.html">
            {" "}
            <img src={require("../../src/Assets/logo.png")} alt="logo" />{" "}
          </a>

          <div className="nav-links">
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">COURSE</a>
              </li>
              <li>
                <a href="">BLOG</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>

          <div className="text-box">
            <h1>World's Biggest University</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              facilis reiciendis necessitatibus cum magnam! Eveniet repellendus
              vel est impedit rem iste saepe.
            </p>

            <a href="" className="hero-btn">
              Visit Us To Know More
            </a>
          </div>
        </nav>
      </section>
    )
}

export default Header;