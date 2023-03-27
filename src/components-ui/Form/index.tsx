import { memo, ReactNode } from "react";
import styled from "@emotion/styled";

// #region ::: STYLED

const StyledContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  maxWidth: "400px",
  height: "150px",
});

// #endregion

interface Props {
  children: ReactNode;
}

export const UIForm = memo(({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
});
