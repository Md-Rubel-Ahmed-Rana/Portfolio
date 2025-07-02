import { getEducationData } from "../apis/education.api";
import { IEducation } from "../types/education.type";
import EducationCard from "./EducationCard";

const EducationalBackground = async () => {
  const educations: IEducation[] = await getEducationData();

  return (
    <div className="py-10 lg:px-4 px-2">
      <h2 className="text-center text-lg lg:text-2xl font-semibold">
        Academic Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
        {educations.map((edu) => (
          <EducationCard key={edu.id} edu={edu} />
        ))}
      </div>
    </div>
  );
};

export default EducationalBackground;
