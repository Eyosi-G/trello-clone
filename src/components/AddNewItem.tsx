import React, { useState } from "react";
import { AddItemButton } from "../styles";
import NewItemForm from "./NewItemForm";
type AddNewItemProps = {
  onAdd(val: string): void;
  toggleButtonText: string;
  dark?: boolean;
};
const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  let addItemHandler = () => {
    // handle adding
    setShowForm(false);
  };
  if (showForm) {
    return <NewItemForm onAdd={addItemHandler} />;
  }
  return (
    <AddItemButton onClick={() => setShowForm(true)} dark={props.dark}>
      {props.toggleButtonText}
    </AddItemButton>
  );
};

export default AddNewItem;
