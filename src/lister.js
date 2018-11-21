import React from "react";
//I changed componend, end data by simple this.props.sendData and button id, which is in realy index of listed items

class Lister extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick = event => {
    this.props.sendData(event.currentTarget.id);
  };
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <div>
            <li key={index}>
              {item}
              <button
                key={index}
                id={index}
                onClick={this.onClick}
                className="buttonDelete"
              >
                X
              </button>
            </li>
          </div>
        ))}
      </ul>
    );
  }
}
export default Lister;
