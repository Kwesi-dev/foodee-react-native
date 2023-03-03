import React from "react";
import Category from "../components/molecules/Category";
import {
  StyledImage,
  StyledScrollView,
  StyledText,
  StyledTextInput,
  StyledView,
} from "../components/styledComponents/StyledComponents";
import { Ionicons } from "@expo/vector-icons";
import FilterIcon from "../assets/images/Filter.svg";

const categories = [
  {
    title: "Burgers",
    color: "#F6BD60",
    image: require("../assets/images/burger.png"),
  },
  {
    title: "Fries",
    color: "#F5CAC3",
    image: require("../assets/images/fries.png"),
  },
  {
    title: "Drinks",
    color: "#B6D7CF",
    image: require("../assets/images/drink.png"),
  },
  {
    title: "Cakes",
    color: "#B6D7CF",
    image: require("../assets/images/drink.png"),
  },
];
const Home = ({ navigation }) => {
  return (
    <StyledView className="h-full bg-[#ffff]">
      <StyledScrollView className="h-full" showsVerticalScrollIndicator={false}>
        <StyledView className="mt-8">
          <StyledView className="flex flex-row justify-between mb-4 px-4">
            <StyledView className="w-[80%] bg-[#F5F5F5] pl-4 space-x-2 rounded-[16px] h-[44px] flex flex-row items-center">
              <Ionicons name="search" size={18} color="#3D405B" />
              <StyledTextInput
                placeholder="Search ..."
                className="text-darkText"
              />
            </StyledView>
            <StyledView className="w-[44px] h-[44px] bg-pink rounded-[16px] flex flex-row items-center justify-center">
              <FilterIcon width={24} height={24} />
            </StyledView>
          </StyledView>
          <StyledView>
            <StyledText className="text-3xl text-darkText px-4">
              Today&apos;s Menu
            </StyledText>
            <StyledScrollView
              className="relative"
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <StyledView className="h-[200px] pt-8">
                <StyledView className="relative w-[360px] ml-4 pl-4 bg-[#84A59D] h-[128px] rounded-[28px] flex justify-center">
                  <StyledText className="text-white font-bold text-2xl">
                    Free Donut!
                  </StyledText>
                  <StyledText className="text-[#F4F1DE]">
                    For Orders Over $20
                  </StyledText>
                  <StyledImage
                    source={require("../assets/images/cake.png")}
                    className="absolute right-4 -top-8"
                  />
                </StyledView>
              </StyledView>
              <StyledView className="h-[200px] pt-8">
                <StyledView className="relative w-[360px] ml-4 pl-4 bg-[#F6BD60] h-[128px] rounded-[28px] flex justify-center">
                  <StyledText className="text-white font-bold text-2xl">
                    Free Donut!
                  </StyledText>
                  <StyledText className="text-[#F4F1DE]">
                    For Orders Over $20
                  </StyledText>
                  <StyledImage
                    source={require("../assets/images/cake.png")}
                    className="absolute right-4 -top-8"
                  />
                </StyledView>
              </StyledView>
            </StyledScrollView>
            <StyledView>
              <StyledScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {categories.map((cat: any) => (
                  <Category
                    color={cat.color}
                    title={cat.title}
                    key={cat.title}
                    image={cat.image}
                  />
                ))}
              </StyledScrollView>
            </StyledView>
            <StyledView className="px-4 mt-4">
              <StyledText className="text-3xl text-darkText mb-3">
                Best Offers 💕
              </StyledText>
              <StyledScrollView showsVerticalScrollIndicator={false}>
                <StyledView
                  className="w-full h-[116px] rounded-[28px] mb-4 flex flex-row items-center p-2 bg-white"
                  style={{
                    shadowColor: "rgb(242,204,143)",
                    shadowOpacity: 0.4,
                    shadowOffset: { width: -2, height: 20 },
                    shadowRadius: 4,
                    elevation: 2,
                  }}
                >
                  <StyledImage
                    source={require("../assets/images/hotdog.png")}
                    className="mr-6"
                  />
                  <StyledView>
                    <StyledText className="text-2xl text-darkText">
                      Frenchdog
                    </StyledText>
                    <StyledText className="text-darkText">
                      Tasty&Spicy 🌶🌶🌶
                    </StyledText>
                  </StyledView>
                </StyledView>
                <StyledView
                  className="w-full h-[116px] rounded-[28px] mb-4 flex flex-row items-center p-2 bg-white"
                  style={{
                    shadowColor: "rgb(242,204,143)",
                    shadowOpacity: 0.4,
                    shadowOffset: { width: -2, height: 20 },
                    shadowRadius: 4,
                    elevation: 2,
                  }}
                >
                  <StyledImage
                    source={require("../assets/images/hotdog.png")}
                    className="mr-6"
                  />
                  <StyledView>
                    <StyledText className="text-2xl text-darkText">
                      Frenchdog
                    </StyledText>
                    <StyledText className="text-darkText">
                      Tasty&Spicy 🌶🌶🌶
                    </StyledText>
                  </StyledView>
                </StyledView>
                <StyledView
                  className="w-full h-[116px] rounded-[28px] mb-4 flex flex-row items-center p-2 bg-white"
                  style={{
                    shadowColor: "rgb(242,204,143)",
                    shadowOpacity: 0.4,
                    shadowOffset: { width: -2, height: 20 },
                    shadowRadius: 4,
                    elevation: 2,
                  }}
                >
                  <StyledImage
                    source={require("../assets/images/hotdog.png")}
                    className="mr-6"
                  />
                  <StyledView>
                    <StyledText className="text-2xl text-darkText">
                      Frenchdog
                    </StyledText>
                    <StyledText className="text-darkText">
                      Tasty&Spicy 🌶🌶🌶
                    </StyledText>
                  </StyledView>
                </StyledView>
              </StyledScrollView>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledScrollView>
    </StyledView>
  );
};

export default Home;
