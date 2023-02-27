import React, { ReactNode } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import HomeHeader from "../components/core/HomeHeader";
import { StyledView } from "../components/styledComponents/StyledComponents";
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
          height: 90,
          marginHorizontal: 20,
          borderRadius: 20,
        },
      }}
    >
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          header: (props) => <HomeHeader {...props} />,
          tabBarIcon: ({ focused }: iconTypes): any => {
            <StyledView></StyledView>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
