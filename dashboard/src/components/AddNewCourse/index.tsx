/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddNewCourseMutation } from "@/features/course.api";
import { ICreateCourse } from "@/types/course.type";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { Form, Typography } from "antd/lib";
import CourseForm from "../courses/CourseForm";

const { Title } = Typography;

const AddNewCourse = () => {
  const [form] = Form.useForm();
  const [addCourse, { isLoading }] = useAddNewCourseMutation();

  const handleAddNewCourse = (values: any) => {
    const payload: ICreateCourse = {
      ...values,
      startDate: new Date(values.startDate).toISOString() as unknown as Date,
      endDate: new Date(values.endDate).toISOString() as unknown as Date,
    };
    handleAsyncMutation(
      addCourse,
      { course: payload },
      201,
      { error: "Failed to add course", success: "Course added successfully" },
      "/courses"
    );
  };

  return (
    <div className="p-3 bg-white shadow-xl rounded-2xl mt-8">
      <Title level={3} className="text-center mb-6">
        Add New Course
      </Title>
      <CourseForm
        form={form}
        buttonText="Add Course"
        actionText="Adding..."
        submitHandler={handleAddNewCourse}
        isLoading={isLoading}
      />
    </div>
  );
};

export default AddNewCourse;
