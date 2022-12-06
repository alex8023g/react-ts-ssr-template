import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import styles from "./header.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => { setIsOpen(!isOpen) }
  return (
    <header>
      <h1 className={styles.example}>Hello React</h1>
      <button onClick={open}>push</button>
      {isOpen && <div>sssssssssssss</div>}
      <div>sssss</div>
    </header>
  );
}


