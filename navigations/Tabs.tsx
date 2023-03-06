import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import HomeHeader from "../components/core/HomeHeader";
import {
  StyledText,
  StyledView,
} from "../components/styledComponents/StyledComponents";
import { Fontisto, SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import Location from "../screens/Location";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import CartHeader from "../components/core/CartHeader";
const Tab = createBottomTabNavigator();
type iconTypes = {
  focused: boolean;
};
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          height: 80,
          marginHorizontal: 20,
          borderRadius: 20,
          paddingHorizontal: 20,
        },
      }}
    >
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          header: (props) => <HomeHeader {...props} />,
          tabBarIcon: ({ focused }: iconTypes): any => (
            <StyledView className="flex items-center space-y-1">
              <Fontisto
                name="home"
                size={24}
                color={focused ? "#F28482" : "black"}
              />
              <StyledText
                className={`${focused ? "text-pink" : "text-darkText"} `}
              >
                Home
              </StyledText>
            </StyledView>
          ),
        }}
      />
      <Tab.Screen
        component={Location}
        name="Location"
        options={{
          tabBarIcon: ({ focused }: iconTypes): any => (
            <StyledView className="flex items-center space-y-1">
              <SimpleLineIcons
                name="location-pin"
                size={24}
                color={focused ? "#F28482" : "black"}
              />
              <StyledText
                className={`${focused ? "text-pink" : "text-darkText"} `}
              >
                Location
              </StyledText>
            </StyledView>
          ),
        }}
      />
      <Tab.Screen
        component={Cart}
        name="Cart"
        options={{
          header: (props) => <CartHeader {...props} />,
          tabBarIcon: ({ focused }: iconTypes): any => (
            <StyledView className="flex items-center space-y-1">
              <SimpleLineIcons
                name="handbag"
                size={24}
                color={focused ? "#F28482" : "black"}
              />
              <StyledText
                className={`${focused ? "text-pink" : "text-darkText"} `}
              >
                My Cart
              </StyledText>
            </StyledView>
          ),
        }}
      />
      <Tab.Screen
        component={Profile}
        name="Profile"
        options={{
          tabBarIcon: ({ focused }: iconTypes): any => (
            <StyledView className="flex items-center space-y-1">
              <Ionicons
                name="person-outline"
                size={24}
                color={focused ? "#F28482" : "black"}
              />
              <StyledText
                className={`${focused ? "text-pink" : "text-darkText"} `}
              >
                Me
              </StyledText>
            </StyledView>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
