import React from 'react';
import './App.css';
import FormListContainer from "./component/FormListContainer";

function App() {
  return (
    <div>
        <h1 className={"Name"}>
            Todos
        </h1>
        <FormListContainer/>
    </div>
  );
}

export default App;
