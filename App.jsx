import React, { useState } from "react";

import "./styles.scss";

const App = () => {
  return (
    <div>
      <Contador />
    </div>
  );
};

function Contador(props) {
  let [count, setCount] = useState(0);

  const Incrementar = () => {
    setCount(count + 1);
  };
  const Decrementar = () => {
    setCount(count - 1);
  };
  const Resetear = () => {
    setCount((count = 0));
  };
  return (
    <main className="Application">
      <section className="Counters">
        <div className="Counter">
          <p className="count">{count}</p>
          <section className="controls">
            <button onClick={Incrementar}>Incrementar</button>
            <button onClick={Decrementar}>Decrementar</button>
            <button onClick={Resetear}>Resetear</button>
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;
