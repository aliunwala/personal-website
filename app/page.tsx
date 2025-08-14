import Head from "next/head";

import JobCard from "./_components/JobCard";
import EducationCard from "./_components/EducationCard";
import AwardCard from "./_components/AwardCard";
import ProjectCard from "./_components/ProjectCard";
import * as React from "react";
import { useEffect, useState } from "react";

import SendEmail from "./_components/SendEmail";
import DownloadFile from "./_components/DownloadFile";
import AboutMeSmall from "./_components/AboutMeSmall";
// import test from "./test"
import {
  jobCardData,
  educationCardData,
  awardsCardData,
  projectCardData,
  aboutMeData,
  aboutSiteData,
  navGenerationData,
  aboutMeSmallData,
} from "../lib/allData";
import { NavElement } from "@/interfaces/interfaces";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>{aboutMeSmallData.name}</title>
      </Head>

      <main>
        {/* tailwindtest */}
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}

        {/* TS test */}
        {/* <Test></Test> */}
        <div className="content">
          {/********************
           * LAYOUT: LEFT COLUMN
           *********************/}
          <div className="column1 col stickyItem">
            <div className="leftNavAndQuicklinksSpacer">
              <div>
                <AboutMeSmall {...aboutMeSmallData}></AboutMeSmall>
                {/*******
                 * NAV
                 ********/}
                <ul className="hideMeSmall myNav">
                  {navGenerationData.map((navElement: NavElement) => {
                    return (
                      <li key={navElement.name}>
                        <a className="myNavA navEffect" href={navElement.href}>
                          <span>{navElement.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div
                className="quickLinks hideMeSmall"
                style={{ marginTop: "16px" }}
              >
                <SendEmail {...aboutMeSmallData}></SendEmail>
                <DownloadFile {...aboutMeSmallData}></DownloadFile>
                <a href="https://www.linkedin.com/in/aliunwala/">
                  <img
                    src="/LinkedIn_icon.png"
                    alt="Link to my linkedin page"
                    style={{ height: "24px", width: "24px", marginLeft: "8px" }}
                  ></img>
                </a>
                <a href="https://github.com/aliunwala">
                  <img
                    src="/github-mark-white.png"
                    alt="Link to my github page"
                    style={{
                      height: "24px",
                      width: "24px",
                      marginLeft: "16px",
                    }}
                  ></img>
                </a>
              </div>
            </div>
          </div>
          {/********************
           * LAYOUT: RIGHT COLUMN
           *********************/}
          <div className="column2 col">
            {/************
             * ABOUT ME
             *************/}
            <section>
              <a id="about" className="anchorOffset"></a>
              <h2 className="sectionTitle hideMe">About</h2>
              {aboutMeData}
              <br></br>
              <div className="aboutText hideMe">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>Get my resume:</p>
                  <DownloadFile {...aboutMeSmallData}></DownloadFile>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "12px" }}>Get in touch:</p>
                  <div className="quickLinks">
                    <SendEmail {...aboutMeSmallData}></SendEmail>
                    <a href="https://www.linkedin.com/in/aliunwala/">
                      <img
                        src="/LinkedIn_icon.png"
                        alt="Link to my linkedin page"
                        style={{
                          height: "24px",
                          width: "24px",
                          marginLeft: "8px",
                        }}
                      ></img>
                    </a>
                    <a href="https://github.com/aliunwala">
                      <img
                        src="/github-mark-white.png"
                        alt="Link to my github page"
                        style={{
                          height: "24px",
                          width: "24px",
                          marginLeft: "16px",
                        }}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/************
             * Experience
             *************/}
            <section id="experience">
              <h2 className="sectionTitle">Experience</h2>
              {jobCardData.map((job) => {
                return (
                  <JobCard
                    key={job.title.trim().replaceAll(" ", "")}
                    {...job}
                  ></JobCard>
                );
              })}
            </section>
            {/************
             * Projects
             *************/}
            <section id="projects">
              <h2 className="sectionTitle">Projects</h2>
              {projectCardData.map((project) => {
                return (
                  <ProjectCard
                    key={project.id.trim().replaceAll(" ", "")}
                    {...project}
                  ></ProjectCard>
                );
              })}
            </section>
            {/************
             * Education
             *************/}
            <section id="education">
              <h2 className="sectionTitle">Education</h2>
              {educationCardData.map((education, idx) => {
                return (
                  <EducationCard
                    key={
                      education.school.trim().replaceAll(" ", "") + "year" + idx
                    }
                    {...education}
                  ></EducationCard>
                );
              })}
            </section>
            {/************
             * Awards
             *************/}
            <section id="awards">
              <h2 className="sectionTitle" style={{ paddingTop: "20px" }}>
                Awards
              </h2>
              {awardsCardData.map((award) => {
                return (
                  <AwardCard
                    key={award.title.trim().replaceAll(" ", "")}
                    {...award}
                  ></AwardCard>
                );
              })}
            </section>
            {/************
             * ABOUT SITE
             *************/}
            <section id="aboutsite">
              <h2 className="sectionTitle">About the site</h2>
              <p className="myFooter">{aboutSiteData}</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
