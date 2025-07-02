import { useDeleteEducationMutation } from "@/features/education.api";
import { IEducation } from "@/types/education.type";
import { EditOutlined } from "@ant-design/icons";
import { Button, Card, Tooltip } from "antd";
import Link from "next/link";
import DeleteCardItemModal from "../common/DeleteCardItemModal";

type Props = {
  education: IEducation;
};

const EducationCard = ({ education }: Props) => {
  return (
    <Card
      className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
      title={
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <p className="text-sm text-gray-500">{education.field_of_study}</p>
          </div>
          <div className="flex gap-2">
            <Tooltip title="Edit">
              <Link href={`/educations/edit/${education?.id}`}>
                <Button type="text" icon={<EditOutlined />} />
              </Link>
            </Tooltip>
            <DeleteCardItemModal
              itemName={education?.degree}
              itemCategory="education"
              itemId={education?.id}
              useReduxMutation={useDeleteEducationMutation}
            />
          </div>
        </div>
      }
    >
      <div className="space-y-1">
        <p className="text-sm">
          <span className="font-medium">Institution:</span>{" "}
          {education.institution}
        </p>
        {education.location && (
          <p className="text-sm text-gray-600">📍 {education.location}</p>
        )}
        <p className="text-sm text-gray-600">
          📅 {education.start_date} -{" "}
          {education.is_current ? "Present" : education.end_date || "N/A"}
        </p>
        {education.grade && (
          <p className="text-sm">
            <span className="font-medium">Grade:</span> {education.grade}
          </p>
        )}
        {education.description && (
          <p className="text-sm text-gray-700 mt-2">{education.description}</p>
        )}
      </div>
    </Card>
  );
};

export default EducationCard;
