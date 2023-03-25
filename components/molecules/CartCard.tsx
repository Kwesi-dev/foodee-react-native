import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyledImage,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from "../styledComponents/StyledComponents";

const CartCard = () => {
  const [quantity, setQuantity] = useState(1);
  return (
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
        <StyledImage source={require("../../assets/images/cheezy.png")} />
        <StyledView>
          <StyledText className="font-bold text-darkText">Mr Cheezy</StyledText>
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
  );
};

export default CartCard;
