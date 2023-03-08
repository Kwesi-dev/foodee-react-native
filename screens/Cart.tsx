import React, { useState } from "react";
import {
  StyledImage,
  StyledScrollView,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from "../components/styledComponents/StyledComponents";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <StyledScrollView
        className="flex-1 bg-white pt-4 px-4"
        showsVerticalScrollIndicator={false}
      >
        <StatusBar backgroundColor="#ffff" />
        <StyledView className="flex flex-row items-center justify-between mb-3">
          <StyledText className="text-2xl font-bold text-darkText">
            Orders
          </StyledText>
          <StyledTouchableOpacity>
            <StyledText className="text-pink text-xl">Clear all</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
        <StyledView>
          <StyledScrollView className="space-y-4">
            <StyledView
              className="flex flex-row items-center bg-white h-[84px] justify-between px-4 py-2 rounded-[28px]"
              style={{
                elevation: 3,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowColor: "#F2CC8F",
              }}
            >
              <StyledView className="flex flex-row items-center space-x-4">
                <StyledImage source={require("../assets/images/cheezy.png")} />
                <StyledView>
                  <StyledText className="font-bold text-darkText">
                    Mr Cheezy
                  </StyledText>
                  <StyledText className="text-pink">$240</StyledText>
                </StyledView>
              </StyledView>
              <StyledView className="flex flex-row space-x-4 items-center">
                <StyledTouchableOpacity
                  className="h-6 w-6 rounded-full bg-[#F7EDE2] flex items-center justify-center"
                  onPress={() => {
                    if (quantity === 1) {
                      setQuantity(1);
                    } else {
                      setQuantity(quantity - 1);
                    }
                  }}
                ></StyledTouchableOpacity>
                <StyledText className="text-lg">{quantity}</StyledText>
                <StyledTouchableOpacity
                  className="h-6 w-6 rounded-full bg-pink flex items-center justify-center"
                  onPress={() => setQuantity(quantity + 1)}
                >
                  <Ionicons name="add" size={24} color="white" />
                </StyledTouchableOpacity>
              </StyledView>
            </StyledView>
          </StyledScrollView>
        </StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
};

export default Cart;
