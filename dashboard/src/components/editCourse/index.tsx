import {
  useGetCourseByIdQuery,
  useUpdateCourseMutation,
} from "@/features/course.api";
import GenericLoadingSkeleton from "@/skeleton";
import { ICourse, ICreateCourse } from "@/types/course.type";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { Form, Typography } from "antd/lib";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CourseForm from "../courses/CourseForm";
const { Title } = Typography;

const EditCourse = () => {
  const [form] = Form.useForm();
  const { query } = useRouter();
  const id = query?.id as string;
  const { data, isLoading } = useGetCourseByIdQuery({ id });
  const course = data?.data as ICourse;
  const [editCourse, { isLoading: isUpdating }] = useUpdateCourseMutation();

  useEffect(() => {
    if (course) {
      form.setFieldsValue({
        ...course,
        startDate: dayjs(course?.startDate),
        endDate: dayjs(course?.endDate),
      });
    }
  }, [course, form]);

  const handleEditCourse = (values: ICreateCourse) => {
    handleAsyncMutation(
      editCourse,
      { id, course: values },
      200,
      {
        error: "Failed to update course",
        success: "Course updated successfully!",
      },
      "/courses"
    );
  };

  return (
    <>
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <div className="p-4 bg-white shadow-xl rounded-2xl">
          <Title level={3} className="text-center mb-6">
            Update Course
          </Title>
          <CourseForm
            buttonText="Update Course"
            actionText="Updating..."
            form={form}
            isLoading={isUpdating}
            submitHandler={handleEditCourse}
            key={"edit-course"}
          />
        </div>
      )}
    </>
  );
};

export default EditCourse;
