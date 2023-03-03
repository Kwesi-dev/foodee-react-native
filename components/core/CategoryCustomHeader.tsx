import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  StyledImage,
  StyledText,
  StyledView,
} from "../styledComponents/StyledComponents";

const CategoryCustomHeader = ({ props }: any) => {
  return (
    <StyledView className="z-[1] h-[330px] bg-pink rounded-b-[28px] relative pt-12 px-4">
      <StyledView className="flex flex-row items-center justify-between">
        <StyledText className="text-white text-3xl font-semibold">
          Mr. Cheezy
        </StyledText>
        <StyledView className="h-[44px] w-[44px] bg-[#F5CAC3] rounded-[16px] flex items-center justify-center">
          <AntDesign name="close" size={24} color="#F28482" />
        </StyledView>
      </StyledView>
      <StyledView className="rounded-full bg-[#F7EDE2] w-[160px] mt-8 py-1">
        <StyledText className="text-center text-pink text-lg">
          Classic Taste
        </StyledText>
      </StyledView>
      <StyledView className="rounded-full bg-[#84A59D] w-[126px] mt-2 py-1">
        <StyledText className="text-center text-white text-lg">
          Bestseller
        </StyledText>
      </StyledView>
      <StyledImage
        source={require("../../assets/images/3dBurger.png")}
        className="absolute right-0 -bottom-10 z-[-1]"
      />
    </StyledView>
  );
};

export default CategoryCustomHeader;
