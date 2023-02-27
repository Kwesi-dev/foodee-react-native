import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  StyledImage,
  StyledText,
  StyledView,
} from "../styledComponents/StyledComponents";

const HomeHeader = (props) => {
  const statusBarHeight = getStatusBarHeight() + 10;
  return (
    <StyledView className="bg-[#ffff]">
      <StyledView
        className="h-[88px] rounded-[28px] bg-[#FFFFF2] mx-4 flex flex-row items-center px-3"
        style={{
          marginTop: statusBarHeight,
          shadowColor: "rgba(214,211,192,)",
          shadowOpacity: 0.4,
          shadowRadius: 3,
          elevation: 2,
        }}
      >
        <StyledView className="flex flex-row items-center">
          <StyledImage
            source={require("../../assets/images/profile.png")}
            className="w-18 h-18 rounded-full mt-2 mr-6"
          />
          <StyledView>
            <StyledText className="text-base text-[#3D405B]">
              Welcome back Sam,
            </StyledText>
            <StyledText className="text-base text-[#3D405B]">
              How hungary are you?
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default HomeHeader;
