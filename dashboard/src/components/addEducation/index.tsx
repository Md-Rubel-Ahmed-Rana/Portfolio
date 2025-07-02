/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddNewEducationMutation } from "@/features/education.api";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { Button, Checkbox, DatePicker, Form, Input } from "antd/lib";
import dayjs from "dayjs";
import { useState } from "react";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const AddEducation = () => {
  const [form] = Form.useForm();
  const [isCurrent, setIsCurrent] = useState(false);
  const [newEducation, { isLoading }] = useAddNewEducationMutation();

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
      newEducation,
      { education: payload },
      201,
      {
        error: "Failed to add education",
        success: "Education added successfully",
      },
      "/educations"
    );
  };

  return (
    <div className="bg-white shadow-md">
      <h2 className="text-lg font-semibold my-2">Add Education</h2>

      <Form
        disabled={isLoading}
        layout="vertical"
        form={form}
        onFinish={onFinish}
        className="w-11/12"
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
            { required: true, message: "Please select your education period" },
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
            loading={isLoading}
            type="primary"
            htmlType="submit"
            className="w-full"
          >
            {isLoading ? "Adding..." : "Add Education"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddEducation;
