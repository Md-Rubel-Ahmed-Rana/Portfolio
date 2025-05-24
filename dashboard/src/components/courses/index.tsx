import { useGetCoursesQuery } from "@/features/course.api";
import GenericLoadingSkeleton from "@/skeleton";
import { ICourse } from "@/types/course.type";
import PageHeader from "../common/PageHeader";
import CourseCard from "./CourseCard";

const Courses = () => {
  const { data, isLoading } = useGetCoursesQuery({});
  const courses = (data?.data || []) as ICourse[];
  return (
    <>
      <PageHeader
        title="Courses"
        total={courses?.length || 0}
        addNewPath="/add-new-course"
      />
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <section className="flex flex-col gap-3 p-2">
          {courses.map((course) => (
            <CourseCard key={course?.id} course={course} />
          ))}
        </section>
      )}
    </>
  );
};

export default Courses;
