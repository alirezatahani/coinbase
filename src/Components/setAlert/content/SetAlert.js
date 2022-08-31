import { useDispatch} from "react-redux";
import { Button, DatePicker, Form, InputNumber, Select } from "antd";
import "antd/dist/antd.css";
import { addToAlerts } from "../../../features/alerts/alertsSlice";

const SetAlert = (props) => {
  const dispatch = useDispatch();
  const { coin, closeModal } = props;

  const config = {
    rules: [
      {
        type: "string",
        required: true,
        message: "Please select field!",
      },
    ],
  };

  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      id: Date.now(),
      uuid: coin.uuid,
      icon: <img src={coin.iconUrl} style={{ width: 40 }} />,
      expirationTime: fieldsValue["expirationTime"]?.format("YYYY-M-D H:m:s"),
    };
    dispatch(addToAlerts(values));
    closeModal();
  };

  return (
    <Form
      initialValues={{ crossing: "crossingUp", byWhat: "value" }}
      fields={[
        {
          name: ["targetValue"],
          value: Number(coin.price).toFixed(6),
        },
        {
          name: ["name"],
          value: coin.name,
        },
      ]}
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      onFinish={onFinish}
    >
      <Form.Item name="name" label="Crypto">
        <Select>
          <Select.Option></Select.Option>
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
      <Button type="danger" onClick={closeModal}>
        Cancel
      </Button>
    </Form>
  );
};

export default SetAlert;
