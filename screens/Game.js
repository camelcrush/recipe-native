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
  const [isFinish, setIsFinish] = useState(false);
  const [minutes, setMintes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [currentRecipe, setCurrentRecipe] = useState(0);
  const [result, setResult] = useState([]);
  const randomRecipe = useMemo(
    () => shuffleArray(recipe[currentRecipe].content),
    [currentRecipe]
  );
  useEffect(() => {
    if (!isFinish) {
      const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
      return () => clearInterval(timer);
    }
  }, [isFinish]);
  useEffect(() => {
    setOptions({ title: recipe[currentRecipe].name });
  }, [currentRecipe]);
  let choiceRecipe = [];
  const opacityOne = useRef(new Animated.Value(0)).current;
  const opacityTwo = useRef(new Animated.Value(0)).current;
  const opacityThree = useRef(new Animated.Value(0)).current;
  const onPressCancel = () => {
    setResult([]);
  };
  const equals = (a, b) => {
    const copyA = a.slice();
    const copyB = b.slice();
    copyA.splice(2, 4);
    copyB.splice(2, 4);
    return JSON.stringify(copyA) === JSON.stringify(copyB);
  };

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
        if (currentRecipe + 1 !== recipe.length) {
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
          setCurrentRecipe((prev) => prev + 1);
        } else {
          Animated.spring(opacityTwo, {
            toValue: 1,
            useNativeDriver: true,
          }).start();
          setIsFinish(true);
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
        comment="?????? ?????? ????????????"
      />
      <ResultAlert
        opacity={opacityTwo}
        color="#6ab04c"
        comment="Success!!"
        record={`${minutes} : ${seconds.toString().padStart(2, 0)}`}
      />
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
