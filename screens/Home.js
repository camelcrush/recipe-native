import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #2980b9;
  justify-content: center;
  align-items: center;
`;

const GoButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: blueviolet;
  border-radius: 20px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
`;
const GoText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Home = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <GoButton onPress={() => navigate("Game")}>
        <GoText>Go Play!</GoText>
      </GoButton>
    </Container>
  );
};

export default Home;
