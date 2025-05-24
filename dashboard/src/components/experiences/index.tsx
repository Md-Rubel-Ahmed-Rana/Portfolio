import { useGetExperiencesQuery } from "@/features/experience.api";
import GenericLoadingSkeleton from "@/skeleton";
import { IExperience } from "@/types/experience.type";
import PageHeader from "../common/PageHeader";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  const { data, isLoading } = useGetExperiencesQuery({});
  const experiences = (data?.data || []) as IExperience[];
  return (
    <>
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <>
          <PageHeader
            total={experiences?.length || 0}
            title="Experience"
            addNewPath="/add-new-experience"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {experiences?.map((experience) => (
              <ExperienceCard experience={experience} key={experience?.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Experiences;
