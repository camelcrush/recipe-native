import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const RecipeFlatList = styled.FlatList`
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

const RecipeList = ({
  randomRecipe,
  currentRecipe,
  choiceRecipe,
  result,
  stateFn,
}) => {
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
    stateFn([...choiceRecipe]);
  };
  return (
    <RecipeFlatList
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
  );
};

export default RecipeList;
