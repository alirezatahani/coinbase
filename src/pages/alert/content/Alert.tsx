import { useRouter } from "@utils/router";
import { useSelector } from "react-redux";
import { AlertStyle } from "../style/alert_styles";
import React from "react";

export default function Alert() {
  const { selectedCoin } = useSelector((state: any) => state.AlertReducer);

  const { goBack } = useRouter();

  console.log(selectedCoin, "isWOrking!");
  return (
    <AlertStyle>
      Alert Page <button onClick={() => goBack()}>goBack</button>
    </AlertStyle>
  );
}
