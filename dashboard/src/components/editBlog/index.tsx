/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEditBlogMutation, useGetBlogByIdQuery } from "@/features/blog.api";
import GenericLoadingSkeleton from "@/skeleton";
import { IArticleSection, IBlog } from "@/types/blog.type";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { Form } from "antd/lib";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import BlogForm from "../blogs/BlogForm";
import makeBlogFormData from "../blogs/makeBlogFormData";

const EditBlog = () => {
  const [form] = Form.useForm();
  const { query } = useRouter();
  const id = query?.id as string;
  const { data, isLoading } = useGetBlogByIdQuery({ id });
  const blog = data?.data as IBlog;
  const [sections, setSections] = useState<IArticleSection[]>([
    {
      id: uuid(),
      title: "",
      images: [],
      description: "",
    },
  ]);
  const [updateBlog, { isLoading: isUpdating }] = useEditBlogMutation();

  useEffect(() => {
    if (blog) {
      form.setFieldsValue({
        title: blog?.title,
        type: blog?.type,
        thumbnail: blog?.thumbnail,
        body: blog?.body,
      });
      setSections(blog?.body);
    }
  }, [blog, form]);

  const handleEditBlog = (values: any) => {
    const formData = makeBlogFormData({
      ...values,
      thumbnail: values?.thumbnail?.file || blog?.thumbnail,
      body: sections,
    });
    handleAsyncMutation(
      updateBlog,
      { id, blog: formData },
      200,
      { error: "Failed to update blog", success: "Blog updated successfully!" },
      "/blogs"
    );
  };

  return (
    <>
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <div className="p-4">
          <h3 className="text-lg lg:text-2xl text-black mb-3">Edit Blog</h3>
          <BlogForm
            form={form}
            submitHandler={handleEditBlog}
            content={sections}
            isLoading={isUpdating}
            setContent={setSections}
            buttonText="Edit Blog"
          />
        </div>
      )}
    </>
  );
};

export default EditBlog;
