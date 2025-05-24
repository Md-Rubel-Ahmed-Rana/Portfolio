import { useUpdateSkillMutation } from "@/features/skill.api";
import { ISkill } from "@/types/home.type";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Modal } from "antd/lib";
import { useState } from "react";

type Props = {
  skill: ISkill;
};

const SkillEditModal = ({ skill }: Props) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [editSkill, { isLoading }] = useUpdateSkillMutation();

  const handleEditSkill = async (values: ISkill) => {
    await handleAsyncMutation(
      editSkill,
      { id: skill?.id, skill: values },
      200,
      {
        error: "Failed to edit skill",
        success: "Skill updated successfully!",
      },
      "/skills"
    );
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        type="text"
        icon={<EditOutlined />}
      />

      <Modal
        title="Edit Skill"
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => form.submit()}
        okText={isLoading ? "Updating..." : "Update"}
        confirmLoading={isLoading}
        okButtonProps={{ disabled: isLoading }}
        cancelButtonProps={{ disabled: isLoading }}
        maskClosable={!isLoading}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            name: skill?.name,
            icon: skill?.icon,
            serial: skill?.serial,
          }}
          onFinish={handleEditSkill}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter skill name" }]}
          >
            <Input placeholder="Enter skill name" />
          </Form.Item>

          <Form.Item
            label="Icon name (react-icons)"
            name="icon"
            rules={[{ required: true, message: "Please enter icon name" }]}
          >
            <Input placeholder="Enter skill icon" />
          </Form.Item>

          <Form.Item
            label="Serial"
            name="serial"
            rules={[{ required: true, message: "Please enter serial number" }]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default SkillEditModal;
