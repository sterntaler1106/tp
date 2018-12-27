import * as React from 'react'

export interface TodoItem {
    text: string;
    key: number;
}

interface TodoItemsProps {
    entries: Array<TodoItem>;
    deleteItem: any; // FIXME genauer
}

class TodoItems extends React.Component<TodoItemsProps, {}> {
    createTasks = (item: TodoItem) => {
        return (
            // tslint:disable-next-line jsx-no-lambda
            <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
                {item.text}
            </li>
        )
    }

    render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)

        return <ul className="theList">{listItems}</ul>
    }
}

export default TodoItems