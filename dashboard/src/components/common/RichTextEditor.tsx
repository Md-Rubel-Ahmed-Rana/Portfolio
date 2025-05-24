import BulletList from "@tiptap/extension-bullet-list";
import CodeBlock from "@tiptap/extension-code-block";
import Heading, { Level } from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button, Form, Select } from "antd/lib";
import clsx from "clsx";
import { useEffect } from "react";

const { Option } = Select;

type Props = {
  content: string;
  setContent: (value: string) => void;
};

const RichTextEditor = ({ content, setContent }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      BulletList,
      OrderedList,
      ListItem,
      CodeBlock,
    ],
    content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setContent(html);
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) return null;

  const headingLevels = [1, 2, 3, 4, 5, 6];

  return (
    <Form.Item>
      <div className="border border-gray-300 p-2 rounded-md">
        <div className="flex flex-wrap gap-2 mb-2">
          <Button
            className={clsx({ "bg-blue-100": editor.isActive("bold") })}
            size="small"
            htmlType="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            Bold
          </Button>
          <Button
            className={clsx({ "bg-blue-100": editor.isActive("bold") })}
            size="small"
            htmlType="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            Italic
          </Button>
          <Button
            className={clsx({ "bg-blue-100": editor.isActive("bold") })}
            size="small"
            htmlType="button"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          >
            Code
          </Button>
          <Button
            className={clsx({ "bg-blue-100": editor.isActive("bold") })}
            size="small"
            htmlType="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            Bullet List
          </Button>
          <Button
            className={clsx({ "bg-blue-100": editor.isActive("bold") })}
            size="small"
            htmlType="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
            Numbered List
          </Button>
          <Button
            className={clsx({ "bg-blue-100": editor.isActive("bold") })}
            size="small"
            htmlType="button"
            onClick={() => editor.chain().focus().setParagraph().run()}
          >
            Paragraph
          </Button>
          <Select
            size="small"
            placeholder="Headings"
            style={{ width: 60 }}
            onChange={(val) =>
              editor
                .chain()
                .focus()
                .toggleHeading({ level: Number(val) as Level })
                .run()
            }
            value={
              headingLevels
                .find((level) => editor.isActive("heading", { level }))
                ?.toString() ?? "Headings"
            }
          >
            {headingLevels.map((level) => (
              <Option key={level} value={level.toString()}>
                H{level}
              </Option>
            ))}
          </Select>
        </div>

        <EditorContent
          value={content}
          editor={editor}
          className="min-h-[200px]"
        />
      </div>
    </Form.Item>
  );
};

export default RichTextEditor;
