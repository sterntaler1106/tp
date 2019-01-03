import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';
import Uebung1 from './Uebung1/Uebung1.js';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26}
        ]
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27}
            ],
            showPersons: false
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 29},
                {name: 'Stephanie', age: 26}
            ]
        })
    }

    togglePersons = () => {
        const show = this.state.showPersons;
        this.setState({showPersons: !show})
    }

    render() {

        const style = {
            backgroundColor: 'blue',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        changed={this.nameChangedHandler}
                    />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'Lulu')}
                        changed={this.nameChangedHandler}
                    />
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );
        }

        return (
            <div className="App">
                <button
                    onClick={this.togglePersons}
                    style={style}
                >Toggle Persons
                </button>

                {persons}

                <Uebung1/>
            </div>
        );
    }
}

export default App;
