import React, {useState} from "react";

function Toggle() {
  let [status, setStatus] = useState(false);
  let backgroundColor = status ? "red" : "white";
  function handle(){
    setStatus(()=>!status);
  }
  return <button onClick={handle} style={{ background: backgroundColor }}>{status ? "ON" : "OFF"}</button>;
}

export default Toggle;
