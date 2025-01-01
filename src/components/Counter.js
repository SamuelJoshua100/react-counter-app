import React, { useState } from "react"; //Import React and the useState hook

// Export the Counter component as the default export and also defining the counter component
export default function Counter() {
  //Declaring State, Using State Hook to track the counter value
  const [count, setCount] = useState(0);

  //Functions for increment, decrement and reset buttons
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      {/*The App title*/}
      <h1>React Counter App</h1>

      {/*Displaying the current counter value dynamically*/}
      <h2
        className={`counter-value ${
          count === 0
        }? "neutral : count > 0? "positive": "negative"}`}
      >
        {count}
      </h2>
      <div className="button-container">
        {/*Buttons to implement the increment, decrement and reset functions */}
        <button className="button increment" onClick={increment}>
          +
        </button>
        <button className="button decrement" onClick={decrement}>
          -
        </button>
        <button className="button reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
