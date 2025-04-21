import { getSkillData } from "../apis/skill.api";
import { ISkill } from "../types/skill.type";
import { getSkillIcon } from "../utils/getSkillIcon";

const Skills = async () => {
  const skills = (await getSkillData()) as ISkill[];
  return (
    <div className="max-w-[1440px] w-full bg-white mx-auto py-20 lg:px-10 px-5 flex flex-col gap-10">
      <div>
        <h3 className="font-semibold lg:text-4xl text-2xl text-center text-transparent bg-gradient-to-l to-[#9272d3] from-[#2a1454] bg-clip-text">
          My Skills
        </h3>
        <p className="text-center text-slate-500 lg:text-xl text-lg font-sans mt-5">
          Dive into a showcase of my finest creations, meticulously designed to
          captivate
          <br className="lg:block hidden" />
          and ignite the imagination of your audience and stakeholders alike.
        </p>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:gap-5 gap-2">
        {skills.map((skill: ISkill, index: number) => {
          const IconComponent = getSkillIcon(skill?.icon);
          return (
            <div
              data-aos="fade-up"
              data-aos-duration={`${index * 200}`}
              data-aos-delay="300"
              className="transition duration-1000 border flex flex-col text-center hover:bg-purple-950 hover:text-white lg:gap-3 gap-1 justify-between items-center lg:p-3 p-2 rounded-2xl cursor-pointer shadow-md group"
              key={skill?.id}
            >
              <div>
                {IconComponent && (
                  <IconComponent className="text-6xl text-blue-600 group-hover:text-white" />
                )}
              </div>
              <h6 className="text-blue-600 group-hover:text-white">
                {skill.name}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
