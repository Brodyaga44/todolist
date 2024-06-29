import React, { useState } from "react";
import styles from "./form.module.scss";

const Form = (props: any) => {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.putToDo(value);
        setValue("");
      }}
    >
      <input
        className={styles.form__inputWrapper}
        placeholder="Add New Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default Form;
