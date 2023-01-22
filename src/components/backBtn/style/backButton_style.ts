import styled from "styled-components";

export const BackBtnContainer = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: ".1rem",
  color: theme.palette.common.white,
  cursor: "pointer",
  fontSize: "15px",
  marginBottom: "1rem",
  width: "max-content",
  border: `1px solid ${theme.palette.common.white}`,
  padding: "0.2rem 0.4rem",
  borderRadius: "5px",
}));
