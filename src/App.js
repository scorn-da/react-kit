import React, { useState } from "react";
import Counter from "src/components/Counter/Counter";
import ClassCounter from "src/components/Counter/ClassCounter";
import "src/styles/App.css";

function App() {
  const [value, setValue] = useState('Текст');

  return (
    <div className="App">

      <p>{value}</p>
      <input
          type="text"
          value={value}
          onChange={evt => setValue(evt.target.value)}
      />

      <Counter />
      <ClassCounter />
    </div>
  );
}

export default App;
