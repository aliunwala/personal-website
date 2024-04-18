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
                <a className="myNavA" href="#education">
                  <span className="mySpacer"></span>
                  <span>Education</span>
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

            <section id="experience">
              <h2 className="sectionTitle">Experience</h2>
              <JobCard
                dates="2020-2023"
                title="IBM Design: Senior Software Engineer"
                titleLink="https://www.ibm.com/design/"
                description="With the goal of making all of IBM's products accessiblie, in this role I collaborated with design and content experts to build a cohesive product which helped 288k IBM employees make products available to people with disabilities 
                <br></br>
                (see the <a href='#projects'>projects</a> section for some of the work I did during this role <a href='#ableSite'>ibm.com/able</a> and <a href='#checker'>IBM Equal Access Accessibility Checker</a> to see some of my work). "
                technologies="React,Node,Docker,Javascript,CSS,HTML,JSX,VSCode,Typescript,Node.js,CouchDB"
              ></JobCard>
              <JobCard
                dates="2018-2020"
                title="IBM Research: Senior Software Engineer"
                titleLink="https://research.ibm.com/"
                description="Architected and programmed automated code to scan html pages creating an event driven architecture which checked the accessibility on web pages"
                technologies="Javascript,CSS,HTML,VSCode,Node.js"
              ></JobCard>
              <JobCard
                dates="2015-2018"
                title="IBM Watson: Cognitive Robotics Technical Lead"
                titleLink="https://www.ibm.com/watson"
                description="I focused on finding value for IBM at the crossroads of cognitive computing and robotics. 
                Due to my direct technical contributions this team grew from initially 2 people to nearly 20 people working in parallel in the pursuit of cognitive embodiments actively supported by 2 IBM Fellows, Grady Booch and Rob High.
                <br></br>(see the <a href='#projects'>projects</a> section for some of the work I did during this role  <a href='#hilton'>Robotic Concierge - IBM Watson x Hilton</a>, <a href='#intu'>IBM Project Intu</a>, and <a href='#chef'>IBM Chef Watson</a> to see some of my work)
                "
                technologies="REST,Python,MATLAB,Vim,Unix/Linux,CouchDB,Robotics Operating System,Point Cloud Library,Open Computer Vision (OpenCV),Watson Bluemix API,Nao Robot,Pepper Robot"
              ></JobCard>
              <JobCard
                dates="2014-2014"
                title="Teaching: CS 378 Autonomous Intelligent Robotics"
                description="This course's primary objective was to get freshmen engineering and computer science students interested in robotics research, and introduce them to a real robotics system.
                Class dealt heavily with the segbot robotics platform and taught basics from Robotic Operating System (ROS) all the way up to building a final project on the robot.
                I taught around 40% of the lectures in the class. (The professor and myself took turns lecturing)"
                technologies="Python,MATLAB,Vim,Unix/Linux,Robotics Operating System,Point Cloud Library,Open Computer Vision (OpenCV),Segbot Robot"
              ></JobCard>
              <JobCard
                dates="2011-2014"
                title="Intel Corporation: Graduate Technical Intern"
                titleLink="https://www.intel.com/content/www/us/en/homepage.html"
                description="Worked in pre-silicon validation, verifying Intel’s mobile processors (Atom, Celeron and Pentium) before they are sent for fabrication."
                technologies="Java,C++,Assembly,C,Vim,Unix,TCL,Verilog,Perl,VHDL"
              ></JobCard>
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

            <section id="projects">
              <h2 className="sectionTitle">Projects</h2>
              <ProjectCard
                id="ableSite"
                // dates="2020-2023"
                title="ibm.com/able"
                titleLink="https://www.ibm.com/able/"
                goal="This site acts as a reference for IBMers builing accessible products within the company. Built over 90% of the front end with React and Node and deployed using docker containers to IBM Cloud
                <br></br>
                This work was featured by 
                <a href='https://www.forbes.com/sites/stevenaquino/2020/05/19/ibm-launches-open-source-equal-access-toolkit/?sh=918fe631f776'>Forbes</a>,
                <a href='https://www.infoq.com/news/2020/05/ibm-accessibility-checker/'>InfoQ</a>,
                <a href='https://betanews.com/2020/05/18/ibm-equal-access-toolkit/'>betanews</a>,
                <a href='https://www.linux.com/news/ibm-launches-equal-access-toolkit-to-help-developers-build-accessible-websites-and-applications/'>linux.com</a>,
                <a href='https://www.zdnet.com/article/ibm-rolls-out-tools-to-help-developers-ensure-apps-are-accessible/'>ZDNET</a>,
                 and several others."
                image="/IBMbee2.png"
                technologies="React,Node,Docker,Javascript,CSS,HTML,JSX,VSCode,Typescript,Node.js,CouchDB"
              ></ProjectCard>
              <ProjectCard
                id="checker"
                // dates="2020-2023"
                title="IBM Equal Access Accessibility Checker"
                titleLink="https://chromewebstore.google.com/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp?pli=1"
                goal="This web extension allows users to automatically check for accessiblity issues on any websites they own. I contributed a dynamically drawn visualization that highlights accessibility bugs that a user has on their webpage.
                <br></br>
                This work was featured by 
                <a href='https://venturebeat.com/business/ibm-upgrades-web-accessibility-tool-for-finding-and-fixing-issues/'>VentureBeat</a>
                 and
                <a href='https://www.csun.edu/cod/conference/sessions/2022/index.php/public/presentations/view/2348'>CSUN</a>
                ."
                image="/IBMchecker.png"
                technologies="React,Node,Javascript,CSS,HTML,VSCode,Typescript,Node.js,Chrome Extension"
              ></ProjectCard>
              <ProjectCard
                // dates="2020-2023"
                id="hilton"
                title="Robotic Concierge - IBM Watson x Hilton"
                titleLink="http://fortune.com/2016/03/09/hilton-robot-ibm-watson/"
                goal="Built a highly successful robotic concierge called “Connie” in partnership with Hilton Hotels. The robotic concierge is was operating at Hilton’s proving-ground for innovation in Washington DC. 
                The robotic concierge, powered by Watson, is designed to help customers navigate the hotel and the surrounding area using natural language.
                <br></br>
                This work was featured by 
                <a href='http://www.foxnews.com/travel/2016/03/09/hilton-ibm-pilot-first-watson-enabled-robot-concierge.html'>Fox News</a>,
                <a href='http://www.theverge.com/2016/3/9/11180418/hilton-ibm-connie-robot-watson-hotel-concierge'>The Verge</a>,
                <a href='http://arstechnica.com/gadgets/2016/03/ibm-watson-hilton-robot-connie/'>Ars Technica</a>,
                <a href='http://fortune.com/2016/03/09/hilton-robot-ibm-watson/'>Fortune</a>,
                <a href='http://www.usatoday.com/story/travel/roadwarriorvoices/2016/03/09/introducing-connie-hiltons-new-robot-concierge/81525924/'>USA Today</a>,
                <a href='http://time.com/4251412/ibm-hilton-robot-hotel/'>Time</a> and several others."
                image="/IBMNao.webp"
                technologies="REST,Python,Vim,Unix/Linux,CouchDB,Robotics Operating System,Point Cloud Library,Open Computer Vision (OpenCV),Watson Bluemix API,Nao Robot"
              ></ProjectCard>
              <ProjectCard
                // dates="2020-2023"
                id="intu"
                title="IBM Project Intu"
                titleLink="http://www.zdnet.com/article/ibms-watson-ai-could-soon-be-in-devices-from-pcs-to-robots-thanks-to-project-intu/"
                goal="A framework for integration of IBM’s Artificial Intelligence services on to a multitude of different platforms, including robotics. Allowing any device with a CPU, microphone, and speakers to talk to Watson.
                <br></br>
                This work was featured by 
                <a href='http://www.zdnet.com/article/ibms-watson-ai-could-soon-be-in-devices-from-pcs-to-robots-thanks-to-project-intu/'>ZDNET</a>,
                <a href='https://thestack.com/iot/2016/11/09/ibm-extends-watson-capabilities-to-any-connected-device/'>The Stack</a>,
                <a href='https://siliconangle.com/blog/2016/11/09/ibm-offers-developers-a-way-to-extend-watsons-capabilities-into-any-device/'>Silicon Angle</a>,
                <a href='https://www.prnewswire.com/news-releases/ibm-launches-experimental-platform-for-embedding-watson-into-any-device-300359719.html'>PR News Wire</a>, and several others."
                image="/IBMIntu.jpg"
                technologies="REST,Python,CouchDB,Watson Bluemix API,Nao Robot,Pepper Robot"
              ></ProjectCard>
              <ProjectCard
                // dates="2020-2023"
                id="chef"
                title="IBM Chef Watson"
                titleLink="https://www.theguardian.com/technology/2016/jun/04/man-v-machine-robots-artificial-intelligence-cook-write"
                goal="This application allows the robot to act as an active kitchen assistant that will go through ingredients with you and then create a dynamically generated recipe for you to cook. I worked with the team to get this code functional on the Nao robotics platform.
                <br></br>
                This work was featured by 
                <a href='https://www.theguardian.com/technology/2016/jun/04/man-v-machine-robots-artificial-intelligence-cook-write'>The Guardian</a>,
                <a href='https://www.washingtonpost.com/lifestyle/food/could-ibms-watson-eventually-replace-creative-chefs-not-at-this-rate/2015/05/11/82a0a3ca-f29f-11e4-b2f3-af5479e6bbdd_story.html'>Washington Post</a>,
                <a href='https://www.newyorker.com/magazine/2016/11/28/cooking-with-chef-watson-ibms-artificial-intelligence-app'>The New Yorker</a>,
                <a href='https://www.bonappetit.com/entertaining-style/trends-news/article/chef-watson-app'>bon appetit</a>,
                 and several others."
                image="/IBMChef.avif"
                technologies="REST,Python,Robotics Operating System,Watson Bluemix API,Nao Robot,Pepper Robot"
              ></ProjectCard>
              <ProjectCard
                // dates="2020-2023"
                id="segbot"
                title="Building Wide Intelligence"
                titleLink="https://repositories.lib.utexas.edu/items/efb21691-020e-484e-b27f-0ec020710f19"
                goal="Created a coupled robotics/AI system that could traverse multiple floors in the building to deliver coffee to various individuals."
                image="/bwi1.jpg"
                technologies="Python,MATLAB,Vim,Unix/Linux,Robotics Operating System,Point Cloud Library,Open Computer Vision (OpenCV),Segbot Robot"
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
