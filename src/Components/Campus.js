import './Campus.css'


function Campus (){
    return(
        <section className="campus">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="campus-col">
            <img src={require("../../src/Assets/london.png")} alt="logo" />
            <div className="layer">
              <h3>LONDON</h3>
            </div>
          </div>

          <div className="campus-col">
            <img src={require("../../src/Assets/newyork.png")} alt="logo" />
            <div className="layer">
              <h3>NEW YORK</h3>
            </div>
          </div>

          <div className="campus-col">
            <img src={require("../../src/Assets/washington.png")} alt="logo" />
            <div className="layer">
              <h3>WASHINGTON</h3>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Campus;