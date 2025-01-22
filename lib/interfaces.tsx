interface JobCardProps {
  dates: string;
  title: string;
  titleLink?: string;
  description: JSX.Element;
  id: string;
  technologies: string;
}

interface Project {
  id: string;
  title: string;
  titleLink: string;
  goal: JSX.Element;
  image: string;
  imageAlt: string;
  technologies: string;
}

interface Education {
  school: string;
  degree: string;
  degreeLevel: string;
  department: string;
  GPA: string;
  graduated: string;
  research?: string;
  researchLink?: string;
}
interface Award {
  title: string;
  subtitle: string;
}
interface NavElement {
  name: string;
  href: string;
}
interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  resume: string;
}
