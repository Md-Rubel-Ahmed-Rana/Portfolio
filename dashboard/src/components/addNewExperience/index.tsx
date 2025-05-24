/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddNewExperienceMutation } from "@/features/experience.api";
import { ICreateExperience } from "@/types/experience.type";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { Form } from "antd/lib";
import ExperienceForm from "../experiences/ExperienceForm";

const AddNewExperience = () => {
  const [form] = Form.useForm();
  const [addExperience, { isLoading }] = useAddNewExperienceMutation();

  const handleCreateExperience = (values: any) => {
    const { dateRange, ...rest } = values;
    const payload: ICreateExperience = {
      ...rest,
      startDate: new Date(dateRange[0]).toISOString(),
      endDate: new Date(dateRange[1]).toISOString(),
    };

    handleAsyncMutation(
      addExperience,
      { experience: payload },
      201,
      {
        error: "Failed to add experience",
        success: "Experience added successfully",
      },
      "/experiences"
    );
  };

  return (
    <div className="p-4 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-semibold mb-6 text-black">
        Add New Experience
      </h2>

      <ExperienceForm
        form={form}
        submitHandler={handleCreateExperience}
        actionText="Adding..."
        buttonText="Add Experience"
        isLoading={isLoading}
      />
    </div>
  );
};

export default AddNewExperience;
