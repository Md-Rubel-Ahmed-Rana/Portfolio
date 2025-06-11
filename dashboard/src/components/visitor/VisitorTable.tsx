/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IVisitor } from "@/types/visitor.type";
import { SearchOutlined } from "@ant-design/icons";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterDropdownProps } from "antd/es/table/interface";
import { Button, Input, Space, Table, Tag } from "antd/lib";
import { useRef, useState } from "react";

type Props = {
  visitors: IVisitor[];
};

type DataIndex = keyof IVisitor | "location";

const VisitorTable = ({ visitors }: Props) => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<any>(null);

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<IVisitor> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: FilterDropdownProps) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as any, confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as any, confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters!)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      String(getValueFromRecord(record, dataIndex))
        .toLowerCase()
        .includes(String(value).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? <span>{text}</span> : text,
  });

  const handleSearch = (
    selectedKeys: string[],
    confirm: () => void,
    dataIndex: string
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getValueFromRecord = (record: IVisitor, key: string) => {
    return (record as any)[key];
  };

  const columns: ColumnsType<IVisitor> = [
    {
      title: "Visitor ID",
      dataIndex: "visitorId",
      key: "visitorId",
      render: (text: string) => <Tag color="blue">{text.slice(0, 4)}</Tag>,
      ...getColumnSearchProps("visitorId"),
    },
    {
      title: "IP Address",
      dataIndex: "ip",
      key: "ip",
      ...getColumnSearchProps("ip"),
    },
    {
      title: "Visited Path",
      dataIndex: "path",
      key: "path",
      render: (text) => <Tag color="geekblue">{text}</Tag>,
      ...getColumnSearchProps("path"),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: (text) => <span>{text}</span>,
      ...getColumnSearchProps("location"),
    },
    {
      title: "Visited At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: string) => new Date(date).toLocaleString(),
    },
  ];

  return (
    <Table
      dataSource={visitors}
      columns={columns}
      rowKey="id"
      pagination={{ pageSize: 10 }}
      bordered
    />
  );
};

export default VisitorTable;
