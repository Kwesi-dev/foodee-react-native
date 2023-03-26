import React from "react";
import { SafeAreaView } from "react-native";
import MapView from "react-native-maps";
import {
  StyledTouchableOpacity,
  StyledView,
} from "../components/styledComponents/StyledComponents";
import { AntDesign } from "@expo/vector-icons";

const Location = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledView style={{ flex: 1 }}>
        <StyledTouchableOpacity className="bg-white w-10 h-10 rounded-lg flex items-center justify-center absolute top-5 left-3 z-50">
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Home")}
          />
        </StyledTouchableOpacity>
        <MapView
          style={{ flex: 1, width: "100%" }}
          showsUserLocation={true}
          followsUserLocation={true}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </StyledView>
    </SafeAreaView>
  );
};

export default Location;
