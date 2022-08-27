import { Button, DatePicker, Form, InputNumber, Select } from "antd";
import { createRef, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { AlertsTable } from "./AlertsTable";
import { GetTimeAsNumber } from "../utils/getTime";

export const SetAlert = (props) => {
  const [alertCondition, setAlertCondition] = useState([]);
  const [cryptoValue, setCryptoValue] = useState(0);
  const { data } = props;
  const options = data && data.data.coins;
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
      expirationTime: fieldsValue["expirationTime"].format("YYYY-M-D H:m:s"),
    };
    setAlertCondition([...alertCondition, values]);
    formRef.current.resetFields();
    setCryptoValue(0);
  };


  function deleteAlert(index) {
    const copyAlertCondition = [...alertCondition];
    copyAlertCondition.splice(index, 1);
    setAlertCondition(copyAlertCondition);
  }

  function checkAlertAuth() {
    alertCondition.map((item, index) => {
      const findCoin = data.data.coins.filter((coin) => {
        return coin.name === item.name;
      });
      let alertTime = GetTimeAsNumber(item.expirationTime);
      let nowTime = GetTimeAsNumber();

      console.log(alertTime > nowTime);
      if (nowTime > alertTime) {
        deleteAlert(index);
      } else {
        console.log(findCoin[0].price, item.targetValue);
        switch (item.crossing) {
          case "crossingUp":
            if (findCoin[0].price >= item.targetValue) {
              alert(
                `${findCoin[0].name} price crossing up ${item.targetValue}`
              );
              deleteAlert(index);
            }
            break;
          case "crossingDown":
            if (findCoin[0].price <= item.targetValue) {
              alert(
                `${findCoin[0].name} price crossing up ${item.targetValue}`
              );
              deleteAlert(index);
            }
            break;

          default:
            break;
        }
      }
    });
  }

  useEffect(() => {
    alertCondition.length && checkAlertAuth();
  }, [data]);

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
            {data &&
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

      {alertCondition.length > 0 ? (
        <AlertsTable alerts={alertCondition} />
      ) : (
        <p>There is no alert !</p>
      )}
    </>
  );
};
