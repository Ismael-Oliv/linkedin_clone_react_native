import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

//components
import { HomeStack } from "../Stack/Home";
import { MyNetworkStack } from "../Stack/MyNetwork";
import { NotificationsStack } from "../Stack/Notifications";
import { JobsStack } from "../Stack/Jobs";
import { Post } from "../../screens/Post";

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={() => ({
          headerShown: false,
          tabBarStyle: { height: 55, paddingTop: 10 },
          tabBarLabelStyle: { marginBottom: 5 },
        })}
      >
        <Tab.Screen
          name="HomeStack"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home-sharp"
                size={23}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
          component={HomeStack}
        />
        <Tab.Screen
          name="MyNetworkStack"
          options={{
            title: "My Network",
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="group"
                size={23}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
          component={MyNetworkStack}
        />

        <Tab.Screen
          name="Posts"
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("PostModal");
            },
          })}
          options={{
            title: "Post",
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="squared-plus"
                size={23}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
          component={Post}
        />

        <Tab.Screen
          name="NotificationsStack"
          options={{
            title: "Notifications",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="notifications"
                size={23}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
          component={NotificationsStack}
        />
        <Tab.Screen
          name="JobsStack"
          options={{
            title: "jobs",
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="briefcase"
                size={23}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
          component={JobsStack}
        />
      </Tab.Navigator>
    </>
  );
}
