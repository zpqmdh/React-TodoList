import React from "react";
import { useState } from "react";
import styles from "../styles/Add.module.css";
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
          className={styles.addInput}
          onChange={onChange}
          value={Title}
          type="text"
          placeholder="할 일을 작성하세요 :)"
        />
        <button className={styles.addBtn}>➕</button>
      </form>
    </div>
  );
}
export default Add;
