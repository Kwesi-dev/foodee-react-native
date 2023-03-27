import React, { useEffect, useState } from "react";
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
import CartCard from "../components/molecules/CartCard";

const Cart = ({ navigation }) => {
  const user = false;
  useEffect(() => {
    if (!user) {
      navigation.navigate("Login");
    }
  }, [user]);
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
          <StyledScrollView
            className="space-y-4"
            showsVerticalScrollIndicator={false}
          >
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </StyledScrollView>
        </StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
};

export default Cart;
