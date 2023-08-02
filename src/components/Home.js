import React, { Fragment } from 'react'
import "../styles/home.scss"
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle,
        AiFillYoutube, AiFillInstagram} from "react-icons/ai"

function Home() {
  return (
    <Fragment>
      <div className='home' id='home'>
      <main>
        <h1>Tech Star</h1>
        <p>Solution to all your problems</p>
      </main>
      </div>

      <div className="home2" >
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems
            you face
            every day. We are leading tech company whose aim is to
            increase the problem solving ability in children.
          </p>
        </div>
      </div>

    <div className="home3" id='about'>
      <div>
        <h1>Who We Are?</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Aut ipsum ducimus incidunt libero ut nisi? Eos mollitia rerum a
          b quae, nesciunt earum inventore doloremque eaque odio deserunt,
          commodi eius veritatis voluptatum, harum suscipit? Debitis tempore
          laborum fugit hic quos odit quasi! Quisquam consequatur
          ipsum consectetur facilis? Totam at suscipit commodi.
        </p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div
          style={{
            animationDelay:"0.3s",
          }}
          >
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>

          <div
          style={{
            animationDelay:"0.5s",
          }}
          >
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>

          <div
          style={{
            animationDelay:"0.7s",
          }}
          >
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>

          <div
          style={{
            animationDelay:"1s",
          }}
          >
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </Fragment>
    
  )
}

export default Home