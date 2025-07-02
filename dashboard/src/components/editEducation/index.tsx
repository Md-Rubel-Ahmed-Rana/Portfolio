/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetEducationByIdQuery,
  useUpdateEducationMutation,
} from "@/features/education.api";
import GenericLoadingSkeleton from "@/skeleton";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { Button, Checkbox, DatePicker, Form, Input } from "antd/lib";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const EditEducation = () => {
  const [form] = Form.useForm();
  const [isCurrent, setIsCurrent] = useState(false);
  const [editEducation, { isLoading: isUpdating }] =
    useUpdateEducationMutation();
  const { query } = useRouter();
  const id = query.id as string;
  const { data, isLoading } = useGetEducationByIdQuery({ id });
  const education = data?.data;

  console.log(education);

  const onFinish = async (values: any) => {
    const { date_range, ...rest } = values;

    const payload = {
      ...rest,
      start_date: dayjs(date_range[0]).format("YYYY-MM-DD"),
      end_date: isCurrent
        ? undefined
        : dayjs(date_range[1]).format("YYYY-MM-DD"),
      is_current: isCurrent,
    };

    await handleAsyncMutation(
      editEducation,
      { id, education: payload },
      200,
      {
        error: "Failed to edit education",
        success: "Education edited successfully",
      },
      "/educations"
    );
  };

  useEffect(() => {
    if (education) {
      form.setFieldsValue({
        ...education,
        is_current: education.is_current,
        date_range: education.start_date
          ? [
              dayjs(education.start_date),
              education.end_date ? dayjs(education.end_date) : undefined,
            ]
          : undefined,
      });

      setIsCurrent(!!education.is_current);
    }
  }, [education, form]);

  return (
    <div className="bg-white shadow-md">
      <h2 className="text-lg font-semibold my-2">Edit Education</h2>

      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <Form
          disabled={isUpdating}
          layout="vertical"
          form={form}
          onFinish={onFinish}
          className="w-11/12"
          initialValues={{
            ...education,
            is_current: education?.is_current,
            date_range: education?.start_date
              ? [
                  dayjs(education.start_date),
                  education?.end_date ? dayjs(education.end_date) : undefined,
                ]
              : undefined,
          }}
        >
          <Form.Item
            name="degree"
            label="Degree"
            rules={[{ required: true, message: "Please enter your degree" }]}
          >
            <Input placeholder="e.g., Bachelor of Science" />
          </Form.Item>

          <Form.Item
            name="field_of_study"
            label="Field of Study"
            rules={[
              { required: true, message: "Please enter your field of study" },
            ]}
          >
            <Input placeholder="e.g., Computer Science" />
          </Form.Item>

          <Form.Item
            name="institution"
            label="Institution"
            rules={[
              { required: true, message: "Please enter the institution name" },
            ]}
          >
            <Input placeholder="e.g., Harvard University" />
          </Form.Item>

          <Form.Item name="location" label="Location">
            <Input placeholder="e.g., Cambridge, MA" />
          </Form.Item>

          <Form.Item
            name="date_range"
            label="Duration"
            rules={[
              {
                required: true,
                message: "Please select your education period",
              },
            ]}
          >
            <RangePicker
              format="YYYY-MM-DD"
              disabled={[false, isCurrent]}
              className="w-full"
            />
          </Form.Item>

          <Form.Item name="is_current" valuePropName="checked">
            <Checkbox onChange={(e) => setIsCurrent(e.target.checked)}>
              I am currently studying here
            </Checkbox>
          </Form.Item>

          <Form.Item name="grade" label="Grade / Result">
            <Input placeholder="e.g., CGPA 3.9/4.0 or A+" />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <TextArea
              rows={4}
              placeholder="Describe your coursework, achievements, etc."
            />
          </Form.Item>

          <Form.Item>
            <Button
              loading={isUpdating}
              type="primary"
              htmlType="submit"
              className="w-full"
            >
              {isUpdating ? "Saving..." : "Save changes"}
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default EditEducation;
