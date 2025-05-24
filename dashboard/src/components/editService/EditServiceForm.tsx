/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { useUpdateServiceMutation } from "@/features/service.api";
import { IService } from "@/types/service.type";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd/lib";

type EditServiceFormProps = {
  service: IService;
};

const EditServiceForm = ({ service }: EditServiceFormProps) => {
  const [form] = Form.useForm();
  const [editService, { isLoading }] = useUpdateServiceMutation();

  const handleEditService = (values: any) => {
    const formData = new FormData();
    formData.append("name", values?.name);
    formData.append("description", values?.description);
    if (values?.image?.file) {
      formData.append("image", values?.image?.file);
    }

    handleAsyncMutation(
      editService,
      { id: service?.id, service: formData },
      200,
      {
        error: "Failed to update service",
        success: "Service updated successfully",
      },
      "/services"
    );
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl text-black font-semibold mb-6">Edit Service</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleEditService}
        initialValues={{
          name: service?.name,
          description: service?.description,
        }}
        disabled={isLoading}
      >
        <Form.Item
          label="Service Name"
          name="name"
          rules={[{ required: true, message: "Please enter the service name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Current Image">
          <img
            src={service?.image}
            alt="Service"
            className="w-full lg:w-64 max-h-60 object-cover rounded-md"
          />
        </Form.Item>

        <Form.Item label="Change Image" name="image">
          <Upload beforeUpload={() => false} maxCount={1}>
            <Button icon={<UploadOutlined />}>Select New Image</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            disabled={isLoading}
            loading={isLoading}
            iconPosition="end"
            size="large"
            type="primary"
            htmlType="submit"
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditServiceForm;
