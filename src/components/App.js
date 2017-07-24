import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="title">RemindMe</div>
          <div className="form-inline">
            <div className="form-group">
              <input className="form-control" placeholder="I have to..." />
              <button type="button" className="btn btn-success">Add</button>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
