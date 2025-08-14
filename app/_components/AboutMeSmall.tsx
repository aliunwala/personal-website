import { PersonalInfo } from "@/lib/interfaces";
function AboutMeSmall({ name, title, subtitle }: PersonalInfo) {
  return (
    <>
      <h1 className="myName">{name}</h1>
      <p className="myTitle">{title}</p>
      <p className="mySubTitle">{subtitle}</p>
    </>
  );
}

export default AboutMeSmall;
