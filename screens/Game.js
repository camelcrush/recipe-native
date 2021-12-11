import React, { useRef, useState, useMemo, useEffect } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import { recipe } from "../recipe";
import { shuffleArray } from "../utils";
import RecipeList from "../components/RecipeList";
import Button from "../components/Button";
import ResultList from "../components/ResultList";
import ResultAlert from "../components/ResultAlert";

const Container = styled.View`
  flex: 1;
  background-color: #2980b9;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;
const RecipeContainer = styled.View`
  flex: 1.5;
`;
const ResultContainer = styled.View`
  flex: 1.5;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Timer = styled.View`
  justify-content: center;
  align-items: center;
`;
const Seconds = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: 600;
`;

const Game = ({ navigation: { setOptions } }) => {
  const [minutes, setMintes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [currentRecipe, setCurrentRecipe] = useState(0);
  const [result, setResult] = useState([]);
  const randomRecipe = useMemo(
    () => shuffleArray(recipe[currentRecipe].content),
    [currentRecipe]
  );
  useEffect(() => {
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    setOptions({ title: recipe[currentRecipe].name });
  }, []);
  let choiceRecipe = [];
  const opacityOne = useRef(new Animated.Value(0)).current;
  const opacityTwo = useRef(new Animated.Value(0)).current;
  const opacityThree = useRef(new Animated.Value(0)).current;
  const onPressCancel = () => {
    setResult([]);
  };
  const equals = (a, b) =>
    JSON.stringify(a.slice(4)) === JSON.stringify(b.slice(4));
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
        if (currentRecipe + 1 !== recipe.length) {
          setCurrentRecipe((prev) => prev + 1);
        }
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
      }
    }
  };
  if (seconds == 60) {
    setMintes((prev) => prev + 1);
    setSeconds(0);
  }
  return (
    <Container>
      <Timer>
        <Seconds>
          {minutes} : {seconds.toString().padStart(2, 0)}
        </Seconds>
      </Timer>
      <RecipeContainer>
        <RecipeList
          randomRecipe={randomRecipe}
          currentRecipe={currentRecipe}
          choiceRecipe={choiceRecipe}
          result={result}
          stateFn={setResult}
        />
      </RecipeContainer>
      <ResultAlert
        opacity={opacityOne}
        color="#f0932b"
        comment="답을 모두 채우세요"
      />
      <ResultAlert opacity={opacityTwo} color="#6ab04c" comment="Success!!" />
      <ResultAlert opacity={opacityThree} color="#eb4d4b" comment="Retry!!" />
      <ResultContainer>
        <ResultList result={result} />
      </ResultContainer>
      <ButtonContainer>
        <Button
          onPress={onPressCancel}
          name="close-circle"
          color="#eb4d4b"
          word="Cancle"
        />
        <Button
          onPress={() => onPressCheck(result)}
          name="checkmark-circle"
          color="#6ab04c"
          word="Check"
        />
      </ButtonContainer>
    </Container>
  );
};

export default Game;
