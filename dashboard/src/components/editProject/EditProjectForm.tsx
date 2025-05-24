/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUpdateProjectMutation } from "@/features/project.api";
import { IProject } from "@/types/project.type";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select, Space } from "antd/lib";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import makeProjectFormData from "../projects/makeProjectFormData";
import ManageToUpdateImages from "./ManageToUpdateImages";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const STATUS_OPTIONS = ["In Progress", "Completed", "Paused"];

type EditProjectFormProps = {
  project: IProject;
};

const EditProjectForm = ({ project }: EditProjectFormProps) => {
  const [form] = Form.useForm();
  const [updateProject, { isLoading }] = useUpdateProjectMutation();
  const [newImages, setNewImages] = useState<(File | string)[]>([]);
  const [newThumbnail, setNewThumbnail] = useState<File | string>("");

  useEffect(() => {
    if (project) {
      form.setFieldsValue({
        ...project,
        projectLength: [
          project.projectLength?.startDate
            ? dayjs(project.projectLength.startDate)
            : null,
          project.projectLength?.endDate
            ? dayjs(project.projectLength.endDate)
            : null,
        ],
      });
      setNewImages(project?.screenshots);
      setNewThumbnail(project?.thumbnail);
    }
  }, [project, form]);

  const handleEditProject = (values: any) => {
    const [startDate, endDate] = values.projectLength;
    const updatedData = {
      ...values,
      projectLength: {
        startDate: new Date(startDate).toISOString(),
        endDate: endDate ? new Date(endDate).toISOString() : null,
      },
      thumbnail: newThumbnail,
      screenshots: newImages,
    };

    console.log({ screenshots: values?.screenshots });

    const formData = makeProjectFormData(updatedData);

    handleAsyncMutation(
      updateProject,
      { id: project.id, project: formData },
      200,
      {
        error: "Failed to update project",
        success: "Project updated successfully",
      },
      "/projects"
    );
  };

  return (
    <div className="p-3 bg-white rounded-2xl shadow-md">
      <h2 className="text-lg lg:text-2xl text-black font-semibold mb-6">
        Edit Project
      </h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleEditProject}
        className="space-y-4"
      >
        <Form.Item
          name="name"
          label="Project Name"
          rules={[{ required: true, message: "Please enter a name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="subTitle"
          label="Project Subtitle"
          rules={[{ required: true, message: "Please enter a subtitle" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Project Description"
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="category"
          label="Project Category"
          rules={[{ required: true, message: "Please enter a category" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="sourceCode"
          label="GitHub Link"
          rules={[{ type: "url", message: "Enter a valid URL" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="liveLink"
          label="Live Link"
          rules={[{ type: "url", message: "Enter a valid URL" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="projectStatus"
          label="Project Status"
          rules={[{ required: true, message: "Please select a status" }]}
        >
          <Select
            placeholder="Select status"
            options={STATUS_OPTIONS.map((s) => ({ label: s, value: s }))}
          />
        </Form.Item>

        <Form.Item
          name="projectLength"
          label="Project Duration"
          rules={[{ required: true, message: "Select project duration" }]}
        >
          <RangePicker className="w-full" />
        </Form.Item>

        <Form.List name="features">
          {(fields, { add, remove }) => (
            <div>
              <label className="block mb-2 font-medium text-sm">Features</label>
              {fields.map((field) => (
                <div key={field.key} className="flex items-center">
                  <Form.Item
                    className="block w-full"
                    {...field}
                    name={[field.name]}
                    rules={[{ required: true, message: "Enter a feature" }]}
                  >
                    <Input placeholder="Feature" />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={() => remove(field.name)}
                    className="mb-5 ml-2 text-red-500"
                  />
                </div>
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
                <Space key={field.key} className="flex mb-2 mr-2" align="start">
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

        <ManageToUpdateImages
          setNewImages={setNewImages}
          setNewThumbnail={setNewThumbnail}
          newImages={newImages}
          thumbnail={newThumbnail}
        />

        <Form.Item>
          <Button
            disabled={isLoading}
            loading={isLoading}
            type="primary"
            htmlType="submit"
            className="w-full mt-4"
          >
            {isLoading ? "Updating..." : "Update Project"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProjectForm;
