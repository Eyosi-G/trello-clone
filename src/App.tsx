import * as React from "react";
import {
  AppContainer,
  CardContainer,
  ColumnContainer,
  ColumnTitle,
} from "./styles";

function App() {
  return (
    <AppContainer>
      <ColumnContainer>
        <ColumnTitle>first column</ColumnTitle>
        <CardContainer>somethong</CardContainer>
        <CardContainer>somethong</CardContainer>
      </ColumnContainer>
      <ColumnContainer></ColumnContainer>
      <ColumnContainer></ColumnContainer>
    </AppContainer>
  );
}

export default App;
