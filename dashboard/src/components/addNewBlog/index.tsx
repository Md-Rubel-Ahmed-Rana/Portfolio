/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddNewBlogMutation } from "@/features/blog.api";
import { IArticleSection } from "@/types/blog.type";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { Card, Form } from "antd/lib";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import BlogForm from "../blogs/BlogForm";
import makeBlogFormData from "../blogs/makeBlogFormData";

const AddNewBlog = () => {
  const [form] = Form.useForm();
  const [sections, setSections] = useState<IArticleSection[]>([
    {
      id: uuid(),
      title: "",
      images: [],
      description: "",
    },
  ]);
  const [addBlog, { isLoading }] = useAddNewBlogMutation();

  const handleAddNewBlog = (values: any) => {
    const blogData = {
      ...values,
      body: sections,
      thumbnail: values?.thumbnail?.file,
    };

    const formData = makeBlogFormData(blogData);

    handleAsyncMutation(
      addBlog,
      { blog: formData },
      201,
      { error: "Failed to add blog", success: "New Blog added successfully!" },
      "/blogs"
    );
  };

  return (
    <Card title="Add New Blog" className="mt-10 shadow-lg">
      <BlogForm
        form={form}
        isLoading={isLoading}
        submitHandler={handleAddNewBlog}
        content={sections}
        setContent={setSections}
        buttonText="Add Blog"
        buttonSize="large"
        buttonStyles="w-full"
      />
    </Card>
  );
};

export default AddNewBlog;
