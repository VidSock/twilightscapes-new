import React from 'react'
import styled from "styled-components"
import Image from '../components/Image'
import Newsletter from '../components/PopNewsletter'
import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`






`



   
const Intro3 = () => (

   


<CustomBox style={{}}>
<div className="outer">
  
<div className="image-wrap" style={{position:'relative', overflow:'hidden', paddingTop:'60px', borderBottom:'0px solid #222', borderRight:'0rem solid #dd4400', borderLeft:'0rem solid #dd4400', }}>
  
<div className="" style={{position:'absolute', top:'60px', left:'0', width:'100vw', height:'100vh', overflow:'hidden', padding:'20px 0 0 0', border:'0px solid red', zIndex:'1',}}>
  
  

   

  
  
  <ScrollAnimation animateIn="bounceInDown" delay={1400} offset={0} style={{position:'relative', paddingTop:'0', right:'10%',}}>
        <h1
          className="boom normal txtshadow-header hit-the-floor"
          style={{
            color: '#fff',
            fontSize: '4rem',
           position: 'relative',
//            top: '100px',
//            right: '1%',
//            backgroundColor: '#ff0000',
            textAlign: 'right', 
            float: 'none',
          }}
        >
          Follow me
        </h1>
        </ScrollAnimation>
        
        
  <ScrollAnimation animateIn="bounceInRight" delay={1500} style={{position:'relative', top:'0', right:'10%',}}>
        <h2
          className="boom narrow txtshadow mobile-txt"
          style={{
           fontSize:'3rem',
           color: 'white',
           position: 'relative',
            textAlign: 'right', 
          }}
        >
          into the
        </h2>
        </ScrollAnimation>
        
        
  <ScrollAnimation animateIn="bounceInUp" delay={1450} style={{position:'relative', top:'0', right:'10%',}}>
        <h3
          className="boom"
          style={{
           fontSize:'6rem',
           color: 'white',
           position: 'relative',
//            top: '230px',
            textAlign: 'right',
            textTransform: 'uppercase', 
          }}
        >
          Night
        </h3>
        </ScrollAnimation>


        
<ScrollAnimation animateIn="bounceInRight" delay={2000} style={{position:'relative', top:'-20px', right:'12%', float:'right', display:'inlineBlock', justifyContent:'', alignItems:'center', margin:'0 auto', padding:'30px 0 0 0',  textAlign:'center',}}>
   <Newsletter />      
</ScrollAnimation>




        
        </div>
 
 
 
<ScrollAnimation animateIn="fadeIn">
<div id="slideshow">
  <div className="slide-wrapper"  style={{position:'relative', zIndex:'0',}}>
  

  
     <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="PLANE" filename="night307.jpg" style={{backgroundSize:'cover', zIndex:'',}} /></div>
   
    <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="BOAT" filename="night213.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide kenburns-bottom-right" style={{zIndex:'',}}><Image className="slider" alt="CAR" filename="night294.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    

    <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="CAMP" filename="night303.jpg" style={{backgroundSize:'cover', zIndex:'',}} /></div>
    
    

   
  </div>
</div>
</ScrollAnimation>


</div>
</div>


</CustomBox>
  
)

export default Intro3