import React, {Component} from 'react';

import UserInput from '../UserInput/UserInput.js';
import UserOutput from '../UserOutput/UserOutput.js';

class Uebung extends Component {
    state = {username: 'mustermax'};

    usernameChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }

    render() {
        return (
            <div>
                <h1>Übung 1</h1>
                <UserInput
                    changed={this.usernameChangeHandler}
                    username={this.state.username}
                />
                <UserOutput
                    username={this.state.username}
                />
            </div>
        );
    }
}

export default Uebung;