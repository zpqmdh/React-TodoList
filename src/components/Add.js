import React from "react";
import { useState } from "react";

function Add({ TodoList, setTodoList }) {
  const [Title, setTitle] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (Title === "") {
      return;
    }
    setTitle(""); // initialize
    setTodoList([...TodoList, { title: Title, isChecked: false }]);
  };
  const onChange = (event) => setTitle(event.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={Title}
          type="text"
          placeholder="할 일을 추가하세요 :)"
        />
        <button>추가</button>
      </form>
    </div>
  );
}
export default Add;
