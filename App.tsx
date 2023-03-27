import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigations/Tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "./screens/CategoryScreen";
import CategoryCustomHeader from "./components/core/CategoryCustomHeader";
import Login from "./screens/Login";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={{
            header: (props) => <CategoryCustomHeader {...props} />,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
