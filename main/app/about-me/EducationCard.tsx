"use client";

import { IEducation } from "../types/education.type";
import { Card, Tag, Typography } from "antd";
import {
  HomeOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import moment from "moment";

const { Text } = Typography;

type Props = {
  edu: IEducation;
};

const EducationCard = ({ edu }: Props) => {
  const formatDate = (date?: string) =>
    date ? moment(date).format("MMM YYYY") : "Present";

  return (
    <Card
      bordered={false}
      className="shadow-md hover:shadow-lg border border-gray-500  transition-shadow duration-300 bg-white dark:bg-gray-800"
      title={
        <div className="text-md lg:text-lg font-semibold flex items-center gap-2">
          <ReadOutlined className="text-blue-600" />
          <span className="text-gray-800 dark:text-gray-200">
            {edu.degree} in {edu.field_of_study}
          </span>
        </div>
      }
      styles={{ header: { borderBottom: "1px solid gray" } }}
    >
      <div className="space-y-2 text-gray-800">
        <div className="flex items-center gap-2">
          <HomeOutlined className="text-gray-500 dark:text-gray-200" />
          <Text className="text-sm lg:text-lg font-semibold text-gray-800 dark:text-gray-200">
            {edu.institution}
          </Text>
        </div>

        {edu.location && (
          <div className="flex items-center gap-2">
            <EnvironmentOutlined className="text-gray-500  dark:text-gray-200" />
            <Text className="text-gray-700 dark:text-gray-200">
              {edu.location}
            </Text>
          </div>
        )}

        <div className="flex items-center gap-2">
          <CalendarOutlined className="text-gray-500" />
          <Text className="text-gray-700 dark:text-gray-200">
            {formatDate(edu.start_date)} – {formatDate(edu.end_date)}
          </Text>
        </div>

        {edu.is_current && <Tag color="blue">Currently Studying</Tag>}

        {edu.description && (
          <div>
            <Text className="text-gray-600 dark:text-gray-200">
              {edu.description}
            </Text>
          </div>
        )}
      </div>
    </Card>
  );
};

export default EducationCard;
