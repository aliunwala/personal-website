import React, {
  useState,
  useReducer,
  useContext,
  useRef,
  createContext,
  useEffect,
} from "react";
import styles from "./index.module.css";
const MyContext = createContext(null);
export default function HookTesting() {
  // State
  const [counter, setCounter] = useState(100);

  // useRef
  const counterRef = useRef(null);
  const refDomDisplay = useRef(null);

  // Handlers
  function handleInc() {
    setCounter((counter) => counter + 1);
  }

  useEffect(() => {
    // Example: Ref Variable example
    // Note: You can only read/write to refs inside useEffect/handler functions
    counterRef.current = counter;
    console.log("counterRef.current: ", counterRef.current);
  }, [counter]);

  useEffect(() => {
    // Example: Ref on DOM component (DOES NOT WORK ON CUSTOM COMPONENTS)
    // For custom components use forwardRef()
    // Note: You can only read/write to refs inside useEffect/handler functions
    console.log("refDomDisplay.current", refDomDisplay.current);
  }, [counter]);

  return (
    <div className={styles.hookContainer}>
      <MyContext.Provider value={{ counter: counter }}>
        <h1>useState Example</h1>
        <p>This page is a working example of:</p>
        <ul>
          <li>- useContext to pass props down several components</li>
          <li>- useRef to keep an "non-reactive" version of count </li>
          <li>- useRef to get a dom element </li>
          <li>- useState to set and increment counters</li>
          <li>
            - Using component composition to pass variables down the component
            tree
          </li>
        </ul>

        <br></br>
        <hr></hr>
        <PropDrillingFix1>
          <PropDrillingFix2>
            <PropDrillingFix3>
              <div ref={refDomDisplay}>
                <div>
                  Counter1: {counter} (Set directly by a onClick handler)
                </div>

                <div>
                  {/* Component Composition to avoid context */}
                  <button onClick={handleInc}>
                    Click to increment counter
                  </button>
                  {/* <button onClick={handleDispatch}>CLICK ME</button> */}
                </div>
              </div>
            </PropDrillingFix3>
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
  let { counter } = useContext(MyContext);
  return (
    <>
      <div style={{ paddingLeft: "20px" }}>
        {"<PropDrillingFix3>"}
        <div style={{ paddingLeft: "20px" }}>
          <br></br>
          <hr></hr>
          <div>Counter:</div>
          <hr></hr>
          <div>
            From useContext we can read our counter is set to: {counter}
          </div>
          <br></br>
          <div>From the passed in children (using component composition):</div>
          {children}

          <br></br>
          <hr></hr>
          <div>Ref:</div>
          <hr></hr>
          <div>
            In the console: counterRef.current is the current value of counter1
            using a ref
          </div>
          <div>
            In the console: refDomDisplay.current is a DOM element we connected
            to the ref
          </div>
          <br></br>
        </div>
        {"</PropDrillingFix3>"}
      </div>
    </>
  );
}
