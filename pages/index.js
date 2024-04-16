import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import JobCard from "@components/JobCard";

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
            <p className="myName">Ali Unwala</p>
            <p className="myTitle">Senior Software Engineer</p>
            <p className="mySubTitle">
              A sentence about me. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur in ante ac velit eleifend venenatis.
              TODO
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
                dates="2024-present"
                title="Senior Software Engineer, Accessibility"
                description="Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Curabitur in ante ac
                velit eleifend venenatis. Donec quam neque, ultrices in
                pellentesque at, accumsan id justo. Fusce pretium pharetra diam
                id consectetur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur in ante ac velit eleifend venenatis.
                Donec quam neque, ultrices in pellentesque at, "
                technologies=""
              ></JobCard>
              <JobCard
                dates="2024-present"
                title="Senior Software Engineer, Accessibility"
                description="Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Curabitur in ante ac
                velit eleifend venenatis. Donec quam neque, ultrices in
                pellentesque at, accumsan id justo. Fusce pretium pharetra diam
                id consectetur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur in ante ac velit eleifend venenatis.
                Donec quam neque, ultrices in pellentesque at, "
                technologies=""
              ></JobCard>
              <JobCard
                dates="2024-present"
                title="Senior Software Engineer, Accessibility"
                description="Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Curabitur in ante ac
                velit eleifend venenatis. Donec quam neque, ultrices in
                pellentesque at, accumsan id justo. Fusce pretium pharetra diam
                id consectetur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur in ante ac velit eleifend venenatis.
                Donec quam neque, ultrices in pellentesque at, "
                technologies=""
              ></JobCard>
              <JobCard
                dates="2024-present"
                title="Senior Software Engineer, Accessibility"
                description="Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Curabitur in ante ac
                velit eleifend venenatis. Donec quam neque, ultrices in
                pellentesque at, accumsan id justo. Fusce pretium pharetra diam
                id consectetur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur in ante ac velit eleifend venenatis.
                Donec quam neque, ultrices in pellentesque at, "
                technologies=""
              ></JobCard>
              <JobCard
                dates="2024-present"
                title="Senior Software Engineer, Accessibility"
                description="Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Curabitur in ante ac
                velit eleifend venenatis. Donec quam neque, ultrices in
                pellentesque at, accumsan id justo. Fusce pretium pharetra diam
                id consectetur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur in ante ac velit eleifend venenatis.
                Donec quam neque, ultrices in pellentesque at, "
                technologies=""
              ></JobCard>
              <JobCard
                dates="2024-present"
                title="Senior Software Engineer, Accessibility"
                description="Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Curabitur in ante ac
                velit eleifend venenatis. Donec quam neque, ultrices in
                pellentesque at, accumsan id justo. Fusce pretium pharetra diam
                id consectetur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur in ante ac velit eleifend venenatis.
                Donec quam neque, ultrices in pellentesque at, "
                technologies=""
              ></JobCard>
              <JobCard
                dates="2024-present"
                title="Senior Software Engineer, Accessibility"
                description="Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Curabitur in ante ac
                velit eleifend venenatis. Donec quam neque, ultrices in
                pellentesque at, accumsan id justo. Fusce pretium pharetra diam
                id consectetur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur in ante ac velit eleifend venenatis.
                Donec quam neque, ultrices in pellentesque at, "
                technologies=""
              ></JobCard>
              <JobCard
                dates="2024-present"
                title="Senior Software Engineer, Accessibility"
                description="Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Curabitur in ante ac
                velit eleifend venenatis. Donec quam neque, ultrices in
                pellentesque at, accumsan id justo. Fusce pretium pharetra diam
                id consectetur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur in ante ac velit eleifend venenatis.
                Donec quam neque, ultrices in pellentesque at, "
                technologies=""
              ></JobCard>
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
