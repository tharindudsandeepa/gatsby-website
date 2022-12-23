import React from "react";
import styled from 'styled-components'
import { useStaticQuery,graphql } from 'gatsby'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`
const Text = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: auto;
    margin:auto;
`
const Button = styled.button`
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
    }
`
const LinkGroup = styled.div`
    width: auto;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;
    a{
        transition: 0.8s;
    }
    a:hover {
        color: black;
    }
`

const TextBelow=styled.div`
    color: #486791;
    max-width: auto;
    margin: auto;
    padding: 0 20px;
`
const Footer=()=>{
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
            siteMetadata {
                title
                }
            }
            allContentfulLink(sort: { fields: [createdAt], order: ASC }){
                edges{
                node{
                    title
                    url
                }
                }
            }
            }
        `)
    return(
        <FooterGroup>
            <Text>Tweet “Prototype and build apps with React and Swift. New courses by @MengTo”</Text>
            <Button>Tweet</Button>
            <LinkGroup>{data.allContentfulLink.edges.map(edge => (
                 <a href={edge.node.url}>{edge.node.title}</a>
            ))}</LinkGroup>
            <TextBelow>ackground made in Cinema 4D, ios app in Swift, site in React.<br/>@designcode.io Email us to ask any thing ©
             2022</TextBelow>  
        </FooterGroup>
    )        
}

export default Footer;