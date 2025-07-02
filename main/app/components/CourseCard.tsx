import { Card, Button, Tag } from "antd/lib";
import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { ICourse } from "../types/course.type";
import Image from "next/image";
import Link from "next/link";

type Props = {
  course: ICourse;
};

const CourseCard = ({ course }: Props) => {
  return (
    <Card
      hoverable
      className="w-full rounded-2xl shadow-lg overflow-hidden dark:bg-gray-900"
      cover={
        <div className="relative h-48 w-full">
          <Image
            src={course.image}
            alt={course.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-2xl"
          />
        </div>
      }
    >
      <div className="space-y-2">
        <h3 className="text-xl font-semibold dark:text-white">{course.name}</h3>
        <Tag color="blue" className="text-sm">
          {course.institute}
        </Tag>

        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
          <ClockCircleOutlined />
          <span>{course.duration}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
          <CalendarOutlined />
          <p className="text-sm font-semibold">
            <span>
              {course.startDate.slice(0, 10).split("-").reverse().join("-")}
            </span>{" "}
            |
            <span className="ml-1">
              {course.endDate
                ? course.endDate.slice(0, 10).split("-").reverse().join("-")
                : "Present"}
            </span>
          </p>
        </div>

        <Link href={`/courses/${course?.id}?name=${course?.name}`}>
          <Button type="primary" block className="mt-3 rounded-lg">
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default CourseCard;
