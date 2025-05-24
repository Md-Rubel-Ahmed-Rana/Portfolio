/* eslint-disable @next/next/no-img-element */
import { IProject } from "@/types/project.type";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  CodeOutlined,
  GlobalOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Card, Tag, Tooltip } from "antd/lib";
import dayjs from "dayjs";
import ProjectActions from "./ProjectActions";

type ProjectCardProps = {
  project: IProject;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card
      title={
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">{project?.name}</div>
          <span>
            <Tag
              color={project?.projectStatus === "completed" ? "green" : "blue"}
            >
              {project?.projectStatus.toUpperCase()}
            </Tag>
            <ProjectActions project={project} />
          </span>
        </div>
      }
      cover={
        <img
          alt={project?.name}
          src={project?.thumbnail}
          className="h-64 w-full object-cover rounded-t-md"
        />
      }
      className="shadow-md rounded-md border border-gray-200"
    >
      <p className="text-gray-600 text-sm mb-1">{project?.subTitle}</p>

      {/* Description */}
      <p className="mb-3">{project?.description}</p>

      {/* Features */}
      <div className="mb-3">
        <div className="font-medium text-gray-700">Features:</div>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {project?.features?.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mb-3">
        <div className="font-medium text-gray-700">Tech Stack:</div>
        <div className="flex flex-wrap gap-2 mt-1">
          {project?.techStack?.map((tech, idx) => (
            <Tag key={idx} color="blue">
              {tech}
            </Tag>
          ))}
        </div>
      </div>

      {/* Category */}
      <Tag color="orange">{project?.category}</Tag>

      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
        <div className="flex items-center gap-2">
          <span>Duration: </span>
          <CalendarOutlined />
          <span>
            {dayjs(project?.projectLength?.startDate).format("MMM YYYY")} -{" "}
            {dayjs(project?.projectLength?.endDate).format("MMM YYYY")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ClockCircleOutlined />
          <span>Created: {dayjs(project?.createAt).format("DD MMM YYYY")}</span>
        </div>
        <div className="flex items-center gap-2">
          <SyncOutlined />
          <span>
            Updated: {dayjs(project?.updatedAt).format("DD MMM YYYY")}
          </span>
        </div>
      </div>

      {project?.screenshots?.length > 0 && (
        <div className="mb-4">
          <div className="font-medium text-gray-700 mb-2">Screenshots:</div>
          <div className="flex overflow-x-auto gap-3 pb-1">
            {project?.screenshots?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`project-image-${idx}`}
                className="h-32 w-auto rounded shadow-sm border border-gray-200"
              />
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      <div className="flex items-center gap-4">
        <Tooltip title="Live Link">
          <a
            href={project?.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <GlobalOutlined />
            Live
          </a>
        </Tooltip>
        <Tooltip title="Source Code">
          <a
            href={project?.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 flex items-center gap-1"
          >
            <CodeOutlined />
            Code
          </a>
        </Tooltip>
      </div>
    </Card>
  );
};

export default ProjectCard;
