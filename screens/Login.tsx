import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyledImage,
  StyledText,
  StyledTextInput,
  StyledTouchableOpacity,
  StyledView,
} from "../components/styledComponents/StyledComponents";
import { MaterialIcons } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledView className="flex-[1] bg-white justify-center px-10">
        <KeyboardAvoidingView>
          <StyledImage
            source={require("../assets/foodIcon.png")}
            className="w-[200] h-[200] self-center mb-10"
          />
          <StyledTextInput
            placeholder="email address"
            value={email}
            onChangeText={(newText) => setEmail(newText)}
            className="h-12 pl-4 mb-6 border rounded-lg"
            keyboardType="email-address"
          />
          <StyledView>
            <StyledTextInput
              autoCorrect={false}
              secureTextEntry={passwordVisible ? false : true}
              textContentType="password"
              placeholder="password"
              value={password}
              onChangeText={(newText) => setPassword(newText)}
              className="h-12 pl-4 mb-6 border rounded-lg"
            />
            {password.length > 0 && (
              <StyledTouchableOpacity
                className="absolute right-[10] top-[10]"
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <MaterialIcons
                    name="visibility-off"
                    size={24}
                    color="black"
                  />
                ) : (
                  <MaterialIcons name="visibility" size={24} color="black" />
                )}
              </StyledTouchableOpacity>
            )}
          </StyledView>
          <StyledTouchableOpacity
            className="h-12 mb-3 bg-blue-600 rounded-lg flex items-center justify-center"
            onPress={() => navigation.navigate("Home")}
          >
            <StyledText className="text-white font-bold text-lg">
              Login
            </StyledText>
          </StyledTouchableOpacity>
          <StyledText>Forgot password</StyledText>
          <StyledText className="mt-10 text-lg">
            Don't have an account ? Register
          </StyledText>
        </KeyboardAvoidingView>
      </StyledView>
    </SafeAreaView>
  );
};

export default Login;
