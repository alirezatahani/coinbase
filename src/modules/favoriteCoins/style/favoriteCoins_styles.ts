import styled from "styled-components";

export const EmptyText = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  padding:"2rem 0",
  color:theme.palette.text.color
}));
