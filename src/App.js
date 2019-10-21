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
}

export default App;
