import React, { useState } from "react";
import "./App.css";
import { useLocalStorage } from "./component-lib";

const App: React.FC = () => {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [useStateEx, setUseStateEx] = useState<string>("useState");
  const [useLocalStorageEx, setUseLocalStorageEx] = useLocalStorage<string>(
    "keyName",
    "useLocalStorage",
    false
  );

  const handleUseStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUseStateEx(event.target.value);
  };

  const handleUseLocalStorageEx = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUseLocalStorageEx(event.target.value);
    setIsDirty(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <>
          <h4>
            {isDirty ? (
              <>You changed the useLocalStorageEx hook, reload the browser!</>
            ) : (
              <>Write text on the inputs below and reload the browser</>
            )}
          </h4>
        </>

        <div className="row">
          <div className="container">
            <label htmlFor="useStateEx">useState</label>
            <input
              id="useStateEx"
              onChange={handleUseStateChange}
              defaultValue={useStateEx}
              value={useStateEx}
            />
          </div>

          <div className="container">
            <label htmlFor="useLocalStorageEx">useLocalStorageEx</label>
            <input
              id="useLocalStorageEx"
              onChange={handleUseLocalStorageEx}
              defaultValue={useLocalStorageEx}
              value={useLocalStorageEx}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
