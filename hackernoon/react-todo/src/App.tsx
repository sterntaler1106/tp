import * as React from 'react';
import TodoList from './TodoList'
import './App.css';
import TodoItems, { TodoItem } from './TodoItems'

interface AppProps {

}

interface AppState {
  items: Array<TodoItem>;
  currentItem: TodoItem;
}

class App extends React.Component<AppProps, AppState> {

  inputElement = React.createRef()

  constructor(props: AppProps) {
    super(props)
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: 0
      }
    }
  }

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemText = e.target.value
    this.setState({
      currentItem: { text: itemText, key: Date.now() }
    });
  }

  addItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      this.setState({
        items: [...this.state.items, newItem],
        currentItem: { text: '', key: 0 }
      })
    }
  }

  deleteItem = (key: number) => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems
    })
  }

  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems
          entries={this.state.items}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
