import { IPersonalInfo } from "@/types/home.type";
import {
  DownloadOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Card, Descriptions, Divider, Typography } from "antd/lib";
import EditAddressInfo from "./EditAddressInfo";
import EditPersonalInfo from "./EditPersonalInfo";
import Logo from "./Logo";

type Props = {
  data: IPersonalInfo;
};
const { Title, Paragraph, Link } = Typography;

const Personals = ({ data }: Props) => {
  return (
    <Card className="rounded-2xl shadow-md">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Logo id={data?.id} imageUrl={data?.logo} />
        <div>
          <Title level={3} className="mb-0 flex items-center gap-2">
            <span>{data.name}</span>
            <EditPersonalInfo data={data} />
          </Title>
          <Paragraph className="text-gray-500">{data.position}</Paragraph>
          <div className="flex gap-4 mt-2 text-gray-600">
            <span>
              <MailOutlined /> {data.email}
            </span>
            <span>
              <PhoneOutlined /> {data.phoneNumber}
            </span>
          </div>
        </div>
      </div>
      <Divider />
      <Descriptions column={1} bordered size="small">
        <Descriptions.Item label="Address">
          <EnvironmentOutlined /> {data.address}
        </Descriptions.Item>
        <Descriptions.Item label="Google Maps">
          <Link href={data.addressMapLocation} target="_blank">
            View on Map
          </Link>
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {data.description}
        </Descriptions.Item>
        <Descriptions.Item label="Resume">
          <Link href={data.resumeLink} target="_blank">
            <DownloadOutlined /> Download Resume
          </Link>
        </Descriptions.Item>
      </Descriptions>
      <EditAddressInfo data={data} />
    </Card>
  );
};

export default Personals;
