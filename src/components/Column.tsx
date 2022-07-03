import React from "react";
import Card from "./Card";
import { CardContainer, ColumnContainer, ColumnTitle } from "../styles";
import AddNewItem from "./AddNewItem";
type ColumnProps = {
  title: String;
  children?: React.ReactNode;
};
const Column: React.FC<ColumnProps> = ({ title }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      <Card text="" />
      <AddNewItem
        toggleButtonText="+ Add another task"
        dark={true}
        onAdd={(val: string) => console.log(val)}
      />
    </ColumnContainer>
  );
};

export default Column;
