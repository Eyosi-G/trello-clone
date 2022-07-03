import React, { useState } from "react";
import { NewItemFormContainer, NewItemInput, NewItemButton } from "../styles";
type NewItemFormType = {
  onAdd(val: string): void;
};
const NewItemForm: React.FC<NewItemFormType> = ({ onAdd }) => {
  const [text, setText] = useState("");
  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={(e) => setText(e.target.value)} />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
