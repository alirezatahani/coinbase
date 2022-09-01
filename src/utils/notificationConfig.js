import { notification } from "antd";

export const showNotification = (type, coin) => {
  switch (type) {
    case "success":
      notification[type]({
        message: `${coin.name} added`,
        duration: 1,
      });
      break;
    case "info":
      notification[type]({
        message: `${coin.name} was deleted from alerts!`,
        duration: 1,
      });
      break;
    case "warning":
      notification[type]({
        message: `${coin.name} ${coin.crossing} your target(${coin.targetValue})`,
        duration: null,
      });
      break;
    case "error":
      notification[type]({
        message: `${coin.name} was deleted from favorites`,
        duration: 1,
      });
      break;

    default:
      break;
  }
};
