import React from "react";
import { StyledText, StyledView } from "../styledComponents/StyledComponents";
import { getStatusBarHeight } from "react-native-status-bar-height";

const CartHeader = (props) => {
  const statusBarHeight = getStatusBarHeight() + 10;

  return (
    <StyledView style={{ marginTop: statusBarHeight }}>
      <StyledText>Header</StyledText>
    </StyledView>
  );
};

export default CartHeader;
