import { useCallback } from "react";
import { Text, View, Image as ImageRN } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//components
import { Foundation, EvilIcons, Feather, FontAwesome } from "@expo/vector-icons";

//types
import { HomeNavigationScreen } from "../../../navigation/Stack/Home/types";

//styles
import {
  Container,
  FeedHeader,
  Image,
  HeaderContent,
  UserInfo,
  Title,
  FunctionTitle,
  PostBody,
  Footer,
  IconContainer,
  IconsTitle,
  MenuButton,
} from "./styles";

export function UsersPost() {
  const navigation = useNavigation<NativeStackNavigationProp<HomeNavigationScreen>>();

  const goToPostDetail = useCallback(() => {
    navigation.navigate("PostDetail");
  }, []);

  return (
    <Container>
      <FeedHeader>
        <HeaderContent>
          <UserInfo style={{ flexDirection: "row" }}>
            <>
              <Image
                style={{ borderRadius: 50 }}
                source={{
                  uri: "https://media-exp1.licdn.com/dms/image/D4D35AQEDg_JsjvO5AA/profile-framedphoto-shrink_200_200/0/1668004164746?e=1669053600&v=beta&t=A0RqW4rQtkSIsMR5mT-a6e6EVDerZ5UMRdl18T3azM0",
                  height: 60,
                  width: 60,
                }}
              />
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Title>Ismael Oliveira</Title>
                  <Text>º Following</Text>
                </View>
                <View>
                  <FunctionTitle>Fullstack developer | Nodejs| Python | React.js</FunctionTitle>
                </View>
                <View>
                  <FunctionTitle>22hº</FunctionTitle>
                </View>
              </View>
            </>
          </UserInfo>

          <MenuButton onPress={() => console.log("Menu post clicked")}>
            <Feather name="more-vertical" size={20} />
          </MenuButton>
        </HeaderContent>

        <PostBody onPress={goToPostDetail}>
          <Text>
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum
            tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando
            uma misturou os caracteres de um texto para criar um espécime de livro.
          </Text>
        </PostBody>
      </FeedHeader>
      <ImageRN
        source={{
          uri: "https://media-exp1.licdn.com/dms/image/C4D22AQHLbA5XYYIvuA/feedshare-shrink_800/0/1668191190309?e=1671062400&v=beta&t=ogRun6NGZBQ6u74sdc0_U3qxH9Mwv940hXuy6YOrb40",
          height: 400,
        }}
      />
      <Footer>
        <IconContainer>
          <Foundation name="like" size={20} color="gray" />
          <IconsTitle>Like</IconsTitle>
        </IconContainer>
        <IconContainer>
          <EvilIcons name="comment" size={24} color="gray" />
          <IconsTitle>Comment</IconsTitle>
        </IconContainer>
        <IconContainer>
          <Feather name="repeat" size={15} color="gray" />
          <IconsTitle>Repost</IconsTitle>
        </IconContainer>
        <IconContainer>
          <FontAwesome name="send" size={15} color="gray" />
          <IconsTitle>Send</IconsTitle>
        </IconContainer>
      </Footer>
    </Container>
  );
}
