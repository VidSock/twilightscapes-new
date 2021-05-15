import React from 'react'
// import Layout from '../components/Layout'
import Slider from '../components/Slider'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


const Test = (props) => (
  // <Layout>
    <section className="outer section section--gradient">
      <div className="container" style={{padding: '2rem 2rem'}}>
      <h1>Test</h1>
      
      <div class="entry-content">
		<p>Thank you for visiting my web site. This is a test page.</p>


    {/* <div style={{width:'100vw', height:'80vh', position:'relative'}}><Slider /></div> */}
			

    <Slider />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
	</div>
      
          </div>
    </section>
  // </Layout>
)

export default Test

