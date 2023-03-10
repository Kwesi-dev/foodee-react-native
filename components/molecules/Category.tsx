import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import {
  StyledImage,
  StyledText,
  StyledView,
} from "../styledComponents/StyledComponents";

type catTypes = {
  color: string;
  title: string;
  image: any;
  onPress: () => void;
};
const Category = ({ color, title, image, onPress }: catTypes) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <StyledView
        className="relative w-[104px] h-[128px] rounded-[28px] ml-4 flex items-center pt-3"
        style={{ backgroundColor: color }}
      >
        <StyledText className="text-darkText mb-4">{title}</StyledText>
        <StyledImage
          source={image}
          className="absolute right-0 bottom-0 rounded-[28px]"
        />
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

export default Category;
