import { Table } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { addToAlerts } from "../../../features/alerts/alertsSlice";

export const AlertsTable = () => {
  const alerts = useSelector((state) => state.alerts.alerts);
  const dispatch = useDispatch();
  const deleteHandler = (alert) => {
    dispatch(addToAlerts(alert));
  };
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
      render: (e) => <a onClick={() => deleteHandler(e)}>Delete</a>,
    },
  ];
  return (
    <>
      {alerts.length ? (
        <Table columns={columns} dataSource={alerts} />
      ) : (
        <p>There is not any alerts !</p>
      )}
    </>
  );
};
