import { useState } from "react";

function Display({ count }) {
  return (
    <div>
      <h1>Counter App</h1>
      <p>{count}</p>
    </div>
  );
}

function ButtonSection({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={() => setCount(c => c - 1)}>Decrement</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Display count={count} />
      <ButtonSection count={count} setCount={setCount} />
    </div>
  );
}

export default App;
