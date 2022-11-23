import { createStackNavigator } from "@react-navigation/stack";
import { Post } from "../../../screens/Post";

const Stack = createStackNavigator();

export function PostsStack() {
  return (
    <Stack.Navigator initialRouteName="Post">
      <Stack.Screen
        name="Post"
        component={Post}
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}
