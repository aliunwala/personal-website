import React, { useReducer, useContext, createContext } from "react";
import styles from "./index.module.css";
const MyContext = createContext(null);

export default function HookTesting() {
  //useReducer
  const initalObj = { leftSet: 0, rightSet: 0 };
  const [state, dispatch] = useReducer(reducer, initalObj);

  function reducer(state, action) {
    switch (action.type) {
      case "left":
        return { ...state, leftSet: 1, rightSet: 0 };
      case "right":
        return { ...state, leftSet: 0, rightSet: 1 };
      case "reset":
        return { ...state, leftSet: 0, rightSet: 0 };
      default:
        return state;
    }
  }

  return (
    <div className={styles.hookContainer}>
      <MyContext.Provider value={{ dispatch: dispatch, state: state }}>
        <h1>useReducer Example</h1>
        <p>This page is a working example of:</p>
        <ul>
          <li>- useReducer to transition states</li>
          <li>- useContext to pass props down several components</li>
          <li>
            - Using component composition to pass variables down the component
            tree
          </li>
        </ul>

        <br></br>
        <hr></hr>
        <PropDrillingFix1>
          <PropDrillingFix2>
            <PropDrillingFix3></PropDrillingFix3>
          </PropDrillingFix2>
        </PropDrillingFix1>
      </MyContext.Provider>
    </div>
  );
}

function PropDrillingFix1({ children }) {
  return (
    <>
      <div>
        {"<PropDrillingFix1>"}
        {children}
        {"</PropDrillingFix1>"}
      </div>
    </>
  );
}

function PropDrillingFix2({ children }) {
  return (
    <>
      <div style={{ paddingLeft: "20px" }}>
        {"<PropDrillingFix2>"}
        {children}
        {"</PropDrillingFix2>"}
      </div>
    </>
  );
}

function PropDrillingFix3({ children }) {
  let { counter, state, dispatch } = useContext(MyContext);

  function handleDispatchLeft() {
    dispatch({ type: "left" });
  }
  function handleDispatchRight() {
    dispatch({ type: "right" });
  }
  function handleDispatchReset() {
    dispatch({ type: "reset" });
  }
  return (
    <>
      <div style={{ paddingLeft: "20px" }}>
        {"<PropDrillingFix3>"}
        <div style={{ paddingLeft: "20px" }}>
          <div>
            <br></br>
            <hr></hr>
            <div>Dispatch:</div>
            <hr></hr>
            <button onClick={handleDispatchLeft}>DispatchLeft</button>
            <button onClick={handleDispatchRight}>DispatchRight</button>
            <button onClick={handleDispatchReset}>DispatchReset</button>
            <br></br>
            <br></br>
            <div>
              Using our dispatch function + onClick handlers our state is:{" "}
              {JSON.stringify(state)}
            </div>
            <br></br>
            <div>
              useContext gives us access to the dispatch function and state in
              deeply nested component: {`<PropDrillingFix3>`}.
            </div>
          </div>
        </div>
        <br></br>

        {"</PropDrillingFix3>"}
      </div>
    </>
  );
}
