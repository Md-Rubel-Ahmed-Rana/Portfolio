import { IExperience } from "../types/experience.type";
import { Button, Card, Tag, Tooltip } from "antd/lib";
import {
  GlobalOutlined,
  LinkedinOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import Link from "next/link";

type Props = {
  experience: IExperience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <Card
      title={
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-xl font-semibold">{experience.name}</h2>
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            {experience.website && (
              <Tooltip title="Company Website">
                <a href={experience.website} target="_blank" rel="noreferrer">
                  <GlobalOutlined />
                </a>
              </Tooltip>
            )}
            {experience.linkedIn && (
              <Tooltip title="LinkedIn">
                <a href={experience.linkedIn} target="_blank" rel="noreferrer">
                  <LinkedinOutlined />
                </a>
              </Tooltip>
            )}
          </div>
        </div>
      }
      className="rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="space-y-2">
        <p className="text-base font-medium text-gray-700">
          {experience.designation}
        </p>

        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
          <Tag color="blue">{experience.workType}</Tag>
          <Tag color="purple">{experience.type}</Tag>
          <Tag color="green">{experience.size}</Tag>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <EnvironmentOutlined />
          <span>{experience.workLocation || experience.location}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <CalendarOutlined />
          <p className="text-sm font-semibold">
            <span>
              {experience.startDate.slice(0, 10).split("-").reverse().join("-")}
            </span>{" "}
            |
            <span className="ml-1">
              {experience.endDate
                ? experience.endDate.slice(0, 10).split("-").reverse().join("-")
                : "Present"}
            </span>
          </p>
        </div>

        {experience.learnedNewTech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {experience.learnedNewTech.slice(0, 4).map((tech) => (
              <Tag key={tech} color="geekblue">
                {tech}
              </Tag>
            ))}
          </div>
        )}
        <Link
          href={`/experiences/${experience?.id}?company=${experience?.name}`}
        >
          <Button
            className="mt-4 px-10 bg-gradient-to-l  from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500 text-white"
            type="primary"
          >
            Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ExperienceCard;
