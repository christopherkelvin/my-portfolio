import { Element } from "react-scroll";
import { Card } from "./card";
import { SkillsDescription } from "~/constants/skillsDescription";
export const Skills = () => {
  return (
    <Element
      name="Skills"
      className=" flex flex-col gap-8 text-start justify-center items-center"
    >
      <div className="text-3xl font-bold uppercase text-[var(--text-color)]">
        my skills
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        {SkillsDescription.map((info, i) => (
          <Card key={i} icon={info.icon}>
            <h2 className="text-lg font-semibold text-[var(--text-color)] mb-2">
              {info.title}
            </h2>
            <p className="text-gray-800 ">{info.description}</p>
          </Card>
        ))}
      </div>
    </Element>
  );
};
