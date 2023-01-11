import { graphql } from "gatsby"
import * as React from "react"
import Navbar from "../components/navbar"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import * as contactstyle from "../cssmodules/contact.module.scss"
import Footer from '../components/footercomp.jsx'
import Waver from "../components/waver";


const ContactPage = ({ data }) => {


  return (
    <main >
      <Navbar></Navbar>
      <div className={contactstyle.contactwrapper}>
        <div className={contactstyle.contentwrapper}>
          <img src={data.contentfulContactPage.profilePicture.url} alt="Person" />
          <div className={contactstyle.contactgrid}>
            <section className={contactstyle.grid1}><h1>My socials</h1>{renderRichText(data.contentfulContactPage.socials)}</section>
            <section className={contactstyle.grid2}><h1>My contactinformation</h1>{renderRichText(data.contentfulContactPage.contactInformation)}</section>
          </div>
        </div>

      </div>
      <Waver></Waver>
      <Footer></Footer>
    </main>
  )
}

export default ContactPage

export function Head() {
  return (

    <>
      <meta name="description" content="Female junior frontenddeveloper about me" />
      <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"></link>
      <title>Contact</title>
    </>
  )

}
// GraphQL query
export const query = graphql`
query MyContact {
   contentfulContactPage {
    contactInformation {
           raw
         }
         socials{
         raw
       }
         profilePicture {
         url
         publicUrl
       }
  }
}
`