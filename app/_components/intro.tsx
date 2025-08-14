import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h2 className="text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 grow">
        Work in progress. Please come back later <br></br>(Thanks for stopping
        by!)
      </h2>

      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <a
          href="/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Back to resume.
        </a>
      </h4>
    </section>
  );
}
