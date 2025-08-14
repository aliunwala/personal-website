import React, { useState } from "react";
import styles from "./index.module.css";
import { HelpCenterRounded } from "@mui/icons-material";
// Conceptual overview here: https://www.youtube.com/watch?v=3IdCQ7QAs38&t=4s

// The goal here is to extract some common functionality to a wrapper.
// And then pass that functionality down to each component that might need it
// We use AddCountFunctionWrapper to add the counting state logic that is used by both Counter1/Counter2
export default function renderPropsPattern() {
  return (
    <div className={styles.myContainer}>
      <div>
        <p>
          The goal here is to extract some common functionality to a wrapper.
          And then pass that functionality down to each component that might
          need it. We use AddCountFunctionWrapper to add the counting state
          logic that is used by both Counter1/Counter2
        </p>
      </div>
      <AddCountFunctionWrapper component={Counter1}></AddCountFunctionWrapper>
      <AddCountFunctionWrapper component={Counter2}></AddCountFunctionWrapper>
    </div>
  );
}

function AddCountFunctionWrapper({ component }) {
  const [counter, setCounter] = useState(0);
  function countHandler() {
    console.log("here");
    setCounter((counter) => counter + 1);
  }

  return <div>{component({ counter, clickHandler: countHandler })}</div>;
}

function Counter1({ counter, clickHandler }) {
  return <button onClick={clickHandler}>Counter1: {counter}</button>;
}

function Counter2({ counter, clickHandler }) {
  return <button onClick={clickHandler}>Counter2: {counter}</button>;
}

function test() {
  () => {
    return;
  };
}

// for(let i = 0; i < .length; i++){
// }
