import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import "antd/dist/antd.css";
import { removeFromAlerts } from "../../../features/alerts/alertsSlice";
import { showNotification } from "../../../utils/notificationConfig";

export const AlertsTable = () => {
  const alerts = useSelector((state) => state.alerts.alerts);
  const dispatch = useDispatch();

  const deleteHandler = (alert) => {
    dispatch(removeFromAlerts(alert));
    showNotification("info",alert)
  };

  const columns = [
    {
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
    },
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
