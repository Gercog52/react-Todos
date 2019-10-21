<<<<<<< HEAD
import React, {Component} from 'react';
import './App.css';
import FormListContainer from "./component/FormListContainer";

class App extends Component {
    render() {
        return (
            <div>
                <h1 className={"Name"}>
                    Todos
                </h1>
                <FormListContainer/>
            </div>
        );
    }
=======
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
>>>>>>> ed549858d8ec364d0cc6f1060390c94a28005041
}

export default App;
