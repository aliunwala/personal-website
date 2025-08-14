import { JSX } from "react";

export interface JobCardProps {
  dates: string;
  title: string;
  titleLink?: string;
  description: JSX.Element;
  id: string;
  technologies: string;
}

export interface Project {
  id: string;
  title: string;
  titleLink: string;
  goal: JSX.Element;
  image: string;
  imageAlt: string;
  technologies: string;
}

export interface Education {
  school: string;
  degree: string;
  degreeLevel: string;
  department: string;
  GPA: string;
  graduated: string;
  research?: string;
  researchLink?: string;
}
export interface Award {
  title: string;
  subtitle: string;
}
export interface NavElement {
  name: string;
  href: string;
}
export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  resume: string;
}
