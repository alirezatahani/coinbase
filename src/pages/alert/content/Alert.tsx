import { useRouter } from "@utils/router";
import { AlertStyle } from "../style/alert_styles";
import React from "react";

export default function Alert() {
  const { goBack } = useRouter();
  return (
    <AlertStyle>
      Alert Page <button onClick={() => goBack()}>goBack</button>
    </AlertStyle>
  );
}
