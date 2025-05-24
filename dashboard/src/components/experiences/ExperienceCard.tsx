import { useDeleteExperienceMutation } from "@/features/experience.api";
import { IExperience } from "@/types/experience.type";
import { EditOutlined } from "@ant-design/icons";
import { Button, Card, Tag, Tooltip } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import DeleteCardItemModal from "../common/DeleteCardItemModal";

type Props = {
  experience: IExperience;
};

const ExperienceCard = ({ experience }: Props) => {
  const path = `/experience/edit/${experience?.id}?name=${
    experience?.name
  }&designation=${experience?.designation}&workType=${
    experience?.workType
  }&workLocation=${
    experience?.workLocation
  }&responsibilities=${experience.responsibilities.join(", ")}`;
  return (
    <Card
      title={experience?.name}
      className="shadow-md rounded-2xl border border-gray-100"
      actions={[
        <Link href={path} key="edit">
          <Tooltip title="Edit Experience">
            <Button type="text" icon={<EditOutlined />} />
          </Tooltip>
        </Link>,
        <DeleteCardItemModal
          key={"delete"}
          itemId={experience?.id}
          itemName={experience?.name}
          itemCategory="experience"
          useReduxMutation={useDeleteExperienceMutation}
        />,
      ]}
    >
      <div className="grid grid-cols-1 text-sm">
        <div>
          <strong>Designation:</strong> {experience?.designation}
        </div>
        <div>
          <strong>Work Type:</strong> {experience?.workType}
        </div>
        <div>
          <strong>Company Size:</strong> {experience?.size}
        </div>
        <div>
          <strong>Work Location:</strong> {experience?.workLocation}
        </div>
        <div>
          <strong>Location:</strong> {experience?.location}
        </div>
        <div>
          <strong>Start Date:</strong>{" "}
          {dayjs(experience?.startDate).format("MMM YYYY")}
        </div>
        <div>
          <strong>End Date:</strong>{" "}
          {dayjs(experience?.endDate).format("MMM YYYY")}
        </div>
        <div>
          <strong>Website:</strong>{" "}
          {experience?.website ? (
            <a
              href={experience?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Browse Now
            </a>
          ) : (
            <span>Not Available</span>
          )}
        </div>
        <div>
          <strong>LinkedIn:</strong>{" "}
          {experience?.linkedIn ? (
            <a
              href={experience?.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Browse Now
            </a>
          ) : (
            <span>Not Available</span>
          )}
        </div>
        <div>
          <strong>Created At:</strong>{" "}
          {dayjs(experience?.createdAt).format("DD MMM YYYY, hh:mm A")}
        </div>
        <div>
          <strong>Updated At:</strong>{" "}
          {dayjs(experience?.updatedAt).format("DD MMM YYYY, hh:mm A")}
        </div>
      </div>

      <div className="mt-4">
        <strong>Responsibilities:</strong>
        <Tooltip title={experience?.responsibilities.join(" ##")}>
          <Button type="primary" className="ml-2" size="small">
            Show
          </Button>
        </Tooltip>
        ,
      </div>

      <div className="mt-4">
        <strong>Learned New Tech:</strong>
        <div className="mt-1 flex flex-wrap gap-2">
          {experience?.learnedNewTech?.map((tech, idx) => (
            <Tag key={idx} color="geekblue">
              {tech}
            </Tag>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ExperienceCard;
