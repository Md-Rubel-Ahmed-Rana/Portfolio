/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  EditFilled,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, DatePicker, Form, FormInstance, Input, Space } from "antd/lib";

type Props = {
  form: FormInstance;
  submitHandler: any;
  isLoading: boolean;
  buttonText: "Add Course" | "Update Course";
  actionText: "Adding..." | "Updating...";
};

const CourseForm = ({
  form,
  submitHandler,
  isLoading,
  buttonText,
  actionText,
}: Props) => {
  return (
    <Form layout="vertical" form={form} onFinish={submitHandler}>
      <Form.Item
        name="name"
        label="Course Name"
        rules={[{ required: true, message: "Please enter the course name" }]}
      >
        <Input placeholder="Enter course name" />
      </Form.Item>

      <Form.Item
        name="institute"
        label="Institute"
        rules={[{ required: true, message: "Please enter the institute name" }]}
      >
        <Input placeholder="Enter institute name" />
      </Form.Item>

      <Space className="flex gap-4" direction="horizontal">
        <Form.Item
          name="startDate"
          label="Start Date"
          rules={[{ required: true, message: "Please select a start date" }]}
          className="w-fll"
        >
          <DatePicker className="w-full" />
        </Form.Item>

        <Form.Item
          name="endDate"
          label="End Date"
          className="w-fll"
          rules={[{ required: true, message: "Please select an end date" }]}
        >
          <DatePicker className="w-full" />
        </Form.Item>
      </Space>

      <Form.List name="courseDetails">
        {(fields, { add, remove }) => (
          <div>
            <label className="block font-medium text-gray-700 mb-2 mt-4">
              Course Details
            </label>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} className="flex mb-2 mr-2" align="start">
                <Form.Item
                  {...restField}
                  name={name}
                  rules={[{ required: true, message: "Missing detail" }]}
                  className="w-full"
                >
                  <Input placeholder="Enter detail" className="w-full" />
                </Form.Item>
                <MinusCircleOutlined
                  onClick={() => remove(name)}
                  className="text-red-500"
                />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Detail
              </Button>
            </Form.Item>
          </div>
        )}
      </Form.List>

      <div className="mt-6 flex justify-end">
        <Button
          disabled={isLoading}
          loading={isLoading}
          iconPosition={isLoading ? "end" : "start"}
          type="primary"
          htmlType="submit"
          icon={
            buttonText === "Update Course" ? <EditFilled /> : <PlusOutlined />
          }
        >
          {isLoading ? actionText : buttonText}
        </Button>
      </div>
    </Form>
  );
};

export default CourseForm;
