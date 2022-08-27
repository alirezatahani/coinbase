import { Table } from "antd";
import "antd/dist/antd.css";

export const AlertsTable = (alertsData) => {
  const { alerts } = alertsData;
  console.log(alerts);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "By",
      dataIndex: "byWhat",
      key: "byWhat",
    },
    {
      title: "Crossing",
      dataIndex: "crossing",
      key: "crossing",
    },
    {
      title: "Target Value",
      dataIndex: "targetValue",
      key: "targetValue",
    },
    {
      title: "Expiration Time",
      dataIndex: "expirationTime",
      key: "expirationTime",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <a>Delete</a>,
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={alerts} />
    </>
  );
};
