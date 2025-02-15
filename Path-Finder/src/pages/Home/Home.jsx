/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Newscover from '../../components/Newscover'
import Footer from '../../components/Footer'
import "../../pages/Home/Home.scss"
import Marquee from "react-fast-marquee";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast"

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';






const Home = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();


  const handleForm = async(e)=>{
    e.preventDefault();
    try{
      const{data} = await axios.post(
        "http://localhost:4000/api/v1/form/send",
        {name,company,email,phone,message},
        {
          headers:{
            "Content-Type" : "application/json",
          },
          withCredentials:true,
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setMessage("");
      navigate("/");

    }catch(error){
      error(error);
    }
    alert("your message has been sent! We will try to contact you ASAP")
  }
  
  return (
    <div className='mainpagediv'>
    <Navbar />
    
    <hr />
    <div className='first-page'>
        <div className="first-text">
            <h1>Discover Your Perfect Career</h1>
            <p>Make smart career decision with our assistance and support</p>
            <button ><a href="#second-page"> Get Started</a></button>
            <h4>Career Assessment | Personalised Guidance|
College Roadmap Planning | College Applications 
</h4>
<img src="https://mindlerimages.imgix.net/tinyimg/desktop.svg" alt="" />
</div>
{/* <div className='large-img'>
        <img src="src\images\Screenshot 2024-03-22 201620.png" alt="" />

</div> */}


    
    {/* <img src="src\images\Screenshot 2024-03-22 201620.png" alt="" /> */}


    {/* <div className="slogan-text">
    <h1>The best way to <br />choose your <br/>career path <br/> online!</h1>
    <h6>we wish to give you the best guidance so that your future stays secured !</h6>
    <div className="buttons2">
        <button><span>Get started</span> </button>
        <button><p>About us</p></button>
    </div>
    
    </div>
    
    <div className="banner">
        <img src="src\images\4620564-removebg-preview (1).png" alt="" /> */}
    {/* </div> */}
    </div>

    <div id="second-page">
      <h3>What we <span>provide !</span></h3>
        {/* <h3>Trusted by users <span> globally </span>! </h3> */}
        <section className="articles">
  <article className='movecard'>
    <div className="article-wrapper">
      <figure>
        <img src="src\images\Screenshot 2024-03-22 040451.png" alt="" />
      </figure>
      <div className="article-body">
        <h2>Careers Section! </h2>
        <p>
        Explore diverse domains and career paths on our page. From Computer Science to MBA and beyond, discover opportunities in various fields. Gain insights into industries and make informed decisions about your future endeavors. Start exploring careers with us today!        </p>
        <div className="read-more">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
          </svg>
        </div>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <img src="src\images\Screenshot 2024-03-22 041143.png" alt="" />
      </figure>
      <div className="article-body">
        <h2>Counselor Section</h2>
        <p>
        Seek guidance and support on our page. From career advice to mental health support, our counselors offer personalized assistance. Schedule a session today and take the first step towards a happier you.        </p>
        <div className="read-more">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
          </svg>
        </div>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <img src="https://th.bing.com/th/id/OIP.fRIR1T_KJOGlQ0QuCPFlCQHaE7?w=1024&h=682&rs=1&pid=ImgDetMain" alt="" />
      </figure>
      <div className="article-body">
        <h2>Article Section</h2>
        <p>
        Discover insights and knowledge on our page. From career tips to mental health awareness, our articles cover diverse topics. Written by experts, explore our articles and find inspiration for personal and professional growth.        </p>
        <div  className="read-more">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
          </svg>
        </div>
      </div>
    </div>
  </article>
</section>
    </div>
    <div className="third-page">
        <h2>Words from our <span>Users!</span>  </h2>
        <p>Want to add yours? send via mail <span>pathfinder@gmail.com</span></p>
    <Marquee>
    <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src="src\images\userimg.jpg" alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>AryanDegi</MDBCardTitle>
            <MDBCardText>
            I stumbled upon this website and it's been a game-changer! , the ability to connect with experienced counselors has been invaluable. Their insights and advice have given me the confidence to pursue my dreams. Highly recommend this platform to anyone in need of career guidance!
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src="src\images\userimg.jpg" alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>GarimaSharma</MDBCardTitle>
            <MDBCardText>
              This website offers a fantastic combination of technology and human touch. I feel more confident about my career decisions now, thanks to this platform.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src="src\images\userimg.jpg" alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>RahulSharma</MDBCardTitle>
            <MDBCardText>
            Connecting with counselors was straightforward, and their advice was practical and insightful. However, I wish there were more resources or tools available beyond just the counselor sessions. Overall, though, I'm grateful for the assistance this platform has provided in shaping my career path.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
     <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src="src\images\userimg.jpg" alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>KshitijJain</MDBCardTitle>
            <MDBCardText>
            I found this website to be user-friendly and intuitive, which made my career exploration process much smoother. The recommender system provided me with insightful suggestions, helping me discover career paths I hadn't considered.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </Marquee>

    </div>

    <div className="fourth-page">
      <h2>A step-by-step approach to tackle every aspect of <span>career selection</span> and <span>planning</span> 
</h2>
      <div className="section-1">
      <div className="left-side">
        <h3>What are the <span>CHALLENGES</span> a student faces? </h3>
        <p>The major problem which is faced by students is lack of clarity , they struggle to identify their interests , long term goals , strengths and weakness which leads to confusion .Pressure from family and peers to take a certain career path is also one of the main challenges of a student nowadays .They fear failure more than anything else, fearing making the wrong choice or not living up to expectations set by others.</p>
      </div>
      <div className="right-side">
        <img src="https://epe.brightspotcdn.com/2c/fb/3147ce2b4b36be4165148740c799/072023-37-zikmund-fs-hendrie.jpg" alt="" />
      </div>
      </div>

      <div className="section-2">
        <div className="left-side">
        <img src="https://www.weareteachers.com/wp-content/uploads/Teacher-helping-a-student-write.jpg" alt="" />

        </div>
        <div className="right-side">
          <h3>How do we  <span>HELP</span > the students with the same</h3>
          <p>At PathFinder, we understand the challenges students face when planning their careers. We address these hurdles by offering personalized career assessments and expert one-on-one guidance through our counseling services. Our advanced recommender system ensures that students receive tailored recommendations for relevant career paths based on their unique profiles. Additionally, we have curated a vast amount of data including articles, guides, and potential career paths to empower our users to make informed decisions and progress confidently in their career journeys.</p>
        </div>
      </div>
    </div>
        
    <div className="fifth-page">
      <div className="first-texts">
      <h2>Have any doubts in your mind?</h2>
      <p>submit them via forum below and we will contact you within 24 hours!</p>
    </div>
    <div className="container">
            <h1 className="brand"><span></span></h1>
            <div className="wrapper">
                {/* COMPANY INFORMATION */}
                <div className="company-info">
                    <h3>PATH|FINDER</h3>
                    <ul>
                        <li><i className="fa fa-road"></i> VIT Bhopal</li>
                        <li><i className="fa fa-phone"></i> 7389098839</li>
                        <li><i className="fa fa-envelope"></i> pathfinder@gmail.com</li>
                    </ul>
                </div>
                {/* End .company-info */}

                {/* CONTACT FORM */}
                <div className="contact">
                    <h3>E-mail Us</h3>
                    <form id="contact-form">
                        <p>
                            <label htmlFor="name">Name</label>
                            <input placeholder='Enter your name' type="text" name="name" id="name" value={name} onChange={(e)=> setName(e.target.value)}  />
                        </p>
                        <p>
                            <label htmlFor="company">School</label>
                            <input type="text" placeholder='enter school name' name="company" id="company" value={company} onChange={(e)=> setCompany(e.target.value)}/>
                        </p>
                        <p>
                            <label htmlFor="email">E-mail Address</label>
                            <input type="email" placeholder='enter valid email' name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                        </p>
                        <p>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" name="phone" placeholder='enter valid placeholder' id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                        </p>
                        <p className="full">
                            <label htmlFor="message">Message</label>
                            <input type="text" name="message" id="message" value={message} onChange={(e)=>setMessage(e.target.value)} />
                        </p>
                        <p className="full">
                            <button type="submit" onClick={handleForm}>Submit</button>
                        </p>
                    </form>
                    {/* End #contact-form */}
                </div>
                {/* End .contact */}
            </div>
            {/* End .wrapper */}
        </div>
    </div>


    <Newscover />
    <Footer />
    </div>


    
  )
}

export default Home