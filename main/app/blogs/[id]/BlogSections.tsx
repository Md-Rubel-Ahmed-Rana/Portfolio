/* eslint-disable @next/next/no-img-element */
import { IArticleSection } from "@/app/types/blog.type";
import React from "react";
import dynamic from "next/dynamic";
const DisplayRichText = dynamic(() => import("./DisplayRichText"), {
  ssr: false,
});

type Props = {
  sections: IArticleSection[];
};

const BlogSections = ({ sections = [] }: Props) => {
  return (
    <div className="">
      {sections.map((section) => (
        <div key={section.id} className="mb-10">
          <h1 className="mb-2">{section.title}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {section?.images?.map((image, idx) => (
              <img
                key={idx}
                src={image as string}
                alt={`Section Image ${idx + 1}`}
                className="rounded-md border max-h-[250px] h-full border-blue-500"
              />
            ))}
          </div>

          <DisplayRichText description={section?.description} />
        </div>
      ))}
    </div>
  );
};

export default BlogSections;
