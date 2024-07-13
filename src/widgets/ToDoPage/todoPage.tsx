import Header from "../Header/Header";
import styles from "./todoPage.module.scss";
import img from "../../assets/delete.svg";
import { Checkbox } from "antd";
import { useEffect, useRef, useState } from "react";
import Form from "../Form/Form";
import { IToDo } from "../../shared/interfaces/IToDo";

const ToDoPage = () => {
  const [toDos, setToDos] = useState<IToDo[]>([]);
  const [taskCounter, setTaskCounter] = useState(0);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    setPending(toDos.filter((toDo) => !toDo.isDone).length);
  }, [toDos]);

  const putToDo = (value: any) => {
    if (value) {
      setToDos([...toDos, { id: Date.now(), text: value, isDone: false }]);
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
            isDone: !toDo.isDone,
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
  const CurrRef = useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    console.log(CurrRef);
    if (CurrRef && CurrRef.current) {
      CurrRef.current && CurrRef.current.focus();
    }
  };

  return (
    <div className={styles.todo__content}>
      <Header pending={pending} taskCounter={taskCounter} />
      <div className={styles.todo}>
        <div className={styles.todo__addTask} onClick={handleClick}>
          <span className={styles.todo__add}>+</span>
          <Form putToDo={putToDo} CurrRef={CurrRef} />
        </div>
        <div className={styles.todo__tasksContainer}>
          <ul className={styles.todo__taskItems}>
            {toDos.map((toDo) => {
              console.log(toDos);
              return (
                <div key={toDo.id} className={styles.todo__taskItem}>
                  <div
                    onClick={() => deleteToDo(toDo.id)}
                    className={styles.todo__taskDelete}
                  >
                    <img src={img} alt="" />
                  </div>
                  <Checkbox
                    onChange={() => onChange(toDo.id)}
                    className={styles.todo__taskCheck}
                  >
                    <li
                      key={toDo.id}
                      className={
                        !toDo.isDone
                          ? styles.todo__notdoneTask
                          : styles.todo__doneTask
                      }
                    >
                      {toDo.text}
                    </li>
                  </Checkbox>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ToDoPage;
