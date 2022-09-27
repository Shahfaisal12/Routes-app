import React from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs";
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
   <div className='hero-section' id='home'>

<div className="container pt-5 pb-5">
      <div className="row mt-5 mt-md-0">
        <ul className='py-5 text-white'>
          <li><Link to='home'><a href="/">Home</a></Link></li>
          <li><Link to='faqs'><a href="/">Faqs</a></Link></li>
          <li><Link to='faq'><a href="/">Faq</a></Link></li>
          <li><Link to='contact'><a href="/">contact</a></Link></li>
        </ul>
        <div className="col-md-6">
          <div className="mt-5 mt-md-0" >
          <img
            className="img-fluid mb-5 mt-5 mt-md-0 mb-md-0 rounded shadow-sm hero-image align-items-center"
            src="assests/images/cycle.jpg"
            alt=""  data-aos="fade-right"
          />
          </div>
        </div>
        <div className="col-md-6 align-self-center">
          <div className="hero-content text-white">
          <h1  data-aos="flip-down">Lorem Text</h1>
          <p className="" data-aos="zoom-out-up">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <a href="/" className="btn btn-search text-white" data-aos="fade-up">
            Click Here
          </a>
          </div>
        </div>
      </div>
    </div>
    <Link to='home'>
    <a class="fixedButton" href>
         <div class="roundedFixedBtn"><BsFillArrowUpCircleFill /></div>
      </a>
      </Link>

   </div>
  )
}

export default Hero