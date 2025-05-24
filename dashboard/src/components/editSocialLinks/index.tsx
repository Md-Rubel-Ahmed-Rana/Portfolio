import {
  useGetHomeDataQuery,
  useUpdateHomeMutation,
} from "@/features/home.api";
import GenericLoadingSkeleton from "@/skeleton";
import { IPersonalInfo, ISocialLink } from "@/types/home.type";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Typography } from "antd/lib";

const { Title } = Typography;

const EditSocialLinks = () => {
  const { data, isLoading } = useGetHomeDataQuery({});
  const personalData = data?.data as IPersonalInfo;
  const links = personalData?.socialLinks as ISocialLink[];
  const [update, { isLoading: isUpdating }] = useUpdateHomeMutation();

  const [form] = Form.useForm();

  const handleUpdateSocials = (values: { socialLinks: ISocialLink[] }) => {
    const updatedData = { ...personalData, socialLinks: values.socialLinks };
    handleAsyncMutation(
      update,
      {
        id: personalData?.id,
        data: updatedData,
      },
      200,
      { error: "Failed to update", success: "Social links updated" },
      "/personal-info"
    );
  };

  return (
    <>
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <div className="p-4 bg-white rounded-2xl shadow-md">
          <Title level={4}>Edit Social Links</Title>
          <Form
            form={form}
            name="edit_social_links"
            onFinish={handleUpdateSocials}
            autoComplete="off"
            initialValues={{ socialLinks: links }}
            disabled={isUpdating}
          >
            <Form.List name="socialLinks">
              {(fields, { add, remove }) => (
                <div className="flex flex-col">
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} className="block  mb-4" align="baseline">
                      <Form.Item
                        {...restField}
                        name={[name, "name"]}
                        rules={[{ required: true, message: "Name required" }]}
                      >
                        <Input placeholder="Name" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "link"]}
                        rules={[{ required: true, message: "Link required" }]}
                      >
                        <Input placeholder="Link" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "icon"]}
                        rules={[{ required: true, message: "Icon required" }]}
                      >
                        <Input placeholder="Icon" />
                      </Form.Item>
                      <MinusCircleOutlined
                        onClick={() => remove(name)}
                        className="text-red-500 hover:text-red-700 cursor-pointer"
                      />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      icon={<PlusOutlined />}
                      className="w-full"
                    >
                      Add Social Link
                    </Button>
                  </Form.Item>
                </div>
              )}
            </Form.List>

            <Form.Item>
              <Button
                disabled={isUpdating}
                loading={isUpdating}
                iconPosition="end"
                type="primary"
                htmlType="submit"
              >
                {isUpdating ? "Saving..." : "Save Changes"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  );
};

export default EditSocialLinks;
