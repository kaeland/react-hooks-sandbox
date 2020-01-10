import React from "react";

function Form(props) {
  return (
    <div>
      <input
        name="name"
        placeholder="Enter name here..."
        onChange={e => props.setName(e.target.value)}
      />
    </div>
  );
}

export default Form;
