import React, {Component} from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";

class App extends Component {
    state = {
        persons: [
            {id: 'foo', name: 'Max', age: 28},
            {id: 'bar', name: 'Manu', age: 29},
            {id: 'baz', name: 'Stephanie', age: 26}
        ],
        showPersons: false
    }

    deletePersonHandler = personIndex => {
        const persons = [...this.state.persons]; // ES6 way
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

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
        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );

            btnClass = classes.Red;
        }

        let assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }


        return (
            <div className={classes.App}>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button className={btnClass} onClick={this.togglePersons}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;
