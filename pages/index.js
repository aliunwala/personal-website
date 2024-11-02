import Head from "next/head"

import JobCard from "../components/JobCard"
import EducationCard from "../components/EducationCard"
import AwardCard from "../components/AwardCard"
import ProjectCard from "../components/ProjectCard"
import * as React from "react"
import { useEffect, useState } from "react"

import SendEmail from "../components/SendEmail"
import DownloadFile from "../components/DownloadFile"
// import test from "./test"
import Test from "./test/index"
import {
  jobCardData,
  educationCardData,
  awardsCardData,
  projectCardData,
  aboutMeData,
  aboutSiteData,
  navGenerationData,
} from "./allData"
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ali Unwala</title>
      </Head>

      <main>
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        {/* <Test></Test> */}
        <div className="content">
          <div className="column1 col stickyItem">
            <div className="leftNavAndQuicklinksSpacer">
              <div>
                <h1 className="myName">Ali Unwala</h1>
                <p className="myTitle">Senior Software Engineer</p>
                <p className="mySubTitle">
                  I enjoy understanding how complex systems work and making
                  unique user interfaces that delight users.
                </p>
                <ul className="hideMeSmall myNav">
                  {navGenerationData.map((navElement) => {
                    return (
                      <li>
                        <a className="myNavA navEffect" href={navElement.href}>
                          <span>{navElement.name}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="quickLinks hideMeSmall">
                <SendEmail></SendEmail>
                <DownloadFile></DownloadFile>
              </div>
            </div>
          </div>
          <div className="column2 col">
            {/* dates, title, description, technologies */}
            <section>
              <a id="about" className="anchorOffset"></a>
              <h2 className="sectionTitle hideMe">About</h2>
              {aboutMeData}
              <p className="aboutText hideMe">
                <br></br>
                Get in touch:
                <SendEmail></SendEmail>
                <br></br>
                Get my resume:
                <DownloadFile></DownloadFile>
              </p>
            </section>

            <section id="experience">
              <h2 className="sectionTitle">Experience</h2>
              {jobCardData.map((job) => {
                return <JobCard {...job}></JobCard>
              })}
            </section>

            <section id="projects">
              <h2 className="sectionTitle">Projects</h2>
              {projectCardData.map((project) => {
                return <ProjectCard {...project}></ProjectCard>
              })}
            </section>

            <section id="education">
              <h2 className="sectionTitle">Education</h2>
              {educationCardData.map((education) => {
                return <EducationCard {...education}></EducationCard>
              })}
            </section>

            <section id="awards">
              <h2 className="sectionTitle" style={{ paddingTop: "20px" }}>
                Awards
              </h2>
              {awardsCardData.map((award) => {
                return <AwardCard {...award}></AwardCard>
              })}
            </section>

            <section id="aboutsite">
              <h2 className="sectionTitle">About the site</h2>
              <p className="myFooter">{aboutSiteData}</p>
            </section>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
