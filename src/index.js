import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import List from "./list";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: "", //temporary value that  is pushing to items
      items: [] //all todo items, our further list
    };
  }
  onChange = event => {
    this.setState({
      tempValue: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      tempValue: "",
      items: [...this.state.items, this.state.tempValue]
    });
  };
  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input
            value={this.state.tempValue}
            onChange={this.onChange}
            placeholder="Yours next ToDo"
          />
          <button>Submit</button>
        </form>
        <h1>{this.state.items}</h1>
        <List items={this.state.items} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
