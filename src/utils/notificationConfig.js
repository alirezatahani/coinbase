import { notification } from "antd";

export const showNotification = (type, coin) => {
    switch (type) {
      case "success":
        notification[type]({
          message: `${coin.name} added`,
          duration: 2,
        });
        break;
      case "info":
        notification[type]({
          message: `${coin.name} was deleted from alerts!`,
          duration: 2,
        });
        break;
      case "warning":
        notification[type]({
          message: `${coin.name} ${coin.crossing} your target(${coin.targetValue})`,
          duration: null,
        });
        break;
  
      default:
        break;
    }
  };