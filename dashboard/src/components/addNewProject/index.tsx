/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddNewProjectMutation } from "@/features/project.api";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Space,
  Upload,
} from "antd/lib";
import makeProjectFormData from "../projects/makeProjectFormData";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const STATUS_OPTIONS = ["In Progress", "Completed", "Paused"];

const AddNewProject = () => {
  const [form] = Form.useForm();
  const [addProject, { isLoading }] = useAddNewProjectMutation();

  const handleAddNewProject = (values: any) => {
    const [startDate, endDate] = values?.projectLength as unknown as [
      Date,
      Date
    ];

    const formattedValues = {
      ...values,
      projectLength: {
        startDate: new Date(startDate).toISOString() as unknown as Date,
        endDate: endDate
          ? (new Date(endDate).toISOString() as unknown as Date)
          : null,
      },
      thumbnail: values.thumbnail.file,
      screenshots: values.screenshots.fileList.map(
        (file: any) => file.originFileObj
      ) as File[],
    };
    const formData = makeProjectFormData(formattedValues);
    handleAsyncMutation(
      addProject,
      { project: formData },
      201,
      { error: "Failed to add project", success: "Project added successfully" },
      "/projects"
    );
  };

  return (
    <div className="p-3 bg-white rounded-2xl shadow-md">
      <h2 className="text-lg lg:text-2xl text-black font-semibold mb-6">
        Add New Project
      </h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleAddNewProject}
        className="space-y-4"
      >
        <Form.Item
          name="name"
          label="Project Name"
          rules={[{ required: true, message: "Please enter a name" }]}
        >
          <Input placeholder="Enter project name" />
        </Form.Item>

        <Form.Item
          name="subTitle"
          label="Project Subtitle"
          rules={[{ required: true, message: "Please enter a subtitle" }]}
        >
          <Input placeholder="Enter project subtitle" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Project Description"
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <TextArea rows={4} placeholder="Describe the project" />
        </Form.Item>

        <Form.Item
          name="category"
          label="Project Category"
          rules={[{ required: true, message: "Please enter a category" }]}
        >
          <Input placeholder="Web Development" />
        </Form.Item>

        <Form.Item
          name="sourceCode"
          label="GitHub Link"
          rules={[{ type: "url", message: "Enter a valid URL" }]}
        >
          <Input placeholder="https://github.com/your-repo" />
        </Form.Item>

        <Form.Item
          name="liveLink"
          label="Live Link"
          rules={[{ type: "url", message: "Enter a valid URL" }]}
        >
          <Input placeholder="https://your-project.com" />
        </Form.Item>

        <Form.Item
          name="projectStatus"
          label="Project Status"
          rules={[{ required: true, message: "Please select a status" }]}
        >
          <Select
            placeholder="Select project status"
            options={STATUS_OPTIONS.map((s) => ({ label: s, value: s }))}
          />
        </Form.Item>

        <Form.Item
          name="projectLength"
          label="Project Duration"
          rules={[{ required: true, message: "Please select project dates" }]}
        >
          <RangePicker className="w-full" />
        </Form.Item>

        <Form.List name="features">
          {(fields, { add, remove }) => (
            <div>
              <label className="block mb-2 font-medium text-sm">Features</label>
              {fields.map((field) => (
                <Space key={field.key} className="flex mb-2 mr-2" align="start">
                  <Form.Item
                    {...field}
                    name={[field.name]}
                    rules={[{ required: true, message: "Enter a feature" }]}
                  >
                    <Input placeholder="Feature" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Feature
              </Button>
            </div>
          )}
        </Form.List>

        <Form.List name="techStack">
          {(fields, { add, remove }) => (
            <div className="mt-6">
              <label className="block mb-2 font-medium text-sm">
                Tech Stack
              </label>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  className="flex items-center mb-2 mr-2"
                  align="start"
                >
                  <Form.Item
                    {...field}
                    name={[field.name]}
                    rules={[{ required: true, message: "Enter a technology" }]}
                  >
                    <Input placeholder="e.g., React, MongoDB" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Tech Stack
              </Button>
            </div>
          )}
        </Form.List>

        <Form.Item name="thumbnail" label="Thumbnail Image (1 file)">
          <Upload
            beforeUpload={() => false}
            maxCount={1}
            listType="picture"
            accept="image/*"
            name="thumbnail"
          >
            <Button icon={<UploadOutlined />}>Upload Thumbnail</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="screenshots"
          label="Project screenshots (multiple allowed. up to 5)"
        >
          <Upload
            beforeUpload={() => false}
            multiple={true}
            listType="picture"
            accept="image/*"
            name="screenshots"
          >
            <Button icon={<PlusOutlined />}>Upload screenshots</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            disabled={isLoading}
            loading={isLoading}
            iconPosition="end"
            type="primary"
            htmlType="submit"
            className="w-full mt-4"
          >
            {isLoading ? "Adding..." : "Add Project"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddNewProject;
