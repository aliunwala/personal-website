// type titleLink= undefined|string

export const jobCardData: Job[] = [
  {
    dates: "2023-2024",
    title: "Stealth Startup (Health): Senior Full Stack Software Engineer",
    titleLink: "",
    description: (
      <>
        Created the product website with authentication and user management for
        customers to book and schedule appointments.
        <br></br>
        <br></br>
      </>
    ),
    id: "StartupHealth",
    technologies: "React, CSS, HTML, VSCode, Typescript, Node.js, Docker",
  },
  {
    dates: "2020-2023",
    title: "IBM Design: Senior Full Stack Software Engineer",
    titleLink: "https://www.ibm.com/design/",
    description: (
      <>
        In this role, I collaborated with design and accessibility experts to
        contribute to a suite of web tools which helped nearly 300k IBM
        employees make products accessible to people with disabilities.
        <br></br>
        <br></br> See the <a href="#projects">projects</a> section for some of
        the work I did during this role: <a href="#ableSite">ibm.com/able</a>{" "}
        and <a href="#checker">IBM Equal Access Accessibility Checker</a>.
        <br></br>
        <br></br>
      </>
    ),
    id: "IBMDesign",
    technologies:
      "React,Javascript,CSS,HTML,JSX,VSCode,Typescript,Node.js,Docker,Gatsby,CouchDB",
  },
  {
    dates: "2018-2020",
    title: "IBM Research: Senior Full Stack Software Engineer",
    titleLink: "https://research.ibm.com/",
    description: (
      <>
        Our team focused on accessibility research at IBM. With the team's
        accessibility expertise, I implemented code to scan websites for
        accessibility bugs.
        <br></br>
        <br></br>
      </>
    ),
    id: "IBMResearch",
    technologies: "Javascript,CSS,HTML,VSCode,Node.js",
  },
  {
    dates: "2015-2018",
    title: "IBM Watson: Cognitive Robotics Technical Lead",
    titleLink: "https://www.ibm.com/watson",
    description: (
      <>
        In this role, I tackled the challenge to find value for IBM at the
        crossroads of cognitive computing and robotics. I led a technical team
        to create several influential projects using Watson AI services.
        <br></br>
        <br></br>
        See the <a href="#projects">projects</a> section for some of the work I
        did during this role:{" "}
        <a href="#hilton">Robotic Concierge - IBM Watson x Hilton</a>,{" "}
        <a href="#intu">IBM Project Intu</a>, and{" "}
        <a href="#chef">IBM Chef Watson</a>."
        <br></br>
        <br></br>
      </>
    ),
    id: "IBMWatson",
    technologies:
      "REST,Python,MATLAB,Vim,Unix/Linux,CouchDB,Robotics Operating System,Point Cloud Library,Open Computer Vision (OpenCV),Watson AI APIs,NAO Robot,Pepper Robot",
  },
  {
    dates: "2014-2014",
    title: "Univesity of Texas at Austin: Graduate Teaching Assistant",
    description: (
      <>
        I taught CS 378 Autonomous Intelligent Robotics, introducing students to
        a real robotics system, the Segbot platform. The Segbot is a homegrown
        autonomous robot built on a segway base.
        <br></br>
        <br></br>
        See the <a href="#segbot">Building Wide Intelligence</a> section to
        learn more about the Segbot platform"
        <br></br>
        <br></br>
      </>
    ),
    id: "UTEXASTeaching",
    technologies:
      "Python,MATLAB,Vim,Unix/Linux,Robotics Operating System,Point Cloud Library,Open Computer Vision (OpenCV),Segbot Robot",
  },
  {
    dates: "2011-2014",
    title: "Intel Corporation: Graduate Technical Intern",
    titleLink: "https://www.intel.com/content/www/us/en/homepage.html",
    description: (
      <>
        "Working in pre-silicon validation, I verified Intel’s mobile processors
        (Atom, Celeron and Pentium) before they were sent for fabrication."
        <br></br>
        <br></br>
      </>
    ),
    id: "IntelIntern",
    technologies: "Java,C++,Assembly,C,Vim,Unix,TCL,Verilog,Perl,VHDL",
  },
];

export const projectCardData: Project[] = [
  {
    id: "ableSite",
    title: "ibm.com/able",
    titleLink: "https://www.ibm.com/able/",
    goal: (
      <>
        This site acts as a reference for IBMers building accessible products
        within IBM.
        <br></br>
        <br></br>I implemented over 90% of the front end (in 2022) with React
        and Node and deployed the site using docker containers to IBM Cloud.
        <br></br>
        <br></br>
        This work was featured in
        <a
          target="_blank"
          href="https://www.forbes.com/sites/stevenaquino/2020/05/19/ibm-launches-open-source-equal-access-toolkit/?sh=918fe631f776"
        >
          {" "}
          Forbes
        </a>
        ,
        <a
          target="_blank"
          href="https://www.infoq.com/news/2020/05/ibm-accessibility-checker/"
        >
          {" "}
          InfoQ
        </a>
        ,
        <a
          target="_blank"
          href="https://betanews.com/2020/05/18/ibm-equal-access-toolkit/"
        >
          {" "}
          betanews
        </a>
        ,
        <a
          target="_blank"
          href="https://www.linux.com/news/ibm-launches-equal-access-toolkit-to-help-developers-build-accessible-websites-and-applications/"
        >
          {" "}
          linux.com
        </a>
        , and
        <a
          target="_blank"
          href="https://www.zdnet.com/article/ibm-rolls-out-tools-to-help-developers-ensure-apps-are-accessible/"
        >
          {" "}
          ZDNET
        </a>
        .<br></br>
        <br></br>
      </>
    ),
    image: "/IBMbee2.png",
    imageAlt: "logo for the website ibm.com/able",
    technologies:
      "React,Javascript,CSS,HTML,JSX,VSCode,Typescript,Node.js,Docker,CouchDB",
  },
  {
    id: "checker",
    title: "IBM Equal Access Accessibility Checker",
    titleLink:
      "https://chromewebstore.google.com/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp?pli=1",
    goal: (
      <>
        This web extension allows users to automatically check for accessibility
        issues on any website.
        <br></br>
        <br></br>I contributed a dynamically drawn visualization that highlights
        accessibility bugs on a webpage.
        <br></br>
        <br></br>
        This work was featured in
        <a
          target="_blank"
          href="https://venturebeat.com/business/ibm-upgrades-web-accessibility-tool-for-finding-and-fixing-issues/"
        >
          {" "}
          VentureBeat
        </a>{" "}
        and
        <a
          target="_blank"
          href="https://www.csun.edu/cod/conference/sessions/2022/index.php/public/presentations/view/2348"
        >
          {" "}
          CSUN
        </a>
        .<br></br>
        <br></br>
      </>
    ),
    image: "/IBMchecker.png",
    imageAlt:
      "screen shot of the IBM Equal Access Accessibility Checker running a accesibility scan on a page",
    technologies:
      "React,Javascript,CSS,HTML,VSCode,Typescript,Node.js,Chrome Extension",
  },
  {
    id: "hilton",
    title: "Robotic Concierge - IBM Watson x Hilton",
    titleLink: "http://fortune.com/2016/03/09/hilton-robot-ibm-watson/",
    goal: (
      <>
        This robotic concierge, called Connie, was designed to help customers
        navigate the hotel and the surrounding area using natural language.
        <br></br>
        <br></br>I consulted and built Connie using Watson APIs, natural
        language processing, computer vision and speech to text.
        <br></br>
        <br></br>
        This work was featured in
        <a
          target="_blank"
          href="http://www.foxnews.com/travel/2016/03/09/hilton-ibm-pilot-first-watson-enabled-robot-concierge.html"
        >
          {" "}
          Fox News
        </a>
        ,
        <a
          target="_blank"
          href="http://www.theverge.com/2016/3/9/11180418/hilton-ibm-connie-robot-watson-hotel-concierge"
        >
          {" "}
          The Verge
        </a>
        ,
        <a
          target="_blank"
          href="http://arstechnica.com/gadgets/2016/03/ibm-watson-hilton-robot-connie/"
        >
          {" "}
          Ars Technica
        </a>
        ,
        <a
          target="_blank"
          href="http://fortune.com/2016/03/09/hilton-robot-ibm-watson/"
        >
          {" "}
          Fortune
        </a>
        ,
        <a
          target="_blank"
          href="http://www.usatoday.com/story/travel/roadwarriorvoices/2016/03/09/introducing-connie-hiltons-new-robot-concierge/81525924/"
        >
          {" "}
          USA Today
        </a>
        ,
        <a
          target="_blank"
          href="http://time.com/4251412/ibm-hilton-robot-hotel/"
        >
          {" "}
          Time
        </a>{" "}
        and
        <a
          href="https://news.google.com/search?q=IBM%20hilton%20robot&hl=en-US&gl=US&ceid=US%3Aen"
          target="_blank"
        >
          {" "}
          several others.
        </a>
        <br></br>
        <br></br>
      </>
    ),
    image: "/IBMNao.webp",
    imageAlt: "Some guests at Hilton chatting with the IBM Watson robot",
    technologies:
      "REST,Python,Vim,Unix/Linux,CouchDB,Robotics Operating System,Point Cloud Library,Open Computer Vision (OpenCV),Watson AI APIs,NAO Robot",
  },
  {
    id: "intu",
    title: "IBM Project Intu",
    titleLink:
      "http://www.zdnet.com/article/ibms-watson-ai-could-soon-be-in-devices-from-pcs-to-robots-thanks-to-project-intu/",
    goal: (
      <>
        Project Intu is an API for accessing IBM Watson services from devices
        that had proprietary interfaces (such as robotics platforms).
        <br></br>
        <br></br>I developed a reverse proxy, API, and security framework to
        pass connections to IBM Watson’s cloud services. This allowed any device
        with a CPU, microphone, or speakers to talk to Watson.
        <br></br>
        <br></br>
        This work was featured in
        <a
          target="_blank"
          href="http://www.zdnet.com/article/ibms-watson-ai-could-soon-be-in-devices-from-pcs-to-robots-thanks-to-project-intu/"
        >
          {" "}
          ZDNET
        </a>
        ,
        <a
          target="_blank"
          href="https://thestack.com/iot/2016/11/09/ibm-extends-watson-capabilities-to-any-connected-device/"
        >
          {" "}
          The Stack
        </a>
        ,
        <a
          target="_blank"
          href="https://siliconangle.com/blog/2016/11/09/ibm-offers-developers-a-way-to-extend-watsons-capabilities-into-any-device/"
        >
          {" "}
          Silicon Angle
        </a>
        , and
        <a
          target="_blank"
          href="https://www.prnewswire.com/news-releases/ibm-launches-experimental-platform-for-embedding-watson-into-any-device-300359719.html"
        >
          {" "}
          PR News Wire
        </a>
        .<br></br>
        <br></br>
      </>
    ),
    image: "/IBMIntu.jpg",
    imageAlt:
      "Image of Rob High doing a keynote presentation about IBM Project Intu",
    technologies: "REST,Python,CouchDB,Watson AI APIs,NAO Robot,Pepper Robot",
  },
  {
    id: "chef",
    title: "IBM Chef Watson Robot",
    titleLink:
      "https://www.theguardian.com/technology/2016/jun/04/man-v-machine-robots-artificial-intelligence-cook-write",
    goal: (
      <>
        This application allows the robot to act as an active kitchen assistant
        that will explore ingredients with you and then create a dynamically
        generated recipe for you to cook.
        <br></br>
        <br></br>I collaborated with the Chef Watson team to bring Chef Watson
        to the NAO robotics platform.
        <br></br>
        <br></br>
        This work was featured by
        <a
          target="_blank"
          href="https://www.theguardian.com/technology/2016/jun/04/man-v-machine-robots-artificial-intelligence-cook-write"
        >
          {" "}
          The Guardian
        </a>
        ,
        <a
          target="_blank"
          href="https://www.washingtonpost.com/lifestyle/food/could-ibms-watson-eventually-replace-creative-chefs-not-at-this-rate/2015/05/11/82a0a3ca-f29f-11e4-b2f3-af5479e6bbdd_story.html"
        >
          {" "}
          Washington Post
        </a>
        ,
        <a
          target="_blank"
          href="https://www.newyorker.com/magazine/2016/11/28/cooking-with-chef-watson-ibms-artificial-intelligence-app"
        >
          {" "}
          The New Yorker
        </a>
        ,
        <a
          target="_blank"
          href="https://www.bonappetit.com/entertaining-style/trends-news/article/chef-watson-app"
        >
          {" "}
          bon appetit
        </a>
        , and
        <a
          href="https://news.google.com/search?q=IBM%20chef%20watson&hl=en-US&gl=US&ceid=US%3Aen"
          target="_blank"
        >
          {" "}
          several others
        </a>
        .<br></br>
        <br></br>
      </>
    ),
    image: "/IBMChef.avif",
    imageAlt: "The chef watson robot talking to a chef in a relaxed pose",
    technologies:
      "REST,Python,Robotics Operating System,Watson AI APIs,NAO Robot,Pepper Robot",
  },
  {
    id: "segbot",
    title: "Building Wide Intelligence",
    titleLink:
      "https://repositories.lib.utexas.edu/items/efb21691-020e-484e-b27f-0ec020710f19",
    goal: (
      <>
        An autonomous wheeled robotics platform built on the segway, which was
        used to test and further robotics research at UT Austin.
        <br></br>
        <br></br>I augmented the segbot to autonomously traverse multiple floors
        in a building. While also implementing complex plans to dynamically
        perform goals as it moved around the building.
        <br></br>
        <br></br>
      </>
    ),
    image: "/bwi1.jpg",
    imageAlt:
      "The segbot robotics platform in University of Texas at Austin computer science building",
    technologies:
      "Python,MATLAB,Vim,Unix/Linux,Robotics Operating System,Point Cloud Library,Open Computer Vision (OpenCV),Segbot Robot",
  },
];

export const educationCardData: Education[] = [
  {
    school: "The University of Texas at Austin",
    degree: "Master of Science",
    degreeLevel: "Graduate",
    department: "Electrical and Computer Engineering",
    GPA: "3.8",
    graduated: "2014",
    research: "Robotics and Artificial Intelligence",
    researchLink:
      "https://repositories.lib.utexas.edu/items/efb21691-020e-484e-b27f-0ec020710f19",
  },
  {
    school: "The University of Texas at Austin",
    degree: "Bachelor of Science",
    degreeLevel: "Undergraduate",
    department: "Electrical and Computer Engineering",
    GPA: "3.67",
    graduated: "2012",
  },
];

export const awardsCardData: Award[] = [
  {
    title: "Eagle Scout",
    subtitle: "Boy Scouts of America",
  },
  {
    title: "1st Place, Senior Design Competition",
    subtitle: "The University of Texas at Austin",
  },
  {
    title: "1st place, ECE 445L Design Competition",
    subtitle: "The University of Texas at Austin",
  },
  {
    title: "University Honors",
    subtitle: "The University of Texas at Austin",
  },
];
export const aboutMeData = (
  <>
    <p className="aboutText">
      I've always been a tinkerer at heart. One of my earliest memories is
      taking apart a{" "}
      <a href="https://www.youtube.com/watch?v=lRNv4uM6auI" target="_blank">
        VCR
      </a>{" "}
      that had broken to understand how it worked. I was fascinated by the{" "}
      <a href="https://www.youtube.com/watch?v=KfuARMCyTvg" target="_blank">
        black tape
      </a>{" "}
      inside the cassette and how it made pictures on a TV screen.
      <br></br>
      <br></br>
      Wanting to know how things work, I was inspired to explore electrical and
      computer engineering and eventually the broader world of software.
      Nowadays I enjoy building some of those projects I used to take apart as a
      kid.
      <br></br>
      <br></br>
      My passions are <i>understanding how things really work</i> and{" "}
      <i>playing with systems to make things better</i>.<br></br>
      <br></br>
      When I'm not coding, I'm collecting{" "}
      <a
        target="_blank"
        href="https://www.mindat.org/photoscroll.php?frm_id=pscroll&cform_is_valid=1&searchbox=Fluorite+from+Yaogangxian+Mine&submit_pscroll=Search"
      >
        mineral specimens
      </a>
      , playing table tennis and{" "}
      <a target="_blank" href="https://atxbadminton.com/">
        badminton
      </a>
      , hiking and camping, and getting lost listening to{" "}
      <a target="_blank" href="https://www.store.wanderinginn.com/audiobooks">
        fantasy audiobooks
      </a>{" "}
      and{" "}
      <a target="_blank" href="https://maximumfun.org/podcasts/adventure-zone/">
        D&D podcasts.
      </a>
    </p>
  </>
);
export const aboutSiteData = (
  <>
    <a target="_blank" href="https://github.com/aliunwala/personal-website">
      This site
    </a>{" "}
    was built by me (from scratch using only the{" "}
    <a
      href="https://github.com/netlify-templates/next-netlify-starter"
      target="_blank"
    >
      netlify starter
    </a>
    ) with design inspiration from some of{" "}
    <a
      target="_blank"
      href="https://github.com/emmabostian/developer-portfolios"
    >
      these amazing sites
    </a>
    . Using{" "}
    <a target="_blank" href="https://code.visualstudio.com/">
      VSCode
    </a>{" "}
    to create a{" "}
    <a target="_blank" href="https://nextjs.org/">
      Next.js
    </a>{" "}
    +{" "}
    <a target="_blank" href="https://react.dev/">
      React
    </a>{" "}
    project and which was deployed through{" "}
    <a target="_blank" href="https://www.netlify.com/">
      netlify
    </a>
    .
  </>
);

export const navGenerationData: NavElement[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education & Awards", href: "#education" },
  { name: "About the site", href: "#aboutsite" },
];

export const aboutMeSmallData: PersonalInfo = {
  name: "Ali Unwala",
  title: "Senior Software Engineer",
  subtitle:
    "I enjoy understanding how complex systems work and making unique user interfaces that delight users.",
  email: "aliunwaladev@gmail.com",
  resume: "/Resume_Ali_Unwala.pdf", // this finds the resume in the public directory
};
