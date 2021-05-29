import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import Individual from "./individual";
export const varContext = React.createContext();
export default function App() {
  const [val, setVal] = useState(0);
  // const [rCount,setRcount]=useState(0);
  const rCount = useRef(1);
  const inputRef = useRef();
  const prevState = useRef(0);

  // useEffect(()=>{
  //  console.log('called');

  //  return ()=>{
  //    console.log("unmount");
  //  }
  // },[val])
  useEffect(() => {
    rCount.current = rCount.current + 1;
  });
  useEffect(() => {
    prevState.current = val;
  }, [val]);
  const changeFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input ref={inputRef}></input>
      {prevState.current}
      <button onClick={() => setVal(2)}>2</button>
      <button onClick={() => setVal(3)}>3</button>
      <button onClick={() => changeFocus()}>cf</button>
      {val} {rCount.current}
      <varContext.Provider value="form">
        <Individual></Individual>
      </varContext.Provider>
    </div>
  );
}
