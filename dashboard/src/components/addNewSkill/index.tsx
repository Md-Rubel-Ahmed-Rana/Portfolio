import { useAddNewSkillMutation } from "@/features/skill.api";
import { IAddSkill } from "@/types/home.type";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber } from "antd/lib";

const AddNewSkill = () => {
  const [form] = Form.useForm();
  const [addSkill, { isLoading }] = useAddNewSkillMutation();

  const onFinish = async (values: { skills: IAddSkill[] }) => {
    await handleAsyncMutation(
      addSkill,
      { skills: values.skills as IAddSkill[] },
      201,
      { error: "Failed to add  skills", success: "Skills added successfully!" },
      "/skills"
    );
    form.resetFields();
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl text-black font-semibold mb-6 text-center">
        Add New Skills
      </h2>
      <Form
        form={form}
        name="dynamic_skill_form"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.List name="skills" initialValue={[{}]}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }, index) => (
                <div
                  key={key}
                  className="border border-gray-300 p-4 mb-4 rounded-xl bg-gray-50 relative"
                >
                  <h4 className="font-semibold mb-2">Skill {index + 1}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Form.Item
                      {...restField}
                      name={[name, "name"]}
                      label="Name"
                      rules={[
                        { required: true, message: "Please enter skill name" },
                      ]}
                    >
                      <Input placeholder="e.g., JavaScript" />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name={[name, "icon"]}
                      label="Icon (react-icons)"
                      rules={[
                        { required: true, message: "Please enter icon name" },
                      ]}
                    >
                      <Input placeholder="e.g., SiJavascript" />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name={[name, "serial"]}
                      label="Serial"
                      rules={[
                        {
                          required: true,
                          message: "Please enter serial number",
                        },
                      ]}
                    >
                      <InputNumber className="w-full" placeholder="e.g., 1" />
                    </Form.Item>
                  </div>
                  {fields.length > 1 && (
                    <Button
                      type="text"
                      icon={<MinusCircleOutlined />}
                      danger
                      onClick={() => remove(name)}
                      className="absolute top-4 right-4"
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Skill
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item className="text-center mt-6">
          <Button
            disabled={isLoading}
            loading={isLoading}
            iconPosition="end"
            type="primary"
            htmlType="submit"
          >
            {isLoading ? "Submitting..." : "Submit Skills"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddNewSkill;
