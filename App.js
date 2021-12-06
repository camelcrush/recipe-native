import React, { useRef, useState, useMemo } from "react";
import { Animated, View } from "react-native";
import styled from "styled-components/native";
import { recipe } from "./recipe";
import { shuffleArray } from "./utils";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  background-color: #2980b9;
  justify-content: center;
  align-items: center;
`;
const RecipeContainer = styled.View`
  flex: 2;
`;
const RecipeList = styled.FlatList`
  padding: 10px 10px;
`;

const Source = styled.TouchableOpacity`
  background-color: ${(props) => (props.selected ? "gray" : "#9b59b6")};
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;

const SoureName = styled.Text`
  color: #ecf0f1;
  font-size: 18px;
  font-weight: 600;
`;

const ResultContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ResultList = styled.FlatList`
  padding: 10px 10px;
`;
const Result = styled.View`
  background-color: #ff7979;
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;
const Resultname = styled.Text`
  color: #ecf0f1;
  font-size: 16px;
  font-weight: 600;
`;
const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
const ButtonText = styled.Text``;

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

export default function App() {
  const [currentRecipe, setCurrentRecipe] = useState(0);
  const [result, setResult] = useState([]);
  const randomRecipe = useMemo(
    () => shuffleArray(recipe[currentRecipe].content),
    [currentRecipe]
  );
  let choiceRecipe = [];
  const opacityOne = useRef(new Animated.Value(0)).current;
  const opacityTwo = useRef(new Animated.Value(0)).current;
  const opacityThree = useRef(new Animated.Value(0)).current;

  const onChoice = (source, index) => {
    if (result.includes(source)) {
      const number = result.indexOf(source);
      if (number !== -1) {
        choiceRecipe = result;
        choiceRecipe.splice(number, 1);
      }
    } else {
      choiceRecipe = result;
      choiceRecipe.push(source);
    }
    setResult([...choiceRecipe]);
  };
  const onPressCancel = () => {
    setResult([]);
  };
  const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  const onPressCheck = (result) => {
    if (result.length !== recipe[currentRecipe].content.length) {
      Animated.sequence([
        Animated.spring(opacityOne, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.spring(opacityOne, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      if (equals(recipe[currentRecipe].content, result)) {
        Animated.sequence([
          Animated.spring(opacityTwo, {
            toValue: 1,
            useNativeDriver: true,
          }),
          Animated.spring(opacityTwo, {
            toValue: 0,
            useNativeDriver: true,
          }),
        ]).start();
        console.log("Success");
        setCurrentRecipe((prev) => prev + 1);
        setResult([]);
      } else {
        Animated.sequence([
          Animated.spring(opacityThree, {
            toValue: 1,
            useNativeDriver: true,
          }),
          Animated.spring(opacityThree, {
            toValue: 0,
            useNativeDriver: true,
          }),
        ]).start();
        console.log("Retry");
      }
    }
  };
  return (
    <Container>
      <RecipeContainer>
        <RecipeList
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
          }}
          data={randomRecipe}
          extraData={currentRecipe}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "center",
          }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <Source
              onPress={() => onChoice(item, index)}
              selected={result.includes(item) ? true : false}
            >
              <SoureName>{item}</SoureName>
            </Source>
          )}
        />
      </RecipeContainer>
      <Alert style={{ opacity: opacityOne }}>
        <AlertText style={{ color: "#f0932b" }}>답을 다 채우세요</AlertText>
      </Alert>
      <Alert style={{ opacity: opacityTwo }}>
        <AlertText style={{ color: "#6ab04c" }}>Success!!</AlertText>
      </Alert>
      <Alert style={{ opacity: opacityThree }}>
        <AlertText style={{ color: "#eb4d4b" }}>Retry!!</AlertText>
      </Alert>
      <ResultContainer>
        <ResultList
          data={result}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "center",
          }}
          ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <Result>
              <Resultname>
                {index + 1}. {item}
              </Resultname>
            </Result>
          )}
        />
      </ResultContainer>
      <ButtonContainer>
        <Button onPress={onPressCancel}>
          <Ionicons name="close-circle" size={50} color="#eb4d4b" />
          <ButtonText>Cancel</ButtonText>
        </Button>
        <Button style={{ marginLeft: 30 }} onPress={() => onPressCheck(result)}>
          <Ionicons name="checkmark-circle" size={50} color="#6ab04c" />
          <ButtonText>Check</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
