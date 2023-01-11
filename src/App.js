import { useState } from "react";
// import Container from "./components/Container";
import Header from "./components/Header";
import Item from "./components/Item";
import Add from "./components/Add";
import styles from "./App.module.css";
function App() {
  const [TodoList, setTodoList] = useState([]);
  let UncompletedList = TodoList.filter((item) => item.isChecked === false);
  let CompletedList = TodoList.filter((item) => item.isChecked === true);

  return (
    <div className={styles.container}>
      <Header TodoList={TodoList} />
      <hr />
      <div className={styles.center}>
        <Add TodoList={TodoList} setTodoList={setTodoList} />

        <hr />
        {UncompletedList.map((item, index) => {
          return (
            <Item
              key={index}
              item={item}
              TodoList={TodoList}
              setTodoList={setTodoList}
            />
          );
        })}
        <hr />
        {CompletedList.map((item, index) => {
          return (
            <Item
              key={index}
              item={item}
              TodoList={TodoList}
              setTodoList={setTodoList}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
