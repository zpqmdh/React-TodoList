import React from "react";
// import { useState } from "react";
import styles from "../styles/Item.module.css";
function Item({ item, TodoList, setTodoList }) {
  // 할 일 삭제
  const delBtn = () => {
    const temp = TodoList.filter((i) => i.title !== item.title);
    setTodoList(temp);
  };
  // 할 일 체크박스 선택/해제
  const onChange = () => {
    const changeState = { title: item.title, isChecked: !item.isChecked };
    let tempTodoList = [];
    for (let i = 0; i < TodoList.length; i++) {
      if (TodoList[i].title !== item.title) {
        tempTodoList.push(TodoList[i]);
      } else {
        tempTodoList.push(changeState);
      }
    }
    setTodoList(tempTodoList);
  };
  return (
    <div>
      <input
        type="checkbox"
        id="checkbox"
        checked={item.isChecked}
        onChange={() => onChange()}
      />
      <label
        htmlFor="checkbox"
        className={item.isChecked ? styles.checked : styles.text}
      >
        {item.title}
      </label>
      <button className={styles.delBtn} onClick={delBtn}>
        <img className={styles.img} src="img/close.png" alt="close" />
      </button>
    </div>
  );
}
export default Item;
