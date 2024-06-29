import Header from "../Header/Header";
import styles from "./todoPage.module.scss";
import img from "../../assets/delete.svg";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import { useState } from "react";
import Form from "../Form/Form";

const ToDoPage = () => {
  const [toDos, setToDos] = useState<
    { id: number; text: string; done: boolean }[]
  >([]);
  const putToDo = (value: any) => {
    if (value) {
      setToDos([...toDos, { id: Date.now(), text: value, done: false }]);
    } else {
      alert("Enter TEXT");
    }
  };
  const onChange = (id: number) => {
    setToDos((prev) =>
      prev.map((toDo) => {
        if (toDo.id === id) {
          return {
            ...toDo,
            done: !toDo.done,
          };
        }
        return toDo;
      }),
    );
  };

  return (
    <div>
      <Header />
      <div className={styles.todo}>
        <div className={styles.todo__addTask}>
          <span className={styles.todo__add}>+</span>
          <Form putToDo={putToDo} />
          <span className={styles.todo__addText}>Add New Task</span>
        </div>
        <div className={styles.Task}>
          <ul>
            {toDos.map((toDo) => {
              return (
                <span key={toDo.id} className={styles.Task}>
                  <img src={img} alt="" />
                  <Checkbox
                    onChange={() => onChange(toDo.id)}
                    className={styles.Task__check}
                  >
                    <li
                      key={toDo.id}
                      className={
                        !toDo.done ? styles.Task__Text : styles.Task__doneTask
                      }
                    >
                      {toDo.text}
                    </li>
                  </Checkbox>
                </span>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ToDoPage;
