import { createStackNavigator } from "@react-navigation/stack";
import { Jobs } from "../../../screens/Jobs";

const Stack = createStackNavigator();

export function JobsStack() {
  return (
    <Stack.Navigator initialRouteName="Jobs">
      <Stack.Screen
        name="Jobs"
        component={Jobs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
