import { createStackNavigator } from "@react-navigation/stack";
import { MyNetwork } from "../../../screens/MyNetwork";

const Stack = createStackNavigator();

export function MyNetworkStack() {
  return (
    <Stack.Navigator initialRouteName="MyNetwork">
      <Stack.Screen name="MyNetwork" component={MyNetwork} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
