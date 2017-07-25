import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addReminder, deleteReminder } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  addReminder() {
    this.props.addReminder(this.state.text);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id)
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">{reminder.text}</div>
                <div
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}
                >
                    &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="app">
        <div className="title">RemindMe</div>
          <div className="form-inline">
            <div className="form-group">
              <input
                className="form-control"
                onChange={event => this.setState({text: event.target.value})}
                placeholder="I have to..." />
                <input
                  className="form-control"
                  type="datetime-local"
                  onChange={event => this.setState({dueDate: event.target.value})}
                />
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.addReminder()}
              >Add</button>
        </div>
        { this.renderReminders() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);
