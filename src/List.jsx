import React, { useState } from "react";

const List = ({ todo, index, handleDelete }) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  function handleCheckChange(e) {
    setIsCheckboxChecked(e.target.checked);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={isCheckboxChecked}
        onChange={handleCheckChange}
      />
      <span className={isCheckboxChecked ? "strike" : ""}>{todo}</span>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </li>
  );
};

export default List;
