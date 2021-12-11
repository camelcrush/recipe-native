import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
const ButtonText = styled.Text``;

const Button = ({ onPress, name, color, word }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons name={name} size={50} color={color} />
      <ButtonText>{word}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
