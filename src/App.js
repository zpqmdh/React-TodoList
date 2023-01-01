import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Item from "./components/Item";
import Add from "./components/Add";
function App() {
  // useState에 string -> object
  const [TodoList, setTodoList] = useState([]);

  return (
    <div className={styles.container}>
      <Header TodoList={TodoList} />
      <Add TodoList={TodoList} setTodoList={setTodoList} />
      <hr />
      {TodoList.map((item, index) => {
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
  );
}

export default App;
