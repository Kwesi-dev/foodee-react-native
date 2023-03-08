import React from "react";
import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from "../styledComponents/StyledComponents";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { AntDesign } from "@expo/vector-icons";

const CartHeader = (props) => {
  const statusBarHeight = getStatusBarHeight();

  return (
    <StyledView
      style={{ marginTop: statusBarHeight }}
      className="bg-white px-4 py-4"
    >
      <StyledView className="flex flex-row items-center justify-between mb-6">
        <StyledText className="text-darkText text-3xl font-semibold">
          My Cart
        </StyledText>
        <StyledTouchableOpacity
          className="h-[44px] w-[44px] bg-[#F5CAC3] rounded-[16px] flex items-center justify-center"
          onPress={() => props.navigation.navigate("HomeScreen")}
        >
          <AntDesign name="close" size={24} color="#F28482" />
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView className="flex flex-row items-center justify-center">
        <StyledView className="flex justify-center">
          <StyledText className="mb-1">My Order</StyledText>
          <StyledView className="flex flex-row items-center">
            <StyledView className="w-11 h-11 bg-pink rounded-full mr-2 flex items-center justify-center">
              <StyledText className="text-white text-lg">1</StyledText>
            </StyledView>
            <StyledView className="h-[1px] bg-[#F28482] opacity-[0.25] w-24 mr-2"></StyledView>
          </StyledView>
        </StyledView>
        <StyledView className="flex justify-center">
          <StyledText className="mb-1">Details</StyledText>
          <StyledView className="flex flex-row items-center">
            <StyledView className="w-11 h-11 bg-pink opacity-[0.25] rounded-full mr-2 flex items-center justify-center">
              <StyledText className="text-white text-lg">2</StyledText>
            </StyledView>
            <StyledView className="h-[1px] bg-[#F28482] opacity-[0.25] w-24 mr-2"></StyledView>
          </StyledView>
        </StyledView>
        <StyledView className="flex justify-center">
          <StyledText className="mb-1">Payment</StyledText>
          <StyledView className="w-11 h-11 bg-pink opacity-[0.25] rounded-full mr-2 flex items-center justify-center">
            <StyledText className="text-white text-lg">3</StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default CartHeader;
