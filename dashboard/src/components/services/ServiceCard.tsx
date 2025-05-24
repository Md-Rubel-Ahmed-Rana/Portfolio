/* eslint-disable @next/next/no-img-element */
import { useDeleteServiceMutation } from "@/features/service.api";
import { IService } from "@/types/service.type";
import { EditOutlined } from "@ant-design/icons";
import { Card } from "antd/lib";
import Link from "next/link";
import React from "react";
import DeleteCardItemModal from "../common/DeleteCardItemModal";

const { Meta } = Card;

type ServiceCardProps = {
  service: IService;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
}: ServiceCardProps) => (
  <Card
    className="shadow-md rounded-lg overflow-hidden"
    cover={
      <img
        className="w-full h-[300px]"
        alt={service?.image || "service image"}
        src={service?.image}
      />
    }
    actions={[
      <Link
        href={`/service/edit/${service?.id}?name=${service?.name}&description=${service?.description}`}
        key="edit service"
      >
        <EditOutlined title="Edit service" />,
      </Link>,
      <DeleteCardItemModal
        key={"delete"}
        itemId={service?.id}
        itemName={service?.name}
        itemCategory="service"
        useReduxMutation={useDeleteServiceMutation}
      />,
    ]}
  >
    <Meta
      title={service?.name}
      description={
        <div>
          <span title={service?.description}>
            {service?.description.length > 150
              ? `${service?.description?.slice(0, 150)}...`
              : service?.description}
          </span>
          <div className="flex justify-between items-center mt-2">
            <p>
              Created At:{" "}
              {new Date(service?.createdAt || new Date()).toLocaleDateString()}
            </p>
            <p>
              Updated At:{" "}
              {new Date(service?.updatedAt || new Date()).toLocaleDateString()}
            </p>
          </div>
        </div>
      }
    />
  </Card>
);

export default ServiceCard;
