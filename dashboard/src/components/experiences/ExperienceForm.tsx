/* eslint-disable @typescript-eslint/no-explicit-any */
import { EditFilled, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  FormInstance,
  Input,
  Select,
} from "antd/lib";
import { useState } from "react";

const { RangePicker } = DatePicker;

type Props = {
  form: FormInstance;
  submitHandler: any;
  isLoading: boolean;
  buttonText: "Add Experience" | "Update Experience";
  actionText: "Adding..." | "Updating...";
};

const ExperienceForm = ({
  form,
  submitHandler,
  isLoading,
  buttonText,
  actionText,
}: Props) => {
  const [responsibilities, setResponsibilities] = useState<string[]>([]);
  const [techStack, setTechStack] = useState<string[]>([]);
  return (
    <Form layout="vertical" form={form} onFinish={submitHandler}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Form.Item
          name="name"
          label="Company Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="size" label="Company Size">
          <Input placeholder="e.g. 51-200" />
        </Form.Item>

        <Form.Item
          name="workType"
          label="Work Type"
          rules={[{ required: true }]}
        >
          <Select
            options={[
              { label: "Full-time", value: "Full-time" },
              { label: "Part-time", value: "Part-time" },
              { label: "Internship", value: "Internship" },
              { label: "Contract", value: "Contract" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="designation"
          label="Designation"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="workLocation" label="Work Location">
          <Select
            options={[
              { label: "Remote", value: "Remote" },
              { label: "On-site", value: "On-site" },
              { label: "Hybrid", value: "Hybrid" },
            ]}
          />
        </Form.Item>

        <Form.Item name="location" label="Office Address / City">
          <Input />
        </Form.Item>

        <Form.Item
          name="dateRange"
          label="Start & End Date"
          rules={[{ required: true }]}
        >
          <RangePicker picker="date" className="w-full" />
        </Form.Item>

        <Form.Item name="website" label="Company Website">
          <Input type="url" />
        </Form.Item>

        <Form.Item name="linkedIn" label="LinkedIn">
          <Input type="url" />
        </Form.Item>
      </div>
      <div className="w-full overflow-x-auto">
        <Form.Item
          className="mt-4 "
          name="responsibilities"
          label="Responsibilities"
        >
          <Select
            mode="tags"
            placeholder="Add responsibilities"
            value={responsibilities}
            onChange={setResponsibilities}
            className="w-full mt-1"
            tokenSeparators={[","]}
            style={{ flexWrap: "wrap" }}
            dropdownStyle={{ maxWidth: "100%" }}
          />
        </Form.Item>
      </div>

      <Form.Item
        className="mt-4"
        name="learnedNewTech"
        label="Technologies Learned"
      >
        <Select
          mode="tags"
          placeholder="Add technologies"
          value={techStack}
          onChange={setTechStack}
          className="w-full mt-1"
          tokenSeparators={[","]}
        />
      </Form.Item>

      <div className="mt-6 flex justify-end">
        <Button
          disabled={isLoading}
          loading={isLoading}
          iconPosition={isLoading ? "end" : "start"}
          type="primary"
          htmlType="submit"
          icon={
            buttonText === "Update Experience" ? (
              <EditFilled />
            ) : (
              <PlusOutlined />
            )
          }
        >
          {isLoading ? actionText : buttonText}
        </Button>
      </div>
    </Form>
  );
};

export default ExperienceForm;
