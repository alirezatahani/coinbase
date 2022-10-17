import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const AlertStyle = styled.div(({ theme }) => ({
  backgroundColor: theme.palette.background.dark,
  textAlign: "center",
  width: 550,
  height: "auto",
  padding: "2rem",
}));
export const FormStyle = styled.div(({}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "3rem",
}));

export const ArrowUpStyle = styled(ArrowUpOutlined)(({ theme }) => ({
  color: theme.palette.success.main,
  marginRight: "2%",
}));
export const ArrowDownStyle = styled(ArrowDownOutlined)(({ theme }) => ({
  color: theme.palette.danger.main,
  marginRight: "2%",
}));

export const TableContent = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  flex: 3,
  textAlign: "center",
  marginLeft: "1rem",
}));

export const ActionBtn = styled.div(({}) => ({
  cursor: "pointer",
  marginLeft: "3rem",
}));

export interface TableContentProps {
  children?: JSX.Element | JSX.Element[] | any;
}

export const CoinsStyle = styled.div(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  marginBottom: 10,
  color: "white",
}));
