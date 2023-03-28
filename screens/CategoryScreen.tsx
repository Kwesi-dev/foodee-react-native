import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Flavour from "../components/molecules/Flavour";
import {
  StyledScrollView,
  StyledText,
  StyledTouchableOpacity,
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
  const [quantity, setQuantity] = useState(1);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <StatusBar backgroundColor="#F28482" />
      <StyledView className="relative px-4 bg-white">
        <StyledScrollView
          showsVerticalScrollIndicator={false}
          className="mb-20"
        >
          <StyledView className="bg-white flex-1 pt-10 pb-10">
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
        <StyledView
          className="w-full h-[76px] p-2 space-x-2 self-center rounded-[16px] bg-white absolute bottom-2 flex flex-row"
          style={{
            elevation: 2,
            shadowColor: "rgba(214,211,192,)",
            shadowOpacity: 0.4,
            shadowRadius: 3,
          }}
        >
          <StyledView className="flex-[1] flex flex-row space-x-4 items-center justify-center border border-pink rounded-[20px]">
            <StyledTouchableOpacity
              className="h-6 w-6 rounded-full bg-[#F7EDE2] flex items-center justify-center"
              onPress={() => {
                if (quantity === 1) {
                  setQuantity(1);
                } else {
                  setQuantity(quantity - 1);
                }
              }}
            >
              <Ionicons name="remove" size={24} color="white" />
            </StyledTouchableOpacity>
            <StyledText className="text-lg">{quantity}</StyledText>
            <StyledTouchableOpacity
              className="h-6 w-6 rounded-full bg-pink flex items-center justify-center"
              onPress={() => setQuantity(quantity + 1)}
            >
              <Ionicons name="add" size={24} color="white" />
            </StyledTouchableOpacity>
          </StyledView>
          <StyledView className="flex-[1] flex items-center justify-center bg-pink rounded-[20px]">
            <StyledText className="text-white font-semibold text-lg leading">
              Add to Cart
            </StyledText>
            <StyledText className="text-white font-semibold text-lg">
              ${quantity * 36}
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
    </SafeAreaView>
  );
};

export default CategoryScreen;
