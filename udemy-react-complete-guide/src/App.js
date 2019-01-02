import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Person name="Max" age={28}/>
                <Person name="Manu" age={29}>My Hobbies: Racing</Person>
                <Person name="Stephanie" age={26}/>
            </div>
        );
    }
}

export default App;
