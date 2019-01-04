import React, {Component} from 'react';
// import './App.css' // ohne CSS Modules
import classes from './App.css'; // mit CSS Modules
import Person from './Person/Person.js';

class App extends Component {
    state = {
        persons: [
            {id: '0', name: 'Max', age: 28},
            {id: '1', name: 'Manu', age: 29},
            {id: '2', name: 'Stephanie', age: 26}
        ],
        showPersons: false
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
        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person) => {
                        return <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                click={() => this.deletePersonHandler(person.id)}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                            />
                    })}
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
