/* eslint-disable @typescript-eslint/no-explicit-any */
import { IArticleSection } from "@/types/blog.type";
import { Button, Form, FormInstance, Input, Upload } from "antd/lib";
import ArticleEditor from "../common/ArticleEditor";
import BlogTags from "./BlogTags";
import BlogTypes from "./BlogTypes";

type Props = {
  form: FormInstance;
  submitHandler: any;
  isLoading: boolean;
  content: IArticleSection[];
  setContent: (value: IArticleSection[]) => void;
  buttonText: "Add Blog" | "Edit Blog";
  buttonSize?: "large" | "middle" | "small";
  buttonStyles?: string;
};

const BlogForm = ({
  form,
  submitHandler,
  isLoading,
  buttonText,
  content,
  setContent,
  buttonSize = "middle",
  buttonStyles,
}: Props) => {
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={submitHandler}
      className="space-y-4"
      disabled={isLoading}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Title is required" }]}
      >
        <Input placeholder="Enter blog title" />
      </Form.Item>

      <BlogTypes />

      <BlogTags />

      <Form.Item
        label="Thumbnail Image URL"
        name="thumbnail"
        rules={[{ required: true, message: "Please add thumbnail image" }]}
      >
        <Upload
          accept="image/*"
          beforeUpload={() => false}
          name="thumbnail"
          listType="picture"
          multiple={false}
        >
          <Button>Upload image</Button>
        </Upload>
      </Form.Item>
      <Form.Item label="Article sections">
        <ArticleEditor sections={content} setSections={setContent} />
      </Form.Item>

      <Form.Item>
        <Button
          disabled={isLoading}
          loading={isLoading}
          iconPosition="end"
          type="primary"
          className={buttonStyles}
          htmlType="submit"
          size={buttonSize}
        >
          {isLoading
            ? buttonText === "Add Blog"
              ? "Adding..."
              : "Updating..."
            : buttonText}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BlogForm;
