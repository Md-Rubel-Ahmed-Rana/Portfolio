import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/dark.css";
import { useEffect } from "react";

type Props = {
  description: string;
};

const DisplayRichText = ({ description }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [description]);

  return (
    <div
      className="mt-4 prose max-w-none prose-img:rounded-lg prose-pre:bg-gray-100 prose-code:text-sm prose-code:before:hidden prose-code:after:hidden text-black"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
    />
  );
};

export default DisplayRichText;
