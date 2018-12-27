import * as React from 'react';
import {TodoItem} from './TodoItems'

interface TodoProps {
    inputElement: any; // FIXME kann man das genauer spezifizieren?
    addItem: any; // FIXME kann man das genauer spezifizieren?
    currentItem: TodoItem;
    handleInput: any; // FIXME genauer
}

class TodoList extends React.Component<TodoProps, {}> {

    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input
                            placeholder="Task"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit">Add Task</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;
