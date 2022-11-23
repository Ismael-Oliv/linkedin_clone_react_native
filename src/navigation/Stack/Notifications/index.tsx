import { createStackNavigator } from "@react-navigation/stack";
import { Notifications } from "../../../screens/Notifications";

const Stack = createStackNavigator();

export function NotificationsStack() {
  return (
    <Stack.Navigator initialRouteName="Notifications">
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
