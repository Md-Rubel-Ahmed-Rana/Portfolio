/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { IArticleSection } from "@/types/blog.type";
import {
  DeleteOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Space, Upload, message } from "antd/lib";
import { v4 as uuid } from "uuid";
import RichTextEditor from "./RichTextEditor";

type Props = {
  sections: IArticleSection[];
  setSections: (value: IArticleSection[]) => void;
};

const ArticleEditor = ({ sections, setSections }: Props) => {
  const handleChange = <K extends keyof IArticleSection>(
    index: number,
    field: K,
    value: IArticleSection[K]
  ) => {
    const updated = [...sections];
    const section = { ...updated[index] };

    section[field] = value;
    updated[index] = section;

    setSections(updated);
  };

  const handleMultipleImageUpload = (index: number, fileList: File[]) => {
    const updated = [...sections];
    const section = { ...updated[index] };

    const existingImages = Array.isArray(section.images)
      ? [...section.images]
      : [];

    const filteredExisting = existingImages.filter(
      (img) => typeof img !== "object"
    ) as (string | File)[];

    section.images = [...filteredExisting, ...fileList] as string[] | File[];
    updated[index] = section;

    setSections(updated);
  };

  const removeImage = (sectionIndex: number, imageIndex: number) => {
    const updated = [...sections];
    const section = { ...updated[sectionIndex] };

    section.images = section.images.filter((_, i) => i !== imageIndex) as
      | string[]
      | File[];
    updated[sectionIndex] = section;

    setSections(updated);
  };

  const addSection = () => {
    setSections([
      ...sections,
      { id: uuid(), title: "", images: [], description: "" },
    ]);
  };

  const removeSection = (index: number) => {
    if (sections.length === 1) {
      message.warning("At least one section is required.");
      return;
    }
    const updated = [...sections];
    updated.splice(index, 1);
    setSections(updated);
  };

  return (
    <Form layout="vertical">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className="border border-gray-400 p-4 rounded-md mb-6 shadow-sm bg-white"
        >
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Input
              placeholder="Section Title"
              value={section.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
            />
            <Upload
              multiple
              accept="image/*"
              showUploadList={false}
              beforeUpload={() => false}
              onChange={(info) => {
                const oldImages = sections[index].images;

                const newFiles = info.fileList
                  .map((file) => file.originFileObj)
                  .filter((file: any): file is File => !!file);

                const uniqueNewFiles: any = newFiles.filter((newFile: any) => {
                  return !oldImages.some(
                    (oldFile: any) =>
                      oldFile.name === newFile.name &&
                      oldFile.size === newFile.size &&
                      oldFile.lastModified === newFile.lastModified
                  );
                });

                handleMultipleImageUpload(index, uniqueNewFiles);
              }}
            >
              <Button icon={<UploadOutlined />}>Upload Images</Button>
            </Upload>

            {section?.images?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {section?.images?.map((file, imgIndex) => (
                  <div key={imgIndex} className="relative">
                    <img
                      src={
                        typeof file === "string"
                          ? file
                          : URL.createObjectURL(file as File)
                      }
                      alt={`Section ${index} Image ${imgIndex}`}
                      className="h-24 rounded object-cover"
                    />
                    <Button
                      size="small"
                      danger
                      shape="circle"
                      className="absolute top-0 right-0"
                      onClick={() => removeImage(index, imgIndex)}
                    >
                      ×
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <RichTextEditor
              content={section.description}
              setContent={(html) => handleChange(index, "description", html)}
            />

            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => removeSection(index)}
              disabled={sections.length === 1}
            >
              Remove Section
            </Button>
          </Space>
        </div>
      ))}

      <Button
        className="mb-5"
        icon={<PlusOutlined />}
        type="dashed"
        onClick={addSection}
      >
        Add New Section
      </Button>
    </Form>
  );
};

export default ArticleEditor;
