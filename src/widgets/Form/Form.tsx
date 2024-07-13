import React, { LegacyRef, useState } from "react";
import styles from "./form.module.scss";
type FormProps = { putToDo: any; CurrRef: LegacyRef<HTMLInputElement> | null };

const Form = ({ putToDo, CurrRef }: FormProps) => {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        putToDo(value);
        setValue("");
      }}
    >
      <input
        ref={CurrRef}
        className={styles.form__inputWrapper}
        placeholder="Add New Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default Form;
