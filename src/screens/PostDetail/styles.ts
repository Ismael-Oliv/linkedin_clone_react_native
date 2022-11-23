import { Image as ImageElement } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: #ffffff;
  /* padding-top: 10px; */
`;
export const Image = styled(ImageElement)`
  margin-right: 10px;
`;

export const FeedHeader = styled.View`
  flex-direction: column;
  padding: 10px;
`;

export const UserInfo = styled.View``;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

export const FunctionTitle = styled.Text`
  font-size: 12px;
  color: gray;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-top: 10px;
`;

export const PostBody = styled.View`
  justify-content: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin-top: 10px;
  padding: 5px 0;

  border-top-width: 1px;
  border-top-color: #e0e0e0;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

export const IconContainer = styled.View`
  align-items: center;
`;

export const IconsTitle = styled.Text`
  font-size: 10px;
`;

export const MenuButton = styled.TouchableOpacity``;

export const Reactions = styled.TouchableOpacity`
  padding: 5px;
`;
