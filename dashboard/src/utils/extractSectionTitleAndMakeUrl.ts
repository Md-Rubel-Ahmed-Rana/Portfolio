import { IArticleSection } from "@/types/blog.type";

const extractSectionTitleAndMakeUrl = (sections: IArticleSection[]): string => {
  const titles = sections?.map((section) => section?.title);
  const newTitles = titles?.map((title) => title?.split(" ")?.join("-"));
  return newTitles?.join("-");
};

export default extractSectionTitleAndMakeUrl;
