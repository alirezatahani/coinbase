import styled from "styled-components";

export const CoinNegetiveChange = styled.p(({ theme }) => ({
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.success[600],
    borderBottom: `1px solid ${theme.palette.success[400]}`,
    borderRadius: 4,
    flex: 1,
  }));
  
  export const CoinPositiveChange = styled.p(({ theme }) => ({
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.danger[600],
    borderBottom: `1px solid ${theme.palette.danger[400]}`,
    borderRadius: 4,
    flex: 1,
  }));