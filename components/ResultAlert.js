import React from "react";
import styled from "styled-components/native";
import { Animated, View } from "react-native";

const Alert = styled(Animated.createAnimatedComponent(View))`
  background-color: rgba(255, 255, 255, 0.8);
  width: 300px;
  height: 100px;
  position: absolute;
  z-index: 10;
  border-radius: 25px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
`;
const AlertText = styled.Text`
  font-size: 24px;
  font-weight: 700;
`;

const ResultAlert = ({ opacity, color, comment }) => {
  return (
    <Alert style={{ opacity }}>
      <AlertText style={{ color }}>{comment}</AlertText>
    </Alert>
  );
};

export default ResultAlert;
