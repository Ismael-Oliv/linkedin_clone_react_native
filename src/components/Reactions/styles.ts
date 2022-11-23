import { Image as ImageElement } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 10px;
`;

export const Content = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  margin-top: 5px;
  padding: 5px 15px;
`;

export const Image = styled(ImageElement)`
  margin-right: 10px;
`;
