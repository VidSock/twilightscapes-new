import React, { Component } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import Image from '../Image'
import { graphql } from 'gatsby'
import { HTMLContent } from '../Content'
import Contact from '../Contact-inc'
import ScrollAnimation from 'react-animate-on-scroll'
// import PopNewsletter from '../PopNewsletter'
// import ArticleTemplate from '../ArticleTemplate'
// import { Link } from 'gatsby'
import styled from 'styled-components'
// import Intro1 from '../Intro1'
import Intro2 from '../Intro2'
// import Intro3 from '../Intro3'

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

.intro:before{
	content: "Todd Leads A Dual-Life";
position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:280%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
animation: poof 1.5s forwards;
animation-delay: 1.5s;
top:0 !important;
}

.image-wrap {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.image-wrap img {
  width: 100vw;
  z-index:0;
}




@media (min-width: 48em) {

  .boom1{font-size:380% !important;}
  .boom2{font-size:250% !important;}
  .boom3{font-size:380% !important;}
  .boom4{font-size:280% !important;}

}

@media (max-width: 48em) {

  .image-wrap {height:auto !important; min-height:300px !important;}
  
  .intro:before{font-size:150% !important}
  .content{flex-direction:column !important;}
  .content .stack{width:100% !important; margin:0 !important; background:tranparent !important;}
  .pitch{font-size:250% !important; text-align:center;}
  .split {display:block !important; width:100% !important; }
  .split div{max-width:100% !important; background:tranparent !important;}
  .sidebar{margin:2rem 0;}
  .sidebar .logolink{text-align:center !important;}
}




`



const HomePageTemplate = ({
  title,
  heading,
  description,

  meta_title,
  meta_description,

}) => (
<>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
      <html className="fullhead" />
    </Helmet>
    
    





<CustomBox>
<div className="intro">
{/* <Intro1 /> */}
{/* <Intro2 /> */}
{/* <Intro3 /> */}
<Intro2 />
<section className="section split" style={{display:'flex', padding:'2%', position:'relative',}}>



<ScrollAnimation animateIn="bounceInLeft" delay={0}>
<div className='container innerpanel' style={{padding:'2% 3%', borderRadius:'12px',}}>

<h1 className='title' style={{textAlign:'center',}}>{title}</h1>
              
<div className="content" style={{margin:'0 1% 0 0', padding:'2% 0', borderRadius:'12px',}}>

<h3 className="" style={{textAlign:'center',}}>
{heading}
</h3>

</div>

{description}



</div>
</ScrollAnimation>

<div className="sidebar" style={{padding:'1%', minWidth:'35%', maxWidth:'35%', marginLeft:'2%',}}>
    
    <div style={{position:'sticky', top:'30px', }}>





<ScrollAnimation animateIn="bounceInRight" delay={0}>

<div className="container content" style={{margin:'0 0 1rem 0', padding:'2% 0', borderRadius:'10px',}}>
<h3 className="logotype" style={{textAlign:'center', fontSize:'180%',}}>
Network
</h3>
</div>




    <a href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <Image className="" alt="Todd Lambert Night photos" filename="twilightscapes-button.jpg" />
    <br />
    Experience a new style of landscape photography. Explore the unusual and see the Western States all through the eyes of Todd Lambert.
    <h5 style={{textAlign:'center',}}>Visit Twilightscapes.com</h5></a>
    
    <br />
    <br />
 
    
    
    <a href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <Image className="" alt="Todd Lambert Night photos" filename="urban-fetish-button.jpg" />
    <br />
    Take a walk on the wild side and follow along as Todd Lambert goes in search of the creepiest, freakiest, spookiest abandoned locations you can find anywhere.    
    <h5 style={{textAlign:'center',}}>Visit UrbanFetish.com</h5></a>
    </ScrollAnimation>
    </div>
    </div>




</section>

<ScrollAnimation animateIn="bounceInUp" delay={0}>
<div className="outer">
    <Contact className="container contactform" />
</div>
</ScrollAnimation>
<br />
    
    </div>
    </CustomBox>
  </>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
