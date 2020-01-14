import React from 'react';

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      toDoText: ''
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      toDoText: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.toDoText);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="item"
          value={this.state.toDoText}
          onChange={this.handleChanges}
        />
        <button >Add</button>
      </form>
    );
  }
}

export default TodoForm;
