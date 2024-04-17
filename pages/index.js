import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import JobCard from "@components/JobCard";
// import EducationCard from "@components/EducationCard";
import EducationCard from "@components/EducationCard";
import ProjectCard from "@components/ProjectCard";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <div class="content">
          <div class="column1 col stickyItem">
            <h1 className="myName">Ali Unwala</h1>
            <p className="myTitle">Senior Software Engineer</p>
            <p className="mySubTitle">
              I build websites, robotics, and IoT systems that delight users. I
              enjoy connecting technologies to create novel workflows.
            </p>
            <ul className="hideMeSmall myNav sectionTitle">
              <li>
                <a className="myNavA" href="#about">
                  <span className="mySpacer"></span>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a className="myNavA" href="#experience">
                  <span className="mySpacer"></span>
                  <span>Experience</span>
                </a>
              </li>
              <li>
                <a className="myNavA" href="#projects">
                  <span className="mySpacer"></span>
                  <span>Projects</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="column2 col">
            {/* dates, title, description, technologies */}
            <section id="about">
              <h2 className="sectionTitle hideMe">About</h2>
              <p>
                TODO say more about me and the stuff I do......Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Curabitur in ante ac
                velit eleifend venenatis. Donec quam neque, ultrices in
                pellentesque at, accumsan id justo. Fusce pretium pharetra diam
                id consectetur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur in ante ac velit eleifend venenatis.
                Donec quam neque, ultrices in pellentesque at, accumsan id
                justo. Fusce pretium pharetra diam id consectetur. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Curabitur in ante
                ac velit eleifend venenatis. Donec quam neque, ultrices in
                pellentesque at, accumsan id justo. Fusce pretium pharetra diam
                id consectetur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur in ante ac velit eleifend venenatis.
                Donec quam neque, ultrices in pellentesque at, accumsan id
                justo. Fusce pretium pharetra diam id consectetur.
              </p>
            </section>

            <section id="education">
              <h2 className="sectionTitle">Education</h2>
              <EducationCard
                school="The University of Texas at Austin"
                degree="Master of Science"
                degreeLevel="Graduate"
                department="Electrical and Computer Engineering"
                GPA="3.8"
                graduated="2014"
                research="Robotics and Artificial Intelligence"
                researchLink="https://repositories.lib.utexas.edu/items/efb21691-020e-484e-b27f-0ec020710f19"
              ></EducationCard>
              <EducationCard
                school="The University of Texas at Austin"
                degree="Bachelor of Science"
                degreeLevel="Undergraduate"
                department="Electrical and Computer Engineering"
                GPA="3.67"
                graduated="2012"
              ></EducationCard>
            </section>

            <section id="experience">
              <h2 className="sectionTitle">Experience</h2>
              <JobCard
                dates="2020-2023"
                title="IBM Design: Senior Software Engineer"
                titleLink="https://www.ibm.com/design/"
                description="Built over 90% of the front end of <a href='https://www.ibm.com/able/'>ibm.com/able</a> with React and Node and deployed using docker containers to IBM Cloud 
                Collaborated with design and content experts to build a cohesive product which helped 288k IBM employees make products available to people with disabilities</>"
                technologies=""
              ></JobCard>
              <JobCard
                dates="2018-2020"
                title="IBM Research: Senior Software Engineer"
                titleLink="https://research.ibm.com/"
                description="Architected and programmed automated code to scan html pages creating an event driven architecture which checked the accessibility on web pages"
                technologies=""
              ></JobCard>
              <JobCard
                dates="2015-2018"
                title="IBM Watson: Cognitive Robotics Technical Lead"
                titleLink="https://www.ibm.com/watson"
                description="As a technical lead, I focused on finding value for IBM at the crossroads of cognitive computing and robotics. 
                Due to my direct technical contributions this team grew from initially 2 people to nearly 20 people working in parallel in the pursuit of cognitive embodiments actively supported by 2 IBM Fellows, Grady Booch and Rob High."
                technologies=""
              ></JobCard>
              <JobCard
                dates="2014-2014"
                title="Teaching: CS 378 Autonomous Intelligent Robotics"
                description="Primary teaching objective was to get freshmen engineering and computer science students interested in robotics research, and introduce them to a real robotics system.
                Class dealt heavily with the segbot robotics platform (See Master’s Work) and taught basics from Robotic Operating System (ROS) all the way up to building a final project on the robot.
                Taught around 40% of the lectures in the class. (The professor and myself took turns lecturing)"
                technologies=""
              ></JobCard>
              <JobCard
                dates="2011-2014"
                title="Intel Corporation: Graduate Technical Intern"
                titleLink="https://www.intel.com/content/www/us/en/homepage.html"
                description="Worked in pre-silicon validation, verifying Intel’s mobile processors (Atom, Celeron and Pentium) before they are sent for fabrication. 
                Design for test team: Verified the test access ports on the chip so that after chips were fabricated various fuses could be set to allow reading the state of the chip for debugging purposes.
                CPU power management team: 1) Worked with routing signals coming out of the CPU and the power management unit. 2) Validated the L2 Cache and the Voltage Control Unit. 3) Wrote various tests to automatically find failure cases for unstable power states in the CPU.
                "
                technologies=""
              ></JobCard>
            </section>

            <section id="projects">
              <h2 className="sectionTitle">Projects</h2>
              <ProjectCard
                // dates="2020-2023"
                title="Building Wide Intelligence (BWI): Segbot"
                titleLink="https://repositories.lib.utexas.edu/items/efb21691-020e-484e-b27f-0ec020710f19"
                // titleLink="https://www.ibm.com/design/"
                technologies=""
                goal="To create a coupled robotics/AI system that could traverse multiple floors in the building to deliver coffee to various individuals."
                image="/bwi1.jpg"
              ></ProjectCard>
              <ProjectCard
                // dates="2020-2023"
                title="Website: ibm.com/able"
                titleLink="https://www.ibm.com/able/"
                // titleLink="https://www.ibm.com/design/"
                technologies=""
                goal="Webpage to provide accessiblity guidance to every IBM employee. I was lucky enough the be main front end developer for the redesign of this page. "
                image="/IBMbee2.png"
              ></ProjectCard>
            </section>

            <p>
              TODO .... Something about how this page was made, consectetur
              adipiscing elit. Curabitur in ante ac velit eleifend venenatis.
              Donec quam neque, ultrices in pellentesque at, accumsan id justo
            </p>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
