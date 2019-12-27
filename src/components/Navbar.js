import React from 'react'

import SearchBox from '../components/SearchBox'
import logo from '../img/tw-logo-white.svg'
import Headroom from "react-headroom"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { GoArrowUp, GoTelescope } from 'react-icons/go'
import { GoGear } from 'react-icons/go'
// import { FaQuestionCircle } from 'react-icons/fa'
// import { AiFillBank } from 'react-icons/ai'
import { FaRegAddressCard, FaTelegramPlane, FaSearch, FaTimesCircle } from 'react-icons/fa'

// import PopContact from '../components/PopContact'
// import ScrollAnimation from 'react-animate-on-scroll'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'


const CustomBox = styled.div`

input.navbar-link{width:80%; margin-top:5px;}

.popsemicontainer {
  .grad {
	  position:relative;
	  top:30px;
// 	  z-index:3;
    margin: 0 auto;      
    color: #fff;  
    height:50px;
    width:auto;
    padding:.8rem 2rem;   
    line-height: 20px;    
//     background: #DB2600;
    font-weight:bold;
    border: 0;
    border-radius: 3px;  
    cursor: pointer;
    text-align: center; 
    transition: background 0.3s ease-in;
    &:hover { /* background: #ff0000; */ cursor:pointer; }
  }
  .content {
    height: 0; 
    width: auto; 
    opacity: 0;    
    visibility: hidden;
    overflow: hidden; 
    cursor: default;
    display:none;
    transition: opacity 0.2s ease-in; 
	}      
  }     
  
    .modal-content, 
  .modal-backdrop {
    height: 0; 
    width: 0; 
    opacity: 0;    
    visibility: hidden;
    overflow: hidden; 
    cursor: default;
    transition: opacity 0.2s ease-in; 
  }
  
    .modal-close {
	  position:absolute;
	  top:15px;
	  right:15px;
// 	  z-index:5;
	  
    color: #999;
    padding-top: 0;
	font-size:28px;
    width: 25px;
    height: 25px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover { color: #666;
    }       
  }

  #semitoggle {
    display: block;
    visibility: hidden;
    &.active ~ .modal-backdrop,
    &:checked ~ .modal-backdrop {
      background-color: rgba(0, 0, 0, 0.0);
      width: 100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: -1;
      visibility: visible;
      opacity: 1;      
      transition: opacity 0.2s ease-in; 
    }

    &.active ~ .content,
    &:checked ~ .content {  
	opacity: 1;
      background-color: transparent;

      height: auto;
      padding:0 0 0 0 !important;
	margin:0 auto;
	display:block;
//       z-index: 4;
      pointer-events: auto;
      cursor: auto;
      visibility: visible; 
      @media (max-width: 400px) {  }                   
    }  
  }
}
#semitoggle {
	&.active ~ .btn,
    &:checked ~ .btn {
// 	display:none;
	}
}
`


const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (



	    
    <> 
    <CustomBox>     
<Headroom style={{ zIndex: '5', }}>
    <header className="header" style={{position:'relative',}}>
    
    <Link to="/" className="logolink" title="Logo - Back To Home">
    <img className="logo fadeInDown" src={logo} alt="Twilightscapes Logo" />
    </Link>
    
   

   
    
<input className="menu-btn" type="checkbox" id="menu-btn" />
<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

            <ul id="menu" className="menu">
            
             
             
            <li className="grad" style={{position:'relative',}}>
              <Link id="galleries" className="navbar-item" to="/galleries"  style={{paddingRight:'50px',}}>
               Galleries <GoTelescope className="txtshadow" style={{fontSize:'30px', position:'absolute', right:'4px', top:'12px',}}/>
              </Link>
              
              </li>
              
              
              {/*<li style={{position:'relative',}}>
              <Link id="vault" className="navbar-item" to="/vault" style={{paddingRight:'50px',}}>
                The Vault <AiFillBank className="txtshadow" style={{fontSize:'30px', position:'absolute', right:'10px', top:'15px',}}/>
              </Link>
              </li>*/}
              
            
            <li className="grad" style={{position:'relative',}}>
              <Link className="navbar-item" to="/about" style={{paddingRight:'50px',}}>
                About <FaRegAddressCard className="txtshadow" style={{fontSize:'30px', position:'absolute', right:'10px', top:'15px',}}/>
              </Link>
              </li>
              
               <li className="grad" style={{position:'relative',}}>
              <Link className="navbar-item" to="/gear" style={{paddingRight:'50px',}}>
                Gear <GoGear className="txtshadow" style={{fontSize:'30px', position:'absolute', right:'10px', top:'15px',}}/>
              </Link>
              </li>
              
              {/* <li>
              <Link className="navbar-item" to="/products">
                How We Do It
              </Link>
              </li> */}
              
              
              
              
              
              
              
              


              <li style={{position:'',}}>
             
             <label className="modal-btn grad" htmlFor="modal-toggle" style={{position:'relative', textShadow: '1px 2px 0px black', paddingRight:'20px', borderRight:'1px solid #000',}}>Contact <FaTelegramPlane className="contact-icon txtshadow" style={{fontSize:'30px', position:'relative', right:'-6px', top:'12px',}}/></label> 
             
              </li>
              
              
              <li style={{position:'',}}>
             
             <label className="modal-btn grad" htmlFor="semitoggle" style={{position:'relative', textShadow: '1px 2px 0px black', paddingRight:'20px',}}> <FaSearch className="contact-icon txtshadow" style={{fontSize:'30px', position:'relative', right:'', top:'12px',}}/></label> 
             
              </li>
              
              
              
            </ul>
            
            
      
      
   </header>
   
    <div className="themer"><ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="themeSlide grad-vert">
            <input
              type="checkbox" value="None" id="themeSlide" name="check"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            
          <label htmlFor="themeSlide" style={{color:'#222', textAlign:'center', padding:'1px',}}>Theme</label></div>
        )}
      </ThemeToggler></div>
      








<div className="popsemicontainer" style={{position:'absolute', top:'60px', right:'10%', padding: '0 0', justifyContent:'center', alignItems:'center', marginTop:'0',  height:'auto', flexDirection:'column', zIndex:'4', width:'300px',}}>


  <input id="semitoggle" type="checkbox" style={{position: 'relative',}} />
  
   
  <div className="content" style={{width:'', position:'', margin:'0 auto', top:'', textAlign:'center',}}>

<label className="close" htmlFor="semitoggle" style={{position: 'absolute', right:'5px', top: '5px', fontSize:'24px', cursor:'pointer',}} title="Close this section"><FaTimesCircle /></label>
    
<div className="container" style={{margin:'0', padding:'0px',}}>
    

    <div className="searchbox" style={{position:'', width:'', padding:'0 1rem 0 0', border:'1px solid', borderRadius:'8px',}}><SearchBox searchIndex={data.siteSearchIndex.index} /></div>


 </div>
    
    
   
  </div>
  </div>


      
      
       
      
      <a href="#topofpage" title="Back To Top" className="back-to-top "><GoArrowUp /></a>
</Headroom>
        
        
        
 
 

</CustomBox>
</>
      
      
   )}
  />
)

export default NavBar