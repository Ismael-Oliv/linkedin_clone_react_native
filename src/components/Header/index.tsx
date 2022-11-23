import { useCallback } from "react";
import { Text, TouchableOpacity } from "react-native";

//componentns
import { Entypo, Feather } from "@expo/vector-icons";

//styles
import { Container, InputContainer, Input } from "./styles";

export function Header() {
  const goesToMessage = useCallback(() => {
    console.log("Indo para pagina de mensagens");
  }, []);

  return (
    <Container>
      <TouchableOpacity>
        <Text>Perfil</Text>
      </TouchableOpacity>

      <InputContainer>
        <Feather name="search" />
        <Input placeholder="Search" />
      </InputContainer>

      <TouchableOpacity onPress={goesToMessage}>
        <Entypo name="message" size={20} color="gray" />
      </TouchableOpacity>
    </Container>
  );
}
