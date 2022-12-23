import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import '../components/layout.css'
import Wave from "../components/Wave"
import Card from "../components/Card"
import Section from "../components/Section"
import staticdata from'../../staticdata.json'
import styled from 'styled-components'
import Cell from "../components/Cell"
import figma from '../../public/static/images/logo-figma.png'
import framer from '../../public/static/images/logo-framer.png'
import react from '../../public/static/images/logo-react.png'
import sketch from '../../public/static/images/logo-sketch.png'
import studio from '../../public/static/images/logo-studio.png'
import swift from '../../public/static/images/logo-swift.png'
import wallpaper1 from '../../public/static/images/wallpaper.jpg'
import wallpaper2 from '../../public/static/images/wallpaper2.jpg'
import wallpaper3 from '../../public/static/images/wallpaper3.jpg'
import wallpaper4 from '../../public/static/images/wallpaper4.jpg'
import Footer from "../components/Footer"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const IndexPage = () => (
  <Layout>
      <div className="Hero">
          <div className="HeroGroup">
            <h1>
              Learn to<br /> design and code React Apps
            </h1>
            <p>
              Complete cources about the best tools and design systems. Prototype and build apps with React and Swift.
            </p>
            <Link to="/page-2">Watch the video</Link>
            <div className="Logos">
              <img src={figma} width="50" />
              <img src={framer} width="50" />
              <img src={studio} width="50" />
              <img src={sketch} width="50" />
              <img src={react}width="50" />
              <img src={swift} width="50" />
            </div>
            <Wave/>
          </div>
          <div className="Cards">
            <h2>11 courses, more coming</h2>
            <div className="CardGroup">
              <Card 
                title="Design System"
                text="10 sections"
                image={wallpaper1} />
              <Card 
                title="React for Designers"
                text="12 sections"
                image={wallpaper2} />
              <Card 
                title="Sound Design"
                text="5 sections"
                image={wallpaper3} />
              <Card 
                title="ARKit 2"
                text="10 sections"
                image={wallpaper4} />
          </div>
        </div>
        <Section
          image={wallpaper2}
          logo={react}
          title="React for Designers"
          text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
        />
        <SectionCaption>12 sections - 6 hours</SectionCaption>
        <SectionCellGroup>
        {staticdata.cells.map(cell =>(
          <Cell
            title={cell.title}
            image={cell.image}
          />
        ))}
        </SectionCellGroup>
        <Footer></Footer>
        </div>
    </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
