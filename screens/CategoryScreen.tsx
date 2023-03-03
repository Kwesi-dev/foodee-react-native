import React from "react";
import {
  StyledText,
  StyledView,
} from "../components/styledComponents/StyledComponents";

const CategoryScreen = ({ route, navigation }) => {
  const { title } = route.params;
  return (
    <StyledView>
      <StyledText>cateory</StyledText>
      <StyledText>{title}</StyledText>
    </StyledView>
  );
};

export default CategoryScreen;
