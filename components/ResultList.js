import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const ResultFlatList = styled.FlatList`
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

const ResultList = ({ result }) => {
  return (
    <ResultFlatList
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
  );
};

export default ResultList;
