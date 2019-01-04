import React, {Component} from 'react';

import Validation from '../Validation/Validation.js';
import CharComponent from '../CharComponent/CharComponent.js'

class Uebung2 extends Component {
    state = {currentText: ''};

    updateText = (event) => {
        this.setState({currentText: event.target.value})
    }

    removeChar = (index) => {
        const text = this.state.currentText.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({currentText: updatedText})
    }

    render() {
        return (
            this.props.show ?
                <div>
                    <h1>Übung 2</h1>
                    <input
                        type="text"
                        value={this.state.currentText}
                        onChange={this.updateText}
                    />
                    <p>Textlänge: {this.state.currentText.length}</p>
                    <Validation length={this.state.currentText.length}/>
                    <div>
                        {this.state.currentText.split("").map((c, index) => <CharComponent
                            charToShow={c}
                            key={index}
                            clicked={() => this.removeChar(index)}
                        />)}
                    </div>
                </div> : null
        );
    }
}

export default Uebung2;