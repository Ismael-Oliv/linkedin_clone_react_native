import { Text, View, Image as ImageRN } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//components
import { Foundation, EvilIcons, Feather, FontAwesome } from "@expo/vector-icons";
import { Reactions } from "../../components/Reactions";

//types
import { HomeNavigationScreen } from "../../navigation/Stack/Home/types";

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

export function PostDetail() {
  const navigation = useNavigation<NativeStackNavigationProp<HomeNavigationScreen>>();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
          </HeaderContent>

          <PostBody>
            <Text>
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum
              tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando
              uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não
              só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se
              essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das
              folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com
              os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
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

        <Reactions reactions={[1, 2, 3, 4, 5, 6]} />
        <View>
          <Text>Comments</Text>
        </View>
      </Container>
    </View>
  );
}
