import { ISocialLink } from "@/types/home.type";
import findIcon from "@/utils/findIcon";
import { Button, Card, Tag } from "antd/lib";
import Link from "next/link";

type Props = {
  links: ISocialLink[];
  id: string;
};

const SocialLinks = ({ links, id }: Props) => {
  return (
    <Card
      title={
        <div className="flex items-center gap-2">
          <span>Social Links</span>
          <Link href={`/personal-info/social-links/edit/${id}`}>
            <Button type="primary">Edit</Button>
          </Link>
        </div>
      }
      className="rounded-2xl shadow-md"
    >
      <div className="flex flex-wrap gap-3">
        {links?.map((social) => {
          const iconElement = findIcon(social?.icon);
          return (
            <Tag
              className="flex items-center gap-2 p-2"
              key={social?.id}
              color="blue"
            >
              <a
                href={social?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 p-2"
              >
                <span className="text-lg">{iconElement}</span>
                <span className="text-lg font-semibold text-gray-500">
                  {social?.name}
                </span>
              </a>
            </Tag>
          );
        })}
      </div>
    </Card>
  );
};

export default SocialLinks;
