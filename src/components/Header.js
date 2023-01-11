import React from "react";
import styles from "../styles/Header.module.css";
import moment from "moment"; // 날짜
import "moment/locale/ko";
function Header({ TodoList }) {
  return (
    <div>
      <h1 className={styles.head}>
        💜 {moment().format("YYYY/MM/DD")}의 할 일 🤍
      </h1>
      <h2 className={styles.remain}>
        남은 할 일의 개수:{" "}
        {TodoList.filter((i) => i.isChecked === false).length}
      </h2>
    </div>
  );
}
export default Header;
