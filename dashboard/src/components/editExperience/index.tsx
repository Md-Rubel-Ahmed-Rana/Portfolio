/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetExperienceByIdQuery,
  useUpdateExperienceMutation,
} from "@/features/experience.api";
import GenericLoadingSkeleton from "@/skeleton";
import { IExperience } from "@/types/experience.type";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { Form } from "antd/lib";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ExperienceForm from "../experiences/ExperienceForm";

const EditExperience = () => {
  const [form] = Form.useForm();
  const { query } = useRouter();
  const id = query?.id as string;
  const { data, isLoading } = useGetExperienceByIdQuery({ id });
  const experience = data?.data as IExperience;
  const [editExperience, { isLoading: isUpdating }] =
    useUpdateExperienceMutation();

  useEffect(() => {
    form.setFieldsValue({
      name: experience?.name,
      size: experience?.size,
      workType: experience?.workType,
      designation: experience?.designation,
      workLocation: experience?.workLocation,
      location: experience?.location,
      startDate: dayjs(experience?.startDate),
      endDate: dayjs(experience?.endDate),
      dateRange: [dayjs(experience?.startDate), dayjs(experience?.endDate)],
      website: experience?.website,
      linkedIn: experience?.linkedIn,
      responsibilities: experience?.responsibilities,
      learnedNewTech: experience?.learnedNewTech,
    });
  });

  const handleEditExperience = (values: any) => {
    const { dateRange, ...rest } = values;
    const payload: IExperience = {
      ...rest,
      startDate: dateRange[0].toDate(),
      endDate: dateRange[1].toDate(),
    };

    handleAsyncMutation(
      editExperience,
      { id, experience: payload },
      201,
      {
        error: "Failed to edit experience",
        success: "Experience updated successfully",
      },
      "/experiences"
    );
  };

  return (
    <>
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-2xl font-semibold mb-6 text-black">
            Update Experience
          </h2>
          <ExperienceForm
            form={form}
            submitHandler={handleEditExperience}
            actionText="Updating..."
            buttonText="Update Experience"
            isLoading={isUpdating}
          />
        </div>
      )}
    </>
  );
};

export default EditExperience;
