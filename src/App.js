import { useEffect, useState } from "react";
// import Container from "./components/Container";
import Header from "./components/Header";
import Item from "./components/Item";
import Add from "./components/Add";
import Line from "./components/Line";
import styles from "./App.module.css";

function App() {
  const [TodoList, setTodoList] = useState([]);
  let UncompletedList = TodoList.filter((item) => item.isChecked === false);
  let CompletedList = TodoList.filter((item) => item.isChecked === true);
  useEffect(() => {
    const localTodoList = localStorage.getItem("TodoList");
    if (localTodoList) {
      setTodoList(JSON.parse(localTodoList));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(TodoList));
  }, [TodoList]);
  return (
    <div className={styles.container}>
      <Header TodoList={TodoList} />

      <div className={styles.center}>
        <Line />
        <Add TodoList={TodoList} setTodoList={setTodoList} />

        <Line />
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
        <Line />
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
