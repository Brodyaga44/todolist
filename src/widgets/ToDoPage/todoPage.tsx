import Header from "../Header/Header";
import styles from "./todoPage.module.scss";
import img from "../../assets/delete.svg";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import { useEffect, useState } from "react";
import Form from "../Form/Form";
import { IToDo } from "../../shared/interfaces/IToDo";

const ToDoPage = () => {
  const [toDos, setToDos] = useState<IToDo[]>([]);
  const [taskCounter, setTaskCounter] = useState(0);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    setPending(toDos.filter((toDo) => toDo.done === false).length);
  });

  const putToDo = (value: any) => {
    if (value) {
      setToDos([...toDos, { id: Date.now(), text: value, done: false }]);
      setTaskCounter(taskCounter + 1);
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

  const deleteToDo = (id: number) => {
    const updatedToDo = toDos.filter((toDo, i) => toDo.id !== id);
    setToDos(updatedToDo);
    setTaskCounter(taskCounter - 1);
  };

  return (
    <div>
      <Header pending={pending} taskCounter={taskCounter} />
      <div className={styles.todo}>
        <div className={styles.todo__addTask}>
          <span className={styles.todo__add}>+</span>
          <Form putToDo={putToDo} />
        </div>
        <div className={styles.todo__tasksContainer}>
          <ul>
            {toDos.map((toDo) => {
              return (
                <span key={toDo.id} className={styles.todo__taskItem}>
                  <span onClick={() => deleteToDo(toDo.id)}>
                    <img src={img} alt="" />
                  </span>
                  <Checkbox
                    onChange={() => onChange(toDo.id)}
                    className={styles.todo__taskCheck}
                  >
                    <li
                      key={toDo.id}
                      className={
                        !toDo.done
                          ? styles.todo__notdoneTask
                          : styles.todo__doneTask
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
