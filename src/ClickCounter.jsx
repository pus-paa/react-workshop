import react, { useState } from "react";

const ClickCounter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const increment = () => {
    setCounterOne(counterOne + 1);
  };
  const decrement = () => {
    setCounterOne(counterOne - 2);
  };

  return (
    <div>
      <h1>ClickCounter</h1>
      <h2>Count is{counterOne}</h2>
      <button onClick={increment}>click me to increase</button>
      <button onClick={decrement}>Click me to decrease by 2</button>
      <button onClick={decrement}>Click me to decrease by -5</button>
    </div>
  );
};
export default ClickCounter;
