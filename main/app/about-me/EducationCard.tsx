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
      bordered
      className="shadow-md hover:shadow-lg transition-shadow duration-300"
      title={
        <div className="text-md lg:text-lg font-semibold flex items-center gap-2">
          <ReadOutlined className="text-blue-600" />
          <span>
            {edu.degree} in {edu.field_of_study}
          </span>
        </div>
      }
    >
      <div className="space-y-2 text-gray-800">
        <div className="flex items-center gap-2">
          <HomeOutlined className="text-gray-500" />
          <Text className="text-sm lg:text-lg font-semibold">
            {edu.institution}
          </Text>
        </div>

        {edu.location && (
          <div className="flex items-center gap-2">
            <EnvironmentOutlined className="text-gray-500" />
            <Text>{edu.location}</Text>
          </div>
        )}

        <div className="flex items-center gap-2">
          <CalendarOutlined className="text-gray-500" />
          <Text>
            {formatDate(edu.start_date)} – {formatDate(edu.end_date)}
          </Text>
        </div>

        {edu.is_current && <Tag color="blue">Currently Studying</Tag>}

        {edu.description && (
          <div className="pt-2 text-gray-700">
            <Text>{edu.description}</Text>
          </div>
        )}
      </div>
    </Card>
  );
};

export default EducationCard;
