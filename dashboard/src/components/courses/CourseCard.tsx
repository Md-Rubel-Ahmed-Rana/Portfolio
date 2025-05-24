import { useDeleteCourseMutation } from "@/features/course.api";
import { ICourse } from "@/types/course.type";
import { EditFilled } from "@ant-design/icons";
import { Card, Descriptions } from "antd";
import { Button, Tooltip } from "antd/lib";
import dayjs from "dayjs";
import Link from "next/link";
import DeleteCardItemModal from "../common/DeleteCardItemModal";

type Props = {
  course: ICourse;
};

const CourseCard = ({ course }: Props) => {
  return (
    <Card
      title={course?.name}
      className="shadow-md rounded-2xl"
      actions={[
        <Link
          key={"edit"}
          href={`/course/edit/${course?.id}?name=${course?.name}&institute=${
            course.institute
          }&details=${course?.courseDetails?.join(", ")}`}
        >
          <Tooltip title="Edit course">
            <Button type="text" icon={<EditFilled />} />
          </Tooltip>
        </Link>,
        <DeleteCardItemModal
          key={"delete"}
          itemId={course?.id}
          itemName={course?.name}
          itemCategory="course"
          useReduxMutation={useDeleteCourseMutation}
        />,
      ]}
    >
      <Descriptions
        bordered
        column={1}
        size="middle"
        labelStyle={{ fontWeight: "bold", width: "30%" }}
      >
        <Descriptions.Item label="Course duration">
          <span>{dayjs(course?.startDate).format("MMMM D, YYYY")}</span>
          <span> -</span>
          <span> {dayjs(course?.endDate).format("MMMM D, YYYY")}</span>
        </Descriptions.Item>
        <Descriptions.Item label="Institute">
          {course?.institute}
        </Descriptions.Item>
        <Descriptions.Item label="Changes made: ">
          <span>
            Created: {dayjs(course?.createdAt).format("MMMM D, YYYY h:mm A")}
          </span>
          <strong className="mx-2">And</strong>
          <span>
            Updated: {dayjs(course?.updatedAt).format("MMMM D, YYYY h:mm A")}
          </span>
        </Descriptions.Item>

        <Descriptions.Item label="Course Details">
          <ul className="list-disc pl-4">
            {course?.courseDetails?.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default CourseCard;
