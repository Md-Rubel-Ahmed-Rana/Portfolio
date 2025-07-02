import { useGetEducationsQuery } from "@/features/education.api";
import GenericLoadingSkeleton from "@/skeleton";
import { IEducation } from "@/types/education.type";
import PageHeader from "../common/PageHeader";
import EducationCard from "./EducationCard";

const Educations = () => {
  const { data, isLoading } = useGetEducationsQuery({});
  const educations = (data?.data || []) as IEducation[];

  return (
    <>
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <>
          <PageHeader
            total={educations?.length || 0}
            title="Education"
            addNewPath="/add-new-education"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-10">
            {educations?.map((education) => (
              <EducationCard education={education} key={education?.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Educations;
