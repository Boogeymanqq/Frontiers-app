import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Profile } from "./Profile/Profile";
import { Chat } from "./Chat/Chat";
import { Graphic } from "./Graphic/Graphic";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Graphic" component={Graphic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
