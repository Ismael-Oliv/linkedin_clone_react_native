import { Text, View } from "react-native";
import { Container, Content, Image } from "./styles";

interface ReactionsProps {
  reactions: Array<Number>;
}

export function Reactions({ reactions }: ReactionsProps) {
  return (
    <Container>
      <Text>Reactions</Text>
      <Content>
        {reactions.map((reaction) => (
          <Image
            key={`react${reaction}`}
            style={{ borderRadius: 50 }}
            source={{
              uri: "https://media-exp1.licdn.com/dms/image/D4D35AQEDg_JsjvO5AA/profile-framedphoto-shrink_200_200/0/1668004164746?e=1669053600&v=beta&t=A0RqW4rQtkSIsMR5mT-a6e6EVDerZ5UMRdl18T3azM0",
              height: 40,
              width: 40,
            }}
          />
        ))}
        <View>
          <Text>More</Text>
        </View>
      </Content>
    </Container>
  );
}
