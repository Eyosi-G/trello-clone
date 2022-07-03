import * as React from "react";
import AddNewItem from "./components/AddNewItem";
import Column from "./components/Column";
import {
  AppContainer,
  CardContainer,
  ColumnContainer,
  ColumnTitle,
} from "./styles";

function App() {
  return (
    <AppContainer>
      <Column title="something" />
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(val: string) => console.log(val)}
      />
    </AppContainer>
  );
}

export default App;
