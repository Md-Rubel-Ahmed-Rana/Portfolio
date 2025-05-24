/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddNewServiceMutation } from "@/features/service.api";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd/lib";

const AddNewService = () => {
  const [form] = Form.useForm();
  const [addService, { isLoading }] = useAddNewServiceMutation();

  const handleAddNewService = (values: any) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    if (values.image[0].originFileObj) {
      formData.append("image", values.image[0].originFileObj);
    }
    handleAsyncMutation(
      addService,
      { service: formData },
      201,
      {
        error: "Failed to add service",
        success: "New service added successfully",
      },
      "/services"
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl text-black font-semibold mb-6">
        Add New Service
      </h2>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleAddNewService}
        className="space-y-4"
        disabled={isLoading}
      >
        <Form.Item
          label="Service Name"
          name="name"
          rules={[{ required: true, message: "Please enter service name" }]}
        >
          <Input placeholder="Enter service name" />
        </Form.Item>

        <Form.Item
          label="Service Image"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={(e: any) => e && e.fileList}
          rules={[{ required: true, message: "Please upload an image" }]}
        >
          <Upload
            name="image"
            listType="picture"
            beforeUpload={() => false}
            maxCount={1}
            accept="image/*"
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter description" }]}
        >
          <Input.TextArea rows={4} placeholder="Enter service description" />
        </Form.Item>

        <Form.Item>
          <Button
            disabled={isLoading}
            loading={isLoading}
            iconPosition="end"
            type="primary"
            htmlType="submit"
            className="w-full"
            size="large"
          >
            {isLoading ? "Adding..." : "Add Service"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddNewService;
