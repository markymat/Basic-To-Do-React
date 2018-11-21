import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Lister from "./lister";

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
  // Delete is getting value from
  Delete = e => {
    let itemstoDelete = this.state.items;
    itemstoDelete.splice(e, 1);
    this.setState({
      items: itemstoDelete
    });
  };
  render() {
    return (
      <div className="Container">
        <form className="App" onSubmit={this.onSubmit}>
          <input
            value={this.state.tempValue}
            onChange={this.onChange}
            placeholder="Your next ToDo"
          />
          <button>Submit</button>
        </form>
        <Lister items={this.state.items} sendData={this.Delete} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
