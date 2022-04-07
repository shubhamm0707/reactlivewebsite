import './Testimonials.css';


function Testimonials() {
    return(

        <section className="testimonials">
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="testimonial-col">
            <img src={require("../../src/Assets/user1.jpg")} alt="logo" />
            <div>
              <p>
                The RAR5 file format removed comments for each file (though
                archive comment still remains), authenticity verification, and
                specialized compression algorithms for text and multimedia
                files. RAR5 also changed the file name for split volumes from
                "archivename.rNN" to "archivename.partNN.rar".
              </p>
              <h3>Christine Berkley</h3>
            </div>
          </div>

          <div className="testimonial-col">
            <img src={require("../../src/Assets/user2.jpg")} alt="logo" />
            <div>
              <p>
                The RAR5 file format removed comments for each file (though
                archive comment still remains), authenticity verification, and
                specialized compression algorithms for text and multimedia
                files. RAR5 also changed the file name for split volumes from
                "archivename.rNN" to "archivename.partNN.rar".
              </p>
              <h3>David Bayer</h3>
            </div>
          </div>
        </div>
      </section>
       
    )
}



export default Testimonials;