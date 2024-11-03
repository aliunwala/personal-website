import React from "react"
import Link from "next/link"
import styles from "./index.module.css"

export default function Examples() {
  return (
    <div className={styles.examplesContainer}>
      <LinkCard href="/fetchExample" hrefText="Fetch">
        Demo of the Fetch API which is a JavaScript interface for making HTTP
        requests and processing the responses.
      </LinkCard>
      <LinkCard href="/hookExample" hrefText="Hook">
        Demo of useReducer, useState, useRef, and useContext to create a
        contrived clicker and state changer
      </LinkCard>
      <LinkCard href="/formExample" hrefText="Form">
        Demo of the HTML form component and how to wire it up with React
      </LinkCard>
      <LinkCard href="/useReducerExample" hrefText="useReducerExample">
        Demo of the useReducer
      </LinkCard>
      <LinkCard href="/useStateExample" hrefText="useStateExample">
        Demo of the useStateExample
      </LinkCard>
      <LinkCard href="/renderPropsPattern" hrefText="renderPropsPattern">
        Demo of the renderPropsPattern
      </LinkCard>
      <LinkCard href="/flashCardsProject" hrefText="flashCardsProject">
        Demo of the flashCardsProject
      </LinkCard>
      <LinkCard
        href="/currencyConverterProject"
        hrefText="currencyConverterProject"
      >
        Demo of the currencyConverterProject
      </LinkCard>
      {/* <LinkCard href="/geolocateProject" hrefText="geolocateProject">
        Demo of the geolocateProject using custom hooks
      </LinkCard> */}
      <LinkCard
        href="/folderStructureProject"
        hrefText="folderStructureProject"
      >
        Demo of the folderStructureProject using recursive compoenents
      </LinkCard>
    </div>
  )
}

function LinkCard({ href, hrefText, children }) {
  return (
    <div className="linkCard mt-4 mb-4">
      <Link href={href} className={styles.examplesBodyTitle}>
        {children}
      </Link>
      <br></br>
      <Link
        className={styles.examplesBodyText}
        href={`https://github.com/aliunwala/personal-website/tree/main/pages/${href.slice(
          1
        )}/index.js`}
      >
        Github source code
      </Link>
    </div>
  )
}
