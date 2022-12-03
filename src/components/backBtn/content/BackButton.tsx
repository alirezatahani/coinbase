import * as React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "@utils/router";
import { BackBtnContainer } from "../style/backButton_style";

const BackButton = () => {
  const { goBack } = useRouter();
  return (
    <BackBtnContainer onClick={() => goBack()}>
      <ArrowLeftOutlined style={{color:"red"}} />
      <span>GoBack</span>
    </BackBtnContainer>
  );
};

export default BackButton;
