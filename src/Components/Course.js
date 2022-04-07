import './Course.css'

function Course(){

return(
    <section class="course">
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>
            <p>
              The RAR5 file format removed comments for each file (though
              archive comment still remains), authenticity verification, and
              specialized compression algorithms for text and multimedia files.
              RAR5 also changed the file name for split volumes from
              "archivename.rNN" to "archivename.partNN.rar".
            </p>
          </div>

          <div className="course-col">
            <h3>Degree</h3>
            <p>
              The RAR5 file format removed comments for each file (though
              archive comment still remains), authenticity verification, and
              specialized compression algorithms for text and multimedia files.
              RAR5 also changed the file name for split volumes from
              "archivename.rNN" to "archivename.partNN.rar".
            </p>
          </div>

          <div className="course-col">
            <h3>Post Graduation</h3>
            <p>
              The RAR5 file format removed comments for each file (though
              archive comment still remains), authenticity verification, and
              specialized compression algorithms for text and multimedia files.
              RAR5 also changed the file name for split volumes from
              "archivename.rNN" to "archivename.partNN.rar".
            </p>
          </div>
        </div>
      </section>

)

    
}

export default Course;