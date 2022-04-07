import './Facilities.css';


function Facilities() {
    return(
        <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="facilities-col">
            <img src={require("../../src/Assets/library.png")} alt="logo" />
            <h3>World className Library</h3>
            <p>
              {" "}
              The RAR5 file format removed comments for each file (though
              archive comment still remains), authenticity verification, and
              specialized compression algorithms for text and multimedia files.
            </p>
          </div>

          <div className="facilities-col">
            <img src={require("../../src/Assets/basketball.png")} alt="logo" />
            <h3>Largest Play Ground</h3>
            <p>
              {" "}
              The RAR5 file format removed comments for each file (though
              archive comment still remains), authenticity verification, and
              specialized compression algorithms for text and multimedia files.
            </p>
          </div>

          <div className="facilities-col">
            <img src={require("../../src/Assets/cafeteria.png")} alt="logo" />
            <h3>Tasty And Healthy Food</h3>
            <p>
              {" "}
              The RAR5 file format removed comments for each file (though
              archive comment still remains), authenticity verification, and
              specialized compression algorithms for text and multimedia files.
            </p>
          </div>
        </div>
      </section>
    )
}



export default Facilities;