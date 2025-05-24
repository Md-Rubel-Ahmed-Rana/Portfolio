import { useGetSkillsQuery } from "@/features/skill.api";
import GenericLoadingSkeleton from "@/skeleton";
import { ISkill } from "@/types/home.type";
import DataNotFound from "../common/DataNotFound";
import PageHeader from "../common/PageHeader";
import SkillCard from "./SkillCard";

const Skills = () => {
  const { data, isLoading } = useGetSkillsQuery({});
  const skills = (data?.data || []) as ISkill[];

  return (
    <div className="p-4">
      <PageHeader
        title="Skill"
        total={skills?.length || 0}
        addNewPath="/add-new-skill"
        key={"add-skill"}
      />
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <>
          {skills?.length > 0 ? (
            <div className="bg-white rounded-2xl shadow-md grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {skills?.map((skill) => (
                <SkillCard key={skill?.id} skill={skill} />
              ))}
            </div>
          ) : (
            <DataNotFound
              title="No Skills Found"
              description="Looks like you haven't added any skills yet."
            />
          )}
        </>
      )}
    </div>
  );
};

export default Skills;
