import tagOptions from "@/constants/blogTags";
import { Form, Select } from "antd";

const { Option } = Select;

const BlogTags = () => {
  return (
    <Form.Item
      label="Tags"
      name="tags"
      rules={[
        { required: true, message: "Please select or enter at least one tag" },
      ]}
    >
      <Select
        mode="tags"
        placeholder="Select or add tags"
        showSearch
        allowClear
        style={{ width: "100%" }}
        tokenSeparators={[","]}
      >
        {tagOptions.map((tag) => (
          <Option key={tag} value={tag}>
            {tag}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default BlogTags;
