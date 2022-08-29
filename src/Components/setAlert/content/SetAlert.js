import { Button, DatePicker, Form, InputNumber, Select } from "antd";
import { createRef, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { AlertsTable } from "./AlertsTable";
import { GetTimeAsNumber } from "../utils/getTime";
import { useDispatch, useSelector } from "react-redux";
import { addToAlerts } from "../../../features/alerts/alertsSlice";

export const SetAlert = () => {
  const [cryptoValue, setCryptoValue] = useState(0);
  const alerts = useSelector((state) => state.alerts.alerts);
  const { loading, error, coins } = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  const options = coins && coins.data && coins.data.coins;
  const formRef = createRef();

  const config = {
    rules: [
      {
        type: "string",
        required: true,
        message: "Please select field!",
      },
    ],
  };

  const onChange = (value) => {
    const selectedCrypto = options.filter((item) => {
      return item.name === value;
    });
    let fixedValue = Number(selectedCrypto[0].price).toFixed(5);
    setCryptoValue(fixedValue);
  };
  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      id: Date.now(),
      expirationTime: fieldsValue["expirationTime"]?.format("YYYY-M-D H:m:s"),
    };
    dispatch(addToAlerts(values));
    formRef.current.resetFields();
    setCryptoValue(0);
  };

  // function checkAlertAuth() {
  //   alerts.map((item, index) => {
  //     const findCoin = data.data.coins.filter((coin) => {
  //       return coin.name === item.name;
  //     });
  //     let alertTime = GetTimeAsNumber(item.expirationTime);
  //     let nowTime = GetTimeAsNumber();

  //     console.log(alertTime > nowTime);
  //     if (nowTime > alertTime) {
  //       dispatch(addToAlerts(item));
  //     } else {
  //       console.log(findCoin[0].price, item.targetValue);
  //       switch (item.crossing) {
  //         case "crossingUp":
  //           if (findCoin[0].price >= item.targetValue) {
  //             alert(
  //               `${findCoin[0].name} price crossing up ${item.targetValue}`
  //             );
  //             dispatch(addToAlerts(item));
  //           }
  //           break;
  //         case "crossingDown":
  //           if (findCoin[0].price <= item.targetValue) {
  //             alert(
  //               `${findCoin[0].name} price crossing up ${item.targetValue}`
  //             );
  //             dispatch(addToAlerts(item));
  //           }
  //           break;

  //         default:
  //           break;
  //       }
  //     }
  //   });
  // }

  // useEffect(() => {
  //   alerts.length && checkAlertAuth();
  // }, [alerts]);

  return (
    <>
      <Form
        initialValues={{ crossing: "crossingUp", byWhat: "value" }}
        fields={[
          {
            name: ["targetValue"],
            value: cryptoValue,
          },
        ]}
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        onFinish={onFinish}
        ref={formRef}
      >
        <Form.Item name="name" label="Crypto" {...config}>
          <Select
            showSearch
            placeholder="Select a Crypto"
            onChange={onChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {options &&
              options.map((item) => {
                return (
                  <Select.Option value={item.name} key={item.name}>
                    {item.name}
                  </Select.Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item name="targetValue" label="Price" {...config}>
          <InputNumber
            style={{
              width: "100%",
            }}
            min="0"
            step="0.00001"
            stringMode
          />
        </Form.Item>
        <Form.Item name="crossing" {...config}>
          <Select>
            <Select.Option value="crossingUp">Crossing up</Select.Option>
            <Select.Option value="crossingDown">Crossing down</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="byWhat" {...config}>
          <Select>
            <Select.Option value="value">value</Select.Option>
            <Select.Option value="volume">volume</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="expirationTime" label="Expiration Time">
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Create alert
        </Button>
      </Form>

      {alerts.length > 0 ? <AlertsTable /> : <p>There is no alert !</p>}
    </>
  );
};