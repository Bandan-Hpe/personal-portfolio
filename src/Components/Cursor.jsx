import React, { useRef, useEffect } from "react";
import styles from "../index.module.css"
const Cursor = () => {
  const customCursor = useRef(null);
  useEffect(() => {
    let MouseMove = (event) => {
      const { clientX, clientY } = event;
      customCursor.current.style.cssText = `left:${clientX}px; top:${clientY}px;`;
    };
    document.addEventListener("mousemove", MouseMove);
    return () => {
      document.removeEventListener("mousemove", MouseMove);
    };
  }, []);
  return <div className={styles.cursor} ref={customCursor}></div>;
};

export default Cursor;
