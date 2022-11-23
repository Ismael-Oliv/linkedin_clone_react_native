import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//components
import { Tabs } from "../../Tabs";
import { PostsStack } from "../Post";
import { PostDetail } from "../../../screens/PostDetail";
import { Entypo } from "@expo/vector-icons";

const Root = createStackNavigator();

export function RootStack() {
  return (
    <Root.Navigator initialRouteName="tabNavigation">
      <Root.Screen name="tabNavigation" component={Tabs} options={{ headerShown: false }} />
      <Root.Screen name="PostModal" component={PostsStack} />
      <Root.Screen
        name="PostDetail"
        component={PostDetail}
        options={{
          title: "",
          headerRight: () => <Entypo name="dots-three-vertical" color="gray" size={22} />,
        }}
      />
    </Root.Navigator>
  );
}
