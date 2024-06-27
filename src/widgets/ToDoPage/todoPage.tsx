import Header from "../Header/Header";
import styles from "./todoPage.module.scss";
import img from "../../assets/delete.svg";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import { useState } from "react";
import Form from "../Form/Form";

const ToDoPage = () => {
  const [ToDos, setToDos] = useState([]);
  const putToDo = (value: any) => {
    if (value) {
      setToDos([...ToDos, { id: Date.now(), text: value, done: false }]);
    } else {
      alert("Enter TEXT");
    }
  };
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
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
            {ToDos.map((ToDo) => {
              return (
                <span className={styles.Task}>
                  <img src={img} alt="" />
                  <Checkbox onChange={onChange} className={styles.Task__check}>
                    sdfsdf
                  </Checkbox>
                  <li key={ToDo.id} className={styles.Task__Text}>
                    {ToDo.text}
                  </li>
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
