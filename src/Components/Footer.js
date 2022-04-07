import './Footer.css';
import { FaStepForward ,FaMapMarkerAlt} from "react-icons/fa";

import {IoCallOutline} from "react-icons/io5";
import {AiOutlineMail} from "react-icons/ai"
import { ImGooglePlus,ImFacebook,ImTwitter,ImInstagram } from "react-icons/im";

function Footer() {
    return(

        
  <section className="footer">
      
      
       <section className="upper">

         <h1>
             <span>Stay in touch</span> & sign up for newsletter
         </h1>

       </section>

       <section className="middle">

         <div className="box2">

           <img src={require("../../src/Assets/logo.png")} />
           
           <p>
           Lorem ipsum dolor sit amet, vix an natu tur eleifend, mel amet laorit menandri. Ei item justo complectitur duo.
           </p>

           <div className="icons">

             <div className="icon1">
             <ImFacebook color="white"/>
             </div>

             <div className="icon">
             <ImTwitter color="white"/>
             </div>

             <div className="icon">
             <ImInstagram color="white"/>
             </div>

             <div className="icon">
             <ImGooglePlus color="white"/>
             </div>

           </div>

         </div>

         <div className="box2">

           <h2>Quick Links</h2>

           <div>
             <FaStepForward color="white" size={14}/>
             <span>About Us</span>
           </div>

           <div>
           <FaStepForward color="white" size={14}/>
             <span>Recent Projects</span>
           </div>

           <div>
           <FaStepForward color="white" size={14}/>
             <span>Our Mission</span>
           </div>

           <div>
           <FaStepForward color="white" size={14}/>
            <span>FAQ's</span>
           </div>

           <div>
           <FaStepForward color="white" size={14}/>
            <span>Privacy Policy</span>
           </div>
           
         </div>

         <div className="box2">

         <h2>Latest News</h2>
           
         </div>

         <div className="box2">

         <h2>Our Address</h2>

         <div>
             <FaMapMarkerAlt color="#6ed33c" size={16}/>
             <span>60 Grant Ave. Central New Road 0708, UK</span>
           </div>

           <div>
           <IoCallOutline color="#6ed33c" size={16}/>
             <span>+880 1723 801 729</span>
           </div>

           <div>
           <AiOutlineMail color="#6ed33c" size={16}/>
             <span>enviroco@gmail.com</span>
           </div>

           
         </div>

       </section>

       <section className="lower">

         <p>All Right Researved <span>Enviro </span>@ 2020</p>

         <div className="last">
           <p className="green">Home</p>
           <p>|</p>
           <p className="green">Privacy & Policy</p>
           <p>|</p>
           <p className="green">FAQ's</p>
         </div>

       </section>


    </section>

       
    )
}



export default Footer;