import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';

import Uebung1 from './Uebung1/Uebung1.js';
import Uebung2 from './Uebung2/Uebung2.js';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26}
        ],
        showPersons: false,
        showUebung1: false,
        showUebung2: false
    }

    deletePersonHandler = personIndex => {
        // copy von persons machen -> immutable
        // const persons = this.state.persons.slice(); // old way
        const persons = [...this.state.persons]; // ES6 way
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        // copy -> immutable
        // const person = Object.assign({}, this.state.persons[personIndex]); // old way
        const person = {...this.state.persons[personIndex]}; // ES6 way

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    togglePersons = () => {
        const show = this.state.showPersons;
        this.setState({showPersons: !show})
    }

    render() {

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => <Person
                        key={index}
                        name={person.name}
                        age={person.age}
                        click={() => this.deletePersonHandler(person.id)}
                        changed={(event) => this.nameChangedHandler(event, person.id)}
                    />)}
                </div>
            );

            style.backgroundColor = 'red';
        }

        let classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }


        return (
                <div className="App">
                    <p className={classes.join(' ')}>This is really working!</p>
                    <button onClick={this.togglePersons} style={style}>Toggle Persons</button>
                    {persons}

                    <Uebung1 show={this.state.showUebung1}/>
                    <Uebung2 show={this.state.showUebung2}/>
                </div>
        );
    }
}

export default App;
