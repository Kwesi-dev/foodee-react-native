import React from "react";
import Flavour from "../components/molecules/Flavour";
import {
  StyledScrollView,
  StyledText,
  StyledView,
} from "../components/styledComponents/StyledComponents";

const flavors = [
  {
    name: "cheddar",
    imageUrl: require("../assets/images/chedder.png"),
  },
  {
    name: "bacon",
    imageUrl: require("../assets/images/bacon.png"),
  },
  {
    name: "onion",
    imageUrl: require("../assets/images/onion.png"),
  },
];
const CategoryScreen = ({ route, navigation }) => {
  const { title } = route.params;
  return (
    <StyledScrollView>
      <StyledView className="bg-white flex-1 pt-10 px-4 pb-10">
        <StyledText className="text-2xl font-medium text-darkText mb-4">
          Add More Flavor 🤩
        </StyledText>
        <StyledView className="flex flex-row items-center justify-between">
          {flavors.map((flavor) => (
            <Flavour flavor={flavor} key={flavor.name} />
          ))}
        </StyledView>
        <StyledView className="flex flex-row justify-between mt-4">
          <StyledText className="text-darkText text-lg font-medium">
            Nutrition Facts
          </StyledText>
          <StyledText className="text-darkText text-lg font-medium">
            650 cal
          </StyledText>
        </StyledView>
        <StyledView className="flex flex-row justify-around mt-2">
          <StyledView className="flex items-center">
            <StyledText className="text-darkText text-lg">35 g</StyledText>
            <StyledText className="text-darkText text-lg">
              Fat (45% DV)
            </StyledText>
          </StyledView>
          <StyledView className="flex items-center">
            <StyledText className="text-darkText text-lg">35 g</StyledText>
            <StyledText className="text-darkText text-lg">
              Fat (45% DV)
            </StyledText>
          </StyledView>
          <StyledView className="flex items-center">
            <StyledText className="text-darkText text-lg">35 g</StyledText>
            <StyledText className="text-darkText text-lg">
              Fat (45% DV)
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledScrollView>
  );
};

export default CategoryScreen;
